import React from 'react';

export default function FamilyChanger(props) {
  return (
    <select value={props.fontFamily} 
    onChange={props.update} 
    disabled={!props.allowEdit}
    className="dropDownContainer">
      <option value="monospace"> Monospace </option>
      <option value="arial"> Arial </option>
      <option value="courier"> Courier </option>
    </select>
  )
}