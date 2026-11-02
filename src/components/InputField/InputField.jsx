import { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './InputField.module.css';

/**
 * Поле ввода. Своё значение хранит в локальном состоянии (useState)
 * и сообщает о каждом изменении родителю через onValueChange.
 */
function InputField({ id, label, placeholder = '', type = 'text', maxLength = 200, onValueChange }) {
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    const newValue = event.target.value;
    setValue(newValue);
    if (onValueChange) {
      onValueChange(newValue);
    }
  };

  return (
    <div className={styles.field}>
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
      <input
        id={id}
        type={type}
        className={styles.input}
        value={value}
        placeholder={placeholder}
        maxLength={maxLength}
        onChange={handleChange}
      />
      <span className={styles.counter}>
        {value.length} / {maxLength}
      </span>
    </div>
  );
}

InputField.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.oneOf(['text', 'email', 'tel']),
  maxLength: PropTypes.number,
  onValueChange: PropTypes.func,
};

export default InputField;
