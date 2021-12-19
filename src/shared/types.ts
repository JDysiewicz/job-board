// normalised version of Job we can use in business logic
// not dependant upon API changes
export interface Job {
	jobTitle: string;
	companyName: string;
	locations: JobLocation[];
	isRemote: boolean;
	id: string;
	url: string;
}

export interface JobLocation {
	city: string;
	country: string;
}
