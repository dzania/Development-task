import { useEffect, useState } from "react";
import { fetchReport } from "./shared/api";
import { Report } from "./shared/types";
import { Link } from "react-router-dom";
import "./table.css";

export const ReportPage = () => {
	// Assume you have user data stored in state or props
	const [report, setReport] = useState<Report>();

	useEffect(() => {
		fetchReport().then((res) => {
			setReport(res);
		});
	}, [fetchReport, setReport]);

	return (
		<div>
			<Link to="/">
				<button>Back</button>
			</Link>
			<h1>Users Report</h1>
			{report && (
				<table>
					<thead>
						<tr>
							<th>Information</th>
							<th>Value</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>Number of users who accessed the initial page</td>
							<td>{report.users}</td>
						</tr>
						<tr>
							<td>Percentage of users who scrolled to the image</td>
							<td>{report.displayed_photo_percentage}%</td>
						</tr>
					</tbody>
				</table>
			)}
		</div>
	);
};

export default ReportPage;
