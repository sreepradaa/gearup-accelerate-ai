import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Play, Zap, Target, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const stats = [
    { icon: Zap, label: '10x Productivity', value: 'Boost' },
    { icon: Target, label: 'Accuracy Rate', value: '98%' },
    { icon: TrendingUp, label: 'Cost Reduction', value: '60%' },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gearup-dark">
      {/* Simple Dark Background with Gradient */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-gearup-navy via-gearup-dark to-gearup-navy" />

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-96 h-96 rounded-full border border-gearup-neon/20"
            style={{
              left: `${20 + i * 30}%`,
              top: `${10 + i * 20}%`,
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center px-4 py-2 bg-gearup-neon/20 rounded-full text-gearup-neon font-medium text-sm mb-6 backdrop-blur-sm"
          >
            <Zap className="w-4 h-4 mr-2" />
            AI-First Automation Solutions
          </motion.div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            We automate.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-neon">
              You accelerate.
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gearup-light-gray mb-8 max-w-3xl mx-auto leading-relaxed">
            Eliminate manual bottlenecks, reduce operational costs, and boost productivity by 10x 
            with our AI-powered automation solutions tailored for your business.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button variant="hero" size="xl" asChild>
              <Link to="/quote" className="group">
                Let's Automate
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </Button>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <stat.icon className="w-8 h-8 text-gearup-neon mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-sm text-gearup-light-gray">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-gearup-neon rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gearup-neon rounded-full mt-2" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;