import { useQuery } from "@tanstack/react-query";
import {
	AnalyticalTable,
	Bar,
	Button,
	Card,
	Loader,
	Modals,
} from "@ui5/webcomponents-react";
import getCookie from "../lib/getCookie";
import axios, { AxiosError } from "axios";
import CardHeader from "./CardHeader";
import CanDoAnalysisDetailsTable from "./CanDoAnalysisDetails";
import { CanDovsDidDoDataApiResponse, SoDData } from "../utils/types";

const CanDovsDidDoAnalysis = () => {
	const showDialog = Modals.useShowDialog();

	const endPoint = `${import.meta.env.VITE_BASE_LOGIN_URL}
/api/irmbi/read/chartdata`;

	const fetchData = async () => {
		try {
			const savedCookie = getCookie("authToken");
			const cookie = `Basic ${savedCookie}`;

			const response = await axios.post(
				endPoint,
				{
					projectID: 1,
					cardId: 7,
					realtimeProjectFilter: {
						filters: [
							{
								tableInfo: {
									columnName: "business_process_descp",
									tableName: "sap_out",
								},
								filterValues: [
									{
										name: "Information Technology",
										selected: true,
									},
									{
										name: "Order to Cash",
										selected: true,
									},
									{
										name: "Procure to Pay",
										selected: true,
									},
									{
										name: "Record to Report",
										selected: true,
									},
								],
							},
							{
								tableInfo: {
									columnName: "risk_level",
									tableName: "sap_out",
								},
								filterValues: [
									{
										name: "High",
										selected: true,
									},
									{
										name: "Low",
										selected: true,
									},
									{
										name: "Medium",
										selected: true,
									},
									{
										name: "Sensitive",
										selected: true,
									},
								],
							},
							{
								tableInfo: {
									columnName: "IS_USER_EXCLUDED",
									tableName: "sap_out",
								},
								filterValues: [
									{
										name: "N",
										selected: true,
									},
									{
										name: "Y",
										selected: false,
									},
								],
							},
							{
								tableInfo: {
									columnName: "IS_ROLE_EXCLUDED",
									tableName: "sap_out",
								},
								filterValues: [
									{
										name: "N",
										selected: true,
									},
									{
										name: "Y",
										selected: false,
									},
								],
							},
						],
					},
					customFilters: {
						level: {
							at_auth_level: true,
							at_org_level: true,
						},
					},
					syncIds: {
						cur_sync_id: "1025",
						pre_sync_id: "1014",
						last_sync_id: "1025",
						policy_id: "266",
						pre_policy_id: "264",
					},
				},
				{
					headers: {
						Authorization: cookie,
						"Content-Type": "application/json",
					},
				}
			);

			return response.data;
		} catch (error) {
			try {
				if (axios.isAxiosError(error)) {
					const axiosError: AxiosError = error;
					if (axiosError.code === "ERR_BAD_REQUEST") {
						localStorage.removeItem("userdetails");
					}
				}
			} catch (error) {
				console.error(error);
			}
		}
	};

	const { data, isError, isFetching, isLoading } = useQuery({
		queryKey: ["canDovsDiDoAnalysisdata"],
		queryFn: fetchData,
		retry: 3,
	});

	const canDoVSDidDoAnalysisData: CanDovsDidDoDataApiResponse = data;

	if (isError) {
		console.error("Error fetching data");
	}

	const showModal = ({ jsonData }: { jsonData: string }) => {
		const { close } = showDialog({
			children: <CanDoAnalysisDetailsTable data={jsonData} />,
			footer: (
				<Bar endContent={<Button onClick={() => close()}>Close</Button>} />
			),
		});
	};

	const columns = [
		{
			Header: "Level",
			accessor: "Level",
			headerTooltip: "Level",
			disableDragAndDrop: true,
		},
		{
			Header: "Risk ID",
			accessor: "sod_risk_id",
			headerTooltip: "Risk ID",
			disableDragAndDrop: true,
		},
		{
			Header: "SoD Rule",
			accessor: "sod_rule",
			headerTooltip: "SoD Rule",
			disableDragAndDrop: true,
		},
		{
			accessor: "business_process",
			Header: "Buisness Process",
			headerTooltip: "Buisness Process",
			disableDragAndDrop: true,
		},
		{
			Header: "SoD Risk Rating",
			accessor: "sod_risk_rating",
			headerTooltip: "SoD Risk Rating",
			disableDragAndDrop: true,
		},
		{
			Header: "Org Level",
			accessor: "org_level",
			headerTooltip: "Org Level",
			disableDragAndDrop: true,
		},
		{
			Header: "Org Value",
			accessor: "org_value",
			headerTooltip: "Org Value",
			disableDragAndDrop: true,
		},
		{
			Header: "Active Can Do Users",
			accessor: "can_do_users",
			headerTooltip: "Active Can Do Users",
			disableDragAndDrop: true,
		},
		{
			Header: "Did Do Users",
			accessor: "diddo_users",
			headerTooltip: "Did Do Users",
			disableDragAndDrop: true,
		},
		{
			Header: "Transaction Count",
			accessor: "breach_count",
			headerTooltip: "Transaction Count",
			disableDragAndDrop: true,
		},
		{
			Header: "Transaction Value",
			accessor: "breach_value",
			headerTooltip: "Transaction Value",
			disableDragAndDrop: true,
		},
		{
			Header: "Local Currency",
			accessor: "local_currency",
			headerTooltip: "Local Currency",
			disableDragAndDrop: true,
		},
		{
			Header: "Transaction Details",
			disableDragAndDrop: true,
			accessor: "raw_json",
			disableFilters: true,
			disableGroupBy: true,
			disableResizing: true,
			disableSortBy: true,
			id: "raw_json",
			minWidth: 100,
			width: 100,
			Cell: () => {
				return (
					<Button
						onClick={() => {
							showModal({ jsonData: tableData[0].raw_json });
						}}
						design="Transparent">
						Show Details
					</Button>
				);
			},
		},
	];

	const analysisData = canDoVSDidDoAnalysisData?.diddoData.map((val) => ({
		Level: val.Level,
		sod_risk_id: val.sod_risk_id,
		sod_rule: val.sod_rule,
		business_process: val.business_process,
		sod_risk_rating: val.sod_risk_rating,
		org_level: val.org_level,
		org_value: val.org_value,
		can_do_users: val.can_do_users,
		diddo_users: JSON.parse(val.diddo_users).join(", "),
		breach_count: val.breach_count,
		breach_value: val.breach_value,
		local_currency: val.local_currency,
		raw_json: val.raw_json,
	}));

	const tableData: SoDData[] = analysisData?.map((val) => ({
		Level: val.Level,
		sod_risk_id: val.sod_risk_id,
		sod_rule: val.sod_rule,
		business_process: val.business_process,
		sod_risk_rating: val.sod_risk_rating,
		org_level: val.org_level,
		org_value: val.org_value,
		can_do_users: val.can_do_users,
		diddo_users: val.diddo_users,
		breach_count: val.breach_count,
		breach_value: val.breach_value,
		local_currency: val.local_currency,
		raw_json: val.raw_json,
	}));

	return (
		<Card className="p-2">
			<CardHeader title="Can Do vs Did Do Analysis" />
			{isFetching && <Loader progress={60} />}
			{isLoading && <Loader progress={60} />}
			<div className="p-4">
				<AnalyticalTable
					style={{ width: "100%" }}
					noDataText="No Data Found"
					alternateRowColor
					className="tableHeader"
					scaleWidthMode="Smart"
					visibleRows={10}
					loading={isFetching || isLoading}
					columns={columns}
					data={tableData}
					filterable
					groupBy={[]}
					infiniteScroll
					rowHeight={44}
					selectedRowIds={{
						3: true,
					}}
					selectionMode="None"
				/>
			</div>
		</Card>
	);
};

export default CanDovsDidDoAnalysis;
