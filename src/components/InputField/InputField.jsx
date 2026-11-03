import { useState } from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon/Icon';
import styles from './InputField.module.css';

/**
 * Поле ввода (State: Default / Focused / Error).
 * Своё значение хранит в локальном состоянии (useState)
 * и сообщает о каждом изменении родителю через onValueChange.
 */
function InputField({ id, label, placeholder = '', type = 'text', icon = null, helperText = '', error = '', onValueChange }) {
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    const newValue = event.target.value;
    setValue(newValue);
    if (onValueChange) {
      onValueChange(newValue);
    }
  };

  const hintId = `${id}-hint`;
  const hint = error || helperText;

  return (
    <div className={styles.field}>
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
      <div className={error ? `${styles.control} ${styles.error}` : styles.control}>
        {icon && <Icon src={icon} />}
        <input
          id={id}
          type={type}
          className={styles.input}
          value={value}
          placeholder={placeholder}
          onChange={handleChange}
          aria-invalid={Boolean(error)}
          aria-describedby={hint ? hintId : undefined}
        />
      </div>
      {hint && (
        <span id={hintId} className={error ? `${styles.hint} ${styles.hintError}` : styles.hint}>
          {hint}
        </span>
      )}
    </div>
  );
}

InputField.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.oneOf(['text', 'email', 'tel']),
  icon: PropTypes.string,
  helperText: PropTypes.string,
  error: PropTypes.string,
  onValueChange: PropTypes.func,
};

export default InputField;
