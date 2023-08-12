import AuthList from './AuthList'
import Button from  "./Button"
/**
 * Users card frontend
 * @component
 * @param {boolean} passkeyActive - This shows if user selected Passkey
 * @return {jsx} - Users card layout
 */
function Card ({ passkeyActive, googleActive }) {
  console.log(passkeyActive)
  return (
      // Default Layout
      <div className="card" style={{ width: '18rem' }}>
        <div className="card-body">
          <h5 className="card-title">Signup/Login</h5>
          {/* Email Section */}
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
            />
          </div>
          {/* Password Section */}
          <label htmlFor="inputPassword5" className="form-label">
            Password
          </label>
          <input
            type="password"
            id="inputPassword5"
            className="form-control"
            aria-describedby="passwordHelpBlock"
          />
          {/* This displays Users card based off users choices */}
          {(passkeyActive) ? <button className="m-2">Login with Passkey</button> : ''}
					<br/>
					{(googleActive) ? <button className="m-2">Login with Google</button> : ''}
					
        </div>
      </div>
  )
}

export default Card
