import React, { useState } from "react";
import { business } from "../config/business";
import { FaLeaf, FaCalendarAlt, FaSpa } from "react-icons/fa";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

export default function BookingPage() {
    const [selectedService, setSelectedService] = useState("");
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        date: "",
        time: "",
        notes: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`✨ Thank you ${formData.name}! Your ${selectedService} session has been requested.`);
    };

    const services = [
        {
            id: "reiki",
            title: "Reiki Healing",
            desc: "Energy balancing for stress relief and emotional harmony.",
            icon: <FaLeaf className="text-emerald-600 text-3xl" />,
        },
        {
            id: "coaching",
            title: "Life & Wellness Coaching",
            desc: "One-on-one sessions to align your mind, goals, and energy.",
            icon: <FaSpa className="text-emerald-600 text-3xl" />,
        },
        {
            id: "energy",
            title: "Energy Therapy",
            desc: "Deep energetic realignment to release blocks and restore balance.",
            icon: <FaCalendarAlt className="text-emerald-600 text-3xl" />,
        },
    ];

    return (
        <div className="bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
            <Navbar />
            {/* Hero */}
            <section className="bg-gradient-to-r from-emerald-400 to-green-600 text-white py-20 px-6 text-center">
                <h1 className="text-4xl md:text-5xl font-extrabold mb-3">
                    Book Your Session
                </h1>
                <p className="text-lg max-w-2xl mx-auto opacity-90">
                    Restore your mind, body, and spirit. Choose a holistic session that
                    aligns with your needs — it’s time to feel balanced again.
                </p>
            </section>

            {/* Services */}
            <section className="max-w-6xl mx-auto py-16 px-6">
                <h2 className="text-2xl font-bold text-center mb-8 text-gray-800 dark:text-gray-100">
                    Select a Service
                </h2>
                <div className="grid md:grid-cols-3 gap-6">
                    {services.map((s) => (
                        <div
                            key={s.id}
                            onClick={() => setSelectedService(s.title)}
                            className={`cursor-pointer rounded-xl p-6 shadow-lg transition ${selectedService === s.title
                                    ? "border-2 border-emerald-500 bg-emerald-50 dark:bg-emerald-900/20"
                                    : "bg-white dark:bg-gray-800 hover:shadow-xl"
                                }`}
                        >
                            <div className="flex justify-center mb-3">{s.icon}</div>
                            <h3 className="text-lg font-semibold text-center mb-2">
                                {s.title}
                            </h3>
                            <p className="text-sm text-center text-gray-500 dark:text-gray-400">
                                {s.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Booking Form */}
            <section className="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 mb-20">
                <h3 className="text-xl font-semibold text-center mb-6">
                    {selectedService
                        ? `Schedule Your ${selectedService} Session`
                        : "Select a Service Above to Begin"}
                </h3>

                {selectedService && (
                    <form
                        onSubmit={handleSubmit}
                        className="space-y-5 text-gray-700 dark:text-gray-200"
                    >
                        <div>
                            <label className="block mb-1 font-medium">Full Name</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent focus:ring-2 focus:ring-emerald-500"
                            />
                        </div>

                        <div>
                            <label className="block mb-1 font-medium">Email Address</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent focus:ring-2 focus:ring-emerald-500"
                            />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block mb-1 font-medium">Preferred Date</label>
                                <input
                                    type="date"
                                    name="date"
                                    value={formData.date}
                                    onChange={handleChange}
                                    required
                                    className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent focus:ring-2 focus:ring-emerald-500"
                                />
                            </div>

                            <div>
                                <label className="block mb-1 font-medium">Preferred Time</label>
                                <input
                                    type="time"
                                    name="time"
                                    value={formData.time}
                                    onChange={handleChange}
                                    required
                                    className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent focus:ring-2 focus:ring-emerald-500"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block mb-1 font-medium">Additional Notes</label>
                            <textarea
                                name="notes"
                                value={formData.notes}
                                onChange={handleChange}
                                rows="3"
                                placeholder="Any specific requests or goals for your session..."
                                className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent focus:ring-2 focus:ring-emerald-500"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-gradient-to-r from-emerald-400 to-green-600 text-white font-semibold py-3 rounded-lg shadow hover:opacity-90 transition"
                       onClick={()=>{window.location.href='/'}}
                        >
                            Confirm Booking
                        </button>
                    </form>
                )}
            </section>

            <Footer />
        </div>
    );
}
