import { gql } from "graphql-request";

export const GET_JOBS = gql`
	query {
		jobs {
			id
			title
			company {
				name
			}

			cities {
				id
				name
				country {
					name
				}
			}
			remotes {
				name
			}
			applyUrl
		}
	}
`;
