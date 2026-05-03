import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function AllStudents() {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        const getStudents = async () => {
            try {
                const res = await axios.get(`${import.meta.env.VITE_API_URL}/student`);
                setStudents(res.data);
            } catch (err) {
                console.error("Error from server:", err);
                alert(
                    "An error occurred while retrieving the student list: " +
                        (err.response?.data?.message || "Unknown error")
                );
            }
        };
        getStudents();
    }, []);

    return (
        <div className="container mx-auto my-8 px-4 ">
            <div className="text-center mb-6 ">
                <h3 className="text-3xl font-bold text-pink-600 mt-28">
                    Student Details
                </h3>
            </div>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white shadow-md rounded-lg border border-gray-300 border-collapse">
    <thead className="bg-gray-100">
        <tr>
            <th className="py-3 px-6 border-b border-gray-300 text-2xl">First Name</th>
            <th className="py-3 px-6 border-b border-gray-300 text-2xl">Last Name</th>
            <th className="py-3 px-6 border-b border-gray-300 text-2xl">Reg. Number</th>
            <th className="py-3 px-6 border-b border-gray-300 text-2xl">Gender</th>
            <th className="py-3 px-6 border-b border-gray-300 text-2xl">Student Profile</th>
        </tr>
    </thead>

    <tbody>
        {students.map((student, index) => (
            <tr 
              key={student._id} 
              className="border-b border-gray-300 hover:bg-gray-50 transition"
            >
                                <td className="py-3 px-6 pl-25">{student.firstName}</td>
                                <td className="py-3 px-6 pl-25">{student.lastName}</td>
                                <td className="py-3 px-6 pl-25">{student.regNumber}</td>
                                <td className="py-3 px-6 pl-25">{student.gender}</td>
                                <td className="py-3 px-6 pl-25">
                                    <Link to={`/student-profile/${student._id}`}>
                                        <button className="btn bg-green-200 hover:bg-pink-600 px-4 py-2 rounded transition">
                                            View
                                        </button>
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}