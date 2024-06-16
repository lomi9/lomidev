"use client";
import { useState } from 'react';
import emailjs from 'emailjs-com';
import ReCAPTCHA from 'react-google-recaptcha';
import Input from './Input';
import { Label } from './Label';
import Notification from './Notification';
import Textarea from './Texterea';
import { ArrowDown } from 'lucide-react';

export default function ContactForm() {
  const initialFormData = {
    name: '',
    email: '',
    message: '',
    'g-recaptcha-response': ''
  };

  const [formData, setFormData] = useState(initialFormData);
  const [captchaValid, setCaptchaValid] = useState(false);
  const [notification, setNotification] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleCaptchaChange = (value) => {
    setCaptchaValid(value !== null);
    setFormData({ 
      ...formData, 
      'g-recaptcha-response': value ? value : '' // Stocker ou effacer la réponse
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

      if (captchaValid && !isSubmitting) {
        setIsSubmitting(true);
      emailjs.send(
        process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID,
        formData,
        process.env.NEXT_PUBLIC_EMAIL_USER_ID
      )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setNotification({ message: 'Email envoyé avec succès!', type: 'success' });
        setFormData(initialFormData); // Réinitialiser le formulaire après succès
        setCaptchaValid(false); // Réinitialiser également l'état du captcha
        setIsSubmitting(false); // Réinitialiser l'envoi
      })
      .catch((err) => {
        console.log('FAILED...', err);
        setNotification({ message: 'Erreur lors de l\'envoi de l\'email.', type: 'error' });
        setIsSubmitting(false);
      });
    } else if (!captchaValid) {
      setNotification({ message: 'Captcha non validé.', type: 'error' });
    }
  };

  return (
    <div className="w-[25em] max-w-[100%] mx-auto mt-10 p-6 bg-background/30 rounded-lg shadow-md border border-cardbordercolor">
      <div className='flex flex-wrap w-full items-center justify-center mb-8'>
        <h2 className="flex pr-4 items-center md:text-xl lg:text-2xl font-bold text-foreground">
          Contact rapide ici
        </h2>
        <ArrowDown/>
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
          <Textarea
            name="message"
            id="message"
            value={formData.message}
            onChange={handleChange}
            className="flex flex-wrap w-full h-[150px] items-start justify-start"
            required
          />
        </div>
        <div className="mb-4">
          <ReCAPTCHA
            sitekey="6Ld6H_kpAAAAAH5Oun22QvqGkFkjrcILoTcHNg5M"
            onChange={handleCaptchaChange}
          />
        </div>
        <div className='w-full flex flex-wrap justify-center items-center py-6'>
          <button
            type="submit"
            className={`inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white ${isSubmitting ? 'bg-cyan-700' : 'bg-cyan-600 hover:bg-cyan-700'} bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
            disabled={isSubmitting}
          >
            Envoyer
          </button>
          {isSubmitting && <p className="text-center w-full mt-2 text-sm italic text-teal-400 justify-center">Message en cours d&#39;envoi...</p>} 
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
