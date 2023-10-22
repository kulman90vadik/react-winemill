import logo from '../../images/logo.svg';

const Logo = () => {
    return (
        <a className="logo" href="#">
            <img className="logo__image" src={logo} alt="Logo" />
        </a>
    );
}

export default Logo;