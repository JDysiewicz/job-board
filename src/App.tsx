import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ApiProvider } from "./api";
import AppRoutes from "./AppRoutes";

const App: React.FC = () => {
	return (
		<ApiProvider>
			<BrowserRouter>
				<AppRoutes />
			</BrowserRouter>
		</ApiProvider>
	);
};

export default App;
