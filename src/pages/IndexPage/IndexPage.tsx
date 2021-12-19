import React from "react";
import { JobTable } from "../../components/molecules";
import { Container, Title } from "./styles";

const IndexPage: React.FC = () => {
	return (
		<Container>
			<Title>Job Board</Title>
			<JobTable />
		</Container>
	);
};

export default IndexPage;
