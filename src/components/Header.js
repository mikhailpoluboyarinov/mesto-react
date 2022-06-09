import logoMesto from "../images/logo-mesto.svg";

export default function Header() {
    return (
        <header className="header">
            <img className="header__logo" src={logoMesto} alt="Логотип" />
        </header>
    )
}



