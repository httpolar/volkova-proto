import { Logo } from "~/components/logo.tsx";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className="header d-flex">
      <div className="flex-grow-1 container-md d-flex flex-row align-items-center">
        <Logo />
        <div className="flex-grow-1" />
        <div className="header-buttons">
          <button className="sign-out-btn">Выйти</button>
          <Link className="header-link" to="/language">
            Язык
          </Link>
          <Link className="header-link" to="/contact">
            Контакты
          </Link>
        </div>
      </div>
    </div>
  );
};