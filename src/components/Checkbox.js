import React from 'react'

const Checkbox = (props) => {

    return (
      <label>
        <input type="checkbox" className="form-check-input" name={props.name} id={props.id} value={props.value} onChange={props.onChange} />
          {props.label}
      </label>
      
    )
  }

export default Checkbox;