import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const result = await emailjs.sendForm(
        'service_uts28gg',
        'template_2qyti6s',
        form.current,
        'o35vMd8JlAj7ubx7p'
      );
      console.log(result.text);
      form.current.reset();
      setIsSubmitted(true);
      setErrorMessage('');
    } catch (error) {
      console.log(error.text);
      setIsSubmitted(false);
      setErrorMessage('Failed to send the message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="contact">
      <section id="contact" className="bg-base-100 py-12 mx-5 my-20">
        <h2 className="text-3xl font-bold mb-8 text-center">Contact Me</h2>
        <form ref={form} onSubmit={sendEmail} className="max-w-lg mx-auto">
          <div className="mb-6">
            <label htmlFor="name" className="block mb-2 font-medium">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="from_name"
              placeholder="Your Name"
              className="w-full px-4 py-2 border border-red-700 rounded focus:outline-none focus:border-indigo-500"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block mb-2 font-medium">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="from_email"
              placeholder="example@example.com"
              className="w-full px-4 py-2 border border-red-700 rounded focus:outline-none focus:border-indigo-500"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block mb-2 font-medium">
              Message:
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Send your feedback."
              rows="5"
              className="w-full px-4 py-2 border border-red-700 rounded focus:outline-none focus:border-indigo-500"
              required
            ></textarea>
          </div>
          {isSubmitted && (
            <p className="text-green-600 mb-4 text-center">Message sent successfully!</p>
          )}
          {errorMessage && <p className="text-red-600 mb-4 text-center">{errorMessage}</p>}
          <button
            id="btn"
            type="submit"
            className={`btn transition duration-300 ${isSubmitting ? 'opacity-70 pointer-events-none' : ''}`}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </section>
    </div>
  );
};

export default Contact;
