import { NavLink } from "react-router-dom";
import {
  ContactIcon,
  HelpCircleIcon,
  HomeIcon,
  SettingsIcon,
} from "lucide-react";
import { ComponentPropsWithRef, FC } from "react";

type SidebarProps = ComponentPropsWithRef<"aside">;

export const SideBar: FC<SidebarProps> = ({ className, ...props }) => {
  return (
    <aside className={"sidebar " + className} {...props}>
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
