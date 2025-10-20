import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import business from "../config/business";

export default function About() {
    return (
        <div className="bg-gray-50 text-gray-800 min-h-screen flex flex-col">
            <Navbar />

            {/* HERO */}
            <section className="relative flex flex-col md:flex-row items-center justify-between overflow-hidden py-16 md:py-24">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${business.aboutImage})` }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-br from-black/70 to-emerald-900/40"></div>

                <div className="relative z-10 w-full md:w-1/2 px-6 md:px-12 text-center md:text-left text-white">
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4 max-md:pt-[10vh]">
                        About <span className="text-emerald-300">{business.name}</span>
                    </h1>
                    <p className="text-gray-200 max-w-md mx-auto md:mx-0 mb-6 text-base md:text-lg">
                        {business.tagline ||
                            "Empowering wellness and transformation through holistic care."}
                    </p>
                    <a
                        href="#mission"
                        className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-6 py-3 rounded-full shadow-md transition"
                    >
                        Our Mission
                    </a>
                </div>

                <div className="relative hidden md:flex md:w-1/2 justify-center items-center pr-8">
                    <img
                        src={business.aboutImage}
                        alt="About Wellness"
                        className="rounded-3xl shadow-2xl object-cover w-[85%] h-[70vh] border-4 border-white/10"
                    />
                </div>
            </section>

            {/* STORY SECTION */}
            <section className="py-20 px-6 max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-8">
                    Our Story & Philosophy
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed text-center max-w-3xl mx-auto">
                    At <strong>{business.name}</strong>, we believe that healing and growth
                    start from within. Our holistic approach combines mindfulness, natural
                    therapies, and personalized guidance to restore harmony between your
                    mind, body, and spirit.
                    <br />
                    <br />
                    Every session is designed to help you reconnect with your inner self,
                    release negative energy, and embrace a balanced, fulfilled lifestyle.
                    Whether it’s reiki, energy therapy, or personalized coaching — we’re
                    here to guide your journey toward transformation.
                </p>
            </section>

            {/* MISSION & VALUES */}
            <section
                id="mission"
                className="bg-gradient-to-r from-emerald-50 to-green-50 py-20 px-6"
            >
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
                    <div>
                        <h2 className="text-3xl font-bold mb-4 text-emerald-700">
                            Our Mission
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Our mission is to help individuals rediscover inner peace,
                            confidence, and clarity through the power of holistic wellness.
                            We aim to create a safe space for personal transformation and
                            sustainable growth.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            We believe everyone deserves to live a life filled with purpose,
                            balance, and happiness — and we’re here to help you achieve it.
                        </p>
                    </div>

                    <div className="relative">
                        <img
                            src="https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=800&q=80"
                            alt="Mission"
                            className="rounded-xl shadow-lg object-cover h-[400px] w-full"
                        />
                    </div>
                </div>
            </section>

          
            {/* CTA */}
            <section className="relative py-20 text-center text-white bg-gradient-to-r from-emerald-500 to-green-700">
                <h2 className="text-3xl font-bold mb-4">Start Your Wellness Journey</h2>
                <p className="mb-8 text-lg">
                    Ready to transform your life? Get in touch with us today.
                </p>
                <a
                    href={`mailto:${business.email}`}
                    className="bg-white text-gray-800 px-8 py-3 rounded-full shadow font-semibold hover:bg-gray-200 transition"
                >
                    Contact Us
                </a>
                <p className="text-sm text-gray-200 mt-4">
                    Or call us at{" "}
                    <a
                        href={`tel:${business.phone}`}
                        className="text-white font-semibold underline"
                    >
                        {business.phone}
                    </a>
                </p>
            </section>

            <Footer />
        </div>
    );
}
