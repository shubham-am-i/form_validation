import * as yup from 'yup'

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/

export const signupSchema = yup.object().shape({
  email: yup.string().email('Please enter a valid email').required('Required'),
  username: yup.string().required('Required'),
  password: yup
    .string()
    .min(5)
    .matches(passwordRules, {
      message: '1 upper & lowercase char with min length of five is required',
    })
    .required('Required'),
})
