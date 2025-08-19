"use client";
import React, { useState } from "react";
import GithubIcon from "../../../public/images/socials/github-icon.svg";
import LinkedInIcon from "../../../public/images/socials/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  const [ emailSubmitted, setEmailSubmitted ] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };

    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };
    try{
      const response = await fetch(endpoint, options);
      const resData = await response.json();
      // if (resData.status === 200) {
      //   console.log("Message sent.");
      //   setEmailSubmitted(true);
      // }
      if (response.ok) {
        console.log("Message sent successfully!");
        setEmailSubmitted(true);
        // Clear the form
        e.target.reset();
      } else {
        console.error("Failed to send message:", resData.error);
      }
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };
  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      {/* <div 
            className="rounded-full h-96 w-96 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-y-1/2"
            style={{background: 'radial-gradient(circle, rgba(168, 85, 247, 0.8) 0%, rgba(168, 85, 247, 0) 70%)'}}
        ></div> */}
      <div className="z-10 text-text-middle">
        <h5 className="text-xl font-bold my-2">Let's Connect</h5>
        <p className=" mb-4 max-w-md">
          {" "}
          I'm currently looking for new opportunities and collaborations.
          Whether you have a project in mind, you have a question, or just want
          to say hello, feel free to reach out! I'll get back to you as soon as
          possible.
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="https://github.com/kathy-kx">
            <Image src={GithubIcon} alt="Github Icon" width={32} height={32} />
          </Link>
          <Link href="https://www.linkedin.com/in/kzhu11">
            <Image
              src={LinkedInIcon}
              alt="LinkedIn Icon"
              width={32}
              height={32}
            />
          </Link>
        </div>
      </div>
      <div>
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              className="text-text-middle block mb-2 text-sm font-medium"
              htmlFor="email"
            >
              Your email
            </label>
            <input
              name="email"
              type="email"
              id="email"
              required
              placeholder="Enter your email"
              className="bg-white border border-[#545252] placeholder-[#9CA2A9] text-gray-700 text-sm rounded-lg block w-full p-3 focus:outline-none focus:ring-2 focus:ring-[#0070f3]"
            />
          </div>

          <div className="mb-6">
            <label
              className="text-text-middle block mb-2 text-sm font-medium"
              htmlFor="subject"
            >
              Subject
            </label>
            <input
              name="subject"
              type="text"
              id="subject"
              required
              placeholder="Just saying hi"
              className="bg-white border border-[#545252] placeholder-[#9CA2A9] text-gray-700 text-sm rounded-lg block w-full p-3 focus:outline-none focus:ring-2 focus:ring-[#0070f3]"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="message"
              className="text-text-middle block mb-2 text-sm font-medium"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              required
              rows={4}
              className="bg-white border border-[#545252] placeholder-[#9CA2A9] text-gray-700 text-sm rounded-lg block w-full p-3 focus:outline-none focus:ring-2 focus:ring-[#0070f3]"
              placeholder="Let's talk about..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2 px-5 rounded-lg w-full transition-colors duration-300"
          >
            Send Message
          </button>
          {
            // if the email was submitted, show a success message
            emailSubmitted && (
              <p className="text-green-500 text-sm mt-2">
                Email sent successfully! I'll get back to you soon.
              </p>
            )
          }
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
