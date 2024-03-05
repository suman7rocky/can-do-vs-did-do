import { AnalyticalTable, Card } from "@ui5/webcomponents-react";
import { useQuery } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import getCookie from "../lib/getCookie";
import { canDoDetailsDataApiResponse } from "../utils/types";

type CanDoDetailsDataProps = {
	rule: string;
};

const CanDoDetailsData = ({ rule }: CanDoDetailsDataProps) => {
	const endPoint = `${import.meta.env.VITE_BASE_LOGIN_URL}/api/irmbi/canDoData`;

	const fetchData = async () => {
		try {
			const savedCookie = getCookie("authToken");
			const cookie = `Basic ${savedCookie}`;

			const response = await axios.post(
				endPoint,
				{
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
					columnName: rule,
					projectID: 1,
					tableName: "sap_out",
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
					offset: 0,
					rows: 10,
					event: {
						first: 0,
						rows: 10,
						sortOrder: 1,
						filters: {},
						globalFilter: null,
						offset: 0,
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
		queryKey: ["canDoDetailsData"],
		queryFn: fetchData,
		retry: 3,
	});

	const canDoDetailsData = data;
	console.log(data);
	if (isError) {
		return <div>Something went wrong</div>;
	}

	const columns = [
		{
			Header: "Business Process",
			accessor: "BUSINESS_PROCESS",
			headerTooltip: "Business Process",
			disableDragAndDrop: false,
		},
		{
			Header: "Risk Rating",
			accessor: "risk_level",
			headerTooltip: "Risk Rating",
			disableDragAndDrop: false,
		},
		{
			Header: "Rule Name",
			accessor: "sod_name",
			headerTooltip: "Rule Name",
			disableDragAndDrop: false,
		},
		{
			Header: "User Name",
			accessor: "user_display",
			headerTooltip: "User Name",
			disableDragAndDrop: false,
		},
		{
			Header: "Function 1",
			accessor: "function_name",
			headerTooltip: "Function 1",
			disableDragAndDrop: false,
		},
		{
			Header: "Role",
			accessor: "role_name",
			headerTooltip: "Role",
			disableDragAndDrop: false,
		},
		{
			Header: "Type of Role Conflict",
			accessor: "role_conflict_type",
			headerTooltip: "Type of Role Conflict",
			disableDragAndDrop: false,
		},
		{
			Header: "Transaction Code Leg 1",
			accessor: "transaction_code",
			headerTooltip: "Transaction Code Leg 1",
			disableDragAndDrop: false,
		},
		{
			Header: "Incident Path",
			accessor: "incident_path",
			headerTooltip: "Incident Path",
			disableDragAndDrop: false,
		},
		{
			Header: "Function 2",
			accessor: "function_name2",
			headerTooltip: "Function 2",
			disableDragAndDrop: false,
		},
		{
			Header: "Conflicting Role Leg 2",
			accessor: "transaction_code2",
			headerTooltip: "Conflicting Role Leg 2",
			disableDragAndDrop: false,
		},
		{
			Header: "Conflicting Transaction Code Leg 2",
			accessor: "conflicting_role_leg2",
			headerTooltip: "Conflicting Transaction Code Leg 2",
			disableDragAndDrop: false,
		},
		{
			Header: "Conflict Type",
			accessor: "conflict_type",
			headerTooltip: "Conflict Type",
			disableDragAndDrop: false,
		},
		{
			Header: "Org Level",
			accessor: "org_level",
			headerTooltip: "Org Level",
			disableDragAndDrop: false,
		},
		{
			Header: "Org Value",
			accessor: "org_value",
			headerTooltip: "Org Value",
			disableDragAndDrop: false,
		},
	];

	const tableData: canDoDetailsDataApiResponse[] = canDoDetailsData?.data.map(
		(item: canDoDetailsDataApiResponse) => {
			return {
				BUSINESS_PROCESS: item.BUSINESS_PROCESS,
				risk_level: item.risk_level,
				sod_name: item.sod_name,
				user_display: item.user_display,
				function_name: item.function_name,
				role_name: item.role_name,
				role_conflict_type: item.role_conflict_type,
				transaction_code: item.transaction_code,
				incident_path: item.incident_path,
				function_name2: item.function_name2,
				transaction_code2: item.transaction_code2,
				conflicting_role_leg2: item.conflicting_role_leg2,
				conflict_type: item.conflict_type,
				org_level: item.org_level,
				org_value: item.org_value,
			};
		}
	);

	console.table(canDoDetailsData);
	// const tableData: canDoDetailsDataApiResponse[] = canDoDetailsData;

	return (
		<Card className="p-2">
			<div className="p-3 font-bold text-xl">Can Do Summary Details</div>
			<div className="p-4">
				<AnalyticalTable
					style={{ width: "100%" }}
					noDataText="No Data Found"
					visibleRowCountMode="Fixed"
					alternateRowColor
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

export default CanDoDetailsData;
