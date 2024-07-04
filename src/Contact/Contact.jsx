import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_h3z0u72", "template_h375pmg", form.current, "vMgCKnrNd1hzk71G7")
      .then(
        () => {
          toast("Message sent!");
          form.current.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <section id="contact" className="py-6 bg-[#0f0715] text-white">
      <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-2 md:grid-cols-2 md:divide-x">
        <div className="py-6 md:py-0 md:px-6">
          <h1 className="text-4xl font-bold text-[#8a54f8]">Get in touch</h1>
          <p className="pt-2 pb-4">Fill in the form to start a conversation</p>
          <div className="space-y-4">
            <p className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5 mr-2 sm:mr-6"
              >
                <path
                  fillRule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span>Textile, Chittagong, Bangladesh</span>
            </p>
            <p className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5 mr-2 sm:mr-6"
              >
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
              </svg>
              <span>01521575317</span>
            </p>
            <p className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5 mr-2 sm:mr-6"
              >
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
              </svg>
              <span>jahidulislamsupta9@gmail.com</span>
            </p>
          </div>
        </div>
        <form
          ref={form}
          onSubmit={sendEmail}
          noValidate=""
          className="flex flex-col py-6 space-y-6 md:py-0 md:px-6"
        >
          <label className="block">
            <span className="mb-1 text-lg">Full name</span>
            <input
              type="text"
              placeholder="Your full name"
              name="user_name"
              className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-[#8a54f8] bg-[#140c1c] text-white text-lg p-3 border-none focus:outline-none"
            />
          </label>
          <label className="block">
            <span className="mb-1 text-lg">Email address</span>
            <input
              type="email"
              placeholder="Your E-mail address"
              name="user_email"
              className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-[#8a54f8] bg-[#140c1c] text-white text-lg p-3 border-none focus:outline-none"
            />
          </label>
          <label className="block">
            <span className="mb-1 text-lg">Message</span>
            <textarea
              rows="3"
              placeholder="Your message here"
              name="message"
              className="block w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-[#8a54f8] bg-[#140c1c] text-white text-lg p-3 border-none focus:outline-none"
            ></textarea>
          </label>
          <button
            type="submit"
            className="self-center px-8 py-3 text-lg rounded focus:ring focus:ring-opacity-75 hover:ring hover:ring-opacity-75 bg-[#8a54f8] text-white"
          >
            Submit
          </button>
        </form>
        <ToastContainer />
      </div>
    </section>
  );
};

export default Contact;
