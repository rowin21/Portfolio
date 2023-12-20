import React from 'react'
import './contact.css'
import { IoMdMail } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_f4zogru', 'template_k0a65sk', form.current, 'LqcHZUZShkEpoGJBD')

    e.target.reset();

  };


  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      
      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
          <IoMdMail className='contact__option-icon' />

          <h4>Email</h4>
          <h5>rowinmmathias@gmail.com</h5>
          <a href="mailto:rowinmmathias@gmail.com' target='_blank" target='_blank' rel="noopener noreferrer">Send a Mail</a>
          </article>

          <article className='contact__option'>
          <FaWhatsapp className='contact__option-icon' />

          <h4>Whatsapp</h4>
          <h5>9535139770</h5>
          <a href="https://api.whatsapp.com/send?phone+919535139770" target='_blank' rel="noopener noreferrer">Send a Message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name="name" placeholder='Your Full Name' required />
          <input type='email' name='email' placeholder='Your Email' required />
          <textarea name='message' rows="7" placeholder='Your Message' required />
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
        </div>
        
        
    </section>
  )
}

export default Contact