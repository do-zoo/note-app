import React from "react";

function Button({ icon, title, className, onClick, disabled, mdHidden }) {
  return (
    <button
      className={`px-4 py-2 rounded flex items-center justify-between gap-1 ${className} ${
        disabled ? "opacity-50" : ""
      }`}
      onClick={onClick}
      disabled={disabled}
    >
      {icon}
      {mdHidden ? (
        <span className="hidden md:block">{title}</span>
      ) : (
        <span>{title}</span>
      )}
    </button>
  );
}

export default Button;

export const ButtonIcon = ({ icon, className, onClick, disabled }) => {
  return (
    <button
      className={` flex items-center justify-between  ${className} ${
        disabled ? "opacity-50" : ""
      }`}
      onClick={onClick}
      disabled={disabled}
    >
      {icon}
    </button>
  );
};
