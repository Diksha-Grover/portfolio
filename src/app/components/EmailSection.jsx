"use client";
import React, { useRef, useState } from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

const EmailSection = () => {
    const [emailSubmitted, setEmailSubmitted] = useState(false);
    const formRef = useRef(null);

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     const data = {
    //         email: e.target.email.value,
    //         subject: e.target.subject.value,
    //         message: e.target.message.value,
    //     };
    //     const JSONdata = JSON.stringify(data);
    //     const endpoint = "/api/send";

    //     const options = {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //         body: JSONdata,
    //     };

    //     const response = await fetch(endpoint, options);
    //     const resData = await response.json();

    //     if (response.status === 200) {
    //         console.log("Message sent.");
    //         setEmailSubmitted(true);
    //         formRef.current.reset();
    //     }
    // };

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
            <div className="z-10">
                <h5 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 my-2">
                    Let`&apos;s Connect
                </h5>
                <p className="text-[#ADB7BE] mb-4 max-w-md">
                    {" "}
                    I&apos;m currently looking for new opportunities, my inbox is always
                    open. Whether you have a question or just want to say hi, I&apos;ll
                    try my best to get back to you!
                </p>
                <div className="socials flex flex-row gap-2">
                    <Link href="https://github.com/Diksha-Grover/">
                        <Image src={GithubIcon} alt="Github Icon" />
                    </Link>
                    <Link href="https://www.linkedin.com/in/diksha-grover-9b4342192">
                        <Image src={LinkedinIcon} alt="Linkedin Icon" />
                    </Link>
                </div>
            </div>
            <div>
                {/* <form ref={formRef} className="flex flex-col" onSubmit={handleSubmit}> */}
                <form ref={formRef} className="flex flex-col">
                    <div className="mb-6">
                        <label
                            htmlFor="email"
                            className="text-white block mb-2 text-sm font-medium"
                        >
                            Your email
                        </label>
                        <input
                            name="email"
                            type="email"
                            id="email"
                            required
                            className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition-colors duration-200"
                            placeholder="john@google.com"
                        />
                    </div>
                    <div className="mb-6">
                        <label
                            htmlFor="subject"
                            className="text-white block text-sm mb-2 font-medium"
                        >
                            Subject
                        </label>
                        <input
                            name="subject"
                            type="text"
                            id="subject"
                            required
                            className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition-colors duration-200"
                            placeholder="Just saying hi"
                        />
                    </div>
                    <div className="mb-6">
                        <label
                            htmlFor="message"
                            className="text-white block text-sm mb-2 font-medium"
                        >
                            Message
                        </label>
                        <textarea
                            name="message"
                            id="message"
                            className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition-colors duration-200"
                            placeholder="Let's talk about..."
                        />
                    </div>
                    <div className="mb-6">
                        <button
                            type="submit"
                            className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-medium py-2.5 px-5 rounded-lg w-full hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-200"
                            onClick={() => {
                                setEmailSubmitted(true)
                                formRef.current.reset();
                            }}
                        >
                            {" "}
                            Send message{" "}
                        </button>
                    </div>
                </form>
                {emailSubmitted && (
                    <p className="text-green-500 text-sm mt-2">
                        Email sent successfully!
                    </p>
                )}
            </div>
        </motion.section>
    );
};

export default EmailSection;