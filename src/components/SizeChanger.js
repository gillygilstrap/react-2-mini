import React from 'react';

export default function SizeChanger(props) {
  return (
    <select 
    value={props.fontSize} 
    onChange={event => props.update(event.target.value)}
    disabled={!props.allowEdit}
    className="dropDownContainer">
    
      <option value="12"> 12 </option>
      <option value="13"> 13 </option>
      <option value="14"> 14 </option>
    </select>
  )
}