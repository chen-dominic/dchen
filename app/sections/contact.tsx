"use client"
import { faEnvelope, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function Contact() {
  
  return (
    <div className="mx-4 overflow-x-hidden pt-20 " id="Contact">
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