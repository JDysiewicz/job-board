import ApiProvider from "./ApiProvider";

// different endpoint for dev/prod
// not necessary in this case but extensible
const endpoint = // Need a new home for this... feels icky here
	process.env.NODE_ENV === "production"
		? "https://api.graphql.jobs/"
		: "https://api.graphql.jobs/";

export { ApiProvider, endpoint };
