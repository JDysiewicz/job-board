import React from "react";
import { useRoutes } from "react-router-dom";
import { IndexPage, NotFoundPage } from "./pages";

const AppRoutes: React.FC = () => {
	// Routing handled with easily extensible array of RouteObjects.
	const routes = {
		path: "/",
		children: [
			{ path: "/", element: <IndexPage /> },
			{ path: "*", element: <NotFoundPage /> },
		],
	};

	const routing = useRoutes([routes]);

	return <>{routing}</>;
};

export default AppRoutes;
