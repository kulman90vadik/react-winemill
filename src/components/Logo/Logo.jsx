import logo from '../../images/logo.svg';
import { Link } from "react-router-dom";

const Logo = () => {
    return (
        <Link to="/" className="logo">
            <img className="logo__image" src={logo} alt="Logo" />
        </Link>
    );
}

export default Logo;