import PropTypes from 'prop-types';
import styles from './Button.module.css';

/**
 * Кнопка. Текст, иконка, вариант оформления и обработчик клика
 * передаются через props.
 */
function Button({ label, onClick, variant = 'primary', icon = null, type = 'button', disabled = false }) {
  const className = `${styles.button} ${styles[variant]}`;

  return (
    <button type={type} className={className} onClick={onClick} disabled={disabled}>
      {icon && <img src={icon} alt="" className={styles.icon} aria-hidden="true" />}
      <span>{label}</span>
    </button>
  );
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  variant: PropTypes.oneOf(['primary', 'secondary']),
  icon: PropTypes.string,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  disabled: PropTypes.bool,
};

export default Button;
