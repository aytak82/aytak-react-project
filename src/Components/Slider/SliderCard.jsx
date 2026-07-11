import "./Slider.css";

export default function ServiceCard({ service }) {
  const Icon = service.icon;

  return (
    <div className="service-card">
      <div className="icon-box" style={{ backgroundColor: service.color }}>
        <Icon />
      </div>

      <h3>{service.title}</h3>

      <p>{service.desc}</p>

      <button>مشاهده بیشتر</button>
    </div>
  );
}
