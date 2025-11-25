import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-indigo-400 font-semibold tracking-wide uppercase text-sm mb-2">Contact Us</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white">Get In Touch</h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h4 className="text-2xl font-bold mb-6">Let's talk about your project</h4>
            <p className="text-gray-400 mb-8 leading-relaxed">
              We're open for new projects and collaborations. Feel free to reach out to us with any questions or inquiries.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin className="text-indigo-500 mt-1 mr-4" />
                <div>
                  <h5 className="font-semibold text-lg">Location</h5>
                  <p className="text-gray-400">123 Tech Avenue, Silicon Valley, CA</p>
                </div>
              </div>
              <div className="flex items-start">
                <Mail className="text-indigo-500 mt-1 mr-4" />
                <div>
                  <h5 className="font-semibold text-lg">Email</h5>
                  <p className="text-gray-400">hello@nexusdev.com</p>
                </div>
              </div>
              <div className="flex items-start">
                <Phone className="text-indigo-500 mt-1 mr-4" />
                <div>
                  <h5 className="font-semibold text-lg">Phone</h5>
                  <p className="text-gray-400">+1 (555) 123-4567</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form className="bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-700" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none text-white" 
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none text-white" 
                  placeholder="john@example.com"
                />
              </div>
            </div>
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-300 mb-2">Subject</label>
              <input 
                type="text" 
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none text-white" 
                placeholder="Project Inquiry"
              />
            </div>
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
              <textarea 
                rows={4}
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none text-white" 
                placeholder="Tell us about your project..."
              ></textarea>
            </div>
            <button 
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-4 rounded-lg transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;