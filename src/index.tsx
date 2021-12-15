import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./styles.css";

import AppRoutes from "./AppRoutes";

// here to enable use of useRoutes hook from react-router v6 in AppRoutes; extract logic to hooks
const app = (
	<BrowserRouter>
		<AppRoutes />
	</BrowserRouter>
);

ReactDOM.render(app, document.querySelector("#root"));
