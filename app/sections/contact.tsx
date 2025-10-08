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
      <h1 className="text-white text-center md:text-4xl tracking-wider text-3xl font-black">
        CONTACT
      </h1>
      <div className="py-4 lg:p-4 mx-2 md:mx-40 lg:mx-60 2xl:mx-80 my-12 flex">
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
      </div>
    </div>
  );
}