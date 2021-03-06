import request from "graphql-request";
import { useQuery } from "react-query";
import { endpoint } from "../api";
import { GET_JOBS } from "../api/graphql/queries";
import { Job, JobLocation } from "../shared";
import { JobApiResponse } from "../shared/types";

interface ApiResponse {
	jobs: JobApiResponse[];
}

export const useGetJobs = () => {
	return useQuery<Job[], Error>("jobs", async () => {
		// grab data from API
		const data: ApiResponse = await request(endpoint, GET_JOBS);
		const jobs = convertToJobs(data.jobs);
		return jobs;
	});
};

// convert to the Job type using in business logic
const convertToJobs = (apiResponse: JobApiResponse[]): Job[] => {
	const jobs: Job[] = apiResponse.map((job) => {
		const title = job.title;
		const company = job.company.name;
		const locations = convertToLocations(job);
		const id = job.id;
		const url = job.applyUrl;
		const newJob: Job = {
			jobTitle: title,
			companyName: company,
			isRemote: job.remotes.length > 0 && job.remotes[0].name === "Remote",
			locations: locations,
			id: id,
			url: url,
		};
		return newJob;
	});
	return jobs;
};

const convertToLocations = (apiResponse: JobApiResponse): JobLocation[] => {
	const locations: JobLocation[] = apiResponse.cities.map((city) => {
		const loc: JobLocation = { city: city.name, country: city.country.name };
		return loc;
	});
	return locations;
};
