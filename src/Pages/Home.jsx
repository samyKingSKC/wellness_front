import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import { business } from "../config/business";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import DemoAlert from "../Components/DemoAlert";

export default function Home() {
    const [searchParams] = useSearchParams();
    const [isValidBusiness, setIsValidBusiness] = useState(true);

    useEffect(() => {
        const b = searchParams.get("b");

        // Normalize names for comparison
        const normalizedParam = b?.trim().toLowerCase();
        const normalizedBusiness = business.name.trim().toLowerCase();

        if (!b || normalizedParam !== normalizedBusiness) {
            setIsValidBusiness(false);
        } else {
            setIsValidBusiness(true);
        }
    }, [searchParams]);

    return (
        <div className="bg-gray-50 text-gray-800 min-h-screen flex flex-col">
            <Navbar />

            {/* 🔒 DEMO EXPIRED MESSAGE */}
            {!isValidBusiness && (
                <div className="bg-red-50 border min-h-[50vh] flex justify-center items-center  border-red-400 text-red-700 px-6 py-4 text-center font-medium">
                    <p className="max-md:pt-[10vh]">
                        ⚠️ Your demo preview has expired. Please contact{" "}
                        <a
                            href="tel:+19175804275"
                            className="text-red-600 underline hover:text-red-800"
                        >
                            +1 (917) 580-4275
                        </a>{" "}
                        or email us at{" "}
                        <a
                            href="mailto:robertsmith86129@gmail.com"
                            className="text-red-600 underline hover:text-red-800"
                        >
                            robertsmith86129@gmail.com
                        </a>{" "}
                        for support.
                    </p>
                </div>
            )}

            {/* MAIN CONTENT (only show if valid) */}
            {isValidBusiness && (
                <>
                    {/* HERO */}
                    <section
                        className="relative flex flex-col md:flex-row items-center justify-between overflow-hidden"
                        style={{ minHeight: "70vh" }}
                    >
                        <div
                            className="absolute inset-0 bg-cover bg-center"
                            style={{ backgroundImage: `url(${business.heroImage})` }}
                        ></div>
                        <div className="absolute inset-0 bg-gradient-to-br from-black/60 to-emerald-900/40"></div>

                        <div className="relative z-10 w-full md:w-1/2 px-6 md:px-12 py-20 md:py-0 text-center md:text-left">
                            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4 max-md:pt-[10vh]">
                                Heal. Transform. <span className="text-emerald-400">Thrive.</span>
                            </h1>
                            <p className="text-gray-200 max-w-md mx-auto md:mx-0 mb-6 text-base md:text-lg">
                                Discover balance and inner peace with {business.name}, a certified{" "}
                                <span className="font-semibold text-emerald-300">
                                    Holistic Wellness Coach in New York
                                </span>
                                . Personalized sessions for your mind, body, and spirit.
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
                                <a
                                    href="#booking"
                                    className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-6 py-3 rounded-full shadow-md transition"
                                >
                                    Book a Free Consultation
                                </a>
                            </div>
                        </div>

                        <div className="relative hidden md:flex md:w-1/2 justify-center items-center pr-8">
                            <img
                                src={business.heroImage}
                                alt="Wellness Coaching"
                                className="rounded-3xl shadow-2xl object-cover w-[85%] h-[70vh] border-4 border-white/10"
                            />
                        </div>
                    </section>

                    {/* SERVICES */}
                    <section className="py-20 px-6 max-w-6xl mx-auto" id="services">
                        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            {business.services.map((service, i) => (
                                <div
                                    key={i}
                                    className="rounded-xl overflow-hidden shadow-lg group bg-white"
                                >
                                    <div className="h-56 relative">
                                        <img
                                            src={service.image}
                                            alt={service.title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                        <h3 className="absolute bottom-4 left-4 text-white text-2xl font-semibold">
                                            {service.title}
                                        </h3>
                                    </div>
                                    <div className="p-6">
                                        <p className="text-gray-600 text-sm">{service.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* ABOUT */}
                    <section className="bg-gray-100 py-20 px-6" id="about">
                        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
                            <img
                                src={business.aboutImage}
                                alt="Therapy"
                                className="rounded-xl shadow-lg object-cover h-[400px] w-full"
                            />
                            <div>
                                <h2 className="text-3xl font-bold mb-6">About {business.name}</h2>
                                <p className="text-gray-600 leading-relaxed mb-6">
                                    We believe true wellness is a harmony of mind, body, and spirit.
                                    Our certified holistic practitioners guide you through
                                    personalized sessions to help you heal, grow, and thrive.
                                </p>
                                <a
                                    href="#booking"
                                    className="bg-emerald-500 text-white px-6 py-3 rounded-md shadow hover:bg-emerald-600 transition"
                                >
                                    Learn More
                                </a>
                            </div>
                        </div>
                    </section>

                    {/* CTA */}
                    <section
                        id="booking"
                        className="relative py-20 text-center text-white bg-gradient-to-r from-emerald-500 to-green-700"
                    >
                        <h2 className="text-3xl font-bold mb-4">Start Your Healing Journey</h2>
                        <p className="mb-8 text-lg">
                            Book your free consultation today and take the first step toward balance.
                        </p>
                        <a
                            href={`mailto:${business.email}`}
                            className="bg-white text-gray-800 px-8 py-3 rounded-full shadow font-semibold hover:bg-gray-200"
                        >
                            Contact Us
                        </a>
                    </section>

                    <DemoAlert />
                </>
            )}

            <Footer />
        </div>
    );
}
