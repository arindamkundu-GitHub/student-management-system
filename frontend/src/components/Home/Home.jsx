import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import CountUpModule from "react-countup";

// Extract the actual CountUp component
const CountUp = CountUpModule.default;

export default function Home() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        axios
            .get(`${import.meta.env.VITE_API_URL}/student/count`)
            .then((res) => {
                setCount(res.data.count);
            })
            .catch((err) => {
                console.error("Error from server:", err);
            });
    }, []);

    return (
        <div className="min-h-screen flex items-center justify-center p-4 bg-gray-100 bg-cover" style={{ backgroundImage: "url('/Home bg image.jpg')" }}>
            <Link
                to="/all-students"
                className="flex flex-col items-center rounded border-2 border-gray-300 p-6 shadow-lg bg-gray-700 hover:shadow-xl mb-100 transition duration-300"
            >
                <CountUp
                    className="text-6xl font-bold text-pink-200 mb-4"
                    end={count}
                    duration={0.5}
                    separator=","
                />
                <span className="text-white text-lg mt-2">
                    Available Students
                </span>
            </Link>
        </div>
    );
}