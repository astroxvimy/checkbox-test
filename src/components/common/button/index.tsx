import './index.css';

interface ButtonProps {
  text?: string;
}

const Button = ({ text }: ButtonProps) => {
  return (
    <button className="common-button" type="button">
      <span className="common-button-text">{text}</span>
    </button>
  );
};

export default Button;
