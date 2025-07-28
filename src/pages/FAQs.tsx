import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, HelpCircle } from 'lucide-react';
import Navbar from '@/components/Layout/Navbar';
import Footer from '@/components/Layout/Footer';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const FAQs = () => {
  const faqs = [
    {
      question: "What is AI Automation?",
      answer: "AI automation combines artificial intelligence with workflow automation to handle repetitive tasks, make intelligent decisions, and streamline business processes. Unlike traditional automation that follows rigid rules, AI automation can adapt, learn, and handle complex scenarios that would typically require human intervention."
    },
    {
      question: "Do you build solutions without code?",
      answer: "Yes! We specialize in no-code and low-code solutions using platforms like n8n, Make.com, Zapier, and custom AI models. This approach allows for faster implementation, easier maintenance, and lower costs. However, when needed, we also develop custom code solutions for more complex requirements."
    },
    {
      question: "How fast can you deliver automation solutions?",
      answer: "Most automation projects are completed within 2-4 weeks, depending on complexity. Simple chatbots and workflow automations can be delivered in as little as 1 week, while comprehensive CRM integrations or custom AI solutions may take 4-6 weeks. We provide detailed timelines during our initial consultation."
    },
    {
      question: "What tools and platforms do you use?",
      answer: "We work with a wide range of tools including OpenAI GPT models, Make.com, n8n, Zapier, Airtable, HubSpot, Salesforce, Slack, Discord, and many more. We select the best tools based on your existing tech stack and specific requirements to ensure seamless integration."
    },
    {
      question: "What's the typical cost range for your services?",
      answer: "Our services range from $199/month for basic automation to $1000+/month for comprehensive AI solutions. The cost depends on complexity, number of integrations, and ongoing support needs. We offer custom quotes based on your specific requirements and always provide clear ROI projections."
    },
    {
      question: "Is ongoing support and maintenance included?",
      answer: "Yes! All our solutions include ongoing support and maintenance. This covers bug fixes, minor updates, performance monitoring, and technical support. We also offer training sessions to ensure your team can effectively use and manage the automated systems."
    },
    {
      question: "Can we white-label your solutions for our clients?",
      answer: "Absolutely! We offer white-label solutions that you can rebrand and offer to your clients. This includes custom branding, documentation, and training materials. We can also provide technical support directly to your clients under your brand."
    },
    {
      question: "How do you ensure data security and privacy?",
      answer: "We take data security seriously and follow industry best practices including data encryption, secure API connections, GDPR compliance, and regular security audits. All data processing is done through secure, enterprise-grade platforms and we can sign NDAs and data processing agreements as needed."
    },
    {
      question: "What if the automation doesn't work as expected?",
      answer: "We offer a 30-day money-back guarantee on all our services. If you're not satisfied with the results, we'll work to fix the issues or provide a full refund. We also include testing phases and revisions in our development process to ensure everything works perfectly before launch."
    },
    {
      question: "Do you provide training for our team?",
      answer: "Yes! We include comprehensive training as part of our service. This covers how to use the automated systems, basic troubleshooting, and how to make simple modifications. We provide documentation, video tutorials, and live training sessions to ensure your team is confident using the new systems."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <div className="inline-flex items-center px-4 py-2 bg-gearup-neon/20 rounded-full text-gearup-neon font-medium text-sm mb-6 backdrop-blur-sm">
              <HelpCircle className="w-4 h-4 mr-2" />
              Get Your Questions Answered
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Frequently Asked{' '}
              <span className="text-transparent bg-clip-text bg-gradient-neon">Questions</span>
            </h1>
            <p className="text-xl max-w-3xl mx-auto text-gearup-light-gray">
              Everything you need to know about AI automation and our services. 
              Can't find what you're looking for? Contact us directly.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <AccordionItem 
                    value={`item-${index}`} 
                    className="bg-white shadow-card hover:shadow-elegant transition-all duration-300 rounded-lg border-0 px-6 py-2"
                  >
                    <AccordionTrigger className="text-left hover:no-underline hover:text-gearup-neon transition-colors duration-200">
                      <span className="text-lg font-semibold text-gearup-navy pr-4">
                        {faq.question}
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="text-gearup-gray leading-relaxed pt-2 pb-4">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gearup-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Still Have Questions?
            </h2>
            <p className="text-xl text-gearup-light-gray mb-8 max-w-3xl mx-auto">
              Our automation experts are here to help. Schedule a free consultation 
              to discuss your specific needs and get personalized answers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact" className="group">
                  Contact Us
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </Button>
              <Button variant="heroOutline" size="lg" asChild>
                <Link to="/quote">Get Free Quote</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQs;