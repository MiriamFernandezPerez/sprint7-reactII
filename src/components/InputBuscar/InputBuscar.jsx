import InputBuscarStyle from "./InputBuscar.styles"; 

const InputBuscar = (props) => {

    return (
        <label className="input-group-prepend my-3 w-100 fs-5">Búsqueda por nombre

            <InputBuscarStyle type="text" className="form-control" name={props.name} id={props.id} onChange={props.onChange}>
            </InputBuscarStyle>
        </label>
    )
  }

export default InputBuscar;
