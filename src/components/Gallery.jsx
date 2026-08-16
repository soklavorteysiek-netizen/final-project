import { galleryImages } from "../data/siteData";

export default function Gallery() {
  return (
    <section className="gallery-section" id="gallery">
      <h2 className="section-title">Gallery</h2>
      <div className="section-content">
        <ul className="gallery-list">
          {galleryImages.map((image, index) => (
            <li className="gallery-item" key={image}>
              <img src={image} alt={`Gallery ${index + 1}`} className="gallery-image" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
