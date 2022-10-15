// default import
import { useState } from 'react'

// external import
import { PropTypes } from 'prop-types'

// local import
import './styles.css'
import { email } from 'utils/ImagesPath'

const Input = (props) => {
  const {
    title,
    placeholder,
    defaultText,
    isDisabled,
    isRequired,
    description,
    className,
  } = props
  const [text, setText] = useState(defaultText)

  const disabled = isDisabled === true ? true : false
  // const inputSize = size === 'small' ? 'small_size' : 'large_size'
  const required = isRequired === true ? true : false

  const handleText = (e) => setText(e.target.value)
  return (
    <>
      <label className='labelStyles'>
        {title}

        <section className='section'>
          <img src={email} alt='email' className='email-84' />
          <input
            type={text.length ? 'search' : 'text'}
            value={text}
            placeholder={placeholder}
            disabled={disabled}
            className={`Input ${className}`}
            required={required}
            onChange={handleText}
          />
        </section>
        {description && <p>{description}</p>}
      </label>
    </>
  )
}

Input.propTypes = {
  title: PropTypes.string,
  placeholder: PropTypes.string,
  isDisabled: PropTypes.bool,
  defaultText: PropTypes.string,
  size: PropTypes.string,
  isRequired: PropTypes.bool,
  description: PropTypes.string,
}

Input.defaultProps = {
  title: '',
  placeholder: 'Email address',
  isDisabled: false,
  defaultText: '',
  size: 'large',
  isRequired: true,
  description: '',
}

export default Input
