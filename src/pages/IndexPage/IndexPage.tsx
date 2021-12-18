import React from "react";
import { JobTableWrapper } from "../../components/molecules";
import { Container, Title } from "./styles";

const IndexPage: React.FC = () => {
	return (
		<Container>
			<Title>Jobs</Title>
			<JobTableWrapper />
		</Container>
	);
};

export default IndexPage;
