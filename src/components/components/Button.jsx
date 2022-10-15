import './styles.css'
import PropTypes from 'prop-types'

const Button = (props) => {
  const { isDisabled, children, className } = props

  // button handler
  const buttonHandler = (e) => {
    console.log(e.target.value)
  }

  const disabled = isDisabled === true ? true : false
  return (
    <button
      className={`button ${className}`}
      disabled={disabled}
      onClick={buttonHandler}
    >
      <span className='button-text'>{children}</span>
    </button>
  )
}

Button.propTypes = {
  variant: PropTypes.string,
  isDisabled: PropTypes.bool,
  size: PropTypes.string,
  children: PropTypes.node,
}

// defaultProps
Button.defaultProps = {
  variant: 'primary',
  size: 'medium',
  isDisabled: false,
  children: '',
}

export default Button
