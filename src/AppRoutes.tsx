import React, { useMemo } from "react";
import { useRoutes } from "react-router-dom";
import { IndexPage, InternalServerErrorPage, NotFoundPage } from "./pages";

const AppRoutes: React.FC = () => {
	// Routing handled with easily extensible array of RouteObjects
	// useMemo to prevent recreation on rerender
	const routes = useMemo(() => {
		const routeTable = {
			path: "/",
			children: [
				{ path: "/", element: <IndexPage /> },
				{ path: "/500", element: <InternalServerErrorPage /> },
				{ path: "*", element: <NotFoundPage /> },
			],
		};
		return routeTable;
	}, []);

	const routing = useRoutes([routes]);

	return <>{routing}</>;
};

export default AppRoutes;
