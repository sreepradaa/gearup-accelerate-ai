import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      position: 'CEO, TechStart',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
      content: 'GearUp transformed our customer support completely. Our response time improved by 90% and customer satisfaction is at an all-time high.',
      rating: 5,
      metric: '90% faster response time'
    },
    {
      name: 'Michael Chen',
      position: 'CTO, InnovateCorp',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      content: 'The workflow automation solutions saved us 40 hours per week. ROI was immediate and the team loves the new efficiency.',
      rating: 5,
      metric: '40 hours saved weekly'
    },
    {
      name: 'Emily Rodriguez',
      position: 'Marketing Director, GrowthCo',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      content: 'Our lead qualification process is now completely automated. We\ve increased qualified leads by 200% while reducing manual work.',
      rating: 5,
      metric: '200% more qualified leads'
    }
  ];

  return (
    <section className="py-20 bg-gearup-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            What Our{' '}
            <span className="text-transparent bg-clip-text bg-gradient-neon">Clients Say</span>
          </h2>
          <p className="text-xl text-gearup-light-gray max-w-3xl mx-auto">
            Real results from real businesses that trusted GearUp to automate their operations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <Card className="bg-white/5 backdrop-blur-sm border border-white/10 hover:border-gearup-neon/50 transition-all duration-300 h-full">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-gearup-neon fill-current" />
                    ))}
                  </div>

                  <Quote className="w-8 h-8 text-gearup-neon mb-4 opacity-60" />
                  
                  <p className="text-white mb-6 leading-relaxed">
                    {testimonial.content}
                  </p>

                  <div className="flex items-center space-x-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="text-white font-semibold">{testimonial.name}</h4>
                      <p className="text-gearup-light-gray text-sm">{testimonial.position}</p>
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t border-white/10">
                    <span className="text-gearup-neon font-semibold text-sm">
                      {testimonial.metric}
                    </span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;