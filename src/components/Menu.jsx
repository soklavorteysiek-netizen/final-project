import { menuItems } from "../data/siteData";

export default function Menu() {
  return (
    <section className="menu-section" id="menu">
      <h2 className="section-title">Our Menu</h2>
      <div className="section-content">
        <ul className="menu-list">
          {menuItems.map((item) => (
            <li className="menu-item" key={item.name}>
              <img src={item.image} alt={item.name} className="menu-image" />
              <div className="menu-details">
                <span className="h3 mb-0">${item.price}</span>
                <h3 className="name">{item.name}</h3>
                <p className="text">{item.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
