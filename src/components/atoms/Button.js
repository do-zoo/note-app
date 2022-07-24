import React from "react";

function Button({ icon, title, className, onClick, disabled }) {
  return (
    <button
      className={`px-4 py-2 rounded flex items-center justify-between gap-1 ${className} ${
        disabled ? "opacity-50" : ""
      }`}
      onClick={onClick}
      disabled={disabled}
    >
      {icon}
      <span>{title}</span>
    </button>
  );
}

export default Button;

export const ButtonIcon = ({ icon, className, onClick, disabled }) => {
  return (
    <button
      className={`h-5 w-5 ${className} ${disabled ? "opacity-50" : ""}`}
      onClick={onClick}
      disabled={disabled}
    >
      {icon}
    </button>
  );
};
