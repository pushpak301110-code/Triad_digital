import "./styles/Services.css";
import {
  FaGlobe,
  FaWhatsapp,
  FaClapperboard,
  FaPenNib,
  FaBullhorn,
  FaRocket,
  FaArrowRight,
} from "react-icons/fa6";

interface ServiceCard {
  id: string;
  icon: typeof FaGlobe;
  title: string;
  category: string;
  color: string;
  description: string;
  deliverables: string[];
  popular?: boolean;
}

const serviceCards: ServiceCard[] = [
  {
    id: "web-presence",
    icon: FaGlobe,
    title: "Custom Business Website",
    category: "WEB DEVELOPMENT",
    color: "#00f2fe",
    description:
      "A fast, modern website built to rank locally on Google and convert visitors into paying clients with sleek design and mobile responsiveness.",
    deliverables: [
      "Mobile-responsive custom layout",
      "Fast load speed (90+ PageSpeed score)",
      "Local SEO & Google Maps optimization",
      "Direct WhatsApp click-to-chat integration",
    ],
  },
  {
    id: "wa-bot",
    icon: FaWhatsapp,
    title: "WhatsApp Sales & Booking Bot",
    category: "AUTOMATION",
    color: "#25d366",
    description:
      "Never miss a lead again. Automated 24/7 replies, catalog sharing, appointment booking, and instant inquiry notifications directly on WhatsApp.",
    deliverables: [
      "Automated FAQ & inquiry responses",
      "Menu & catalog browsing workflow",
      "Table or appointment booking funnel",
      "Google Sheets & CRM lead sync",
    ],
  },
  {
    id: "video-reels",
    icon: FaClapperboard,
    title: "Viral Reels & Video Package",
    category: "VIDEO EDITING",
    color: "#f368e0",
    description:
      "High-retention social media video edits designed to capture attention in the first 3 seconds and drive organic reach on Instagram & YouTube.",
    deliverables: [
      "Dynamic hook & retention pacing",
      "Animated captions & motion graphics",
      "Sound design & trending music sync",
      "Formatted for Reels, Shorts & TikTok",
    ],
  },
  {
    id: "brand-identity",
    icon: FaPenNib,
    title: "Logo & Visual Identity Suite",
    category: "BRAND DESIGN",
    color: "#ff9f43",
    description:
      "Stand out in Goa's competitive market with a memorable vector logo, color palette, typography guidelines, and versatile brand assets.",
    deliverables: [
      "Primary & secondary vector logo marks",
      "Complete brand style guidelines",
      "High-res vector formats (SVG, PNG, PDF)",
      "Social media profile & cover branding",
    ],
  },
  {
    id: "digital-marketing",
    icon: FaBullhorn,
    title: "Digital Ads & Social Creatives",
    category: "DIGITAL IMAGES",
    color: "#a55eea",
    description:
      "Eye-catching digital marketing graphics, promotional banners, event flyers, and social media ad creatives that convert impressions into clicks.",
    deliverables: [
      "Meta (Instagram & Facebook) ad creatives",
      "Promotional event posters & flyers",
      "Digital display banners & brochures",
      "Custom product & service mockups",
    ],
  },
  {
    id: "triad-bundle",
    icon: FaRocket,
    title: "The All-in-One Triad Growth Bundle",
    category: "FULL DIGITAL SUITE",
    color: "#ff0844",
    popular: true,
    description:
      "The complete studio powerhouse: your website, automated WhatsApp pipeline, month of viral video edits, and complete visual branding unified together.",
    deliverables: [
      "Full custom business website",
      "Automated WhatsApp customer bot",
      "Batch of edited viral Reels & Shorts",
      "Full logo suite & marketing graphics kit",
    ],
  },
];

const Services = () => {
  return (
    <div className="services-section section-container" id="services">
      <div className="services-container">
        {/* Section Heading */}
        <div className="services-head">
          <div className="services-badge">WHAT WE OFFER</div>
          <h2 className="title services-title">
            OUR <span>SERVICES</span>
          </h2>
          <p className="services-subtitle">
            Tailored digital solutions built to elevate your business in Goa and
            drive real, measurable revenue.
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="services-grid">
          {serviceCards.map((service) => {
            const IconComp = service.icon;

            return (
              <div
                key={service.id}
                className={`service-card ${
                  service.popular ? "service-card-popular" : ""
                }`}
                style={
                  {
                    "--srv-color": service.color,
                  } as React.CSSProperties
                }
              >
                {service.popular && (
                  <div className="service-popular-badge">⭐ MOST POPULAR</div>
                )}

                <div className="service-card-top">
                  <div className="service-icon-wrap">
                    <IconComp />
                  </div>
                  <span className="service-category">{service.category}</span>
                </div>

                <h3 className="service-card-title">{service.title}</h3>
                <p className="service-card-desc">{service.description}</p>

              <div className="service-deliverables">
<h5>What's Included:</h5>
<ul>
{service.deliverables.map((item, idx) => (
<li key={idx}>
<span className="service-check">✓</span>
<span>{item}</span>
</li>
))}
</ul>
</div>

<div className="service-card-footer">
<a
href={`https://wa.me/YOURNUMBER?text=${encodeURIComponent(
`Hi Triad Digital! I'm interested in your ${service.title} service.`
)}`}
target="_blank"
rel="noreferrer"
className="service-inquire-btn"
>
<span>Inquire on WhatsApp</span>
<FaArrowRight className="service-btn-arrow" />
</a>
</div>
</div>
);
})}
</div>
</div>
</div>
);
};
export default Services;

