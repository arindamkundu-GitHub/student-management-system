import React from "react";
import axios from "axios";

export default function UpdateStudent() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white rounded-xl shadow-xl p-6 max-w-2xl">
                <h2 className="text-2xl font-bold text-center text-pink-600 mb-4">
                    Update Student
                </h2>
                <p className="text-center">
                    This is the UpdateStudent component.
                </p>
            </div>
        </div>
    );
}