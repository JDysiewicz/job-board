import React from "react";
import { Job } from "../../shared/types";

interface JobEntryProps {
	job: Job;
}

const JobEntry: React.FC<JobEntryProps> = ({ job }) => {
	return (
		<div>
			<h2>{job.jobTitle}</h2>
			<h3>
				<i>{job.companyName}</i>
			</h3>
			<p>Locations: {JSON.stringify(job.locations)}</p>
			<p>{JSON.stringify(job.isRemote)}</p>
		</div>
	);
};

export default JobEntry;
