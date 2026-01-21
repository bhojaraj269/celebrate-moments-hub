import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Star, Heart, Calendar, Users, Sparkles, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import heroImage from "@/assets/hero-wedding.jpg";
import galleryBirthday from "@/assets/gallery-birthday.jpg";
import galleryBabyShower from "@/assets/gallery-baby-shower.jpg";
import galleryProposal from "@/assets/gallery-proposal.jpg";

const services = [
  {
    icon: Heart,
    title: "Wedding Planning",
    description: "From intimate ceremonies to grand celebrations, we craft your perfect wedding story.",
    link: "/events/wedding",
  },
  {
    icon: Sparkles,
    title: "Birthday Celebrations",
    description: "Make every birthday unforgettable with creative themes and flawless execution.",
    link: "/events/birthday",
  },
  {
    icon: Calendar,
    title: "Anniversary Events",
    description: "Celebrate love milestones with elegance and style that honors your journey.",
    link: "/events/anniversary",
  },
  {
    icon: Users,
    title: "Baby Showers",
    description: "Welcome new beginnings with joyful gatherings designed to cherish forever.",
    link: "/events/baby-shower",
  },
];

const testimonials = [
  {
    name: "Sarah & Michael",
    event: "Wedding",
    quote: "Manu Media Events turned our dream wedding into reality. Every detail was perfect, and we couldn't have asked for a more magical day.",
    rating: 5,
  },
  {
    name: "Jennifer Roberts",
    event: "50th Birthday",
    quote: "The team exceeded all expectations. The party was elegant, fun, and exactly what I envisioned. Truly exceptional service!",
    rating: 5,
  },
  {
    name: "The Patels",
    event: "Baby Shower",
    quote: "Such a beautiful and stress-free experience. They handled everything with care and created memories we'll treasure forever.",
    rating: 5,
  },
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

const Index = () => {
  return (
    <div className="bg-background overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <motion.img
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            src={heroImage}
            alt="Elegant wedding setup"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/50 via-charcoal/30 to-charcoal/60" />
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white/20 rounded-full"
              initial={{ 
                x: Math.random() * 100 + "%", 
                y: "110%",
                opacity: 0 
              }}
              animate={{ 
                y: "-10%",
                opacity: [0, 1, 1, 0]
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                delay: Math.random() * 5,
                ease: "linear"
              }}
            />
          ))}
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            <motion.span 
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
              className="inline-block bg-gradient-to-r from-amber-700 via-amber-500 to-amber-700 bg-clip-text text-transparent font-medium tracking-widest uppercase text-sm mb-4 animate-pulse drop-shadow-[0_0_10px_rgba(180,83,9,0.5)]"
            >
              Premium Event Planning
            </motion.span>
            <motion.h1 
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-7xl font-serif font-bold text-white mb-6 leading-tight"
            >
              Creating Memorable Moments
              <motion.span 
                className="block bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-400 bg-clip-text text-transparent animate-pulse drop-shadow-[0_0_10px_rgba(251,191,36,0.5)]"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                for Every Celebration
              </motion.span>
            </motion.h1>
            <motion.p 
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
              className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto"
            >
              Transform your special occasions into extraordinary experiences with our 
              bespoke event planning services.
            </motion.p>
            <motion.div 
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact">
                  Book Your Event
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="heroOutline" size="xl" className="bg-white border-white text-amber-500 hover:bg-amber-50 hover:text-amber-600" asChild>
                <Link to="/gallery">View Our Work</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-8 h-12 rounded-full border-2 border-white/50 flex items-start justify-center pt-2"
          >
            <div className="w-1.5 h-3 bg-white/70 rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="py-20 md:py-28 bg-cream-dark">
        <div className="container mx-auto px-4">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="max-w-3xl mx-auto text-center"
          >
            <motion.span variants={fadeInUp} className="text-gold font-medium tracking-widest uppercase text-sm">About Us</motion.span>
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mt-4 mb-6">
              Where Dreams Meet <span className="text-gradient-gold">Perfection</span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-muted-foreground text-lg leading-relaxed">
              At Manu Media, we believe every celebration deserves to be extraordinary. 
              With over a decade of experience, our passionate team transforms your vision 
              into beautifully orchestrated events that leave lasting impressions. From 
              intimate gatherings to grand celebrations, we handle every detail with 
              precision and creativity.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <Button variant="outline" size="lg" className="mt-8" asChild>
                <Link to="/about">Learn More About Us</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.span variants={fadeInUp} className="text-gold font-medium tracking-widest uppercase text-sm">Our Services</motion.span>
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mt-4">
              Crafting Unforgettable <span className="text-gradient-gold">Experiences</span>
            </motion.h2>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                variants={scaleIn}
                transition={{ duration: 0.5 }}
              >
                <Link
                  to={service.link}
                  className="group block bg-card rounded-2xl p-8 shadow-soft hover:shadow-elevated transition-all duration-300 hover:-translate-y-2 border border-border h-full"
                >
                  <motion.div 
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300"
                  >
                    <service.icon className="h-7 w-7 text-gold group-hover:text-primary-foreground transition-colors" />
                  </motion.div>
                  <h3 className="text-xl font-serif font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {service.description}
                  </p>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-center mt-12"
          >
            <Button variant="default" size="lg" asChild>
              <Link to="/events/wedding">
                Explore All Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-20 md:py-28 bg-foreground overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.span variants={fadeInUp} className="text-primary font-medium tracking-widest uppercase text-sm">Our Portfolio</motion.span>
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white mt-4">
              Moments We've <span className="text-primary">Created</span>
            </motion.h2>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {[
              { image: galleryBirthday, title: "Birthday Celebrations" },
              { image: galleryBabyShower, title: "Baby Showers" },
              { image: galleryProposal, title: "Romantic Proposals" },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                variants={scaleIn}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.02 }}
                className="group relative overflow-hidden rounded-2xl aspect-square cursor-pointer"
              >
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <motion.div 
                  initial={{ y: "100%" }}
                  whileHover={{ y: 0 }}
                  className="absolute bottom-0 left-0 right-0 p-6"
                >
                  <h3 className="text-xl font-serif font-semibold text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {item.title}
                  </h3>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-center mt-12"
          >
            <Button variant="hero" size="lg" asChild>
              <Link to="/gallery">View Full Gallery</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 md:py-28 bg-secondary overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.span variants={fadeInUp} className="text-primary font-medium tracking-widest uppercase text-sm">Testimonials</motion.span>
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mt-4">
              What Our Clients <span className="text-gradient-coral">Say</span>
            </motion.h2>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
                className="bg-card rounded-2xl p-8 shadow-soft border border-border"
              >
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ staggerChildren: 0.1 }}
                  className="flex gap-1 mb-4"
                >
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <Star className="h-5 w-5 fill-primary text-primary" />
                    </motion.div>
                  ))}
                </motion.div>
                <p className="text-muted-foreground italic mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div>
                  <p className="font-serif font-semibold text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-primary">{testimonial.event}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-gradient-to-r from-primary via-coral to-primary relative overflow-hidden">
        {/* Animated background */}
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
              className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white mb-6"
            >
              Ready to Create Magic?
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="text-white/80 text-lg mb-10 max-w-2xl mx-auto"
            >
              Let's turn your vision into an unforgettable celebration. 
              Contact us today to start planning your perfect event.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <Button
                size="xl"
                className="bg-white text-primary hover:bg-white/90"
                asChild
              >
                <Link to="/contact">
                  Get Started Today
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

export default Index;
