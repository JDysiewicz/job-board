import React from "react";
import { Container, StyledHeader } from "./style";

const InternalServerErrorPage = () => {
	return (
		<Container>
			<StyledHeader>500 - Internal Server Error</StyledHeader>
			<h2>Oh noes! The job API seems to be down, please try again later</h2>
		</Container>
	);
};

export default InternalServerErrorPage;
