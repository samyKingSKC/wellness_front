import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCreditCard, FaCheckCircle, FaExclamationTriangle } from "react-icons/fa";

export default function DemoModePopper() {
    const [open, setOpen] = useState(false);
    const [activated, setActivated] = useState(
        localStorage.getItem("demoActivated") === "true"
    );
    const [form, setForm] = useState({ name: "", email: "", phone: "" });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handlePayment = () => {
        if (!form.name || !form.email || !form.phone) {
            alert("Please fill all fields before proceeding.");
            return;
        }

        if (!window.FlutterwaveCheckout) {
            const script = document.createElement("script");
            script.src = "https://checkout.flutterwave.com/v3.js";
            script.async = true;
            script.onload = () => initiatePayment();
            document.body.appendChild(script);
        } else {
            initiatePayment();
        }
    };

    const initiatePayment = () => {
        window.FlutterwaveCheckout({
            public_key: "FLWPUBK_TEST-xxxxxxxxxxxxxxxxxxxxx", // 🧩 Replace with your real Flutterwave public key
            tx_ref: Date.now(),
            amount: 200,
            currency: "USD",
            payment_options:
                "card, ussd, banktransfer, googlepay, applepay, paypal, ach",
            customer: {
                email: form.email,
                phone_number: form.phone,
                name: form.name,
            },
            customizations: {
                title: "Demo Mode Activation",
                description: "Activate full access for 1 year",
                logo: "https://img.icons8.com/color/96/meditation-guru.png",
            },
            callback: (response) => {
                console.log(response);
                if (response.status === "successful") {
                    localStorage.setItem("demoActivated", "true");
                    setActivated(true);
                    setOpen(false);
                }
            },
            onclose: () => console.log("Payment closed"),
        });
    };

    return (
        <div className="fixed bottom-6 right-6 z-50">
            {/* Floating Button */}
            {!open && !activated && (
                <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-2 bg-gradient-to-r from-emerald-400 to-green-600 text-white px-5 py-3 rounded-full shadow-lg hover:opacity-90 transition"
                    onClick={() => setOpen(true)}
                >
                    <FaExclamationTriangle className="text-lg" />
                    <span className="font-medium">Demo Mode — Activate</span>
                </motion.button>
            )}

            {/* Activation Success Message */}
            {activated && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-white shadow-2xl rounded-2xl px-6 py-5 w-80 border border-emerald-400"
                >
                    <div className="flex flex-col items-center text-center text-emerald-600">
                        <FaCheckCircle className="text-4xl mb-3" />
                        <h3 className="text-lg font-semibold">Full Access Activated</h3>
                        <p className="text-sm text-gray-600 mt-1 leading-snug">
                            Your account is now active for <b>1 year</b>. 🎉
                        </p>
                    </div>
                </motion.div>
            )}

            {/* Popper Form */}
            <AnimatePresence>
                {open && !activated && (
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 40 }}
                        transition={{ duration: 0.3 }}
                        className="bg-white border border-emerald-400 shadow-2xl rounded-2xl px-6 py-5 w-80 md:w-96"
                    >
                        <h3 className="text-lg font-semibold text-gray-800 mb-3">
                            Activate Demo Mode
                        </h3>
                        <p className="text-sm text-gray-600 mb-4">
                            Complete your details below to activate{" "}
                            <span className="font-semibold text-emerald-600">
                                full access ($200 / 1 year)
                            </span>
                            .
                        </p>

                        {/* Informational message (BEFORE payment) */}
                        <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-3 mb-4 text-sm text-gray-700">
                            <p className="mb-1">
                                After payment, you’ll gain full access to{" "}
                                <span className="text-emerald-600 font-medium">
                                    edit your website content
                                </span>{" "}
                                — including your business name, contact details, and service
                                information.
                            </p>
                            <p>
                                These are sample contents. If you have issues paying online,
                                text{" "}
                                <b className="text-emerald-700">+1&nbsp;(917)&nbsp;580-4275</b>{" "}
                                for assistance.
                            </p>
                        </div>

                        <form className="space-y-4">
                            <input
                                type="text"
                                name="name"
                                placeholder="Full Name"
                                value={form.name}
                                onChange={handleChange}
                                className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 outline-none"
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Email Address"
                                value={form.email}
                                onChange={handleChange}
                                className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 outline-none"
                            />
                            <input
                                type="tel"
                                name="phone"
                                placeholder="Phone Number"
                                value={form.phone}
                                onChange={handleChange}
                                className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 outline-none"
                            />

                            <div className="flex justify-between mt-4">
                                <button
                                    type="button"
                                    onClick={() => setOpen(false)}
                                    className="text-sm text-gray-500 hover:text-gray-700"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="button"
                                    onClick={handlePayment}
                                    className="flex items-center gap-2 bg-gradient-to-r from-emerald-400 to-green-600 text-white font-medium px-4 py-2 rounded-lg hover:opacity-90 transition"
                                >
                                    <FaCreditCard className="text-sm" />
                                    <span>Proceed to Payment</span>
                                </button>
                            </div>
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
