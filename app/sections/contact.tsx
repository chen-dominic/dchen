"use client"
import { faEnvelope, faLocationDot, faPaperPlane, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, FormEvent } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    
    setFormData({ name: '', email: '', subject: '', message: '' });
    alert('Message sent! (This is a demo - actual email sending not implemented)');
  };

  return (
    <div className="mx-4 overflow-x-hidden" id="Contact">
      <h1 className="text-white text-center md:text-6xl tracking-wider text-5xl md:mt-12 mt:6 font-black">
        CONTACT
      </h1>
      <div className="bg-offPrimary rounded-xl p-4 mx-6 md:mx-40 my-12 flex flex-col md:flex-row">
        <div className="flex-1 gap-4 md:border-r border-white flex justify-center flex-col px-6">
          <h1 className="text-white font-semibold text-xl">Let's get in touch!</h1>
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
          <div className="flex justify-between text-white text-sm">
            <p>
              <FontAwesomeIcon icon={faPhone} className="h-3 w-3 mr-2" /> Phone:
            </p>
            <p>(647)-534-5985</p>
          </div>
        </div>
        <div className="flex-[2] p-6">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
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
            <button type='submit'>
                <FontAwesomeIcon icon={faPaperPlane} className='w-6 h-6 bg-secondary rounded-full p-3 text-center text-white hover:bg-offSecondary transition-all duration-300 cursor-pointer'/>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}