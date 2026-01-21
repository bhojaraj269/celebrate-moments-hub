import { useState } from "react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const categories = [
  "All",
  "Weddings",
  "Birthdays",
  "Baby Showers",
  "Proposals",
  "House Warming",
  "Anniversaries",
];

const galleryItems = [
  { category: "Weddings", title: "Grand Ballroom Wedding" },
  { category: "Birthdays", title: "Elegant Birthday Celebration" },
  { category: "Baby Showers", title: "Sweet Baby Shower" },
  { category: "Proposals", title: "Romantic Rooftop Proposal" },
  { category: "Weddings", title: "Beach Destination Wedding" },
  { category: "House Warming", title: "Modern Housewarming Party" },
  { category: "Anniversaries", title: "Golden Anniversary Dinner" },
  { category: "Baby Showers", title: "Gender Reveal Celebration" },
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

  const filteredItems = activeCategory === "All"
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeCategory);

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
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.title}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className={cn(
                    "group relative overflow-hidden rounded-2xl cursor-pointer bg-muted",
                    index === 0 && "md:col-span-2 md:row-span-2"
                  )}
                >
                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    className={cn(
                      "aspect-square flex items-center justify-center",
                      index === 0 && "md:aspect-auto md:h-full md:min-h-[400px]"
                    )}
                  >
                    <div className="text-center p-6">
                      <span className="text-gold text-sm font-medium uppercase tracking-wider">
                        {item.category}
                      </span>
                      <h3 className="text-xl font-serif font-semibold text-foreground mt-2">
                        {item.title}
                      </h3>
                    </div>
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
