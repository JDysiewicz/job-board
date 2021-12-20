import React from "react";
import { Job, JobLocation } from "../../../shared";
import { Container, Table, TableData, TableHeading, TableRow } from "./styles";
import { useGetJobs } from "../../../hooks";
import { ExternalLink, LoaderSpinner, Icon } from "../../atoms";
import { Navigate } from "react-router-dom";

const tableHeadings = ["Title", "Company", "Locations", "Remote"];

const JobTable: React.FC = () => {
	const { data, error, status } = useGetJobs();

	if (status === "loading") return <LoaderSpinner size="xl" />;
	if (status === "error")
		return <span role="alert">Error: {error?.message}</span>;
	if (!data) return <Navigate replace to="/500" />;

	return (
		<Container>
			<Table role="table">
				<thead>
					<tr>{renderTableHeadings(tableHeadings)}</tr>
				</thead>
				<tbody>{renderTableRows(data)}</tbody>
			</Table>
		</Container>
	);
};

export default JobTable;

// helper functions
const formatLocationsText = (locations: JobLocation[]): string => {
	return locations.length === 0
		? "N/A"
		: locations
				.map((location) => `${location.city}, ${location.country}`)
				.join(" | ");
};

const renderTableHeadings = (tableHeadings: string[]) => {
	return tableHeadings.map((heading) => (
		<TableHeading key={heading}>{heading}</TableHeading>
	));
};

const renderTableRows = (jobs: Job[]) => {
	return jobs.map((job) => (
		<TableRow key={job.id}>
			<TableData>
				<ExternalLink url={job.url} text={job.jobTitle} />
			</TableData>
			<TableData>{job.companyName}</TableData>
			<TableData>{formatLocationsText(job.locations)}</TableData>
			<TableData>
				{job.isRemote ? (
					<Icon type="check" size="m" />
				) : (
					<Icon type="cross" size="m" />
				)}
			</TableData>
		</TableRow>
	));
};
