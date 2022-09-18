import { Link } from "react-router-dom";

export default function Menu() {
  const getLinkActive = (evt) => {
    [...evt.currentTarget.children].map(el => el.classList.remove('menu__item-active'))
    evt.target.classList.add('menu__item-active')
  }

  return (
    <nav className="menu" onClick={getLinkActive}>
        <Link className="menu__item menu__item-active" to={'/'}>главная</Link>
      
        <Link className="menu__item" to={'/drift'}>дрифт-такси</Link>
      
        <Link className="menu__item" to={'/timeattack'}>time attack</Link>
      
        <Link className="menu__item" to={'/forza'}>forza karting</Link>
    </nav>
  );
}
