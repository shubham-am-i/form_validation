// external import
import { useFormik } from 'formik'

import { Para } from './components/Typography'
import { H1 } from './components/Typography'
import Button from './components/Button'

import './Signup.css'
import { signupSchema } from './schemas/signup'

const onSubmit = async (values, actions) => {
  await new Promise((resolve) => setTimeout(resolve, 1000))
  actions.resetForm()
}
const Signup = () => {
  const { values, errors, touched, isSubmitting, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        email: '',
        username: '',
        password: '',
      },
      validationSchema: signupSchema,
      onSubmit,
    })
  return (
    <div className='container'>
      <div className='form_Container'>
        <H1>Sign Up</H1>
        <Para className='textMargin'>No credit card required</Para>

        <form onSubmit={handleSubmit} autoComplete='on'>
          <label className='label'>
            Email
            <input
              id='email'
              type='email'
              value={values.email}
              placeholder='Email address'
              onChange={handleChange}
              className='Input'
            />
            {errors.email && touched.email && (
              <p className='errorText'>{errors.email}</p>
            )}
          </label>
          <label className='label'>
            Username
            <input
              id='username'
              type='text'
              value={values.username}
              placeholder='username'
              onChange={handleChange}
              className='Input'
            />
            {errors.username && touched.username && (
              <p className='errorText'>{errors.username}</p>
            )}
          </label>
          <label className='label'>
            Password
            <input
              id='password'
              type='text'
              value={values.password}
              placeholder='password'
              onChange={handleChange}
              className='Input'
            />
            {errors.password && touched.password && (
              <p className='errorText'>{errors.password}</p>
            )}
          </label>

          <br />
          <input type='checkbox' required></input>
          <p className='inline'>
            I agree to the <span className='colorLink'>terms & conditions</span>
          </p>
          <button disabled={isSubmitting} className='btn button button-text'>
            Get Started
          </button>
        </form>

        <p>
          Already have an account? <span className='colorLink'>Sign in</span>
        </p>
      </div>
    </div>
  )
}

export default Signup
