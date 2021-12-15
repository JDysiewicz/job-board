import React, { useState } from "react";

const IndexPage: React.FC = () => {
	const [count, setCount] = useState(0);

	const increment = () => setCount((c) => c + 1);

	return (
		<div>
			<h1>Count: {count}</h1>
			<button onClick={increment}>Increment</button>
		</div>
	);
};

export default IndexPage;
