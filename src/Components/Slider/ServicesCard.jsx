import "./Services.css";
import { Link } from "react-router-dom";
export default function ServiceCard({ service }) {
  const Icon = service.icon;

  return (
    <div className="service-card">
      <div className="icon-box" style={{ backgroundColor: service.color }}>
        <Icon />
      </div>

      <h3>{service.title}</h3>

      <p>{service.desc}</p>

      <Link to={`/services/${service.slug}`} className="service-btn">
        مشاهده بیشتر
      </Link>
    </div>
  );
}
