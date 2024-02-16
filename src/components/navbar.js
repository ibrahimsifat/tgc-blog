import config from "@config/index";

export default function Navbar(props) {
  const menu = config.menu;
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        {menu.map((item) => (
          <li className="nav-item" key={item.label}>
            <a href={item.href} className="nav-link">
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
