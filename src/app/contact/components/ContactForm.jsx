"use client";

import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { useState } from 'react';
import Input from './Input';
import { Label } from './Label';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ajouter ici la logique pour envoyer les données du formulaire
    console.log(formData);
  };

  return (
    <div className="w-[25em] mx-auto mt-10 p-6 bg-background/30 rounded-lg shadow-md border border-solid border-cardbordercolor">
      <div className='flex flex-wrap w-full items-center justify-center mb-8'>
        <h2 className="flex items-center md:text-xl lg:text-2xl font-bold text-foreground">
          Contact rapide ici
        </h2>
        <ArrowDown className='ml-4 flex flex-wrap color-foreground items-center justify-start'/>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <Label htmlFor="name">Nom Prénom</Label>
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
        <div className='w-full flex justify-center items-center py-6'>
        <div className="flex items-center justify-between">
          
          <button
            type="submit"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Envoyer
            <ArrowUpRight className="ml-2"/>
          </button>
        </div>
        </div>
      </form>
    </div>
  );
}
