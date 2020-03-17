import React from 'react';
import './Button.modules.css';

export function Button({ onClick, className = 'regularButton', children, ...rest }) {
	return (
		<button type="button" {...rest}>
			{children}
		</button>
	);
}
