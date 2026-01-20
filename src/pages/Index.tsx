import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Star, Heart, Calendar, Users, Sparkles, ArrowRight } from "lucide-react";
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
    quote: "Éclat Events turned our dream wedding into reality. Every detail was perfect, and we couldn't have asked for a more magical day.",
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

const Index = () => {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Elegant wedding setup"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/60 via-charcoal/40 to-charcoal/70" />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto animate-fade-in-up">
            <span className="inline-block text-gold font-medium tracking-widest uppercase text-sm mb-4">
              Premium Event Planning
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif font-bold text-cream mb-6 leading-tight">
              Creating Memorable Moments
              <span className="block text-gold">for Every Celebration</span>
            </h1>
            <p className="text-lg md:text-xl text-cream/80 mb-10 max-w-2xl mx-auto">
              Transform your special occasions into extraordinary experiences with our 
              bespoke event planning services.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact">
                  Book Your Event
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="heroOutline" size="xl" className="border-cream text-cream hover:bg-cream hover:text-charcoal" asChild>
                <Link to="/gallery">View Our Work</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-8 h-12 rounded-full border-2 border-cream/50 flex items-start justify-center pt-2">
            <div className="w-1.5 h-3 bg-cream/70 rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 md:py-28 bg-cream-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-gold font-medium tracking-widest uppercase text-sm">About Us</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mt-4 mb-6">
              Where Dreams Meet <span className="text-gradient-gold">Perfection</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              At Éclat Events, we believe every celebration deserves to be extraordinary. 
              With over a decade of experience, our passionate team transforms your vision 
              into beautifully orchestrated events that leave lasting impressions. From 
              intimate gatherings to grand celebrations, we handle every detail with 
              precision and creativity.
            </p>
            <Button variant="outline" size="lg" className="mt-8" asChild>
              <Link to="/about">Learn More About Us</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-gold font-medium tracking-widest uppercase text-sm">Our Services</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mt-4">
              Crafting Unforgettable <span className="text-gradient-gold">Experiences</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Link
                key={service.title}
                to={service.link}
                className="group bg-card rounded-2xl p-8 shadow-soft hover:shadow-elevated transition-all duration-300 hover:-translate-y-2 border border-border"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                  <service.icon className="h-7 w-7 text-gold group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="default" size="lg" asChild>
              <Link to="/events/wedding">
                Explore All Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-20 md:py-28 bg-charcoal">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-gold font-medium tracking-widest uppercase text-sm">Our Portfolio</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-cream mt-4">
              Moments We've <span className="text-gold">Created</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { image: galleryBirthday, title: "Birthday Celebrations" },
              { image: galleryBabyShower, title: "Baby Showers" },
              { image: galleryProposal, title: "Romantic Proposals" },
            ].map((item, index) => (
              <div
                key={item.title}
                className="group relative overflow-hidden rounded-2xl aspect-square image-zoom"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-xl font-serif font-semibold text-cream">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="hero" size="lg" asChild>
              <Link to="/gallery">View Full Gallery</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 md:py-28 bg-blush">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-gold font-medium tracking-widest uppercase text-sm">Testimonials</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mt-4">
              What Our Clients <span className="text-gradient-gold">Say</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.name}
                className="bg-card rounded-2xl p-8 shadow-soft border border-border"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-gold text-gold" />
                  ))}
                </div>
                <p className="text-muted-foreground italic mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div>
                  <p className="font-serif font-semibold text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-gold">{testimonial.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-gradient-to-r from-gold-dark via-gold to-gold-dark">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-charcoal mb-6">
            Ready to Create Magic?
          </h2>
          <p className="text-charcoal/80 text-lg mb-10 max-w-2xl mx-auto">
            Let's turn your vision into an unforgettable celebration. 
            Contact us today to start planning your perfect event.
          </p>
          <Button
            size="xl"
            className="bg-charcoal text-cream hover:bg-charcoal/90"
            asChild
          >
            <Link to="/contact">
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
