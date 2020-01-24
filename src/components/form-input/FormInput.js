import React from "react";
import "./formInput.scss";

const FormInput = ({ handleInputChange, label, ...otherFormProps }) => {
	return (
		<div className="group">
			<input
				className="form-input"
				onChange={handleInputChange}
				{...otherFormProps}
			/>
			{label ? (
				<label
					className={`${
						otherFormProps.value.length ? "shrink" : ""
					} form-input-label`}>
					{label}
				</label>
			) : null}
		</div>
	);
};

export default FormInput;
