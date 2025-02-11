import { useState } from "react";
import { motion } from "framer-motion";
import {
  ChevronDown,
  Mail,
  MapPin,
  Phone,
  Settings,
  Wrench,
  Users,
  Facebook,
  Instagram,
  Menu,
  X,
  Moon,
  Sun,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Index = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
  };

  const handleContact = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message envoyé",
      description: "Nous vous contacterons dans les plus brefs délais.",
    });
    setEmail("");
    setMessage("");
  };

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const menuItems = [
    { label: "Accueil", href: "#" },
    { label: "Services", href: "#services" },
    { label: "Produits", href: "#produits" },
    { label: "Contact", href: "#contact" },
  ];

  const sliderImages = [
    {
      url: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
      title: "Solutions Hydrauliques",
      description: "Excellence et innovation dans chaque projet",
    },
    {
      url: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
      title: "Expertise Technique",
      description: "Une équipe qualifiée à votre service",
    },
    {
      url: "https://images.unsplash.com/photo-1581092160562-40aa08e78837",
      title: "Maintenance Professionnelle",
      description: "Entretien et réparation de qualité",
    },
  ];

  return (
    <div className={`min-h-screen ${isDarkMode ? "dark" : ""}`}>
      {/* Navigation */}
      <nav className="fixed w-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-md z-50 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <a href="#" className="text-2xl font-bold text-ebh-800 dark:text-white">
              EBH Hydraulique
            </a>

            {/* Dark Mode Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleDarkMode}
              className="mr-4"
            >
              {isDarkMode ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-ebh-600 dark:text-gray-300 hover:text-ebh-accent transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-ebh-800 dark:text-white" />
              ) : (
                <Menu className="w-6 h-6 text-ebh-800 dark:text-white" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4">
              <div className="flex flex-col space-y-4">
                {menuItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="text-ebh-600 dark:text-gray-300 hover:text-ebh-accent transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section with Carousel */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-b from-ebh-800 to-ebh-900 dark:from-gray-900 dark:to-black overflow-hidden pt-16">
        <div className="container mx-auto px-4 z-10">
          <Carousel className="w-full max-w-4xl mx-auto">
            <CarouselContent>
              {sliderImages.map((slide, index) => (
                <CarouselItem key={index}>
                  <div className="relative h-[60vh] w-full rounded-lg overflow-hidden">
                    <div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{ backgroundImage: `url(${slide.url})` }}
                    />
                    <div className="absolute inset-0 bg-black/50" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6">
                      <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl font-bold mb-4"
                      >
                        {slide.title}
                      </motion.h2>
                      <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-xl"
                      >
                        {slide.description}
                      </motion.p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
        <div className="absolute bottom-8 w-full text-center">
          <ChevronDown className="w-8 h-8 text-white animate-bounce mx-auto" />
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-ebh-50">
        <div className="container mx-auto px-4">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            variants={fadeInUpVariants}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-ebh-800 text-center mb-16"
          >
            Nos Services
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Wrench className="w-8 h-8 text-ebh-accent" />,
                title: "Réparation & Maintenance",
                description:
                  "Diagnostic précis et interventions rapides pour minimiser vos arrêts de production.",
                image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
                alt: "Technicien réparant un système hydraulique"
              },
              {
                icon: <Settings className="w-8 h-8 text-ebh-accent" />,
                title: "Conception & Fabrication",
                description:
                  "Systèmes hydrauliques sur mesure adaptés à vos besoins spécifiques.",
                image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
                alt: "Plan technique et atelier hydraulique"
              },
              {
                icon: <Wrench className="w-8 h-8 text-ebh-accent" />,
                title: "Vente de Composants",
                description:
                  "Large gamme de pompes, vérins, flexibles et raccords hydrauliques de haute qualité.",
                image: "https://images.unsplash.com/photo-1581092160607-f6aa8a455695",
                alt: "Composants hydrauliques"
              },
              {
                icon: <Users className="w-8 h-8 text-ebh-accent" />,
                title: "Expertise & Conseil",
                description:
                  "Audits techniques et recommandations pour améliorer la performance de vos installations.",
                image: "https://images.unsplash.com/photo-1581092161520-4ab54d3f06d1",
                alt: "Ingénieur analysant un schéma hydraulique"
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                variants={fadeInUpVariants}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-6 h-full border-2 hover:border-ebh-accent transition-colors duration-300 overflow-hidden">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="relative w-full h-48 rounded-lg overflow-hidden mb-4">
                      <img
                        src={service.image}
                        alt={service.alt}
                        className="object-cover w-full h-full hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    {service.icon}
                    <h3 className="text-xl font-semibold text-ebh-800">
                      {service.title}
                    </h3>
                    <p className="text-ebh-600">{service.description}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="produits" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            variants={fadeInUpVariants}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-ebh-800 text-center mb-16"
          >
            Nos Produits
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Vérins Hydrauliques",
                description:
                  "Composants robustes pour tous types d'équipements.",
                image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334",
                alt: "Vérin hydraulique industriel en fonctionnement"
              },
              {
                title: "Pompes Hydrauliques",
                description: "Transmission de puissance efficace et fiable.",
                image: "https://images.unsplash.com/photo-1581092335397-9583eb92d232",
                alt: "Pompe hydraulique installée sur une machine"
              },
              {
                title: "Flexibles et Raccords",
                description: "Large gamme de flexibles et raccords haute pression.",
                image: "https://images.unsplash.com/photo-1581092160607-f6aa8a455695",
                alt: "Ensemble de flexibles et raccords hydrauliques"
              },
            ].map((product, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                variants={fadeInUpVariants}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-6 h-full border-2 hover:border-ebh-accent transition-colors duration-300 overflow-hidden">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="relative w-full h-48 rounded-lg overflow-hidden mb-4">
                      <img
                        src={product.image}
                        alt={product.alt}
                        className="object-cover w-full h-full hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <h3 className="text-xl font-semibold text-ebh-800">
                      {product.title}
                    </h3>
                    <p className="text-ebh-600">{product.description}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            variants={fadeInUpVariants}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-ebh-800 text-center mb-16"
          >
            Contactez-nous
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={fadeInUpVariants}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-center space-x-4">
                <Phone className="w-6 h-6 text-ebh-accent" />
                <span className="text-ebh-600">+33 1 23 45 67 89</span>
              </div>
              <div className="flex items-center space-x-4">
                <Mail className="w-6 h-6 text-ebh-accent" />
                <span className="text-ebh-600">contact@ebh-hydraulique.fr</span>
              </div>
              <div className="flex items-center space-x-4">
                <MapPin className="w-6 h-6 text-ebh-accent" />
                <span className="text-ebh-600">
                  123 Rue de l'Industrie, 75001 Paris
                </span>
              </div>
            </motion.div>
            <motion.form
              initial="hidden"
              whileInView="visible"
              variants={fadeInUpVariants}
              viewport={{ once: true }}
              onSubmit={handleContact}
              className="space-y-6"
            >
              <Input
                type="email"
                placeholder="Votre email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="border-2 focus:border-ebh-accent"
              />
              <Textarea
                placeholder="Votre message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                className="border-2 focus:border-ebh-accent h-32"
              />
              <Button
                type="submit"
                className="w-full bg-ebh-accent hover:bg-ebh-accent/90"
              >
                Envoyer
              </Button>
            </motion.form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-ebh-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">EBH Hydraulique</h3>
              <p className="text-ebh-100">
                Solutions hydrauliques professionnelles pour tous vos besoins.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Liens Rapides</h3>
              <ul className="space-y-2">
                {menuItems.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="text-ebh-100 hover:text-ebh-accent transition-colors"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Suivez-nous</h3>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-ebh-100 hover:text-ebh-accent transition-colors"
                >
                  <Facebook className="w-6 h-6" />
                </a>
                <a
                  href="#"
                  className="text-ebh-100 hover:text-ebh-accent transition-colors"
                >
                  <Instagram className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-ebh-800 text-center text-ebh-100">
            <p>© {new Date().getFullYear()} EBH Hydraulique. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
