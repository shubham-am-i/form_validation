import './styles.css'

export const H1 = (props) => {
  const { children, className } = props
  return <h1 className={`H1Bold ${className}`}>{children}</h1>
}
export const Para = (props) => {
  const { children, className } = props
  return <h1 className={`Para ${className}`}>{children}</h1>
}
export const Text = (props) => {
  const { children, className } = props
  return <h1 className={`Text ${className}`}>{children}</h1>
}
export const Text1 = (props) => {
  const { children, className } = props
  return <h1 className={`Text1 ${className}`}>{children}</h1>
}
export const H6 = (props) => {
  const { children, className } = props
  return <h1 className={`H6 ${className}`}>{children}</h1>
}
export const H7 = (props) => {
  const { children, className } = props
  return <h1 className={`H7 ${className}`}>{children}</h1>
}
