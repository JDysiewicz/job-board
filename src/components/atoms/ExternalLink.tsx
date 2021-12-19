import styled from "@emotion/styled";
import React from "react";

interface ExternalLinkProps {
	url: string;
	text: string;
}

const StyledLink = styled.a`
	text-decoration: none;
	color: var(--primary-blue-700);
	font-weight: bold;
	:hover {
		text-decoration: underline;
	}
`;

const ExternalLink: React.FC<ExternalLinkProps> = ({ url, text }) => {
	return (
		<StyledLink href={url} target="_blank" rel="noreferrer">
			{text}
		</StyledLink>
	);
};

export default ExternalLink;
