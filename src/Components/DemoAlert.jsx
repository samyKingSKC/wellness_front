import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCreditCard, FaCheckCircle, FaExclamationTriangle } from "react-icons/fa";
import business from "../config/business";

export default function DemoAlert() {
    const [open, setOpen] = useState(false);
    const [activated, setActivated] = useState(localStorage.getItem("demoActivated") === "true");

    // ✅ Supports nested customer fields
    const [form, setForm] = useState({
        customer: { name: "", email: "", phone: "" },
    });

    // ✅ Handles both normal and nested keys like "customer[name]"
    const handleChange = (e) => {
        const { name, value } = e.target;

        // For nested keys like customer[name]
        if (name.includes("[")) {
            const [parent, childRaw] = name.split("[");
            const child = childRaw.replace("]", "");

            setForm((prev) => ({
                ...prev,
                [parent]: {
                    ...prev[parent],
                    [child]: value,
                },
            }));
        } else {
            // For simple names
            setForm((prev) => ({ ...prev, [name]: value }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const { name, email, phone } = form.customer;
        if (!name || !email || !phone) {
            alert("Please fill all fields before proceeding.");
            return;
        }

        // Uncomment this if you want to auto-activate after payment
        // localStorage.setItem("demoActivated", "true");
        // setActivated(true);

        e.target.submit();
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

            {/* Success Message */}
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

            {/* Activation Form */}
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

                        <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-3 mb-4 text-sm text-gray-700">
                            <p>
                                After payment, you’ll gain full access to{" "}
                                <span className="text-emerald-600 font-medium">
                                    edit your website content
                                </span>{" "}
                                — including your business name, contact details, and services.
                            </p>
                            <p className="mt-2">
                                Need help? Contact us:
                                <br />
                                📞{" "}
                                <a
                                    href="tel:+19175804275"
                                    className="text-emerald-700 hover:underline font-medium"
                                >
                                    +1 (917) 580-4275
                                </a>
                                <br />
                                📧{" "}
                                <a
                                    href="mailto:robertsmith86129@gmail.com"
                                    className="text-emerald-700 hover:underline font-medium"
                                >
                                    robertsmith86129@gmail.com
                                </a>
                            </p>
                        </div>

                        {/* Flutterwave Payment Form */}
                        <form
                            action="https://checkout.flutterwave.com/v3/hosted/pay"
                            method="POST"
                            onSubmit={handleSubmit}
                            className="space-y-4"
                        >
                            <input
                                type="text"
                                name="customer[name]"
                                placeholder="Full Name"
                                value={form.customer.name}
                                onChange={handleChange}
                                autoComplete="off"
                                className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 outline-none"
                            />
                            <input
                                type="email"
                                name="customer[email]"
                                placeholder="Email Address"
                                value={form.customer.email}
                                onChange={handleChange}
                                autoComplete="off"
                                className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 outline-none"
                            />
                            <input
                                type="tel"
                                name="customer[phone]"
                                placeholder="Phone Number"
                                value={form.customer.phone}
                                onChange={handleChange}
                                autoComplete="off"
                                className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 outline-none"
                            />

                            {/* Hidden Flutterwave Fields */}
                            <input
                                type="hidden"
                                name="public_key"
                                value="FLWPUBK-2df4640d8a94ac2a2780caba587be238-X"
                            />
                            <input type="hidden" name="tx_ref" value={Date.now()} />
                            <input type="hidden" name="meta[source]" value="demo-activation" />
                            <input
                                type="hidden"
                                name="redirect_url"
                                value={`https://demo.swiftwingcourier.com/?b=${business.name}`}
                            />
                            <input type="hidden" name="amount" value="200" />
                            <input type="hidden" name="currency" value="USD" />

                            <button
                                type="submit"
                                className="flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-400 to-green-600 text-white font-medium px-4 py-3 rounded-lg hover:opacity-90 transition w-full"
                            >
                                <FaCreditCard className="text-sm" />
                                <span>Proceed to Payment</span>
                            </button>
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
