import React from "react";
import { Job, JobLocation } from "../../../shared/types";
import { Container, Table, TableData, TableHeading, TableRow } from "./styles";
import { ImCross, ImCheckmark } from "react-icons/im";
import { useGetJobs } from "../../../hooks";
import { ExternalLink, LoaderSpinner } from "../../atoms";
import { Navigate } from "react-router-dom";

const JobTable: React.FC = () => {
	const { data, error, status } = useGetJobs();

	if (status === "loading") return <LoaderSpinner size="xl" />;
	if (status === "error") return <span>Error: {error?.message}</span>;
	if (!data) return <Navigate replace to="/500" />;

	const tableHeadings = ["Title", "Company", "Locations", "Remote"]; // useMemo if larger array; abstraction cost higher right now

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

	const formatLocationsText = (locations: JobLocation[]): string => {
		return locations.length === 0
			? "N/A"
			: locations
					.map((location) => `${location.city}, ${location.country}`)
					.join(" | ");
	};

	return (
		<Container>
			<Table>
				<thead>
					<tr>{renderTableHeadings(tableHeadings)}</tr>
				</thead>
				<tbody>{renderTableRows(data)}</tbody>
			</Table>
		</Container>
	);
};

export default JobTable;
