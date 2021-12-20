import ApiProvider from "./ApiProvider";

// different endpoint for dev/prod
// not necessary in this case but extensible
const endpoint = process.env.REACT_APP_API_HOST || "";

export { ApiProvider, endpoint };
