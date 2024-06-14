"use client"
import { useState } from 'react';
import emailjs from 'emailjs-com';
import ReCAPTCHA from 'react-google-recaptcha';
import Input from './Input';
import { Label } from './Label';
import Notification from './Notification'; 


export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [captchaValid, setCaptchaValid] = useState(false);
  const [notification, setNotification] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleCaptchaChange = (value) => {
    setCaptchaValid(value !== null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (captchaValid) {
      emailjs.send(
        process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID,
        process.env.NEXT_PUBLIC_EMAIL_USER_ID,
        formData
      )
        .then((response) => {
          console.log('SUCCESS!', response.status, response.text);
          setNotification({ message: 'Email envoyé avec succès!', type: 'success' });
        })
        .catch((err) => {
          console.log('FAILED...', err);
          setNotification({ message: 'Erreur lors de l\'envoi de l\'email.', type: 'error' });
        });
    } else {
      setNotification({ message: 'Captcha non validé.', type: 'error' });
    }
  };

  return (
    <div className="w-[25em] mx-auto mt-10 p-6 bg-background/30 rounded-lg shadow-md border  border-cardbordercolor">
      <div className='flex flex-wrap w-full items-center justify-center mb-8'>
        <h2 className="flex items-center md:text-xl lg:text-2xl font-bold text-gray-900">
          Contact rapide ici
        </h2>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <Label htmlFor="name">Nom & Prénom</Label>
          <Input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <Label htmlFor="message">Message</Label>
          <Input
            as="textarea"
            name="message"
            id="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <ReCAPTCHA
            sitekey="6Ld6H_kpAAAAAH5Oun22QvqGkFkjrcILoTcHNg5M"
            onChange={handleCaptchaChange}
          />
        </div>
        <div className='w-full flex justify-center items-center py-6'>
          <button
            type="submit"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Envoyer
          </button>
        </div>
      </form>
      {notification && (
        <Notification 
          message={notification.message} 
          type={notification.type} 
          onClose={() => setNotification(null)} 
        />
      )}
    </div>
  );
}
