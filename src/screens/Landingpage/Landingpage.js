import React, { useEffect, useState } from 'react'
import "./Landingpage1.css"
import image from "./MyImage.jpg"
import axios from 'axios'
import Loading from '../../components/Loading'
import ErrorMessage from '../../components/ErrorMessage'


export default function Landingpage() {
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("");
	const [error, setError] = useState(false)
	const [loading, setLoading] = useState(false)

	const [registeremail, setRegisterEmail] = useState("")
	const [name, setName] = useState(" ");
	const [regpassword, setRegPassword] = useState(" ");
	const [registercPass, setRegistercPass] = useState("")
	const [Regerror, setRegError] = useState(false)
	const [Message, setMessage] = useState(null)
	const [pic, setPic] = useState("mypiv")
	const [Regloading, setRegLoading] = useState(false)


	// useEffect(()=>{
	// 	const userInfo = localStorage.getItem("userInfo");

	// 	if(userInfo){
	// 		history.push("/mynotes")
	// 	}
	// },[history])

	const submitHandler = async (e) => {
		e.preventDefault()
		try {
			const config = {
				headers: {
					"Content-type": "application/json"
				}
			}

			setLoading(true)
			const { data } = await axios.post(
				"/api/users/login",
				{
					email,
					password,
				},
				config
			);

			// console.log(data)
			localStorage.setItem('userInfo', JSON.stringify(data));
			setLoading(false)

		}
		catch (error) {
			setError(error.response.data.message)
			// console.log(error)
			// error = true;
			

		}
	};


	const submitRegisterHandler = async (e) => {
		e.preventDefault()
		if (password !== registercPass) {
			setMessage('Password do not match')
		}
		else {
			setMessage(null);
			try {
				const config = {
					headers: {
						"Content-type": "application/json",
					}
				}
				console.log(name,pic,registeremail,regpassword)
				setRegLoading(true)
				const { data } = await axios.post(
					"/api/users",
					{
						name,
						email,
						password,
						pic
					},
					config
				);

				console.log(data)
				// localStorage.setItem('userInfo', JSON.stringify(data));
				setRegLoading(false)
			}
			catch (error) {
				console.log(error.response.data);
				// setRegError(Regerror.response.data.message);
				
			}

		}
	};

	return (
		<div>

			<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			<div className="container">
				<input type="checkbox" id="flip" />
				<div className="cover">
					<div className="front">


						<div className="text">
							<img src={image} alt="" />
							<span className="text-1">Every new friend is a new adventure</span>
							<span className="text-2">Let's get connected</span>
						</div>
					</div>
					<div className="back">

						<div className="text">
							<span className="text-1">Complete miles of journey  with one step</span>
							<span className="text-2">Let's get started</span>
						</div>
					</div>
				</div>
				<div className="forms">
					<div className="form-content">
						<div className="login-form">
							<div className="title">Login</div>
							{error && <ErrorMessage variant='danger'>{error}</ErrorMessage>}
							{loading && <Loading />}
							<form action='/login' onSubmit={submitHandler}>
								<div className="input-boxes">
									<div className="input-box">
										<i className="fas fa-envelope"></i>
										<input type="text" value={email} placeholder="Enter your email" required
											onChange={(e) => setEmail(e.target.value)} />
									</div>
									<div className="input-box">
										<i className="fas fa-lock"></i>
										<input type="password" value={password} placeholder="Enter your password" required
											onChange={(e) => setPassword(e.target.value)} />
									</div>
									<div className="text"><a href="/">Forgot password?</a></div>
									<div className="button input-box">
										<input type="submit" value="Sumbit" />
									</div>
									<div className="text sign-up-text">Don't have an account? <label for="flip">Sigup now</label></div>
								</div>
							</form>
						</div>
						<div className="signup-form">
							<div className="title">Signup</div>
							{Message && <ErrorMessage variant='danger'>{Message}</ErrorMessage>}
							{Regerror && <ErrorMessage variant='danger'>{Regerror}</ErrorMessage>}
							{Regloading && <Loading />}
							<form action='/register' onSubmit={submitRegisterHandler}>
								<div className="input-boxes">
									<div className="input-box">
										<i className="fas fa-user"></i>
										<input type="text" placeholder="Enter your name" value={name} required 
											onChange={(e) => setName(e.target.value)} />
									</div>
									<div className="input-box">
										<i className="fas fa-envelope"></i>
										<input type="text" value={email} placeholder="Enter your email"  required
											onChange={(e) => setEmail(e.target.value)} />
									</div>
									<div className="input-box">
										<i className="fas fa-lock"></i>
										<input type="password" value={password} placeholder="Enter your Password"  required
											onChange={(e) => setPassword(e.target.value)} />
									</div>
									<div className="input-box">
										<i className="fas fa-lock"></i>
										<input type="password" value={registercPass} placeholder="Confirm Password"  required
											onChange={(e) => setRegistercPass(e.target.value)} />
									</div>
									<div className="button input-box">
										<input type="submit" value="Sumbit" />
									</div>
									<div className="text sign-up-text">Already have an account? <label for="flip">Login now</label></div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>

		</div>
	)
}
