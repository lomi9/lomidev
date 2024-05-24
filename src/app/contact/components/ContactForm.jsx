"use client"

import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { useState } from 'react';

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
    // Ajoutez ici la logique pour envoyer les données du formulaire
    console.log(formData);
  };

  return (
    <div className="w-[25em] mx-0 md:mx-auto mt-10 p-6 bg-background/30 rounded-lg shadow-md border border-solid border-cardbordercolor">
      <div className='flex flex-wrap w-full items-center justify-center mb-8'>
        <h2 className="flex items-center md:text-xl lg:text-2xl font-bold text-gray-800">
            Contact rapide ici 
        </h2>
        <ArrowDown className='ml-4 flex flex-wrap items-center justify-start'/>
        </div>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nom</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 p-2 w-full border border-gray-300 bg-transparent rounded-md shadow-sm focus:ring-green-300 focus:border-green-300 sm:text-sm"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 p-2 w-full border border-gray-300 bg-transparent rounded-md shadow-sm focus:ring-green-300 focus:border-green-300 sm:text-sm"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            className="mt-1 p-2 w-full border border-gray-300 bg-transparent rounded-md shadow-sm focus:ring-green-300 focus:border-green-300 sm:text-sm"
            required
          ></textarea>
        </div>
        <div className="flex justify-center">
            <div className="flex w-full md:w-auto lg:h-full lg:p-8 justify-center sm:justify-end items-end">
                <button type="submit" className="group min-w-[140px] inline-block rounded-full bg-gradient-to-r from-green-200 via-orange-300 to-pink-300 p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75">
                    <span className="flex text-sm rounded-full bg-btnbackground px-4 py-2 font-medium group-hover:bg-transparent items-center justify-between">
                        Envoyer <ArrowUpRight className="w-[20%]"/>
                    </span>
                </button>
            </div>
        </div>
      </form>
    </div>
  );
}
