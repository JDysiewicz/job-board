import React from "react";
import { Link } from "react-router-dom";
import { Container, StyledHeader } from "./style";

const NotFoundPage: React.FC = () => {
	return (
		<Container>
			<StyledHeader>404 Page Not Found</StyledHeader>
			<h2>
				<Link to="/">Click here</Link> to return
			</h2>
		</Container>
	);
};

export default NotFoundPage;
