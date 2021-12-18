import { table } from "console";
import React from "react";
import { Job, JobLocation } from "../../../shared/types";
import { JobEntry } from "../../atoms";
import { Table, TableData, TableHeading } from "./styles";

interface JobTableProps {
	jobs: Job[];
}

const JobTable: React.FC<JobTableProps> = ({ jobs }) => {
	const renderJobs = (jobs: Job[]) => {
		return jobs.map((job) => <JobEntry job={job} key={job.id} />);
	};

	const tableHeadings = ["Title", "Company", "Locations", "Remote?"];

	const renderTableHeadings = (tableHeadings: string[]) => {
		return tableHeadings.map((heading) => (
			<TableHeading key={heading}>{heading}</TableHeading>
		));
	};

	const renderTableRows = (jobs: Job[]) => {
		return jobs.map((job) => (
			<tr key={job.id}>
				<TableData>{job.jobTitle}</TableData>
				<TableData>{job.companyName}</TableData>
				<TableData>{renderLocationText(job.locations)}</TableData>
				<TableData>{job.isRemote ? "Tick" : "Cross"}</TableData>
			</tr>
		));
	};

	const renderLocationText = (locations: JobLocation[]): string => {
		return locations.length === 0
			? "N/A"
			: locations
					.map((location) => `${location.city},${location.country}`)
					.join(" | ");
	};

	return (
		<div>
			<Table>
				<thead>
					<tr>{renderTableHeadings(tableHeadings)}</tr>
				</thead>
				<tbody>{renderTableRows(jobs)}</tbody>
			</Table>
		</div>
	);
};

export default JobTable;
