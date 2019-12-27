import React from 'react';
import useFormInput from './useFormInput';
import validateAuth from './validateAuth';
import axios from 'axios';

const initialState = {
	firstName: '',
	lastName: '',
	email: '',
	password: ''
};

const RegisterForm = () => {
	const { handleSubmit, handleChange, values, handleBlur, errors, isSumbitting } = useFormInput(
		initialState,
		validateAuth
	);

	return (
		<div>
			<div className="login">
				<h2>I don't have an account</h2>
				<span>Sign up with your email and password</span>
			</div>
			<form
				onSubmit={(e) => {
					handleSubmit(e);
					axios
						.post('https://houzzly.herokuapp.com/api/register', {
							firstName: values.firstName,
							lastName: values.lastName,
							email: values.email,
							password: values.password
						})
						.then(
							(response) => {
								console.log(response);
							},
							(error) => {
								console.log(error);
							}
						);
				}}
			>
				<input
					name="firstName"
					type="text"
					placeholder="First Name"
					value={values.firstName}
					required
					onChange={handleChange}
				/>
				<input
					name="lastName"
					type="text"
					placeholder="Last Name"
					value={values.lastName}
					required
					onChange={handleChange}
				/>
				<input
					name="email"
					type="text"
					placeholder="Email"
					value={values.email}
					required
					onChange={handleChange}
					onBlur={handleBlur}
				/>
				{errors.email && <p className="error-text">{errors.email}</p>}
				<input
					name="password"
					type="password"
					value={values.password}
					placeholder="Password"
					required
					onChange={handleChange}
					onBlur={handleBlur}
				/>
				{errors.password && <p className="error-text">{errors.password}</p>}
				<input disabled={isSumbitting} type="submit" />
			</form>
		</div>
	);
};

export default RegisterForm;
