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

export interface JobApiResponse {
	id: string;
	title: string;
	company: Company;
	cities: City[];
	remotes: Remote[];
	applyUrl: string;
}

// interfaces as API could change; this is minimum needed for our business logic
interface Company {
	name: string;
}

interface City {
	name: string;
	country: Country;
}

interface Remote {
	name: string;
}

interface Country {
	name: string;
}
