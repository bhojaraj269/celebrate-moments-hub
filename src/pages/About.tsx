import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Heart, Users, Sparkles } from "lucide-react";

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

const About = () => {
  return (
    <div className="bg-background">
      {/* Hero */}
      <section className="py-20 md:py-28 bg-cream-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-gold font-medium tracking-widest uppercase text-sm">
              Our Story
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mt-4 mb-6">
              Crafting Dreams Into <span className="text-gradient-gold">Reality</span>
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              For over a decade, Éclat Events has been transforming ordinary occasions 
              into extraordinary celebrations. Our passion for perfection and dedication 
              to creating unforgettable memories has made us a trusted name in event planning.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-gold font-medium tracking-widest uppercase text-sm">
                About Éclat Events
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-4 mb-6">
                Where Every Detail <span className="text-gradient-gold">Matters</span>
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Founded in 2013, Éclat Events began with a simple belief: every celebration 
                  deserves to be extraordinary. What started as a small team of passionate 
                  planners has grown into a full-service event management company, serving 
                  clients across the country.
                </p>
                <p>
                  Our name, "Éclat," meaning brilliant display or striking effect, perfectly 
                  captures our approach to event planning. We believe in creating moments 
                  that shine, memories that last, and experiences that exceed expectations.
                </p>
                <p>
                  Today, our team of 50+ professionals brings together expertise in design, 
                  logistics, catering, and entertainment to deliver seamless events that 
                  reflect your unique vision and style.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="bg-card rounded-2xl p-8 text-center border border-border shadow-soft"
                >
                  <p className="text-4xl md:text-5xl font-serif font-bold text-gradient-gold mb-2">
                    {stat.number}
                  </p>
                  <p className="text-muted-foreground text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 md:py-28 bg-charcoal">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-charcoal border border-cream/10 rounded-2xl p-10">
              <h3 className="text-2xl font-serif font-bold text-cream mb-4">Our Mission</h3>
              <p className="text-cream/70 leading-relaxed">
                To transform life's special moments into extraordinary experiences by 
                delivering personalized, creative, and flawlessly executed events that 
                exceed expectations and create lasting memories for our clients and their guests.
              </p>
            </div>
            <div className="bg-charcoal border border-cream/10 rounded-2xl p-10">
              <h3 className="text-2xl font-serif font-bold text-cream mb-4">Our Vision</h3>
              <p className="text-cream/70 leading-relaxed">
                To be the most trusted and innovative event planning company, known for 
                our creativity, attention to detail, and unwavering commitment to turning 
                dreams into reality—one celebration at a time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-gold font-medium tracking-widest uppercase text-sm">
              Our Values
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-4">
              What Drives <span className="text-gradient-gold">Us</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div
                key={value.title}
                className="text-center p-8 bg-card rounded-2xl border border-border shadow-soft hover:shadow-elevated transition-shadow"
              >
                <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mx-auto mb-6">
                  <value.icon className="h-8 w-8 text-gold" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 md:py-28 bg-blush">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-gold font-medium tracking-widest uppercase text-sm">
                Why Choose Us
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-4">
                The Éclat <span className="text-gradient-gold">Difference</span>
              </h2>
            </div>

            <div className="space-y-6">
              {[
                { title: "Experience", desc: "Over a decade of creating memorable events across various styles and scales." },
                { title: "Creativity", desc: "Innovative concepts and fresh ideas that make your event stand out." },
                { title: "Budget-Friendly", desc: "Transparent pricing and flexible packages to suit every budget." },
                { title: "End-to-End Management", desc: "Complete event handling from concept to cleanup, so you can enjoy every moment." },
              ].map((item) => (
                <div key={item.title} className="flex gap-4 items-start bg-card p-6 rounded-xl border border-border">
                  <div className="w-2 h-2 rounded-full bg-gold mt-2 shrink-0" />
                  <div>
                    <h4 className="font-serif font-semibold text-foreground mb-1">{item.title}</h4>
                    <p className="text-muted-foreground text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-gold-dark via-gold to-gold-dark">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-charcoal mb-6">
            Let's Create Something Beautiful Together
          </h2>
          <p className="text-charcoal/80 mb-10 max-w-xl mx-auto">
            Ready to start planning your next celebration? We'd love to hear from you.
          </p>
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
        </div>
      </section>
    </div>
  );
};

export default About;
