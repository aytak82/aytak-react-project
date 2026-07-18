import { useParams } from "react-router-dom";
import { services } from "../Components/Slider/ServicesData";
import "./ServiceDetails.css";

export default function ServiceDetails() {
  const { slug } = useParams();
  const service = services.find((item) => item.slug === slug);
  const Icon = service.icon;

  return (
    <div className="service-details">
      <div
        className="service-icon"
        style={{
          background: service.color,
        }}
      >
        <Icon />
      </div>
      <h1>{service.title}</h1>
      <p>{service.longDesc}</p>
      <ul>
        {service.features.map((feature) => (
          <li key={feature}>✔ {feature}</li>
        ))}
      </ul>
      <h3>تکنولوژی های استفاده شده</h3>
      <div className="tech-list">
        {service.technologies.map((tech) => (
          <span key={tech}>{tech}</span>
        ))}
      </div>
      <p>
        <strong>قیمت:</strong> {service.price}
      </p>

      <button>درخواست مشاوره</button>
    </div>
  );
}
