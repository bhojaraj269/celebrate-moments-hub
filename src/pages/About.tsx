import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Heart, Users, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const values = [
  {
    icon: Heart,
    title: "Passion",
    description: "We pour our hearts into every event, treating each celebration as if it were our own.",
  },
  {
    icon: Sparkles,
    title: "Creativity",
    description: "We bring innovative ideas and unique concepts that make your event truly one-of-a-kind.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We maintain the highest standards in every detail, ensuring flawless execution.",
  },
  {
    icon: Users,
    title: "Partnership",
    description: "We work closely with you, ensuring your vision is at the heart of everything we do.",
  },
];

const stats = [
  { number: "500+", label: "Events Planned" },
  { number: "10+", label: "Years Experience" },
  { number: "98%", label: "Client Satisfaction" },
  { number: "50+", label: "Team Members" },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 }
};

const About = () => {
  return (
    <div className="bg-background overflow-hidden">
      {/* Hero */}
      <section className="py-20 md:py-28 bg-cream-dark">
        <div className="container mx-auto px-4">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.span 
              variants={fadeInUp}
              className="text-gold font-medium tracking-widest uppercase text-sm"
            >
              Our Story
            </motion.span>
            <motion.h1 
              variants={fadeInUp}
              className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mt-4 mb-6"
            >
              Crafting Dreams Into <span className="text-gradient-gold">Reality</span>
            </motion.h1>
            <motion.p 
              variants={fadeInUp}
              className="text-muted-foreground text-lg leading-relaxed"
            >
              For over a decade, Manu Media Events has been transforming ordinary occasions 
              into extraordinary celebrations. Our passion for perfection and dedication 
              to creating unforgettable memories has made us a trusted name in event planning.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.span 
                variants={fadeInUp}
                className="text-gold font-medium tracking-widest uppercase text-sm"
              >
                About Manu Media Events
              </motion.span>
              <motion.h2 
                variants={fadeInUp}
                className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-4 mb-6"
              >
                Where Every Detail <span className="text-gradient-gold">Matters</span>
              </motion.h2>
              <motion.div 
                variants={staggerContainer}
                className="space-y-4 text-muted-foreground leading-relaxed"
              >
                <motion.p variants={fadeInUp}>
                  Founded in 2013, Manu Media Events began with a simple belief: every celebration 
                  deserves to be extraordinary. What started as a small team of passionate 
                  planners has grown into a full-service event management company, serving 
                  clients across the country.
                </motion.p>
                <motion.p variants={fadeInUp}>
                  Our approach combines creative media production with meticulous event planning, 
                  capturing every moment while creating experiences that exceed expectations.
                </motion.p>
                <motion.p variants={fadeInUp}>
                  Today, our team of 50+ professionals brings together expertise in design, 
                  logistics, catering, and entertainment to deliver seamless events that 
                  reflect your unique vision and style.
                </motion.p>
              </motion.div>
            </motion.div>
            
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={staggerContainer}
              className="grid grid-cols-2 gap-4"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  variants={scaleIn}
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ duration: 0.3 }}
                  className="bg-card rounded-2xl p-8 text-center border border-border shadow-soft"
                >
                  <motion.p 
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, type: "spring" }}
                    className="text-4xl md:text-5xl font-serif font-bold text-gradient-gold mb-2"
                  >
                    {stat.number}
                  </motion.p>
                  <p className="text-muted-foreground text-sm">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 md:py-28 bg-charcoal overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-12"
          >
            <motion.div 
              variants={fadeInUp}
              whileHover={{ scale: 1.02 }}
              className="bg-charcoal border border-cream/10 rounded-2xl p-10"
            >
              <h3 className="text-2xl font-serif font-bold text-cream mb-4">Our Mission</h3>
              <p className="text-cream/70 leading-relaxed">
                To transform life's special moments into extraordinary experiences by 
                delivering personalized, creative, and flawlessly executed events that 
                exceed expectations and create lasting memories for our clients and their guests.
              </p>
            </motion.div>
            <motion.div 
              variants={fadeInUp}
              whileHover={{ scale: 1.02 }}
              className="bg-charcoal border border-cream/10 rounded-2xl p-10"
            >
              <h3 className="text-2xl font-serif font-bold text-cream mb-4">Our Vision</h3>
              <p className="text-cream/70 leading-relaxed">
                To be the most trusted and innovative event planning company, known for 
                our creativity, attention to detail, and unwavering commitment to turning 
                dreams into reality—one celebration at a time.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.span 
              variants={fadeInUp}
              className="text-gold font-medium tracking-widest uppercase text-sm"
            >
              Our Values
            </motion.span>
            <motion.h2 
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-4"
            >
              What Drives <span className="text-gradient-gold">Us</span>
            </motion.h2>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                variants={scaleIn}
                whileHover={{ y: -10 }}
                className="text-center p-8 bg-card rounded-2xl border border-border shadow-soft hover:shadow-elevated transition-shadow"
              >
                <motion.div 
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mx-auto mb-6"
                >
                  <value.icon className="h-8 w-8 text-gold" />
                </motion.div>
                <h3 className="text-xl font-serif font-semibold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 md:py-28 bg-blush">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="text-center mb-12"
            >
              <motion.span 
                variants={fadeInUp}
                className="text-gold font-medium tracking-widest uppercase text-sm"
              >
                Why Choose Us
              </motion.span>
              <motion.h2 
                variants={fadeInUp}
                className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-4"
              >
                The Manu Media <span className="text-gradient-gold">Difference</span>
              </motion.h2>
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={staggerContainer}
              className="space-y-6"
            >
              {[
                { title: "Experience", desc: "Over a decade of creating memorable events across various styles and scales." },
                { title: "Creativity", desc: "Innovative concepts and fresh ideas that make your event stand out." },
                { title: "Budget-Friendly", desc: "Transparent pricing and flexible packages to suit every budget." },
                { title: "End-to-End Management", desc: "Complete event handling from concept to cleanup, so you can enjoy every moment." },
              ].map((item, index) => (
                <motion.div 
                  key={item.title} 
                  variants={fadeInUp}
                  whileHover={{ x: 10, scale: 1.01 }}
                  className="flex gap-4 items-start bg-card p-6 rounded-xl border border-border"
                >
                  <motion.div 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, type: "spring" }}
                    className="w-2 h-2 rounded-full bg-gold mt-2 shrink-0" 
                  />
                  <div>
                    <h4 className="font-serif font-semibold text-foreground mb-1">{item.title}</h4>
                    <p className="text-muted-foreground text-sm">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-gold-dark via-gold to-gold-dark relative overflow-hidden">
        <motion.div
          animate={{ 
            backgroundPosition: ["0% 0%", "100% 100%"]
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: "radial-gradient(circle at center, white 1px, transparent 1px)",
            backgroundSize: "50px 50px"
          }}
        />
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2 
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-serif font-bold text-charcoal mb-6"
            >
              Let's Create Something Beautiful Together
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="text-charcoal/80 mb-10 max-w-xl mx-auto"
            >
              Ready to start planning your next celebration? We'd love to hear from you.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <Button
                size="xl"
                className="bg-charcoal text-cream hover:bg-charcoal/90"
                asChild
              >
                <Link to="/contact">
                  Get in Touch
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
