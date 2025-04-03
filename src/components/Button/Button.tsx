import './ButtonStyles.css';

interface ButtonProps {
  isSelected: boolean;
}

const Button = ({ isSelected }: ButtonProps) => {
  return (
    <button className={`select-skip-btn ${isSelected ? 'selected' : ''}`}>{isSelected ? 'Selected' : 'Select Skip'}</button>
  )
}

export default Button;