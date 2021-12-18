import React from "react";
import { useGetJobs } from "../../../hooks";
import JobTable from "../JobTable/JobTable";
import { Container } from "./styles";

const JobTableWrapper: React.FC = () => {
	const { data, error, status } = useGetJobs();

	if (status === "loading") return <>"Loading..."</>;
	if (status === "error") return <span>Error: {error?.message}</span>;

	return (
		<>
			{!data ? (
				""
			) : (
				<Container>
					<JobTable jobs={data} />
				</Container>
			)}
		</>
	);
};

export default JobTableWrapper;
