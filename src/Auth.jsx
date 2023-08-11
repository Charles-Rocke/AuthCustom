import Button from './Button'
/**
 * A option of auth
 * @component
 * @param {string} option - This is the name of an auth option
 * @param {string} onPasskeyClick - This tells if user chose Passkey
 * @return {Button} - An auth option in the form of a button
 */
function Auth ({ option, onClick }) {
  return <Button onClick={onClick}>{option.option}</Button>;
}

export default Auth
