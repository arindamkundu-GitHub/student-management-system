import React, { useState } from "react";
import axios from "axios";

export default function AddStudent() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [regNumber, setRegNumber] = useState("");
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("");
    const [address, setAddress] = useState("");
    const [contactNumber, setContactNumber] = useState("");
    const [email, setEmail] = useState("");
    const [enrolledDate, setEnrolledDate] = useState("");

    function sendData(event) {
        event.preventDefault();

        const newStudent = {
            firstName,
            lastName,
            regNumber,
            age,
            gender,
            address,
            contactNumber,
            email,
            enrolledDate: new Date(enrolledDate)
        };

        axios
            .post(`${import.meta.env.VITE_API_URL}/student/add`, newStudent)
            .then(() => {
                alert("Student Added");
                // Clear the form after successful submission
                setFirstName("");
                setLastName("");
                setRegNumber("");
                setAge("");
                setGender("");
                setAddress("");
                setContactNumber("");
                setEmail("");
                setEnrolledDate("");
            })
            .catch((err) => {
                console.error("Error from server:", err);
                alert("An error occurred while adding the student: " + (err.response?.data?.message || "Unknown error"));
            });
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-lg">
                <h3 className="text-3xl font-bold text-center mt-6 text-pink-600 mb-6">
                    Add Student
                </h3>
                <form className="space-y-4" onSubmit={sendData}>
                    <div>
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="firstName">
                            First Name:
                        </label>
                        <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            className="form-input w-full p-2 border rounded"
                            placeholder="Enter First Name"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="lastName">
                            Last Name:
                        </label>
                        <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            className="form-input w-full p-2 border rounded"
                            placeholder="Enter Last Name"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="regNumber">
                            Student Registration Number:
                        </label>
                        <input
                            type="text"
                            id="regNumber"
                            name="regNumber"
                            value={regNumber}
                            onChange={(e) => setRegNumber(e.target.value)}
                            className="form-input w-full p-2 border rounded"
                            placeholder="Enter Registration Number"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="age">
                            Student Age (Between 18 and 45):
                        </label>
                        <input
                            type="text"
                            id="age"
                            name="age"
                            value={age}
                            onChange={(e) => setAge(e.target.value)}
                            title="Age must be between 18 and 45."
                            className="form-input w-full p-2 border rounded"
                            placeholder="Enter Age"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="gender">
                            Select Student Gender:
                        </label>
                        <select
                            id="gender"
                            name="gender"
                            value={gender}
                            onChange={(e) => setGender(e.target.value)}
                            className="form-select w-full p-2 border rounded"
                            required
                        >
                            <option value="">Select Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="address">
                            Address:
                        </label>
                        <textarea
                            id="address"
                            name="address"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            className="form-input w-full p-2 border rounded"
                            placeholder="Enter Address"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="contactNumber">
                            Student Contact Number:
                        </label>
                        <input
                            type="text"
                            id="contactNumber"
                            name="contactNumber"
                            value={contactNumber}
                            onChange={(e) => setContactNumber(e.target.value)}
                            className="form-input w-full p-2 border rounded"
                            placeholder="Enter Contact Number"
                            required
                        />
                    </div>

                    <div>
                            <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
                                Email:
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="form-input w-full p-2 border rounded"
                                placeholder="Enter Email"
                                required
                            />
                    </div>

                    <div>
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="enrolledDate">
                            Enrolled Date:
                        </label>
                        <input
                            type="date"
                            id="enrolledDate"
                            name="enrolledDate"
                            value={enrolledDate}
                            onChange={(e) => setEnrolledDate(e.target.value)}
                            className="form-input w-full p-2 border rounded"
                            required
                        />
                    </div>

                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className="btn bg-black text-pink-200 hover:bg-pink-600 px-4 py-2 rounded transition"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}