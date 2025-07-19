import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, Code, Smartphone, Globe, Zap } from 'lucide-react';
import { Link } from 'react-scroll';
import image from '../assets/homepic.jpg';

export const HeroSection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

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
      y: 30,
      opacity: 0
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const imageVariants = {
    hidden: {
      opacity: 0,
      scale: 0.9,
      rotateY: -15
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: {
        duration: 1,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-50 via-white to-amber-50/30 overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(251,191,36,0.08),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.03),transparent_50%)]"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-[0.015]"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full blur-xl opacity-15 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-xl opacity-10 animate-pulse delay-1000"></div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-screen py-16 lg:py-24 gap-12 lg:gap-16">
          
          {/* Left Content */}
          <motion.div 
            ref={ref} 
            variants={containerVariants} 
            initial="hidden" 
            animate={controls} 
            className="flex-1 max-w-xl lg:max-w-2xl text-center lg:text-left lg:pr-8"
          >
            {/* Badge */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-amber-100 to-orange-100 text-amber-800 rounded-full text-sm font-semibold mb-8 border border-amber-200/50 shadow-sm">
              <Zap size={16} className="text-amber-600" />
              Transforming Ideas into Technology
            </motion.div>

            {/* Main Heading */}
            <motion.h1 variants={itemVariants} className="text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-[0.95] mb-8">
              We Build
              <span className="block bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 bg-clip-text text-transparent">
                Digital
              </span>
              <span className="block">Excellence</span>
            </motion.h1>

            {/* Description */}
            <motion.p variants={itemVariants} className="text-lg lg:text-xl text-gray-600 leading-relaxed mb-10 max-w-lg mx-auto lg:mx-0">
              Transform your business with cutting-edge software solutions. 
              From web apps to mobile platforms, we turn your vision into reality.
            </motion.p>

            {/* Feature Icons */}
            <motion.div variants={itemVariants} className="flex items-center justify-center lg:justify-start gap-6 lg:gap-8 mb-10">
              <div className="flex items-center gap-2 text-gray-600">
                <Code size={18} className="text-amber-500" />
                <span className="text-sm font-medium">Web Development</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Smartphone size={18} className="text-amber-500" />
                <span className="text-sm font-medium">Mobile Apps</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Globe size={18} className="text-amber-500" />
                <span className="text-sm font-medium">Cloud Solutions</span>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link to="services" spy={true} smooth={true} offset={-80} duration={800}>
                <button className="group relative px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold rounded-xl shadow-lg shadow-amber-500/25 hover:shadow-xl hover:shadow-amber-500/30 transition-all duration-300 transform hover:-translate-y-1">
                  <span className="flex items-center gap-2">
                    Explore Our Services
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
              </Link>
              <Link to="contact" spy={true} smooth={true} offset={-80} duration={800}>
                <button className="px-8 py-4 bg-white/90 backdrop-blur-sm text-gray-800 font-semibold rounded-xl border-2 border-gray-200 hover:border-amber-300 hover:bg-white transition-all duration-300 shadow-lg hover:shadow-xl">
                  Start Your Project
                </button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Image Section */}
          <motion.div 
            variants={imageVariants} 
            initial="hidden" 
            animate={controls}
            className="flex-1 max-w-xl lg:max-w-2xl lg:pl-8"
          >
            <div className="relative">
              {/* Image Container with Decorative Elements */}
              <div className="relative bg-white rounded-2xl p-4 shadow-lg border border-gray-100">
                <img 
                  src={image} 
                  alt="Isometric illustration of web development, coding, and design with laptop, human figures, and development elements" 
                  className="w-full h-auto rounded-xl"
                />
                
                {/* Floating Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-14 h-14 bg-gradient-to-r from-amber-400 to-orange-500 rounded-2xl shadow-lg animate-bounce"></div>
                <div className="absolute -bottom-4 -left-4 w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full shadow-lg animate-pulse"></div>
                <div className="absolute top-1/2 -right-8 w-20 h-20 border-4 border-amber-400 rounded-full border-dashed animate-spin-slow"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Custom CSS for animations and patterns */}
      <style>{`
        .bg-grid-pattern {
          background-image: 
            linear-gradient(rgba(0,0,0,0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.08) 1px, transparent 1px);
          background-size: 50px 50px;
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </section>
  );
};