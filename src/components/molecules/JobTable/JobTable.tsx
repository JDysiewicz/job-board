import React from "react";
import { Job, JobLocation } from "../../../shared/types";
import { JobLink, Table, TableData, TableHeading, TableRow } from "./styles";
import { ImCross, ImCheckmark } from "react-icons/im";

interface JobTableProps {
	jobs: Job[];
}

const JobTable: React.FC<JobTableProps> = ({ jobs }) => {
	const tableHeadings = ["Title", "Company", "Locations", "Remote"];

	const renderTableHeadings = (tableHeadings: string[]) => {
		return tableHeadings.map((heading) => (
			<TableHeading key={heading}>{heading}</TableHeading>
		));
	};

	const renderTableRows = (jobs: Job[]) => {
		return jobs.map((job) => (
			<TableRow key={job.id}>
				<TableData>
					<JobLink href={job.url} target="_blank" rel="noreferrer">
						{job.jobTitle}
					</JobLink>
				</TableData>
				<TableData>{job.companyName}</TableData>
				<TableData>{renderLocationText(job.locations)}</TableData>
				<TableData>
					{job.isRemote ? (
						<ImCheckmark
							style={{
								color: "var(--accent-green-500)",
								fontSize: "1.5rem",
							}}
						/>
					) : (
						<ImCross
							style={{ color: "var(--accent-red-700)", fontSize: "1.5rem" }}
						/>
					)}
				</TableData>
			</TableRow>
		));
	};

	const renderLocationText = (locations: JobLocation[]): string => {
		return locations.length === 0
			? "N/A"
			: locations
					.map((location) => `${location.city}, ${location.country}`)
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
