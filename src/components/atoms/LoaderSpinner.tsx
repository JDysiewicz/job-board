import React from "react";
import Loader from "react-loader-spinner";
interface LoaderSpinnerProps {
	size: LoaderSpinnerSize;
}

type LoaderSpinnerSize = "xs" | "s" | "m" | "l" | "xl";

const LoaderSpinner: React.FC<LoaderSpinnerProps> = ({ size }) => {
	const spinnerSize = {
		xs: 20,
		s: 40,
		m: 60,
		l: 80,
		xl: 100,
	};

	return (
		<div role="progressbar">
			<Loader
				type="Circles"
				color="var(--primary-blue-500)"
				height={spinnerSize[size]}
				width={spinnerSize[size]}
			/>
		</div>
	);
};

export default LoaderSpinner;
