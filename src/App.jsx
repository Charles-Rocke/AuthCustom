import { useState, useEffect } from 'react'
import ReactDOMServer from 'react-dom/server'
import * as prettier from 'https://unpkg.com/prettier@3.0.1/standalone.mjs'
import prettierPluginBabel from 'https://unpkg.com/prettier@3.0.1/plugins/babel.mjs'
import prettierPluginEstree from 'https://unpkg.com/prettier@3.0.1/plugins/estree.mjs'

import AuthList from './AuthList'
import Card from './Card'
import CodeBlock from './CodeBlock'
import UserCard from './UserCard'
import PasskeyActive from "./Dirty/PasskeyActive"

/**
 * Set initial auth choices for user
 */
const initalOptions = [
  {
    id: 1,
    option: 'Passkey'
  },
	{
    id: 2,
    option: 'Google'
  },
	
]


/**
 * This manages the entire app state and layout
 * @component
 * @return - The app Layout
 */
function App () {
  const [passkeyActive, setPasskeyActive] = useState(false) // Passkey choice for the user
	const [googleActive, setGoogleActive] = useState(false) // Passkey choice for the user
  const [options, setOptions] = useState(initalOptions) // Default auth choices for the user
  const [domCode, setDomCode] = useState("domCode") // Code for the users AuthCard
	const [isLoading, setIsLoading] = useState(false);
	const [isFinished, setIsFinished] = useState(false);

  /**
   * This handles when the user chooses Passkey
   * @function
   */
  function handlePasskeyClick () {
    setPasskeyActive(!passkeyActive) // The user can select and deselect
  }

	function handleGoogleClick () {
    setGoogleActive(!googleActive) // The user can select and deselect
  }

	function handleSubmit (e) {
    e.preventDefault() // submit for auth component
		console.log("submitted")
		setIsLoading(true)
		
		// Simulate a delay before finishing loading
    setTimeout(() => {
      setIsLoading(false); // Set loading state back to false
			setIsFinished(true);
    }, 2000); // Simulating a 2-second delay
  }

  return (
    <>
			
      <div className="container d-flex">
				{/* If is finished laoding after submit */}
				{!isFinished &&
					<>
						{/* Choose Auth Section */}
		        <div className="container">
		          <h2>Choose your Auth</h2>
							<form onSubmit={handleSubmit}>
			          <div>
									<button type="button" className="m-2" onClick={handlePasskeyClick}>Passkey</button>
								</div>
								<div>
									<button type="button" className="m-2" onClick={handleGoogleClick}>Google</button>
								</div>
								<br />
								<div>
									{(passkeyActive) || (googleActive) ? <div>
										<button className="m-2" >Finish</button>
									</div> : "" }
								</div>
							</form>
						</div>
						{/* Display Card Section */}
						<div className="container">
							<Card passkeyActive={passkeyActive} googleActive={googleActive} />
						</div>
					</>
				}
				{isLoading ? 
					<div className="spinner-border text-primary" role="status">
						<span className="visually-hidden">Loading...</span>
					</div>
				: 
					<>
						{isFinished && 

							<>
								{/* After finished loading content goes here */}
								<CodeBlock domCode={domCode} />
								{/* Display User Card Section */}
				        <div className="container">
									{passkeyActive && !googleActive ? 
										<PasskeyActive /> : ""
									}
				        </div>
							</>
						}
						
					</>
				}
				
      </div>
    </>
  )
}

/**
 * export the App component
 */
export default App
