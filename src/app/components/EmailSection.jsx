"use client";
import React, { useRef, useState } from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/24/outline";

const EmailSection = () => {
    const formRef = useRef(null);
    const [formState, setFormState] = useState({ email: "", subject: "", message: "" });
    const [touched, setTouched] = useState({ email: false, subject: false, message: false });
    const [submitted, setSubmitted] = useState(false);
    const [errors, setErrors] = useState({});

    const validateForm = () => {
        const newErrors = {};
        if (!formState.email) newErrors.email = "Email is required";
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) newErrors.email = "Invalid email";
        if (!formState.subject) newErrors.subject = "Subject is required";
        if (!formState.message) newErrors.message = "Message is required";
        return newErrors;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormState(prev => ({ ...prev, [name]: value }));
        if (touched[name]) {
            const newErrors = validateForm();
            setErrors(newErrors);
        }
    };

    const handleBlur = (e) => {
        const { name } = e.target;
        setTouched(prev => ({ ...prev, [name]: true }));
        const newErrors = validateForm();
        setErrors(newErrors);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newErrors = validateForm();
        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            setSubmitted(true);
            formRef.current.reset();
            setFormState({ email: "", subject: "", message: "" });
            setTouched({ email: false, subject: false, message: false });
            
            setTimeout(() => setSubmitted(false), 4000);
        }
    };

    const emailSectionRef = useRef(null);
    const isInView = useInView(emailSectionRef, { once: true, margin: "-100px" });

    return (
        <motion.section
            ref={emailSectionRef}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            id="contact"
            className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative scroll-mt-20 z-9"
        >
            <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
            <motion.div className="z-10" initial={{ opacity: 0, x: -30 }} animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }} transition={{ duration: 0.5, delay: 0.2 }}>
                <h5 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 my-2">
                    Let&apos;s Connect
                </h5>
                <p className="text-[#ADB7BE] mb-4 max-w-md hover:text-white transition-colors duration-300">
                    I&apos;m open to Data Engineering opportunities and
                    collaborations. Whether you have a project, a role, or just
                    want to talk data pipelines, my inbox is always open—I&apos;ll
                    get back to you as soon as I can.
                </p>
                <div className="text-[#ADB7BE] text-sm space-y-1 mb-4">
                    <motion.p whileHover={{ x: 5 }} className="transition-transform">
                        <span className="text-purple-300">Email:</span>{" "}
                        <a
                            href="mailto:thedikshagrover@gmail.com"
                            className="hover:text-white transition-colors duration-200"
                        >
                            thedikshagrover@gmail.com
                        </a>
                    </motion.p>
                    <motion.p whileHover={{ x: 5 }} className="transition-transform">
                        <span className="text-purple-300">Phone:</span> 8950184456
                    </motion.p>
                    <motion.p whileHover={{ x: 5 }} className="transition-transform">
                        <span className="text-purple-300">Location:</span> Noida,
                        India
                    </motion.p>
                </div>
                <div className="socials flex flex-row gap-2">
                    <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
                        <Link href="https://github.com/Diksha-Grover/" target="_blank">
                            <Image src={GithubIcon} alt="Github Icon" className="hover:opacity-80 transition-opacity" />
                        </Link>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
                        <Link href="https://www.linkedin.com/in/diksha-grover-9b4342192" target="_blank">
                            <Image src={LinkedinIcon} alt="Linkedin Icon" className="hover:opacity-80 transition-opacity" />
                        </Link>
                    </motion.div>
                </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }} transition={{ duration: 0.5, delay: 0.2 }}>
                <form ref={formRef} className="flex flex-col" onSubmit={handleSubmit}>
                    {/* Email Field */}
                    <div className="mb-6">
                        <label
                            htmlFor="email"
                            className="text-white block mb-2 text-sm font-medium"
                        >
                            Your email
                        </label>
                        <motion.div animate={{ borderColor: errors.email && touched.email ? "#ef4444" : "#33353F" }}>
                            <input
                                name="email"
                                type="email"
                                id="email"
                                required
                                value={formState.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition-all duration-200"
                                placeholder="john@google.com"
                            />
                        </motion.div>
                        <motion.p initial={false} animate={{ opacity: errors.email && touched.email ? 1 : 0, y: errors.email && touched.email ? 0 : -10 }} className="text-red-500 text-xs mt-1 flex items-center gap-1">
                            {errors.email && <XCircleIcon className="w-4 h-4" />}
                            {errors.email}
                        </motion.p>
                    </div>

                    {/* Subject Field */}
                    <div className="mb-6">
                        <label
                            htmlFor="subject"
                            className="text-white block text-sm mb-2 font-medium"
                        >
                            Subject
                        </label>
                        <motion.div animate={{ borderColor: errors.subject && touched.subject ? "#ef4444" : "#33353F" }}>
                            <input
                                name="subject"
                                type="text"
                                id="subject"
                                required
                                value={formState.subject}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition-all duration-200"
                                placeholder="Just saying hi"
                            />
                        </motion.div>
                        <motion.p initial={false} animate={{ opacity: errors.subject && touched.subject ? 1 : 0, y: errors.subject && touched.subject ? 0 : -10 }} className="text-red-500 text-xs mt-1 flex items-center gap-1">
                            {errors.subject && <XCircleIcon className="w-4 h-4" />}
                            {errors.subject}
                        </motion.p>
                    </div>

                    {/* Message Field */}
                    <div className="mb-6">
                        <label
                            htmlFor="message"
                            className="text-white block text-sm mb-2 font-medium"
                        >
                            Message
                        </label>
                        <motion.div animate={{ borderColor: errors.message && touched.message ? "#ef4444" : "#33353F" }}>
                            <textarea
                                name="message"
                                id="message"
                                required
                                value={formState.message}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition-all duration-200"
                                placeholder="Let's talk about..."
                            />
                        </motion.div>
                        <motion.p initial={false} animate={{ opacity: errors.message && touched.message ? 1 : 0, y: errors.message && touched.message ? 0 : -10 }} className="text-red-500 text-xs mt-1 flex items-center gap-1">
                            {errors.message && <XCircleIcon className="w-4 h-4" />}
                            {errors.message}
                        </motion.p>
                    </div>

                    {/* Submit Button */}
                    <motion.button
                        type="submit"
                        className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-medium py-2.5 px-5 rounded-lg w-full hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-200"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        Send message
                    </motion.button>
                </form>

                {/* Success Message */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: submitted ? 1 : 0, y: submitted ? 0 : 10 }}
                    transition={{ duration: 0.3 }}
                    className="flex items-center gap-2 text-green-500 text-sm mt-4 p-3 bg-green-500/10 rounded-lg border border-green-500/30"
                >
                    <CheckCircleIcon className="w-5 h-5" />
                    Email sent successfully! I&apos;ll get back to you soon.
                </motion.div>
            </motion.div>
        </motion.section>
    );
};

export default EmailSection;