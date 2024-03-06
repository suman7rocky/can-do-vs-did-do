import { Card, FlexBox, Loader } from "@ui5/webcomponents-react";
import DataCard from "./DataCard";
import DataTable from "./DataTable";
import axios, { AxiosError } from "axios";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import getCookie from "../lib/getCookie";
import { ApiResponse } from "../utils/types";
import { calcPercentage } from "../utils/calcPercentage";
import TableHeader from "./TableHeader";
import { useState, useEffect, useCallback } from "react";

const ExecutiveSummary = () => {
	const [, setSod] = useState<boolean>(false);
	const [, setSensitive] = useState<boolean>(false);
	const [, setAll] = useState<boolean>(false);
	const [refresh, setRefresh] = useState<boolean>(false);

	const queryClient = useQueryClient();


	const endPoint = `${
		import.meta.env.VITE_BASE_LOGIN_URL
	}/api/irmbi/read/executivechartdata`;

	const fetchData = useCallback(async () => {
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
					projectID: 1,
					cardId: 1,
					customFilters: {
						level: {
							at_auth_level: true,
							at_org_level: true,
						},
					},
					syncIds: {
						cur_sync_id: 1025,
						pre_sync_id: 1014,
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
	}, [endPoint]);

	const { data, isError, isFetching, isLoading } = useQuery({
		queryKey: ["executiveData"],
		queryFn: fetchData,
		retry: 3,
	});

	useEffect(() => {
		if (refresh) {
			fetchData();
			setRefresh(false);
			queryClient.invalidateQueries({
				predicate: (query) => query.queryKey[0] === "executiveData",
			});
		}
	}, [fetchData, refresh, queryClient]);

	if (data === undefined) return null;

	const dataItems: ApiResponse = data;

	const infoTechValue = Number(dataItems.exdata?.[1025][0]?.count || 0);
	const procureToPayValue = Number(dataItems.exdata?.[1025][1]?.count || 0);

	const informationTechnology = calcPercentage(
		infoTechValue,
		procureToPayValue
	);

	const procureToPay = calcPercentage(procureToPayValue, infoTechValue);

	if (isError) {
		return <div>Something went wrong</div>;
	}

	return (
		<Card className="p-3 mb-3 mt-3">
			{isFetching && <Loader progress={60} />}
			{isLoading && <Loader progress={60} />}
			<TableHeader
				setAll={setAll}
				setRefresh={setRefresh}
				setSensitive={setSensitive}
				setSod={setSod}
				title="Executive Summary"
			/>
			<FlexBox
				alignItems="Center"
				justifyContent="Center">
				<DataCard
					header="Information Technology"
					icon="Monitor"
					value={informationTechnology}
				/>
				<DataCard
					header="Procure to Pay"
					icon="Cart"
					value={procureToPay}
				/>
			</FlexBox>
			<DataTable data={dataItems} />
		</Card>
	);
};

export default ExecutiveSummary;
