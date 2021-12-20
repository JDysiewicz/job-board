import styled from "@emotion/styled";
import React, { useCallback } from "react";
import { ImCheckmark, ImCross } from "react-icons/im";

type IconSize = "s" | "m" | "l";

interface IconProps {
	type: "check" | "cross";
	size: IconSize;
}

const Icon: React.FC<IconProps> = ({ type, size }) => {
	// switch for all icons; possibly not extensible?
	// useCallback to prevent re-declaration on every render
	const icon = useCallback(() => {
		switch (type) {
			case "check":
				return (
					<ImCheckmark
						style={{
							color: "var(--accent-green-500)",
						}}
					/>
				);
			case "cross":
				return <ImCross style={{ color: "var(--accent-red-700)" }} />;
			default:
				return <></>;
		}
	}, [type]);

	return <Container size={size}>{icon}</Container>;
};

export default Icon;

const Container = styled.div<{ size: IconSize }>`
	font-size: ${(props) => {
		switch (props.size) {
			case "s":
				return "0.5rem";
			case "m":
				return "1rem";
			case "l":
				return "1.5rem";
			default:
				return "1rem";
		}
	}};
`;
