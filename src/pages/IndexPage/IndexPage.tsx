import React from "react";
import { JobTableWrapper } from "../../components/molecules";
import { Container, Title } from "./styles";

const IndexPage: React.FC = () => {
	return (
		<Container>
			<Title>Job Board</Title>
			<JobTableWrapper />
		</Container>
	);
};

export default IndexPage;
