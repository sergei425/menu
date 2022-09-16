import { NavLink } from "react-router-dom";

export default function Menu() {
  return (
    <nav className="menu">
        <NavLink to={'/'} className={({ isActive }) => "menu__item" + (isActive ? " menu__item-active" : "")}>главная</NavLink>
      
        <NavLink to={'/drift'} className={({ isActive }) => "menu__item" + (isActive ? " menu__item-active" : "")}>дрифт-такси</NavLink>
      
        <NavLink to={'/timeattack'} className={({ isActive }) => "menu__item" + (isActive ? " menu__item-active" : "")}>time attack</NavLink>
      
        <NavLink className={({ isActive }) => "menu__item" + (isActive ? " menu__item-active" : "")} to={'/forza'}>forza karting</NavLink>
    </nav>
  );
}
