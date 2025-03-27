import { useEffect, useState } from 'react';
import './index.css';

interface CheckboxProps {
  checked?: boolean;
  onChange?: () => void;
}

const Checkbox = ({ checked = false, onChange }: CheckboxProps) => {
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    setIsChecked(checked);
  }, [checked]);

  const toggleCheckbox = () => {
    if (onChange) {
      onChange();
    } else setIsChecked((prevChecked) => !prevChecked);
  };

  return (
    <div
      className={`common-checkbox ${isChecked ? 'checked' : ''}`}
      tabIndex={0}
      onClick={toggleCheckbox}
    />
  );
};

export default Checkbox;
