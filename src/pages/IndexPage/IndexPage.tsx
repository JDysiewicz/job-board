import React from "react";
import { JobEntry } from "../../components/atoms";
import { useGetJobs } from "../../hooks";
import { Job } from "../../shared/types";

const IndexPage: React.FC = () => {
	const { data, error, status } = useGetJobs();

	if (status === "loading") return <>"Loading..."</>;
	if (status === "error") return <span>Error: {error?.message}</span>;

	const renderJobs = (jobs: Job[]) => {
		return jobs.map((job) => <JobEntry job={job} key={job.id} />);
	};

	return (
		<>
			{!data ? (
				<>"Something went wrong..."</>
			) : (
				<div>
					<h1>Jobs</h1>
					<ul>{renderJobs(data)}</ul>
				</div>
			)}
		</>
	);
};

export default IndexPage;
