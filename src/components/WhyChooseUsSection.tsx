import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, Clock, Users, Zap, Star, Shield, TrendingUp, Heart, CheckCircle, Target, Rocket, Globe } from 'lucide-react';

export const WhyChooseUsSection = () => {
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

  const reasons = [
    {
      icon: <Target size={32} className="text-white" />,
      gradient: 'from-emerald-500 to-teal-600',
      title: 'Innovation at the core',
      description: 'We don\'t just build software—we craft strategic solutions that align with your business objectives and drive measurable results.',
      features: ['Future Ready Solutions', 'Modern Tech Stack', 'Creative Problem Solving']
    },
    {
      icon: <Rocket size={32} className="text-white" />,
      gradient: 'from-violet-500 to-purple-600',
      title: 'End-to-End Expertise ',
      description: 'Stay ahead of the competition with our agile development process and cutting-edge technology stack.',
      features: ['Full Cycle Development', 'Scalable Architecture Design', 'Quality Assurance']
    },
    {
      icon: <Globe size={32} className="text-white" />,
      gradient: 'from-blue-500 to-indigo-600',
      title: 'Client-Centered Approach',
      description: 'Our diverse team brings international experience and cultural insights to every project we undertake.',
      features: ['Long Term Support', 'Goal Driven Execution']
    },
    {
      icon: <Shield size={32} className="text-white" />,
      gradient: 'from-rose-500 to-red-600',
      title: 'Security & Compliance',
      description: 'Your data and applications are protected with enterprise-grade security measures and compliance standards.',
      features: ['Data Protection', 'Compliance Ready', 'Reliable Performance']
    }
  ];

  const stats = [
    { number: '0+', label: 'Projects Delivered', color: 'from-amber-500 to-orange-500' },
    { number: '0%', label: 'Client Satisfaction', color: 'from-green-500 to-emerald-500' },
    { number: '9-5', label: 'Support Available', color: 'from-blue-500 to-indigo-500' },
    { number: '0', label: 'Years Experience', color: 'from-purple-500 to-pink-500' }
  ];

  return (
    <section className="relative py-20 lg:py-32 bg-gradient-to-br from-slate-900 via-gray-900 to-black text-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(251,191,36,0.15),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(59,130,246,0.1),transparent_50%)]"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-[0.05]"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-10 w-20 h-20 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full blur-xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-xl opacity-25 animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <motion.div 
          ref={ref} 
          variants={containerVariants} 
          initial="hidden" 
          animate={controls} 
          className="text-center mb-20"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-amber-500/20 to-orange-500/20 text-amber-300 rounded-full text-sm font-semibold mb-8 border border-amber-500/30 shadow-lg backdrop-blur-sm">
            <Star size={16} className="text-amber-400" />
            Why Choose Delta Innovation
          </motion.div>
          
          <motion.h2 variants={itemVariants} className="text-4xl lg:text-6xl font-bold text-white mb-8 leading-tight">
            The Competitive
            <span className="block bg-gradient-to-r from-amber-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
              Advantage
            </span>
          </motion.h2>
          
          <motion.p variants={itemVariants} className="text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We combine technical excellence with strategic thinking to deliver solutions that not only work flawlessly but also drive your business forward.
          </motion.p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center mb-20">
          
          {/* Left Side - Reasons */}
          <motion.div 
            variants={containerVariants} 
            initial="hidden" 
            animate={controls} 
            className="space-y-8"
          >
            {reasons.map((reason, index) => (
              <motion.div 
                key={index} 
                variants={cardVariants}
                className="group relative"
              >
                <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-500 overflow-hidden">
                  {/* Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${reason.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                  
                  {/* Content */}
                  <div className="relative z-10 flex items-start gap-6">
                    {/* Icon */}
                    <div className={`w-16 h-16 bg-gradient-to-r ${reason.gradient} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                      {reason.icon}
                    </div>
                    
                    {/* Text Content */}
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-amber-300 transition-colors">
                        {reason.title}
                      </h3>
                      <p className="text-gray-300 mb-4 leading-relaxed">
                        {reason.description}
                      </p>
                      
                      {/* Features */}
                      <div className="space-y-2">
                        {reason.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center gap-2 text-sm text-gray-400">
                            <CheckCircle size={14} className="text-amber-400" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Right Side - Stats & Visual */}
          <motion.div 
            variants={containerVariants} 
            initial="hidden" 
            animate={controls}
            className="relative"
          >
            {/* Central Visual Element */}
            <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/20 mb-8">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-orange-500/10 rounded-3xl blur-xl"></div>
              <div className="relative z-10 text-center">
                <div className="w-24 h-24 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl">
                  <Zap size={40} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Innovation at Every Step
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  We don't just follow trends—we set them. Our innovative approach ensures your solutions are future-proof and scalable.
                </p>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div 
                  key={index} 
                  variants={cardVariants}
                  className="group"
                >
                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 text-center">
                    <div className={`text-3xl lg:text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300`}>
                      {stat.number}
                    </div>
                    <div className="text-gray-300 font-medium text-sm">
                      {stat.label}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div 
          variants={itemVariants}
          initial="hidden" 
          animate={controls}
          className="text-center"
        >
          <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-full text-lg font-semibold shadow-2xl hover:shadow-amber-500/25 transition-all duration-300 transform hover:-translate-y-1">
            <Heart size={20} />
            Ready to Experience the Difference?
          </div>
        </motion.div>
      </div>

      {/* Custom CSS */}
      <style>{`
        .bg-grid-pattern {
          background-image: 
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px);
          background-size: 50px 50px;
        }
      `}</style>
    </section>
  );
};