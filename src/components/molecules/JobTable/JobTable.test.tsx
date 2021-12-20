import { render, screen } from "@testing-library/react";
import { mocked } from "ts-jest/dist/utils/testing";
import { JobTable } from "..";
import { useGetJobs } from "../../../hooks";
import { Job } from "../../../shared";
/* eslint-disable */
jest.mock("../../../hooks", () => ({
	useGetJobs: jest.fn(),
}));

const mockedUseGetJobs = mocked(useGetJobs, true);

test("Loading spinner displays when status is loading", () => {
	const mockResult = { data: [], error: null, status: "loading" } as any;
	mockedUseGetJobs.mockImplementationOnce(() => mockResult);
	render(<JobTable />);
	const spinner = screen.getByRole("progressbar");
	expect(spinner).toBeInTheDocument();
});

test("Error displays when error encountered", () => {
	const mockResult = {
		data: [],
		status: "error",
		error: { message: "error encountered" },
	} as any;
	mockedUseGetJobs.mockImplementationOnce(() => mockResult);

	render(<JobTable />);
	const spinner = screen.queryByRole("progressbar");
	expect(spinner).toBeNull();

	const errorAlert = screen.getByRole("alert");
	expect(errorAlert).toBeInTheDocument();

	const errorMessage = screen.getByText(mockResult.error.message, {
		exact: false,
	});
	expect(errorMessage).toBeInTheDocument();
});

test("valid data displayed in table", () => {
	const data: Job[] = [
		{
			companyName: "test company",
			id: "1",
			isRemote: false,
			jobTitle: "dev",
			locations: [{ city: "bedford", country: "UK" }],
			url: "www.google.com",
		},
		{
			companyName: "another test",
			id: "2",
			isRemote: true,
			jobTitle: "dev",
			locations: [
				{ city: "sheffield", country: "UK" },
				{ city: "manchester", country: "UK" },
			],
			url: "www.yahoo.com",
		},
	];
	const mockResult = {
		data: data,
		error: null,
		status: "success",
	} as any;

	mockedUseGetJobs.mockImplementationOnce(() => mockResult);

	render(<JobTable />);

	const table = screen.getByRole("table");
	expect(table).toBeInTheDocument();

	const testData = screen.getByText(data[0].companyName, { exact: false });
	expect(testData).toBeInTheDocument();

	const checkCrossImg = screen.getAllByRole("img");
	expect(checkCrossImg).toHaveLength(2);
});
