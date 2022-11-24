import React from 'react'

const Checkbox = (props) => {

    return (
      <label>
        <input type="checkbox" className="form-check-input" name={props.name} id={props.id} value={props.value} onChange={props.onChange} checked={props.checked} />
          {props.label}
      </label>
      
    )
  }

export default Checkbox;