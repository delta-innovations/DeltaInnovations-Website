import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Smartphone, Cloud, Palette, Zap, Database, Shield, Globe, Cpu, Rocket } from 'lucide-react';

export const ServicesSection = () => {
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

  const services = [
    {
      icon: <Code size={28} className="text-white" />,
      title: 'Web Development',
      description: 'Modern, responsive websites built with cutting-edge technologies. From simple landing pages to complex web applications.',
      gradient: 'from-blue-500 to-purple-600',
      bgGradient: 'from-blue-500/10 to-purple-600/10',
      features: ['React & Next.js', 'TypeScript', 'Responsive Design']
    },
    {
      icon: <Smartphone size={28} className="text-white" />,
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile apps that deliver exceptional user experiences across all devices.',
      gradient: 'from-green-500 to-teal-600',
      bgGradient: 'from-green-500/10 to-teal-600/10',
      features: ['iOS & Android', 'React Native', 'Flutter']
    },
    {
      icon: <Cloud size={28} className="text-white" />,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and DevOps solutions to power your applications and streamline deployments.',
      gradient: 'from-orange-500 to-red-600',
      bgGradient: 'from-orange-500/10 to-red-600/10',
      features: ['AWS & Azure', 'Docker & Kubernetes', 'CI/CD Pipelines']
    },
    {
      icon: <Palette size={28} className="text-white" />,
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive interfaces designed with user experience in mind. From wireframes to pixel-perfect designs.',
      gradient: 'from-pink-500 to-rose-600',
      bgGradient: 'from-pink-500/10 to-rose-600/10',
      features: ['User Research', 'Prototyping', 'Design Systems']
    },
    {
      icon: <Database size={28} className="text-white" />,
      title: 'Backend Development',
      description: 'Robust server-side solutions with scalable architectures and secure APIs for your business logic.',
      gradient: 'from-indigo-500 to-blue-600',
      bgGradient: 'from-indigo-500/10 to-blue-600/10',
      features: ['Node.js & Python', 'REST & GraphQL', 'Microservices']
    },
    {
      icon: <Shield size={28} className="text-white" />,
      title: 'Security & Testing',
      description: 'Comprehensive security audits and automated testing to ensure your applications are safe and reliable.',
      gradient: 'from-emerald-500 to-green-600',
      bgGradient: 'from-emerald-500/10 to-green-600/10',
      features: ['Security Audits', 'Automated Testing', 'Performance Optimization']
    }
  ];

  return (
    <section className="relative py-20 lg:py-32 bg-gradient-to-br from-slate-50 via-white to-amber-50/30 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.05),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(251,191,36,0.08),transparent_50%)]"></div>
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
            <Zap size={16} className="text-amber-600" />
            Our Expertise
          </motion.div>
          
          <motion.h2 variants={itemVariants} className="text-4xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight">
            Services That
            <span className="block bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 bg-clip-text text-transparent">
              Drive Growth
            </span>
          </motion.h2>
          
          <motion.p variants={itemVariants} className="text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We provide comprehensive digital solutions that transform businesses and create lasting impact in the digital landscape.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          variants={containerVariants} 
          initial="hidden" 
          animate={controls} 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
        >
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              variants={cardVariants}
              className="group relative"
            >
              <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-gray-200 overflow-hidden">
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {service.icon}
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors">
                    {service.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  {/* Features */}
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2 text-sm text-gray-500">
                        <div className="w-1.5 h-1.5 bg-amber-500 rounded-full"></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div 
          variants={itemVariants}
          initial="hidden" 
          animate={controls}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-full text-sm font-semibold shadow-lg">
            <Rocket size={16} />
            Ready to Start Your Project?
          </div>
        </motion.div>
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