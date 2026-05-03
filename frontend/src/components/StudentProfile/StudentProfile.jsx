import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function StudentProfile() {
    const { id } = useParams();

    const [student, setStudent] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [updatedStudent, setUpdatedStudent] = useState({});

    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);

    // Fetch student
    const fetchStudent = async () => {
        try {
            const res = await axios.get(`${import.meta.env.VITE_API_URL}/student/get/${id}`);
            setStudent(res.data.user);
            setUpdatedStudent(res.data.user);
        } catch (err) {
            console.error("Error fetching student:", err);
        }
    };

    useEffect(() => {
        fetchStudent();
    }, [id]);

    // Handle input change
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUpdatedStudent({
            ...updatedStudent,
            [name]: value,
        });
    };

    // Submit update
    const handleFormSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.put(
                `${import.meta.env.VITE_API_URL}/student/update/${id}`,
                updatedStudent
            );
            console.log("Updated:", res.data);
            fetchStudent();
            handleClose();
        } catch (err) {
            console.error("Update error:", err);
        }
    };

    // Loading UI
    if (!student) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <h2 className="animate-spin text-pink-600 text-3xl">
                    Loading...
                </h2>
            </div>
        );
    }

    return (
        <div className="mx-6 my-10 p-6 rounded-3xl shadow-2xl bg-white mt-30">
            
            {/* Title */}
            <h2 className="text-center text-pink-600 text-4xl font-bold mb-15">
                Student Profile
            </h2>

            {/* Info Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                <div>
                    <p className="font-bold ">First Name:</p>
                    <p>{student.firstName}</p>
                </div>

                <div>
                    <p className="font-bold">Last Name:</p>
                    <p>{student.lastName}</p>
                </div>

                <div>
                    <p className="font-bold">Registration Number:</p>
                    <p>{student.regNumber}</p>
                </div>

                <div>
                    <p className="font-bold">Age:</p>
                    <p>{student.age}</p>
                </div>

                <div>
                    <p className="font-bold">Gender:</p>
                    <p>{student.gender}</p>
                </div>

                <div>
                    <p className="font-bold">Contact Number:</p>
                    <p>{student.contactNumber}</p>
                </div>

                <div className="md:col-span-2">
                    <p className="font-bold">Address:</p>
                    <p>{student.address}</p>
                </div>
                 <div>
                    <p className="font-bold">Email:</p>
                    <p>{student.email}</p>
                </div>

                <div>
                <p className="font-bold">Enrolled Date:</p>
                <p>
                    {student.enrolledDate
                        ? new Date(student.enrolledDate).toLocaleDateString()
                        : ""}
                </p>
            </div>

            </div>
            
            {/* Update Button */}
            <div className="flex justify-end mt-6">
                <button
                    onClick={handleShow}
                    className="bg-black text-pink-200 hover:bg-pink-600 px-4 py-2 rounded transition"
                >
                    Go To Update
                </button>
            </div>

            {/* 🔥 Tailwind Modal */}
            {showModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">

                    <div className="bg-white w-full max-w-2xl rounded-2xl shadow-xl p-6 relative">

                        {/* Close */}
                        <button
                            onClick={handleClose}
                            className="absolute top-3 right-3 text-gray-500 hover:text-red-500 text-xl"
                        >
                            ✕
                        </button>

                        {/* Title */}
                        <h2 className="text-2xl font-bold mb-6 text-center text-pink-600">
                            Update Student
                        </h2>

                        {/* Form */}
                        <form onSubmit={handleFormSubmit} className="grid gap-4">

                            <input
                                type="text"
                                name="firstName"
                                value={updatedStudent.firstName || ""}
                                onChange={handleInputChange}
                                placeholder="First Name"
                                className="p-2 border rounded focus:ring-2 focus:ring-pink-400 outline-none"
                            />

                            <input
                                type="text"
                                name="lastName"
                                value={updatedStudent.lastName || ""}
                                onChange={handleInputChange}
                                placeholder="Last Name"
                                className="p-2 border rounded focus:ring-2 focus:ring-pink-400 outline-none"
                            />

                            <input
                                type="text"
                                name="regNumber"
                                value={updatedStudent.regNumber || ""}
                                disabled
                                className="p-2 border rounded bg-gray-100"
                            />

                            <input
                                type="text"
                                name="age"
                                value={updatedStudent.age || ""}
                                onChange={handleInputChange}
                                placeholder="Age"
                                className="p-2 border rounded focus:ring-2 focus:ring-pink-400 outline-none"
                            />

                            <select
                                name="gender"
                                value={updatedStudent.gender || ""}
                                onChange={handleInputChange}
                                className="p-2 border rounded"
                            >
                                <option value="">Select Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Other">Other</option>
                            </select>

                            <textarea
                                name="address"
                                value={updatedStudent.address || ""}
                                onChange={handleInputChange}
                                placeholder="Address"
                                className="p-2 border rounded"
                            />

                            <input
                                type="text"
                                name="contactNumber"
                                value={updatedStudent.contactNumber || ""}
                                onChange={handleInputChange}
                                placeholder="Contact Number"
                                className="p-2 border rounded"
                            />

                            <input
                                    type="email"
                                    name="email"
                                    value={updatedStudent.email || ""}
                                    onChange={handleInputChange}
                                    placeholder="Email"
                                    className="p-2 border rounded focus:ring-2 focus:ring-pink-400 outline-none"
                            />

                            <input
                                type="date"
                                name="enrolledDate"
                                value={
                                    updatedStudent.enrolledDate
                                        ? updatedStudent.enrolledDate.substring(0, 10)
                                        : ""
                                }
                                onChange={handleInputChange}
                                className="p-2 border rounded"
                            />

                            {/* Buttons */}
                            <div className="flex justify-end gap-3 mt-4">
                                <button
                                    type="button"
                                    onClick={handleClose}
                                    className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
                                >
                                    Close
                                </button>

                                <button
                                    type="submit"
                                    className="px-4 py-2 bg-pink-600 text-white rounded hover:bg-pink-700"
                                >
                                    Update
                                </button>
                            </div>

                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}