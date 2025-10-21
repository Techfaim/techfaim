import React, { useState, useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

// Icons
const CodeIcon = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="16 18 22 12 16 6"></polyline>
    <polyline points="8 6 2 12 8 18"></polyline>
  </svg>
);

const ChartIcon = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="12" y1="20" x2="12" y2="10"></line>
    <line x1="18" y1="20" x2="18" y2="4"></line>
    <line x1="6" y1="20" x2="6" y2="16"></line>
  </svg>
);

const ServerIcon = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
    <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
    <line x1="6" y1="6" x2="6.01" y2="6"></line>
    <line x1="6" y1="18" x2="6.01" y2="18"></line>
  </svg>
);

const SearchIcon = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="11" cy="11" r="8"></circle>
    <path d="m21 21-4.35-4.35"></path>
  </svg>
);

const ShoppingIcon = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="9" cy="21" r="1"></circle>
    <circle cx="20" cy="21" r="1"></circle>
    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
  </svg>
);

const MobileIcon = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
    <line x1="12" y1="18" x2="12.01" y2="18"></line>
  </svg>
);

const CheckIcon = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
);

const MenuIcon = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

const XIcon = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const StarIcon = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
  </svg>
);

// Lamp Toggle Component
const LampToggle = ({ theme, toggleTheme }) => {
  const [isPulling, setIsPulling] = useState(false);

  const handleClick = () => {
    setIsPulling(true);
    toggleTheme();
    setTimeout(() => setIsPulling(false), 300); // Reset pull animation after 300ms
  };

  return (
    <div className="relative cursor-pointer" onClick={handleClick}>
      {/* Fancy Light Bulb */}
      <div className={`w-8 h-16 relative shadow-xl transition-all duration-300 ${isPulling ? 'transform translate-y-1' : ''}`}>
        {/* Bulb Glass */}
        <div className={`absolute top-0 left-1/2 transform -translate-x-1/2 w-8 h-12 ${theme === 'dark' ? 'bg-gradient-to-b from-blue-100/30 via-transparent to-blue-50/20' : 'bg-gradient-to-b from-blue-200/40 via-transparent to-blue-100/30'} rounded-full border ${theme === 'dark' ? 'border-gray-400/50' : 'border-gray-300/50'} shadow-inner`}></div>
        {/* Filament */}
        <div className={`absolute top-4 left-1/2 transform -translate-x-1/2 w-4 h-4 ${theme === 'dark' ? 'bg-yellow-400' : 'bg-yellow-300'} rounded-full opacity-80 animate-pulse`}></div>
        {/* Inner Filament */}
        <div className={`absolute top-5 left-1/2 transform -translate-x-1/2 w-2 h-2 ${theme === 'dark' ? 'bg-white' : 'bg-gray-100'} rounded-full animate-pulse`}></div>
        {/* Bulb Base */}
        <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4 h-4 ${theme === 'dark' ? 'bg-gradient-to-b from-gray-600 to-gray-800' : 'bg-gradient-to-b from-gray-400 to-gray-600'} rounded-full shadow-md border ${theme === 'dark' ? 'border-gray-500' : 'border-gray-300'}`}></div>
        {/* Glow */}
        {theme === 'dark' && (
          <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-yellow-400 rounded-full opacity-30 animate-pulse blur-lg"></div>
        )}
      </div>
      {/* Fancy Curved Rope */}
      <svg className={`absolute top-full left-1/2 transform -translate-x-1/2 w-4 h-20 transition-all duration-300 ${isPulling ? 'transform translate-y-1' : ''}`} viewBox="0 0 16 80">
        <path d="M8 0 Q6 20 8 40 Q10 60 8 80" stroke={theme === 'dark' ? '#C0C0C0' : '#333333'} strokeWidth="3" fill="none" strokeLinecap="round" />
      </svg>
    </div>
  );
};

// Animated Section Wrapper
const AnimatedSection = ({ children, id }) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" });

  useEffect(() => {
    if (isInView) controls.start("visible");
  }, [isInView, controls]);

  return (
    <motion.section
      id={id}
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 50 }
      }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="py-20 md:py-32 px-6 md:px-12 lg:px-24"
    >
      {children}
    </motion.section>
  );
};

// Header Component
const Header = ({ theme, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = ['Services', 'Process', 'Pricing', 'Portfolio', 'Contact'];

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? (theme === 'dark' ? 'bg-gray-900/95 backdrop-blur-lg border-b border-cyan-500/20' : 'bg-white/95 backdrop-blur-lg border-b border-cyan-500/20') : 'bg-transparent'}`}>
      <nav className="container mx-auto px-6 md:px-12 py-5 flex justify-between items-center">
        <a href="https://www.techfaim.com/" target="_blank" rel="noopener noreferrer">
          <img src="New Logo.png" alt="TechFaim Logo" className="h-40 w-auto" />
        </a>

        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map(link => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={(e) => handleNavClick(e, link.toLowerCase())}
              className={`transition-colors duration-300 text-base font-medium ${theme === 'dark' ? 'text-gray-300 hover:text-cyan-400' : 'text-gray-700 hover:text-cyan-600'}`}
            >
              {link}
            </a>
          ))}
          <LampToggle theme={theme} toggleTheme={toggleTheme} />
        </div>

        <button onClick={() => setIsOpen(!isOpen)} className={`md:hidden ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
          {isOpen ? <XIcon className="h-6 w-6"/> : <MenuIcon className="h-6 w-6" />}
        </button>
      </nav>

      {isOpen && (
        <div className={`md:hidden backdrop-blur-lg border-t border-cyan-500/20 ${theme === 'dark' ? 'bg-gray-900/95' : 'bg-white/95'}`}>
          <div className="flex flex-col items-center space-y-6 py-8">
            {navLinks.map(link => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={(e) => handleNavClick(e, link.toLowerCase())}
                className={`transition-colors duration-300 ${theme === 'dark' ? 'text-gray-300 hover:text-cyan-400' : 'text-gray-700 hover:text-cyan-600'}`}
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

// Hero Section
const Hero = ({ theme }) => {
  return (
    <section className={`relative min-h-screen flex items-center justify-center overflow-hidden transition-colors duration-500 ${theme === 'dark' ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900' : 'bg-gradient-to-br from-gray-50 via-white to-gray-100'}`}>
      <div className={`absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMGZmYzYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAgNHYyaDJ2LTJoLTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] ${theme === 'dark' ? 'opacity-20' : 'opacity-10'}`}></div>

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className={`text-5xl md:text-7xl font-bold mb-6 leading-tight transition-colors duration-500 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            Transform Your Business<br />
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              With Digital Excellence
            </span>
          </h1>
          <p className={`text-xl md:text-2xl mb-8 max-w-3xl mx-auto transition-colors duration-500 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
            We build high-performance websites, data dashboards, and custom web applications that drive real results for small to medium businesses.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a href="https://docs.google.com/forms/d/1-B9uzP31F49KJ__X730H-LxrjpakADUMe87qT2F4oJY/edit?pli=1" target="_blank" rel="noopener noreferrer" className="bg-cyan-500 hover:bg-cyan-400 text-gray-900 px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-cyan-500/50 w-full sm:w-auto inline-block text-center">
              Get Free Consultation
            </a>
            <button className={`border-2 px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 w-full sm:w-auto ${theme === 'dark' ? 'border-cyan-500 text-cyan-400 hover:bg-cyan-500/10' : 'border-cyan-600 text-cyan-600 hover:bg-cyan-500/10'}`}>
              View Our Work
            </button>
          </div>

          <div className={`flex flex-wrap justify-center items-center gap-8 transition-colors duration-500 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
            <div className="flex items-center gap-2">
              <StarIcon className="w-5 h-5 text-yellow-400" />
              <StarIcon className="w-5 h-5 text-yellow-400" />
              <StarIcon className="w-5 h-5 text-yellow-400" />
              <StarIcon className="w-5 h-5 text-yellow-400" />
              <StarIcon className="w-5 h-5 text-yellow-400" />
              <span className="ml-2 text-sm">5.0 Rating</span>
            </div>
            <div className="text-sm">50+ Projects Delivered</div>
            <div className="text-sm">99% Client Satisfaction</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Services Section
const Services = ({ theme }) => {
  const services = [
    {
      icon: CodeIcon,
      title: "Custom Web Development",
      description: "React, WordPress, and custom web applications built for speed, scalability, and conversion.",
      features: ["Mobile-First Design", "Lightning Fast", "SEO Optimized"]
    },
    {
      icon: ChartIcon,
      title: "Data Dashboards & Analytics",
      description: "Transform raw data into actionable insights with custom visualizations and real-time reporting.",
      features: ["Real-Time Data", "Custom Metrics", "Business Intelligence"]
    },
    {
      icon: SearchIcon,
      title: "Local SEO & Marketing",
      description: "Dominate local searches with Google Business Profile optimization and proven SEO strategies.",
      features: ["Google Rankings", "Local Listings", "Review Management"]
    },
    {
      icon: ServerIcon,
      title: "Managed Hosting & Support",
      description: "Rock-solid hosting with 99.9% uptime, daily backups, and ongoing maintenance.",
      features: ["99.9% Uptime", "Daily Backups", "24/7 Support"]
    },
    {
      icon: ShoppingIcon,
      title: "E-Commerce Solutions",
      description: "Full-featured online stores with payment processing, inventory management, and analytics.",
      features: ["Secure Payments", "Inventory Tracking", "Order Management"]
    },
    {
      icon: MobileIcon,
      title: "Web Applications",
      description: "Custom business tools, booking systems, and internal platforms tailored to your workflow.",
      features: ["Custom Features", "API Integration", "Scalable Architecture"]
    }
  ];

  return (
    <AnimatedSection id="services">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 transition-colors duration-500 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>What We Build</h2>
          <p className={`text-xl max-w-3xl mx-auto transition-colors duration-500 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
            Full-stack digital solutions designed to grow your business and maximize ROI
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`backdrop-blur-lg p-8 rounded-xl border transition-all duration-300 group hover:shadow-xl ${theme === 'dark' ? 'bg-gray-800/50 border-cyan-500/20 hover:border-cyan-500/50 hover:shadow-cyan-500/10' : 'bg-white/50 border-cyan-500/30 hover:border-cyan-500/60 hover:shadow-cyan-500/20'}`}
            >
              <div className={`w-14 h-14 rounded-lg flex items-center justify-center mb-6 transition-colors ${theme === 'dark' ? 'bg-cyan-500/10 group-hover:bg-cyan-500/20' : 'bg-cyan-500/20 group-hover:bg-cyan-500/30'}`}>
                <service.icon className="w-7 h-7 text-cyan-400" />
              </div>
              <h3 className={`text-2xl font-bold mb-3 transition-colors duration-500 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>{service.title}</h3>
              <p className={`mb-6 transition-colors duration-500 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, i) => (
                  <li key={i} className={`flex items-center text-sm transition-colors duration-500 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                    <CheckIcon className="w-4 h-4 text-cyan-400 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

// Process Section
const Process = ({ theme }) => {
  const steps = [
    { number: "01", title: "Discovery", description: "We analyze your business, goals, and competition to create a winning strategy." },
    { number: "02", title: "Design", description: "Beautiful, conversion-focused designs that reflect your brand and engage users." },
    { number: "03", title: "Develop", description: "Clean, efficient code built with modern frameworks for speed and scalability." },
    { number: "04", title: "Launch", description: "Thorough testing, training, and a smooth go-live process with ongoing support." }
  ];

  return (
    <AnimatedSection id="process">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 transition-colors duration-500 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>How We Work</h2>
          <p className={`text-xl max-w-3xl mx-auto transition-colors duration-500 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
            A proven process that delivers results on time and on budget
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              <div className="text-6xl font-bold text-cyan-500/20 mb-4">{step.number}</div>
              <h3 className={`text-2xl font-bold mb-3 transition-colors duration-500 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>{step.title}</h3>
              <p className={`transition-colors duration-500 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>{step.description}</p>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 right-0 w-full h-0.5 bg-gradient-to-r from-cyan-500/50 to-transparent transform translate-x-full"></div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

// Pricing Section
const Pricing = ({ theme }) => {
  const plans = [
    {
      name: "Starter",
      price: "299",
      description: "Perfect for small businesses getting started online",
      features: [
        "5-Page Website",
        "Mobile Responsive Design",
        "Basic SEO Setup",
        "Contact Forms",
        "Google Maps Integration",
        "1 Month Support",
        "Hosting: $30/mo"
      ],
      cta: "Get Started",
      popular: false
    },
    {
      name: "Professional",
      price: "$499",
      description: "For businesses ready to dominate their market",
      features: [
        "Custom Website (10+ Pages)",
        "Advanced SEO & Local Rankings",
        "Analytics Dashboard",
        "Online Ordering/Booking",
        "Content Management System",
        "3 Months Priority Support",
        "Hosting: $49/mo"
      ],
      cta: "Most Popular",
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "Full-scale solutions for growing businesses",
      features: [
        "Custom Web Application",
        "Advanced Integrations",
        "Data Visualization Tools",
        "Multi-User System",
        "Ongoing Consulting",
        "White-Glove Support",
        "Hosting: $69.99/mo"
      ],
      cta: "Contact Us",
      popular: false
    }
  ];

  return (
    <AnimatedSection id="pricing">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 transition-colors duration-500 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Transparent Pricing</h2>
          <p className={`text-xl max-w-3xl mx-auto transition-colors duration-500 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
            Simple, honest pricing with no hidden fees. Choose what works for your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative backdrop-blur-lg p-8 rounded-xl border transition-all duration-300 ${
                plan.popular ? 'border-cyan-500 shadow-2xl shadow-cyan-500/20' : (theme === 'dark' ? 'border-cyan-500/20' : 'border-cyan-500/30')
              } hover:border-cyan-500/50`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-cyan-500 text-gray-900 px-4 py-1 rounded-full text-sm font-bold">
                    MOST POPULAR
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className={`text-2xl font-bold mb-2 transition-colors duration-500 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>{plan.name}</h3>
                <div className="text-4xl font-bold text-cyan-400 mb-2">{plan.price}</div>
                <p className={`text-sm transition-colors duration-500 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>{plan.description}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className={`flex items-start transition-colors duration-500 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                    <CheckIcon className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {plan.cta === "Contact Us" ? (
                <a href="https://docs.google.com/forms/d/1yFoNN4D6kN_M5UqiD27W4BDt1-Qx59kenyg6x7ua8FU/edit" target="_blank" rel="noopener noreferrer" className={`w-full py-4 rounded-lg font-bold transition-all duration-300 inline-block text-center ${theme === 'dark' ? 'bg-gray-700 hover:bg-gray-600 text-white' : 'bg-gray-200 hover:bg-gray-300 text-gray-900'}`}>
                  {plan.cta}
                </a>
              ) : (
                <button className={`w-full py-4 rounded-lg font-bold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-cyan-500 hover:bg-cyan-400 text-gray-900'
                    : (theme === 'dark' ? 'bg-gray-700 hover:bg-gray-600 text-white' : 'bg-gray-200 hover:bg-gray-300 text-gray-900')
                }`}>
                  {plan.cta}
                </button>
              )}
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className={`transition-colors duration-500 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
            All projects include: 30-day money-back guarantee • Payment plans available • Free consultation
          </p>
        </div>
      </div>
    </AnimatedSection>
  );
};

// Portfolio Section
const Portfolio = ({ theme }) => {
  const projects = [
    {
      title: "Restaurant Website",
      category: "Web Development",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop",
      stats: "+385% Traffic"
    },
    {
      title: "Analytics Dashboard",
      category: "Data Visualization",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      stats: "Real-Time Insights"
    },
    {
      title: "E-Commerce Store",
      category: "Online Store",
      image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&h=600&fit=crop",
      stats: "+203% Sales"
    }
  ];

  return (
    <AnimatedSection id="portfolio">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 transition-colors duration-500 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Recent Work</h2>
          <p className={`text-xl max-w-3xl mx-auto transition-colors duration-500 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
            Real projects, real results for businesses like yours
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-xl cursor-pointer"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className={`absolute inset-0 bg-gradient-to-t opacity-90 group-hover:opacity-95 transition-opacity duration-300 ${theme === 'dark' ? 'from-gray-900 via-gray-900/80 to-transparent' : 'from-gray-800 via-gray-800/60 to-transparent'}`}></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="text-cyan-400 text-sm font-semibold mb-2">{project.category}</div>
                <h3 className={`text-2xl font-bold mb-2 transition-colors duration-500 ${theme === 'dark' ? 'text-white' : 'text-gray-100'}`}>{project.title}</h3>
                <div className="text-cyan-400 font-bold">{project.stats}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

// Contact Section
const Contact = ({ theme }) => {
  return (
    <AnimatedSection id="contact">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 transition-colors duration-500 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Let's Build Something Great</h2>
          <p className={`text-xl transition-colors duration-500 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
            Ready to transform your business? Get a free consultation and custom proposal.
          </p>
        </div>

        <div className={`backdrop-blur-lg p-8 md:p-12 rounded-xl border transition-colors duration-500 ${theme === 'dark' ? 'bg-gray-800/50 border-cyan-500/20' : 'bg-white/50 border-cyan-500/30'}`}>
          <form action="mailto:infotechfaim@gmail.com" method="post" enctype="text/plain" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Your Name"
                className={`rounded-lg px-6 py-4 focus:outline-none focus:border-cyan-500 transition-colors ${theme === 'dark' ? 'bg-gray-900/50 border border-gray-700 text-white' : 'bg-gray-50 border border-gray-300 text-gray-900'}`}
              />
              <input
                type="email"
                placeholder="Your Email"
                className={`rounded-lg px-6 py-4 focus:outline-none focus:border-cyan-500 transition-colors ${theme === 'dark' ? 'bg-gray-900/50 border border-gray-700 text-white' : 'bg-gray-50 border border-gray-300 text-gray-900'}`}
              />
            </div>
            <input
              type="text"
              placeholder="Phone Number"
              className={`w-full rounded-lg px-6 py-4 focus:outline-none focus:border-cyan-500 transition-colors ${theme === 'dark' ? 'bg-gray-900/50 border border-gray-700 text-white' : 'bg-gray-50 border border-gray-300 text-gray-900'}`}
            />
            <select className={`w-full rounded-lg px-6 py-4 focus:outline-none focus:border-cyan-500 transition-colors ${theme === 'dark' ? 'bg-gray-900/50 border border-gray-700 text-white' : 'bg-gray-50 border border-gray-300 text-gray-900'}`}>
              <option>Select a Service</option>
              <option>Web design</option>
              <option>Web Development</option>
              <option>Website Maintenance</option>
              <option>Data Dashboard</option>
              <option>SEO & Marketing</option>
              <option>E-Commerce</option>
              <option>Other</option>
            </select>
            <textarea
              placeholder="Tell us about your project..."
              rows="5"
              className={`w-full rounded-lg px-6 py-4 focus:outline-none focus:border-cyan-500 transition-colors ${theme === 'dark' ? 'bg-gray-900/50 border border-gray-700 text-white' : 'bg-gray-50 border border-gray-300 text-gray-900'}`}
            ></textarea>
            <button
              type="submit"
              className="w-full bg-cyan-500 hover:bg-cyan-400 text-gray-900 px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300"
            >
              Get Free Consultation
            </button>
          </form>
        </div>

        <div className="mt-12 text-center">
          <p className={`mb-4 transition-colors duration-500 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>Or reach out directly:</p>
          <div className={`flex flex-col md:flex-row justify-center items-center gap-6 transition-colors duration-500 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
            <div>📧 infotechfaim@gmail.com</div>
            <div>📞 (832) 617-6250</div>
            <div>📍 Detroit Metro, Michigan</div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

// Footer
const Footer = ({ theme }) => {
  return (
    <footer className={`border-t py-12 transition-colors duration-500 ${theme === 'dark' ? 'bg-gray-900 border-gray-800' : 'bg-gray-100 border-gray-200'}`}>
      <div className={`container mx-auto px-6 text-center transition-colors duration-500 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
        <p className="mb-4">© 2025 TechFaim. All rights reserved.</p>
      </div>
    </footer>
  );
};

// Main App
export default function App() {
  const [theme, setTheme] = useState('dark');

  return (
    <div className={`min-h-screen transition-colors duration-500 ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      <Header theme={theme} toggleTheme={() => setTheme(theme === 'dark' ? 'light' : 'dark')} />
      <main>
        <Hero theme={theme} />
        <Services theme={theme} />
        <Process theme={theme} />
        <Pricing theme={theme} />
        <Portfolio theme={theme} />
        <Contact theme={theme} />
      </main>
      <Footer theme={theme} />
    </div>
  );
}
