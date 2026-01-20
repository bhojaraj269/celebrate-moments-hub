import { useState } from "react";
import { cn } from "@/lib/utils";
import heroWedding from "@/assets/hero-wedding.jpg";
import galleryBirthday from "@/assets/gallery-birthday.jpg";
import galleryBabyShower from "@/assets/gallery-baby-shower.jpg";
import galleryProposal from "@/assets/gallery-proposal.jpg";
import galleryDestination from "@/assets/gallery-destination-wedding.jpg";
import galleryHousewarming from "@/assets/gallery-housewarming.jpg";
import galleryAnniversary from "@/assets/gallery-anniversary.jpg";
import galleryGenderReveal from "@/assets/gallery-gender-reveal.jpg";

const categories = [
  "All",
  "Weddings",
  "Birthdays",
  "Baby Showers",
  "Proposals",
  "House Warming",
  "Anniversaries",
];

const galleryImages = [
  { src: heroWedding, category: "Weddings", title: "Grand Ballroom Wedding" },
  { src: galleryBirthday, category: "Birthdays", title: "Elegant Birthday Celebration" },
  { src: galleryBabyShower, category: "Baby Showers", title: "Sweet Baby Shower" },
  { src: galleryProposal, category: "Proposals", title: "Romantic Rooftop Proposal" },
  { src: galleryDestination, category: "Weddings", title: "Beach Destination Wedding" },
  { src: galleryHousewarming, category: "House Warming", title: "Modern Housewarming Party" },
  { src: galleryAnniversary, category: "Anniversaries", title: "Golden Anniversary Dinner" },
  { src: galleryGenderReveal, category: "Baby Showers", title: "Gender Reveal Celebration" },
];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredImages = activeCategory === "All"
    ? galleryImages
    : galleryImages.filter((img) => img.category === activeCategory);

  return (
    <div className="bg-background">
      {/* Hero */}
      <section className="py-20 md:py-28 bg-cream-dark">
        <div className="container mx-auto px-4 text-center">
          <span className="text-gold font-medium tracking-widest uppercase text-sm">
            Our Portfolio
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mt-4 mb-6">
            Gallery of <span className="text-gradient-gold">Dreams</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore our collection of beautifully crafted events and celebrations. 
            Each image tells a story of love, joy, and unforgettable moments.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 border-b border-border sticky top-20 bg-background/95 backdrop-blur-md z-40">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300",
                  activeCategory === category
                    ? "bg-primary text-primary-foreground shadow-gold"
                    : "bg-muted text-muted-foreground hover:bg-secondary hover:text-secondary-foreground"
                )}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image, index) => (
              <div
                key={index}
                className={cn(
                  "group relative overflow-hidden rounded-2xl image-zoom cursor-pointer",
                  index === 0 && "md:col-span-2 md:row-span-2"
                )}
              >
                <div className={cn(
                  "aspect-square",
                  index === 0 && "md:aspect-auto md:h-full"
                )}>
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-gold text-sm font-medium uppercase tracking-wider">
                    {image.category}
                  </span>
                  <h3 className="text-xl font-serif font-semibold text-cream mt-1">
                    {image.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
