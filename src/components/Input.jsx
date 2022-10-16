// default import

// external import
import { PropTypes } from 'prop-types'

// local import
import './Styles.css'

const Input = (props) => {
  const { title, type, placeholder, isDisabled, isRequired, className } = props

  const disabled = isDisabled === true ? true : false
  const required = isRequired === true ? true : false

  return (
    <>
      <label className='label'>
        {title}
        <input
          type={type}
          placeholder={placeholder}
          disabled={disabled}
          className={`Input ${className}`}
          required={required}
        />
      </label>
    </>
  )
}

Input.propTypes = {
  title: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  isDisabled: PropTypes.bool,
  defaultText: PropTypes.string,
  isRequired: PropTypes.bool,
}

Input.defaultProps = {
  title: 'Email',
  type: 'text',
  placeholder: 'Email address',
  isDisabled: false,
  defaultText: '',
  isRequired: true,
}

export default Input
