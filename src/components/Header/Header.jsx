import Logo from "../../assets/logo.svg";
import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <a href="/" className="header-link">
          <img src={Logo} alt="Logo" className="header-logo" />
          <span className="header-title">Chef Claude</span>
        </a>
      </div>
    </header>
  );
}
