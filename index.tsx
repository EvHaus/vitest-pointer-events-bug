import React from 'react';

const MyComponent = ({onClick}: {onClick: () => void}) => (
	<button onClick={onClick}>
		Click me
	</button>
);

export default MyComponent;
