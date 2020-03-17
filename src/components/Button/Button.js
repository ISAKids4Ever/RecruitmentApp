import React from 'react';
import './Button.modules.css';

export function Button({ className = 'regularButton', children, ...rest }) {
	return (
		<button className={className} type="button" {...rest}>
			{children}
		</button>
	);
}
