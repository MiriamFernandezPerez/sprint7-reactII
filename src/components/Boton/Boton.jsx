import React, { PureComponent } from 'react';
import BotonStyle from './Boton.styles';

const Boton = (props) => {
    return (
        <BotonStyle name={props.name} onClick={props.onClick}>{props.textBtn}</BotonStyle>
    );
};

export default Boton;