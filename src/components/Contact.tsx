import React, { useState } from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Get In Touch
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how we can work together.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-4"></div>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="w-full lg:w-1/3 space-y-8">
            <div className="bg-gray-900 rounded-lg p-6 flex items-start space-x-4 transform hover:scale-105 transition-all duration-300 border border-purple-500/20 hover:border-purple-500/50">
              <div className="bg-purple-500/10 p-3 rounded-lg text-purple-400">
                <Phone size={24} />
              </div>
              <div>
                <h3 className="text-lg font-medium text-white mb-2">Phone</h3>
                <p className="text-gray-400">+254-742-296-931</p>
              </div>
            </div>
            
            <div className="bg-gray-900 rounded-lg p-6 flex items-start space-x-4 transform hover:scale-105 transition-all duration-300 border border-purple-500/20 hover:border-purple-500/50">
              <div className="bg-purple-500/10 p-3 rounded-lg text-purple-400">
                <Mail size={24} />
              </div>
              <div>
                <h3 className="text-lg font-medium text-white mb-2">Email</h3>
                <p className="text-gray-400">nickotimo36@gmail.com</p>
              </div>
            </div>
            
            <div className="bg-gray-900 rounded-lg p-6 flex items-start space-x-4 transform hover:scale-105 transition-all duration-300 border border-purple-500/20 hover:border-purple-500/50">
              <div className="bg-purple-500/10 p-3 rounded-lg text-purple-400">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="text-lg font-medium text-white mb-2">Location</h3>
                <p className="text-gray-400">Nairobi, Kenya</p>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-2/3">
            <form onSubmit={handleSubmit} className="bg-gray-900 rounded-lg p-8 border border-purple-500/20">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-400 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:from-purple-600 hover:to-pink-600"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
