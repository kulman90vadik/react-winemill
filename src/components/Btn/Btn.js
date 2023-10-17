import './btn.scss';

const Btn = ({children}) => {
    return ( 
        <button className="btn" type="button">
            {children}
        </button>
    );
}

export default Btn;