import "./styles/Testimonials.css";
import { FaStar, FaQuoteLeft } from "react-icons/fa6";

interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  location: string;
  quote: string;
  rating: number;
  services: string[];
  avatarInitial: string;
  accentColor: string;
}

const testimonialsData: Testimonial[] = [
  {
    id: "testimonial-1",
    name: "Rahul Naik",
    role: "Founder & Managing Director",
    company: "Sunburn Sands Cafe & Lounge",
    location: "Anjuna, Goa",
    quote:
      "Triad Digital completely modernized how we handle table bookings. Pushpak created our website and automated WhatsApp pipeline that confirms reservations 24/7. Our walk-ins and weekend bookings increased by over 70% in 45 days.",
    rating: 5,
    services: ["Website Development", "WhatsApp Automation"],
    avatarInitial: "R",
    accentColor: "#00f2fe",
  },
  {
    id: "testimonial-2",
    name: "Jessica D'Souza",
    role: "Co-Owner",
    company: "Casa Bella Heritage Villas",
    location: "Candolim, Goa",
    quote:
      "Tanay's video edits for our holiday villas were pure magic. Two of our Instagram Reels crossed 200,000 organic views within a week. The pacing, sound design, and drone cuts made our property look ultra-luxurious.",
    rating: 5,
    services: ["Viral Reels Editing", "Brand Video Production"],
    avatarInitial: "J",
    accentColor: "#f368e0",
  },
  {
    id: "testimonial-3",
    name: "Amit Vernekar",
    role: "Founder",
    company: "Goa Artisan Bakery & Roasters",
    location: "Panjim, Goa",
    quote:
      "Devang crafted our entire logo suite, packaging labels, and digital social media ad banners. The branding is clean, memorable, and gets compliments daily from our customers. The direct communication made the process effortless.",
    rating: 5,
    services: ["Logo Design", "Digital Marketing Creatives"],
    avatarInitial: "A",
    accentColor: "#ff9f43",
  },
];

const Testimonials = () => {
  return (
    <div className="testimonials-section section-container" id="testimonials">
      <div className="testimonials-container">
        {/* Header */}
        <div className="testimonials-head">
          <div className="testimonials-badge">CLIENT STORIES</div>
          <h2 className="title testimonials-title">
            CLIENT <span>REVIEWS</span>
          </h2>
          <p className="testimonials-subtitle">
            What Goa business owners say about partnering with Triad Digital to
            scale their brand and customer base online.
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="testimonials-grid">
          {testimonialsData.map((item) => (
            <div
              key={item.id}
              className="testimonial-card"
              style={
                {
                  "--card-accent": item.accentColor,
                } as React.CSSProperties
              }
            >
              <div className="testimonial-quote-icon">
                <FaQuoteLeft />
              </div>

              {/* Star Rating */}
              <div className="testimonial-rating">
                {[...Array(item.rating)].map((_, sIdx) => (
                  <FaStar key={sIdx} className="star-icon" />
                ))}
              </div>

              {/* Quote text */}
              <p className="testimonial-quote">"{item.quote}"</p>

              {/* Services Tags */}
              <div className="testimonial-services">
                {item.services.map((srv, idx) => (
                  <span key={idx} className="testimonial-srv-tag">
                    {srv}
                  </span>
                ))}
              </div>

              {/* Author footer */}
              <div className="testimonial-author-row">
                <div className="testimonial-avatar">
                  {item.avatarInitial}
                </div>
                <div className="testimonial-author-info">
                  <h4 className="testimonial-name">{item.name}</h4>
                  <p className="testimonial-role-company">
                    {item.role}, <strong>{item.company}</strong>
                  </p>
                  <span className="testimonial-location">📍 {item.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
