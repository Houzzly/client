import { useState, useEffect } from 'react';

function useFormInput(initialState, validate) {
	const [ values, setValues ] = useState(initialState);
	const [ errors, setErrors ] = useState({});
	const [ isSumbitting, setIsSumbitting ] = useState(false);

	useEffect(
		() => {
			if (isSumbitting) {
				const noErrors = Object.keys(errors).length === 0;
				if (noErrors) {
					console.log('autenthicated', values.email, values.password);
					setIsSumbitting(false);
				}
			} else {
				setIsSumbitting(false);
			}
		},
		[ errors, isSumbitting, values.email, values.password ]
	);

	function handleChange(e) {
		setValues({
			...values,
			[e.target.name]: e.target.value
		});
	}

	function handleBlur() {
		const validationErrors = validate(values);
		setErrors(validationErrors);
	}

	function handleSubmit(e) {
		e.preventDefault();
		const validationErrors = validate(values);
		setErrors(validationErrors);
		setIsSumbitting(true);
	}

	return { handleSubmit, handleChange, values, handleBlur, errors, isSumbitting };
}

export default useFormInput;
