import BotonInicioStyle from './BotonInicio.styles';

const BotonInicio = (props) => {
    return (
        <BotonInicioStyle onClick={props.onClick}>{props.textBtnInicio}</BotonInicioStyle>
    );
};

export default BotonInicio;
