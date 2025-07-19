import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MapPin, Phone, Mail, Send, Clock, MessageCircle, ArrowRight, CheckCircle } from 'lucide-react';

export const ContactSection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: {
      y: 40,
      opacity: 0
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const cardVariants = {
    hidden: {
      y: 30,
      opacity: 0,
      scale: 0.95
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('Form submitted:', formData);
    setFormSubmitted(true);
    setIsSubmitting(false);
    setFormData({
      name: '',
      email: '',
      company: '',
      message: ''
    });
    
    setTimeout(() => {
      setFormSubmitted(false);
    }, 5000);
  };

  const contactInfo = [
    {
      icon: <MapPin size={24} className="text-white" />,
      gradient: 'from-blue-500 to-indigo-600',
      title: 'Our Location',
      details: 'Karachi & Faisalabad, Pakistan',
      subtitle: 'Visit our office'
    },
    {
      icon: <Phone size={24} className="text-white" />,
      gradient: 'from-green-500 to-emerald-600',
      title: 'Phone Number',
      details: '+92 335-9335454------------+92 332-2795419-------------',
      subtitle: 'Call us for any query'
    },
    {
      icon: <Mail size={24} className="text-white" />,
      gradient: 'from-purple-500 to-pink-600',
      title: 'Email Address',
      details: 'Contact@deltainnovations.net',
      subtitle: 'Send us an email for any query'
    },
    {
      icon: <Clock size={24} className="text-white" />,
      gradient: 'from-orange-500 to-red-600',
      title: 'Business Hours',
      details: 'Mon - Fri: 9:00 AM - 6:00 PM',
      subtitle: 'We\'re here to help'
    }
  ];

  return (
    <section className="relative py-20 lg:py-32 bg-gradient-to-br from-slate-50 via-white to-amber-50/30 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.08),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(251,191,36,0.05),transparent_50%)]"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-[0.02]"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-10 left-10 w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-24 h-24 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full blur-xl opacity-15 animate-pulse delay-1000"></div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <motion.div 
          ref={ref} 
          variants={containerVariants} 
          initial="hidden" 
          animate={controls} 
          className="text-center mb-20"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-amber-100 to-orange-100 text-amber-800 rounded-full text-sm font-semibold mb-8 border border-amber-200/50 shadow-sm">
            <MessageCircle size={16} className="text-amber-600" />
            Get In Touch
          </motion.div>
          
          <motion.h2 variants={itemVariants} className="text-4xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight">
            Ready to Start
            <span className="block bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 bg-clip-text text-transparent">
              Your Project?
            </span>
          </motion.h2>
          
          <motion.p variants={itemVariants} className="text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Let's discuss how we can transform your ideas into powerful digital solutions that drive real business results.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
          {/* Contact Form */}
          <motion.div variants={cardVariants} initial="hidden" animate={controls} className="relative">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 lg:p-10 shadow-2xl border border-gray-100">
              <h3 className="text-3xl font-bold text-gray-900 mb-8">
                Send Us a Message
              </h3>
              
              {formSubmitted && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-gradient-to-r from-green-100 to-emerald-100 border border-green-200 text-green-800 px-6 py-4 rounded-2xl mb-8 flex items-center gap-3"
                >
                  <CheckCircle size={20} className="text-green-600" />
                  <span className="font-semibold">Thank you! We'll get back to you within 24 hours.</span>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 font-semibold mb-3">
                      Your Name *
                    </label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      value={formData.name} 
                      onChange={handleChange} 
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-amber-500 focus:ring-4 focus:ring-amber-500/10 transition-all duration-300 bg-white/50 backdrop-blur-sm" 
                      required 
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-700 font-semibold mb-3">
                      Email Address *
                    </label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      value={formData.email} 
                      onChange={handleChange} 
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-amber-500 focus:ring-4 focus:ring-amber-500/10 transition-all duration-300 bg-white/50 backdrop-blur-sm" 
                      required 
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-gray-700 font-semibold mb-3">
                    Company Name
                  </label>
                  <input 
                    type="text" 
                    id="company" 
                    name="company" 
                    value={formData.company} 
                    onChange={handleChange} 
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-amber-500 focus:ring-4 focus:ring-amber-500/10 transition-all duration-300 bg-white/50 backdrop-blur-sm" 
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-gray-700 font-semibold mb-3">
                    Project Details *
                  </label>
                  <textarea 
                    id="message" 
                    name="message" 
                    value={formData.message} 
                    onChange={handleChange} 
                    rows={6} 
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-amber-500 focus:ring-4 focus:ring-amber-500/10 transition-all duration-300 bg-white/50 backdrop-blur-sm resize-none" 
                    placeholder="Tell us about your project, goals, and requirements..."
                    required
                  />
                </div>
                
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="group relative w-full bg-gradient-to-r from-amber-500 to-orange-500 text-white px-8 py-4 rounded-xl font-semibold flex items-center justify-center gap-3 hover:from-amber-600 hover:to-orange-600 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div variants={containerVariants} initial="hidden" animate={controls} className="space-y-8">
            <motion.div variants={itemVariants}>
              <h3 className="text-3xl font-bold text-gray-900 mb-8">
                Get in Touch
              </h3>
              <p className="text-xl text-gray-600 leading-relaxed mb-10">
                We're here to help you bring your vision to life. Reach out to us through any of these channels.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <motion.div key={index} variants={cardVariants} className="group">
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-gray-200">
                    <div className={`w-12 h-12 bg-gradient-to-r ${info.gradient} rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      {info.icon}
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">
                      {info.title}
                    </h4>
                    <p className="text-gray-600 mb-1 font-medium">
                      {info.details}
                    </p>
                    <p className="text-sm text-gray-500">
                      {info.subtitle}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Business Hours */}
            <motion.div variants={cardVariants} className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-6 border border-amber-200/50">
              <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Clock size={20} className="text-amber-600" />
                Business Hours
              </h4>
              <div className="space-y-2 text-gray-700">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span className="font-semibold">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday-Sunday</span>
                  <span className="font-semibold text-gray-500">Closed</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Custom CSS */}
      <style>{`
        .bg-grid-pattern {
          background-image: 
            linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px);
          background-size: 50px 50px;
        }
      `}</style>
    </section>
  );
};