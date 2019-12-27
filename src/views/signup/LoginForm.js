import React from 'react';
import useFormInput from './useFormInput';
import validateAuth from './validateAuth';

const initialState = {
	email: '',
	password: ''
};

const LoginForm = () => {
	const { handleSubmit, handleChange, values, handleBlur, errors, isSumbitting } = useFormInput(
		initialState,
		validateAuth
	);

	return (
		<div>
			<div className="login">
				<h2>I already have an account</h2>
				<span>Sign in with your email and password</span>
			</div>
			<form onSubmit={handleSubmit}>
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

export default LoginForm;
