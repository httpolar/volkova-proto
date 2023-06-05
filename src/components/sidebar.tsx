import { NavLink } from "react-router-dom";
import {
  ContactIcon,
  HelpCircleIcon,
  HomeIcon,
  SettingsIcon,
} from "lucide-react";

export const SideBar = () => {
  return (
    <aside className="sidebar">
      <div className="d-flex flex-column gap-2">
        <NavLink className="sidebar-link" to="/">
          <HomeIcon />
          <span>Главная</span>
        </NavLink>
        <NavLink className="sidebar-link" to="/settings">
          <SettingsIcon />
          <span>Настройки</span>
        </NavLink>
        <NavLink className="sidebar-link" to="/new-object">
          <ContactIcon />
          <span>Разместить объект</span>
        </NavLink>
        <NavLink className="sidebar-link" to="/support">
          <HelpCircleIcon />
          <span>Служба поддержки</span>
        </NavLink>
      </div>
    </aside>
  );
};
