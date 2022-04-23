import React from 'react';
// import "./button.css";

interface Props{
  className: string;
  text?: React.ReactNode;
}

const Button: React.FC<Props> = ({
    className,
    text,
}) => (
	<button className={className}>{text}</button>
);

export default Button;
