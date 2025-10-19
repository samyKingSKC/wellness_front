import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaSave, FaPaintBrush, FaBusinessTime, FaInfoCircle } from "react-icons/fa";

export default function Edit() {
    const [business, setBusiness] = useState({
        name: "",
        tagline: "",
        location: "",
        phone: "",
        email: "",
        heroImage: "",
        aboutImage: "",
        theme: {
            primary: "from-emerald-400 to-green-600",
            accent: "text-emerald-600",
        },
        services: [
            { title: "", description: "", image: "" },
            { title: "", description: "", image: "" },
            { title: "", description: "", image: "" },
        ],
    });

    useEffect(() => {
        const stored = localStorage.getItem("businessInfo");
        if (stored) setBusiness(JSON.parse(stored));
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setBusiness((prev) => ({ ...prev, [name]: value }));
    };

    const handleThemeChange = (key, value) => {
        setBusiness((prev) => ({
            ...prev,
            theme: { ...prev.theme, [key]: value },
        }));
    };

    const handleServiceChange = (index, field, value) => {
        const updated = [...business.services];
        updated[index][field] = value;
        setBusiness((prev) => ({ ...prev, services: updated }));
    };

    const handleSave = async () => {
        try {
            const response = await fetch("http://127.0.0.1:8000/api/business-info", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(business),
            });

            const data = await response.json();
            if (response.ok) {
                alert(data.message || "✅ Info updated successfully!");
            } else {
                alert("❌ Failed to update business info");
            }
        } catch (error) {
            console.error(error);
            alert("❌ Error connecting to server");
        }
    };
    useEffect(() => {
        fetch("http://demo.swiftwingcourier.com/backend/api/business-info")
            .then((res) => res.json())
            .then((data) => {
                if (data) setBusiness(data);
            })
            .catch(() => { });
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-white py-10 px-4 md:px-16">
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="max-w-5xl mx-auto bg-white shadow-2xl rounded-3xl p-8 border border-emerald-200"
            >
                <h1 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                    <FaBusinessTime className="text-emerald-500" /> Edit Business Information
                </h1>

                {/* General Info */}
                <div className="grid md:grid-cols-2 gap-6 mb-10">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Business Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            value={business.name}
                            onChange={handleChange}
                            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-emerald-400"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Tagline
                        </label>
                        <input
                            type="text"
                            name="tagline"
                            value={business.tagline}
                            onChange={handleChange}
                            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-emerald-400"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Location
                        </label>
                        <input
                            type="text"
                            name="location"
                            value={business.location}
                            onChange={handleChange}
                            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-emerald-400"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Phone
                        </label>
                        <input
                            type="text"
                            name="phone"
                            value={business.phone}
                            onChange={handleChange}
                            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-emerald-400"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            value={business.email}
                            onChange={handleChange}
                            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-emerald-400"
                        />
                    </div>
                </div>

                {/* Images */}
                <div className="grid md:grid-cols-2 gap-6 mb-10">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Hero Image URL
                        </label>
                        <input
                            type="text"
                            name="heroImage"
                            value={business.heroImage}
                            onChange={handleChange}
                            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-emerald-400"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            About Image URL
                        </label>
                        <input
                            type="text"
                            name="aboutImage"
                            value={business.aboutImage}
                            onChange={handleChange}
                            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-emerald-400"
                        />
                    </div>
                </div>

                {/* Theme Settings */}
                <div className="mb-10">
                    <h2 className="text-lg font-semibold text-gray-700 flex items-center gap-2 mb-3">
                        <FaPaintBrush className="text-emerald-500" /> Theme Colors
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm text-gray-700 mb-1">Primary Gradient</label>
                            <input
                                type="text"
                                value={business.theme.primary}
                                onChange={(e) => handleThemeChange("primary", e.target.value)}
                                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-emerald-400"
                            />
                        </div>
                        <div>
                            <label className="block text-sm text-gray-700 mb-1">Accent Text</label>
                            <input
                                type="text"
                                value={business.theme.accent}
                                onChange={(e) => handleThemeChange("accent", e.target.value)}
                                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-emerald-400"
                            />
                        </div>
                    </div>
                </div>

                {/* Services Section */}
                <div>
                    <h2 className="text-lg font-semibold text-gray-700 flex items-center gap-2 mb-4">
                        <FaInfoCircle className="text-emerald-500" /> Services
                    </h2>

                    {business.services.map((service, index) => (
                        <div
                            key={index}
                            className="border border-gray-200 rounded-2xl p-5 mb-6 bg-gray-50"
                        >
                            <h3 className="font-medium text-gray-700 mb-3">
                                Service {index + 1}
                            </h3>
                            <div className="grid md:grid-cols-2 gap-4">
                                <input
                                    type="text"
                                    placeholder="Title"
                                    value={service.title}
                                    onChange={(e) =>
                                        handleServiceChange(index, "title", e.target.value)
                                    }
                                    className="p-3 border rounded-lg focus:ring-2 focus:ring-emerald-400"
                                />
                                <input
                                    type="text"
                                    placeholder="Image URL"
                                    value={service.image}
                                    onChange={(e) =>
                                        handleServiceChange(index, "image", e.target.value)
                                    }
                                    className="p-3 border rounded-lg focus:ring-2 focus:ring-emerald-400"
                                />
                            </div>
                            <textarea
                                placeholder="Description"
                                value={service.description}
                                onChange={(e) =>
                                    handleServiceChange(index, "description", e.target.value)
                                }
                                className="mt-3 w-full p-3 border rounded-lg focus:ring-2 focus:ring-emerald-400"
                                rows="2"
                            />
                        </div>
                    ))}
                </div>

                <div className="flex justify-end">
                    <button
                        onClick={handleSave}
                        className="flex items-center gap-2 bg-gradient-to-r from-emerald-400 to-green-600 text-white px-6 py-3 rounded-lg hover:opacity-90 transition font-medium shadow-lg"
                    >
                        <FaSave /> Save Information
                    </button>
                </div>
            </motion.div>
        </div>
    );
}
