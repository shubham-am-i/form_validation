import { Para } from './components/Typography'
import { H1 } from './components/Typography'
import Input from './components/Input'
import Button from './components/Button'

import './Form.css'

const Form = () => {
  return (
    <div className='container'>
      <div className='form_Container'>
        <H1>Sign Up</H1>
        <Para>No credit card required</Para>

        <Input />
        <Input placeholder='Company name' />
        <Input placeholder='Password' />
        <input type='checkbox'></input>
        <p>
          I agree to the <span>terms & conditions</span>
        </p>
        <Button>Get Started</Button>
      </div>
    </div>
  )
}

export default Form
