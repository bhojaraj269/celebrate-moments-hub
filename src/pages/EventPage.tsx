import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Calendar, MapPin, Users, Clock } from "lucide-react";
import heroWedding from "@/assets/hero-wedding.jpg";
import galleryBirthday from "@/assets/gallery-birthday.jpg";
import galleryBabyShower from "@/assets/gallery-baby-shower.jpg";
import galleryProposal from "@/assets/gallery-proposal.jpg";
import galleryDestination from "@/assets/gallery-destination-wedding.jpg";
import galleryHousewarming from "@/assets/gallery-housewarming.jpg";

const eventData: Record<string, {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  highlights: string[];
  features: { icon: typeof Calendar; text: string }[];
}> = {
  wedding: {
    title: "Wedding Planning",
    subtitle: "Your Perfect Day Awaits",
    description: "From the moment you say 'yes' to the final dance, we orchestrate every detail of your wedding with precision and passion. Our comprehensive wedding planning services ensure a seamless, stress-free journey to your perfect day.",
    image: heroWedding,
    highlights: [
      "Full-service wedding coordination",
      "Venue selection and decoration",
      "Catering and menu curation",
      "Entertainment and music management",
      "Photography and videography coordination",
      "Guest management and RSVP tracking",
    ],
    features: [
      { icon: Calendar, text: "12-18 months planning timeline" },
      { icon: Users, text: "50-500+ guest capacity" },
      { icon: MapPin, text: "Any venue of your choice" },
      { icon: Clock, text: "Day-of coordination included" },
    ],
  },
  "destination-wedding": {
    title: "Destination Wedding",
    subtitle: "Love Knows No Boundaries",
    description: "Say 'I do' in paradise. We specialize in creating breathtaking destination weddings in exotic locations around the world. From beach ceremonies to mountain retreats, let us handle the logistics while you focus on the love.",
    image: galleryDestination,
    highlights: [
      "International venue scouting",
      "Travel and accommodation coordination",
      "Local vendor partnerships",
      "Legal documentation assistance",
      "Guest travel management",
      "On-site event coordination",
    ],
    features: [
      { icon: Calendar, text: "18-24 months planning" },
      { icon: Users, text: "Intimate to medium gatherings" },
      { icon: MapPin, text: "Worldwide destinations" },
      { icon: Clock, text: "Week-long celebration options" },
    ],
  },
  birthday: {
    title: "Birthday Party",
    subtitle: "Celebrate Life's Milestones",
    description: "Every birthday deserves to be special. Whether it's a child's first birthday, a sweet sixteen, or a milestone celebration, we create personalized parties that reflect the guest of honor's unique personality.",
    image: galleryBirthday,
    highlights: [
      "Custom theme development",
      "Venue decoration and styling",
      "Entertainment and activities",
      "Cake and catering services",
      "Party favors and gifts",
      "Photography packages",
    ],
    features: [
      { icon: Calendar, text: "2-4 weeks planning" },
      { icon: Users, text: "Any party size" },
      { icon: MapPin, text: "Home or venue based" },
      { icon: Clock, text: "2-6 hour celebrations" },
    ],
  },
  "theme-birthday": {
    title: "Theme Birthday Party",
    subtitle: "Where Imagination Comes Alive",
    description: "Transform any space into a wonderland with our themed birthday parties. From elegant masquerades to adventurous safaris, we bring your wildest party dreams to life with meticulous attention to detail.",
    image: galleryBirthday,
    highlights: [
      "Custom theme conceptualization",
      "Immersive décor and props",
      "Themed entertainment and performers",
      "Costume and dress code coordination",
      "Themed menu and cake design",
      "Interactive activities and games",
    ],
    features: [
      { icon: Calendar, text: "4-8 weeks planning" },
      { icon: Users, text: "Scalable to any group" },
      { icon: MapPin, text: "Transformable venues" },
      { icon: Clock, text: "Full-day events available" },
    ],
  },
  engagement: {
    title: "Engagement & Ring Ceremony",
    subtitle: "The Beginning of Forever",
    description: "Mark the start of your journey together with an unforgettable engagement celebration. From intimate ring ceremonies to grand engagement parties, we create the perfect setting for your 'yes' moment.",
    image: galleryProposal,
    highlights: [
      "Romantic venue styling",
      "Intimate or grand celebrations",
      "Ring ceremony coordination",
      "Professional photography",
      "Catering and cocktails",
      "Family coordination",
    ],
    features: [
      { icon: Calendar, text: "2-6 weeks planning" },
      { icon: Users, text: "Intimate to large gatherings" },
      { icon: MapPin, text: "Indoor or outdoor venues" },
      { icon: Clock, text: "Evening celebrations" },
    ],
  },
  anniversary: {
    title: "Anniversary Celebration",
    subtitle: "Honoring Your Love Story",
    description: "Celebrate the years of love, laughter, and togetherness with a specially curated anniversary event. Whether it's your first or fiftieth, we create celebrations that honor your unique journey.",
    image: heroWedding,
    highlights: [
      "Personalized celebration themes",
      "Memory displays and tributes",
      "Vow renewal ceremonies",
      "Multi-generational entertainment",
      "Custom photo/video montages",
      "Elegant dining experiences",
    ],
    features: [
      { icon: Calendar, text: "3-8 weeks planning" },
      { icon: Users, text: "Intimate to family gatherings" },
      { icon: MapPin, text: "Meaningful locations" },
      { icon: Clock, text: "Flexible timing" },
    ],
  },
  "baby-shower": {
    title: "Baby Shower",
    subtitle: "Welcoming New Beginnings",
    description: "Celebrate the upcoming arrival of your little one with a beautifully designed baby shower. We create warm, joyful gatherings that shower parents-to-be with love and blessings.",
    image: galleryBabyShower,
    highlights: [
      "Gender-neutral or reveal themes",
      "Elegant décor and florals",
      "Games and entertainment",
      "Gift registry coordination",
      "Catering and dessert bars",
      "Keepsake creation stations",
    ],
    features: [
      { icon: Calendar, text: "3-6 weeks planning" },
      { icon: Users, text: "Intimate gatherings" },
      { icon: MapPin, text: "Home or venue" },
      { icon: Clock, text: "2-4 hour celebrations" },
    ],
  },
  "gender-reveal": {
    title: "Gender Reveal Party",
    subtitle: "The Big Surprise Awaits",
    description: "Create an unforgettable moment of discovery with a spectacular gender reveal party. From confetti cannons to elaborate reveals, we design magical moments that you'll cherish forever.",
    image: galleryBabyShower,
    highlights: [
      "Creative reveal concepts",
      "Surprise coordination",
      "Themed decorations",
      "Photography and videography",
      "Guest entertainment",
      "Celebration catering",
    ],
    features: [
      { icon: Calendar, text: "2-4 weeks planning" },
      { icon: Users, text: "Intimate to medium groups" },
      { icon: MapPin, text: "Outdoor or indoor" },
      { icon: Clock, text: "1-3 hour events" },
    ],
  },
  "house-warming": {
    title: "House Warming",
    subtitle: "Welcome Home Celebrations",
    description: "Mark the beginning of a new chapter with a warm and welcoming housewarming celebration. We help you introduce your new space to family and friends in style.",
    image: galleryHousewarming,
    highlights: [
      "Home styling and décor",
      "Welcome ceremony coordination",
      "Catering and beverages",
      "Guest entertainment",
      "Traditional blessing ceremonies",
      "Gift registry setup",
    ],
    features: [
      { icon: Calendar, text: "2-3 weeks planning" },
      { icon: Users, text: "Scalable guest list" },
      { icon: MapPin, text: "Your new home" },
      { icon: Clock, text: "Flexible timing" },
    ],
  },
  proposal: {
    title: "Proposal Planning",
    subtitle: "The Perfect Question",
    description: "Pop the question in the most unforgettable way. Our proposal planning service ensures every detail is perfect, from the setting to the surprise, making your moment truly magical.",
    image: galleryProposal,
    highlights: [
      "Custom proposal concepts",
      "Location scouting and setup",
      "Hidden photographer coordination",
      "Romantic décor and ambiance",
      "Post-proposal celebration",
      "Surprise coordination",
    ],
    features: [
      { icon: Calendar, text: "1-4 weeks planning" },
      { icon: Users, text: "Intimate moments" },
      { icon: MapPin, text: "Any meaningful location" },
      { icon: Clock, text: "Perfectly timed" },
    ],
  },
};

const EventPage = () => {
  const { eventType } = useParams();
  const event = eventData[eventType || "wedding"] || eventData.wedding;

  return (
    <div className="bg-background">
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/60 via-charcoal/40 to-charcoal/70" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <span className="inline-block text-gold font-medium tracking-widest uppercase text-sm mb-4 animate-fade-in">
            {event.subtitle}
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-cream mb-6 animate-fade-in-up">
            {event.title}
          </h1>
        </div>
      </section>

      {/* Description */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-center mb-16">
              {event.description}
            </p>

            {/* Features */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
              {event.features.map((feature, index) => (
                <div
                  key={index}
                  className="text-center p-6 bg-card rounded-xl border border-border"
                >
                  <feature.icon className="h-8 w-8 text-gold mx-auto mb-3" />
                  <p className="text-sm text-muted-foreground">{feature.text}</p>
                </div>
              ))}
            </div>

            {/* Highlights */}
            <div className="bg-cream-dark rounded-2xl p-8 md:p-12">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-8 text-center">
                What's <span className="text-gradient-gold">Included</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {event.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center shrink-0">
                      <Check className="h-4 w-4 text-primary-foreground" />
                    </div>
                    <span className="text-foreground">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-charcoal">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-cream mb-6">
            Ready to Plan Your {event.title}?
          </h2>
          <p className="text-cream/70 mb-10 max-w-xl mx-auto">
            Let's discuss your vision and create something extraordinary together.
          </p>
          <Button variant="hero" size="xl" asChild>
            <Link to="/contact">
              Start Planning
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default EventPage;
