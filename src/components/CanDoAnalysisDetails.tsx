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
			disableDragAndDrop: true,
		},
		{
			Header: "Vendor",
			accessor: "Vendor",
			headerTooltip: "Vendor",
			disableDragAndDrop: true,
		},
		{
			Header: "Customer Invoice Number",
			accessor: "Customer_Invoice_Number",
			headerTooltip: "Customer Invoice Number",
			disableDragAndDrop: true,
		},
		{
			accessor: "Clearing_document",
			Header: "Clearing Document",
			headerTooltip: "Clearing Document",
			disableDragAndDrop: true,
		},
		{
			Header: "Clearing Date",
			accessor: "Clearing_Date",
			headerTooltip: "Clearing Date",
			disableDragAndDrop: true,
		},
		{
			Header: "Document Type",
			accessor: "Document_type",
			headerTooltip: "Document Type",
			disableDragAndDrop: true,
		},
		{
			Header: "Invoice Creation Date",
			accessor: "Invoice_Creation_Date",
			headerTooltip: "Invoice Creation Date",
			disableDragAndDrop: true,
		},
		{
			Header: "Posting Key",
			accessor: "Posting_Key",
			headerTooltip: "Posting Key",
			disableDragAndDrop: true,
		},
		{
			Header: "Invoice Posting Date",
			accessor: "Invoice_Posting_Date",
			headerTooltip: "Invoice Posting Date",
			disableDragAndDrop: true,
		},
		{
			Header: "Company Code",
			accessor: "Company_Code",
			headerTooltip: "Company Code",
			disableDragAndDrop: true,
		},
		{
			Header: "Line Item",
			accessor: "Line_item[0]",
			headerTooltip: "Line item[0]",
			disableDragAndDrop: true,
		},
		{
			Header: "Valuated Amount",
			accessor: "Valuated_amount",
			headerTooltip: "Valuated Amount",
			disableDragAndDrop: true,
		},
		{
			Header: "Amount In Local Currency",
			accessor: "Amount_in_local_currency",
			headerTooltip: "Amount In Local Currency",
			disableDragAndDrop: true,
		},
		{
			Header: "Local Currency",
			accessor: "Local_Currency",
			headerTooltip: "Local Currency",
			disableDragAndDrop: true,
		},
		{
			Header: "Net Due Date",
			accessor: "Net_due_date",
			headerTooltip: "Net Due Date",
			disableDragAndDrop: true,
		},
		{
			Header: "Fiscal Year",
			accessor: "Fiscal_Year",
			headerTooltip: "Fiscal Year",
			disableDragAndDrop: true,
		},
		{
			Header: "Account Type",
			accessor: "Account_Type",
			headerTooltip: "Account Type",
			disableDragAndDrop: true,
		},
		{
			Header: "Document Currency",
			accessor: "Document_currency",
			headerTooltip: "Document Currency",
			disableDragAndDrop: true,
		},
		{
			Header: "GL Account",
			accessor: "GL_Account",
			headerTooltip: "GL Account",
			disableDragAndDrop: true,
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
