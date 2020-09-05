import React from "react";

export const TextInput = ({ name, onChange, value, ...props }) => (
  <input
    className="input"
    name={name}
    onChange={onChange}
    type="text"
    value={value}
    {...props}
  />
);
