import Auth from './Auth'
/**
 * The list of auth options
 * @component
 * @param {string} option - This is the name of an auth option
 * @param {string} onPasskeyClick - This tells if user chose Passkey
 * @return {ul} - This will list the auth options
 */
function AuthList ({ authObject, onPasskeyClick, onGoogleClick }) {
  return (
      <ul>
        {authObject.map((auth) => (
          <Auth option={auth} key={auth.id}/>
        ))}
      </ul>
  )
}

export default AuthList
