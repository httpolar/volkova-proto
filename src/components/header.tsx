import { Logo } from "~/components/logo.tsx";
import {Link} from "react-router-dom";

export const Header = () => {
  return (
    <nav className="header d-flex">
      <div className="flex-grow-1 container-md d-flex flex-row align-items-center">
        <div className="nav-logo">
          <Logo />
        </div>
        <div className="mobile-nav">
          <Link to="/">
            <span>Главная</span>
          </Link>
          <Link to="/settings">
            <span>Настройки</span>
          </Link>
          <Link to="/reservations">
            <span>Мои бронирования</span>
          </Link>
          <Link to="/support">
            <span>Поддержка</span>
          </Link>
        </div>
        <div className="flex-grow-1 mobile-hide" />
        <div className="header-buttons">
          <Link className="header-link" to="#">
            Язык
          </Link>
          <Link className="header-link" to="/support">
            Контакты
          </Link>
        </div>
      </div>
    </nav>
  );
};
