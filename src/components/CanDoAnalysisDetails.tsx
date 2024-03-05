import { transactionDetailsTypes } from "../utils/types";
import { AnalyticalTable, Card } from "@ui5/webcomponents-react";
import CardHeader from "./CardHeader";

type CanDoAnalysisDetailsTableProps = {
	data: string;
};

const CanDoAnalysisDetailsTable = ({
	data,
}: CanDoAnalysisDetailsTableProps) => {
	const jsonData: transactionDetailsTypes[] = JSON.parse(data);
	const tableData: transactionDetailsTypes[] = jsonData;

	const columns = [
		{
			Header: "USERS",
			accessor: "USERS",
			headerTooltip: "USERS",
		},
		{
			Header: "Vendor",
			accessor: "Vendor",
			headerTooltip: "Vendor",
		},
		{
			Header: "Customer Invoice Number",
			accessor: "Customer_Invoice_Number",
		},
		{
			accessor: "Clearing_document",
			Header: "Clearing Document",
		},
		{
			Header: "Clearing Date",
			accessor: "Clearing_Date",
			headerTooltip: "Clearing Date",
		},
		{
			Header: "Document Type",
			accessor: "Document_type",
			headerTooltip: "Document Type",
		},
		{
			Header: "Invoice Creation Date",
			accessor: "Invoice_Creation_Date",
			headerTooltip: "Invoice Creation Date",
		},
		{
			Header: "Posting Key",
			accessor: "Posting_Key",
			headerTooltip: "Posting Key",
		},
		{
			Header: "Invoice Posting Date",
			accessor: "Invoice_Posting_Date",
			headerTooltip: "Invoice Posting Date",
		},
		{
			Header: "Company Code",
			accessor: "Company_Code",
			headerTooltip: "Company Code",
		},
		{
			Header: "Line item[0]",
			accessor: "Line_item[0]",
			headerTooltip: "Line item[0]",
		},
		{
			Header: "Valuated Amount",
			accessor: "Valuated_amount",
			headerTooltip: "Valuated Amount",
		},
		{
			Header: "Amount In Local Currency",
			accessor: "Amount_in_local_currency",
			headerTooltip: "Amount In Local Currency",
		},
		{
			Header: "Local Currency",
			accessor: "Local_Currency",
			headerTooltip: "Local Currency",
		},
		{
			Header: "Net Due Date",
			accessor: "Net_due_date",
			headerTooltip: "Net Due Date",
		},
		{
			Header: "Fiscal Year",
			accessor: "Fiscal_Year",
			headerTooltip: "Fiscal Year",
		},
		{
			Header: "Account Type",
			accessor: "Account_Type",
			headerTooltip: "Account Type",
		},
		{
			Header: "Document Currency",
			accessor: "Document_currency",
			headerTooltip: "Document Currency",
		},
		{
			Header: "GL Account",
			accessor: "GL_Account",
			headerTooltip: "GL Account",
		},
	];

	return (
		<Card className="p-2">
			<CardHeader title="Can Do vs Did Do Analysis" />
			<div className="p-4">
				<AnalyticalTable
					style={{ width: "100%" }}
					noDataText="No Data Found"
					alternateRowColor
					className="tableHeader"
					scaleWidthMode="Smart"
					visibleRows={10}
					// loading={isFetching || isLoading}
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

export default CanDoAnalysisDetailsTable;
