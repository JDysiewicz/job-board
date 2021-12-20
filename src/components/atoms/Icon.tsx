import styled from "@emotion/styled";
import React, { useMemo } from "react";
import { ImCheckmark, ImCross } from "react-icons/im";

type IconSize = "s" | "m" | "l";

type IconType = "check" | "cross";

interface IconProps {
	type: IconType;
	size: IconSize;
}

const Icon: React.FC<IconProps> = ({ type, size }) => {
	const icon = useMemo(() => {
		switch (type) {
			case "check":
				return (
					<ImCheckmark
						role="img"
						aria-label="green tick"
						style={{
							color: "var(--accent-green-500)",
						}}
					/>
				);
			case "cross":
				return (
					<ImCross
						role="img"
						aria-label="red x"
						style={{ color: "var(--accent-red-700)" }}
					/>
				);

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
