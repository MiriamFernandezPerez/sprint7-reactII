import BotonInicioStyle from '../BotonInicio/BotonInicio.styles'

const BotonOrdenar = (props) => {
    return (
        <BotonInicioStyle onClick={props.onClick} name={props.name}>{props.textBtnInicio}</BotonInicioStyle>
    );
};

export default BotonOrdenar;
