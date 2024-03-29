import {
	AnalyticalTable,
	Bar,
	Button,
	Card,
	Loader,
	Modals,
} from "@ui5/webcomponents-react";
import CardHeader from "./CardHeader";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import getCookie from "../lib/getCookie";
import { candoDataType } from "../utils/types";
import CanDoDetailsData from "./CanDoDetailsData";
import { useCallback, useEffect, useState } from "react";
import CanDoSummaryHeader from "./CanDoSummaryHeader";
import { deleteCookie } from "../lib/deleteCookie";

const CanDoSummary = () => {
	const [, setSodSection] = useState<boolean>(false);
	const [, setSensitiveSection] = useState<boolean>(false);
	const [, setAllSection] = useState<boolean>(false);
	const [refetch, setRefetch] = useState<boolean>(false);

	const queryClient = useQueryClient();

	const showDialog = Modals.useShowDialog();

	const endPoint = `${
		import.meta.env.VITE_BASE_LOGIN_URL
	}/api/irmbi/read/canDoSummarychart`;

	const fetchData = useCallback(async () => {
		try {
			const savedCookie = getCookie("authToken");
			const cookie = `Basic ${savedCookie}`;

			const response = await axios.post(
				endPoint,
				{
					projectID: 1,
					cardId: 2,
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
						deleteCookie("authToken");
						window.location.reload();
					}
				}
			} catch (error) {
				console.error(error);
			}
		}
	}, [endPoint]);

	const { data, isError, isFetching, isLoading } = useQuery({
		queryKey: ["canDoSummary"],
		queryFn: fetchData,
		retry: 3,
	});

	useEffect(() => {
		if (refetch) {
			fetchData();
			setRefetch(false);
			queryClient.invalidateQueries({
				predicate: (query) => query.queryKey[0] === "canDoSummary",
			});
		}
	}, [fetchData, refetch, queryClient]);

	const canDoSummaryData = data;

	if (isError) {
		console.error("Error fetching data");
	}

	const columns = [
		{
			Header: "Business Process",
			accessor: "BUSINESS_PROCESS",
			headerTooltip: "Business Process",
			disableDragAndDrop: true,
			width: 200,
		},
		{
			Header: "Rule Name",
			accessor: "sod_name",
			headerTooltip: "Rule Name",
			disableDragAndDrop: true,
		},
		{
			Header: "Risk Description",
			accessor: "risk_description",
			headerTooltip: "Risk Description",
			disableDragAndDrop: true,
		},
		{
			Header: "Risk Rating",
			accessor: "SOD_RISK_RATING",
			headerTooltip: "Risk Rating",
			disableDragAndDrop: true,
		},
		{
			Header: "Active Can Do Users",
			accessor: "can_do_users",
			headerTooltip: "Active Can Do Users",
			disableDragAndDrop: true,
		},
		{
			Header: "Role",
			accessor: "role_name",
			headerTooltip: "Role",
			disableDragAndDrop: true,
		},
		{
			Header: "Instances",
			accessor: "xx_row_id",
			headerTooltip: "Instances",
			disableDragAndDrop: true,
		},
		{
			Header: "SoD Report",
			disableFilters: true,
			disableGroupBy: true,
			disableResizing: true,
			disableSortBy: true,
			disableDragAndDrop: true,
			Cell: () => {
				return (
					<Button
						onClick={(e) => {
							const detailsData =
								e.currentTarget.parentNode?.parentElement?.childNodes[1]
									?.textContent ?? "";

							showModal({ rule: detailsData });
						}}
						design="Transparent">
						Details
					</Button>
				);
			},
		},
	];

	const showModal = ({ rule }: { rule: string }) => {
		const { close } = showDialog({
			children: <CanDoDetailsData rule={rule} />,
			footer: (
				<Bar endContent={<Button onClick={() => close()}>Close</Button>} />
			),
		});
	};

	const tableData: candoDataType[] = canDoSummaryData?.candoData?.map(
		(item: candoDataType) => ({
			BUSINESS_PROCESS: item.BUSINESS_PROCESS,
			sod_name: item.sod_name,
			risk_description: item.risk_description,
			SOD_RISK_RATING: item.SOD_RISK_RATING,
			can_do_users: item.can_do_users,
			role_name: item.role_name,
			xx_row_id: item.xx_row_id,
		})
	);

	return (
		<Card className="p-2 mb-2">
			{isFetching && <Loader progress={60} />}
			{isLoading && <Loader progress={60} />}
			<CanDoSummaryHeader
				setAllSection={setAllSection}
				setRefetch={setRefetch}
				setSodSection={setSodSection}
				setSensitiveSection={setSensitiveSection}
				title="Can Do Summary"
			/>

			<CardHeader />
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
				/>
			</div>
		</Card>
	);
};

export default CanDoSummary;
