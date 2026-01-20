import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import logo from "@/assets/logo.png";

const eventTypes = [
  { name: "Wedding Planning", href: "/events/wedding" },
  { name: "Destination Wedding", href: "/events/destination-wedding" },
  { name: "Birthday Party", href: "/events/birthday" },
  { name: "Theme Birthday Party", href: "/events/theme-birthday" },
  { name: "Engagement / Ring Ceremony", href: "/events/engagement" },
  { name: "Anniversary Celebration", href: "/events/anniversary" },
  { name: "Baby Shower", href: "/events/baby-shower" },
  { name: "Gender Reveal Party", href: "/events/gender-reveal" },
  { name: "House Warming", href: "/events/house-warming" },
  { name: "Proposal Planning", href: "/events/proposal" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [eventsOpen, setEventsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;
  const isEventsActive = location.pathname.startsWith("/events");

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img src={logo} alt="Manu Media Events" className="h-14 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link
              to="/"
              className={cn(
                "elegant-underline text-sm font-medium transition-colors",
                isActive("/") ? "text-primary" : "text-muted-foreground hover:text-foreground"
              )}
            >
              Home
            </Link>

            {/* Events Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setEventsOpen(true)}
              onMouseLeave={() => setEventsOpen(false)}
            >
              <button
                className={cn(
                  "flex items-center gap-1 text-sm font-medium transition-colors",
                  isEventsActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
                )}
              >
                Events
                <ChevronDown
                  className={cn(
                    "h-4 w-4 transition-transform duration-200",
                    eventsOpen && "rotate-180"
                  )}
                />
              </button>

              {/* Dropdown Menu */}
              <div
                className={cn(
                  "absolute top-full left-1/2 -translate-x-1/2 pt-4 transition-all duration-200",
                  eventsOpen ? "opacity-100 visible" : "opacity-0 invisible"
                )}
              >
                <div className="bg-card rounded-xl shadow-elevated border border-border p-2 min-w-[240px]">
                  {eventTypes.map((event) => (
                    <Link
                      key={event.href}
                      to={event.href}
                      className={cn(
                        "block px-4 py-2.5 text-sm rounded-lg transition-colors",
                        location.pathname === event.href
                          ? "bg-primary/10 text-primary"
                          : "text-muted-foreground hover:bg-muted hover:text-foreground"
                      )}
                    >
                      {event.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link
              to="/gallery"
              className={cn(
                "elegant-underline text-sm font-medium transition-colors",
                isActive("/gallery") ? "text-primary" : "text-muted-foreground hover:text-foreground"
              )}
            >
              Gallery
            </Link>

            <Link
              to="/about"
              className={cn(
                "elegant-underline text-sm font-medium transition-colors",
                isActive("/about") ? "text-primary" : "text-muted-foreground hover:text-foreground"
              )}
            >
              About Us
            </Link>

            <Link
              to="/contact"
              className={cn(
                "elegant-underline text-sm font-medium transition-colors",
                isActive("/contact") ? "text-primary" : "text-muted-foreground hover:text-foreground"
              )}
            >
              Contact
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">Book Your Event</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "lg:hidden overflow-hidden transition-all duration-300",
            isOpen ? "max-h-[80vh] pb-6" : "max-h-0"
          )}
        >
          <div className="flex flex-col space-y-4">
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className={cn(
                "text-base font-medium py-2",
                isActive("/") ? "text-primary" : "text-muted-foreground"
              )}
            >
              Home
            </Link>

            <div>
              <button
                onClick={() => setEventsOpen(!eventsOpen)}
                className={cn(
                  "flex items-center gap-1 text-base font-medium py-2 w-full",
                  isEventsActive ? "text-primary" : "text-muted-foreground"
                )}
              >
                Events
                <ChevronDown
                  className={cn(
                    "h-4 w-4 transition-transform duration-200",
                    eventsOpen && "rotate-180"
                  )}
                />
              </button>

              <div
                className={cn(
                  "overflow-hidden transition-all duration-300 pl-4",
                  eventsOpen ? "max-h-[500px] mt-2" : "max-h-0"
                )}
              >
                {eventTypes.map((event) => (
                  <Link
                    key={event.href}
                    to={event.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "block py-2 text-sm",
                      location.pathname === event.href
                        ? "text-primary"
                        : "text-muted-foreground"
                    )}
                  >
                    {event.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              to="/gallery"
              onClick={() => setIsOpen(false)}
              className={cn(
                "text-base font-medium py-2",
                isActive("/gallery") ? "text-primary" : "text-muted-foreground"
              )}
            >
              Gallery
            </Link>

            <Link
              to="/about"
              onClick={() => setIsOpen(false)}
              className={cn(
                "text-base font-medium py-2",
                isActive("/about") ? "text-primary" : "text-muted-foreground"
              )}
            >
              About Us
            </Link>

            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className={cn(
                "text-base font-medium py-2",
                isActive("/contact") ? "text-primary" : "text-muted-foreground"
              )}
            >
              Contact
            </Link>

            <Button variant="hero" size="lg" className="mt-4" asChild>
              <Link to="/contact" onClick={() => setIsOpen(false)}>
                Book Your Event
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
