// different endpoint for dev/prod
// not necessary in this case but extensible
export const endpoint =
	process.env.NODE_ENV === "production"
		? "https://api.graphql.jobs/"
		: "https://api.graphql.jobs/";

export interface JobApiResponse {
	id: string;
	title: string;
	company: Company;
	cities: City[];
	remotes: Remote[];
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
