export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="section-content">
        <p className="copyright-text">© 2026 rEZe Coffee</p>
        <div className="social-link-list">
          <a href="#" className="social-link" aria-label="Facebook"><i className="fa-brands fa-facebook" /></a>
          <a href="#" className="social-link" aria-label="Instagram"><i className="fa-brands fa-instagram" /></a>
          <a href="#" className="social-link" aria-label="TikTok"><i className="fa-brands fa-tiktok" /></a>
        </div>
        <p className="policy-text">
          <a href="#" className="policy-link">Privacy policy</a>
          <span className="separator">•</span>
          <a href="#" className="policy-link">Refund policy</a>
        </p>
      </div>
    </footer>
  );
}
