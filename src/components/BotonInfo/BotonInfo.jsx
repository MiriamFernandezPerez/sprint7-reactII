import BotonInfoStyle from './BotonInfo.styles';

const BotonInfo = (props) => {
    return (
        <BotonInfoStyle className={props.className} id={props.id} name={props.name} onClick={props.onClick}></BotonInfoStyle>
    );
};

export default BotonInfo;