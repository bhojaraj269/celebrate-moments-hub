import { useState } from "react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
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

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredImages = activeCategory === "All"
    ? galleryImages
    : galleryImages.filter((img) => img.category === activeCategory);

  return (
    <div className="bg-background overflow-hidden">
      {/* Hero */}
      <section className="py-20 md:py-28 bg-cream-dark">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.span 
              variants={fadeInUp}
              className="text-gold font-medium tracking-widest uppercase text-sm"
            >
              Our Portfolio
            </motion.span>
            <motion.h1 
              variants={fadeInUp}
              className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mt-4 mb-6"
            >
              Gallery of <span className="text-gradient-gold">Dreams</span>
            </motion.h1>
            <motion.p 
              variants={fadeInUp}
              className="text-muted-foreground text-lg max-w-2xl mx-auto"
            >
              Explore our collection of beautifully crafted events and celebrations. 
              Each image tells a story of love, joy, and unforgettable moments.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 border-b border-border sticky top-20 bg-background/95 backdrop-blur-md z-40">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-3"
          >
            {categories.map((category, index) => (
              <motion.button
                key={category}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300",
                  activeCategory === category
                    ? "bg-primary text-primary-foreground shadow-gold"
                    : "bg-muted text-muted-foreground hover:bg-secondary hover:text-secondary-foreground"
                )}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredImages.map((image, index) => (
                <motion.div
                  key={image.title}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className={cn(
                    "group relative overflow-hidden rounded-2xl cursor-pointer",
                    index === 0 && "md:col-span-2 md:row-span-2"
                  )}
                >
                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    className={cn(
                      "aspect-square",
                      index === 0 && "md:aspect-auto md:h-full"
                    )}
                  >
                    <motion.img
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                      src={image.src}
                      alt={image.title}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <motion.div 
                    initial={{ y: "100%" }}
                    whileHover={{ y: 0 }}
                    className="absolute bottom-0 left-0 right-0 p-6"
                  >
                    <span className="text-gold text-sm font-medium uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {image.category}
                    </span>
                    <h3 className="text-xl font-serif font-semibold text-cream mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">
                      {image.title}
                    </h3>
                  </motion.div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
