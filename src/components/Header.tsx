import { Link, NavLink } from "react-router";
import { ModeToggle } from "./theme/mode-toggle";

const links = [
  { to: "/works", label: "Works" },
  { to: "/about", label: "About" },
  { to: "/contacts", label: "Contacts" },
];

export default function Header() {
  return (
    <header className="flex items-center border-b py-4">
      <div className="container flex items-center justify-between">
        <div className="flex-1">
          <Link to="/">MyApp</Link>
        </div>
        <nav className="">
          <ul className="flex items-center space-x-6">
            {links.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex flex-1 justify-end">
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}
