"use client"
import { faEnvelope, faLocationDot, faPaperPlane, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, FormEvent } from "react";
import emailjs from "@emailjs/browser";
import paths from "../data/paths";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [hasMessageSent, setHasMessageSent] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSending(true);
    setError(null);

    const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "";
    const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "";
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "";
    try{
        const templateParams = {
            name: formData.name,
            subject: formData.subject,
            from_email: formData.email,
            message: formData.message
        };

        await emailjs.send(serviceID,templateID,templateParams,publicKey);
        setHasMessageSent(true);
        setTimeout(() => {
            setHasMessageSent(false);
          }, 3000)
        setFormData({ name: "", email: "", subject: "", message: "" });
    } catch(err){
        setError("Failed to send message. Please try again. " + err);
        setTimeout(() => {
            setError(null);
          }, 3000)
    } finally{
        setIsSending(false);
    }
  };

  return (
    <div className="mx-4 overflow-x-hidden pt-20 " id="Contact">
        {isSending && 
        <div className="fixed top-0 w-screen h-screen bg-black bg-opacity-70 z-50 flex items-center justify-center">
            <img src={paths.loader} alt="Loading..." className="w-[30vw] h-auto" />
        </div>}
      <h1 className="text-white text-center md:text-6xl tracking-wider text-5xl font-black">
        CONTACT
      </h1>
      <div className="bg-offPrimary rounded-xl py-4 lg:p-4 mx-2 md:mx-20 lg:mx-32 2xl:mx-60 my-12 flex flex-col lg:flex-row">
        <div className="flex-1 gap-4 md:border-r border-primary flex justify-center flex-col px-6">
          <h1 className="text-white font-semibold text-xl">Let&apos;s get in touch!</h1>
          <p className="text-white font-normal text-base">Feel free to send a message!</p>
          <div className="flex justify-between text-white text-sm">
            <p>
              <FontAwesomeIcon icon={faLocationDot} className="h-3 w-3 mr-2" /> Location:
            </p>
            <p>Toronto, ON</p>
          </div>
          <div className="flex justify-between text-white text-sm">
            <p>
              <FontAwesomeIcon icon={faEnvelope} className="h-3 w-3 mr-2" /> Email:
            </p>
            <p>dominic.chen630@gmail.com</p>
          </div>
        </div>
        <div className="flex-[2] p-6">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 md:text-base text-sm">
            <div className="flex flex-col">
              <label htmlFor="name" className="text-white font-semibold text-sm mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="p-2 bg-primary text-white rounded-md focus:outline-none focus:ring-1 focus:ring-secondary"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email" className="text-white font-semibold text-sm mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="p-2 bg-primary text-white rounded-md focus:outline-none focus:ring-1 focus:ring-secondary"
                placeholder="Your Email"
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="subject" className="text-white font-semibold text-sm mb-1">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="p-2 bg-primary text-white rounded-md focus:outline-none focus:ring-1 focus:ring-secondary"
                placeholder="Subject"
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="message" className="text-white font-semibold text-sm mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="p-2 bg-primary text-white rounded-md focus:outline-none focus:ring-1 focus:ring-secondary resize-y"
                placeholder="Your Message"
                rows={4}
                required
              />
            </div>
            {error && <p className="text-red-500 text-sm">{error}</p>}
            {hasMessageSent && <p className="text-green-600 text-sm">Message Sent!</p>}
            <button type="submit" disabled={isSending}>
                <FontAwesomeIcon icon={faPaperPlane} className="w-12 h-6 bg-secondary rounded-full p-3 text-center text-white hover:bg-offSecondary transition-all duration-300 cursor-pointer"/>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}