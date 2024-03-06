import {
	Card,
	Label,
	Table,
	TableCell,
	TableColumn,
	TableRow,
} from "@ui5/webcomponents-react";
import { ArrowUp10, BookText, User, UserPlus } from "lucide-react";
import { ApiResponse } from "../utils/types";

type DataTableProps = {
	data: ApiResponse;
};

const DataTable = ({ data }: DataTableProps) => {
	const totalusers = data.totalusers[0]?.users;
	const dialogusers = data.dialogUsers[0]?.users;
	const nondialogusers = data.nonDialogUsers[0]?.users;
	const companycodes = data.companyCodes[0]?.bu_name;

	const allSyncID = data.mstObj;
	const syncID = Object.keys(allSyncID);

	const showDataFor = Number(syncID[1]);

	const bottomValue = "0";

	return (
		<Card className="p-3">
			<Table
				className="p-3"
				columns={
					<>
						<TableColumn
							className="tableHeader"
							style={{ width: "14rem", textAlign: "center" }}>
							<Label>User Profile</Label>
						</TableColumn>

						<TableColumn
							className="tableHeader"
							style={{ width: "14rem" }}>
							<Label>Access Aspect</Label>
						</TableColumn>

						<TableColumn
							className="tableHeader"
							style={{ width: "14rem" }}>
							<Label>High</Label>
						</TableColumn>

						<TableColumn
							className="tableHeader"
							style={{ width: "14rem" }}>
							<Label>Medium</Label>
						</TableColumn>

						<TableColumn
							className="tableHeader"
							style={{ width: "14rem" }}>
							<Label>Total</Label>
						</TableColumn>

						<TableColumn
							className="tableHeader"
							style={{ width: "14rem" }}>
							<Label>Sensitive Access</Label>
						</TableColumn>
					</>
				}>
				{/* Row 1 */}
				<TableRow className="text-center">
					<TableCell>
						<Label className="font-bold">
							Total Users
							<span className="newLine">{totalusers || 0}</span>
							<span className="newLine">{0}%</span>
						</Label>
					</TableCell>

					<TableCell>
						<Label
							className="text-lg"
							style={{ whiteSpace: "nowrap", textAlign: "center" }}>
							<span
								className="m-0"
								style={{ display: "inline-block", textAlign: "center" }}>
								<BookText className="text-[#1AD5C3]" />
							</span>
							Rules Considered
						</Label>
					</TableCell>

					{/* High */}
					<TableCell>
						<Label className="boldText ">
							{data.mstObj[showDataFor]?.High.rules || 0}
							<br />
							<span>{bottomValue}%</span>
						</Label>
					</TableCell>

					{/* Medium */}
					<TableCell>
						<Label className="boldText">
							{data.mstObj[showDataFor]?.Medium.rules || 0}
							<br />
							<span>{bottomValue}%</span>
						</Label>
					</TableCell>

					{/* Total */}
					<TableCell>
						<Label className="boldText">
							{data.mstObj[showDataFor]?.High.rules +
								data.mstObj[showDataFor]?.Medium.rules || 0}
							<br />
							<span>{bottomValue}%</span>
						</Label>
					</TableCell>

					{/* Sensitive Access */}
					<TableCell>
						<Label className="boldText">
							{data.mstObj[showDataFor]?.Sensitive.rules || 0}
							<br />
							<span>{bottomValue}%</span>
						</Label>
					</TableCell>
				</TableRow>

				{/* Row 2 */}
				<TableRow className="text-center">
					<TableCell>
						<Label className="font-bold">
							Dialog Users
							<span className="newLine">{dialogusers || 0}</span>
							<span className="newLine">{0}%</span>
						</Label>
					</TableCell>

					<TableCell>
						<Label
							className="text-lg"
							style={{ whiteSpace: "nowrap", textAlign: "center" }}>
							<span
								className="m-0"
								style={{ display: "inline-block", textAlign: "center" }}>
								<BookText className="text-[#FF3366]" />
							</span>
							Rules Violated
						</Label>
					</TableCell>

					<TableCell>
						<Label className="boldText">
							{data.exobj[showDataFor]?.High.sod_name || 0}
							<br />
							<span>{bottomValue}%</span>
						</Label>
					</TableCell>
					<TableCell>
						<Label className="boldText">
							{data.exobj[showDataFor]?.Medium.sod_name || 0}
							<br />
							<span>{bottomValue}%</span>
						</Label>
					</TableCell>
					<TableCell>
						<Label className="boldText">
							{Number(data.exobj[showDataFor]?.High.sod_name) +
								Number(data.exobj[showDataFor]?.Medium.sod_name) || 0}
							<br />
							<span>{bottomValue}%</span>
						</Label>
					</TableCell>
					<TableCell>
						<Label className="boldText">
							{data.exobj[showDataFor]?.Sensitive.sod_name || 0}
							<br />
							<span>{bottomValue}%</span>
						</Label>
					</TableCell>
				</TableRow>

				{/* Row 3 */}
				<TableRow className="text-center">
					<TableCell>
						<Label className="font-bold">
							Non Dialog Users
							<span className="newLine">{nondialogusers || 0}</span>
							<span className="newLine">{0}%</span>
						</Label>
					</TableCell>
					<TableCell>
						<Label
							className="text-lg"
							style={{ whiteSpace: "wrap", textAlign: "center" }}>
							<span
								className="m-0"
								style={{ display: "inline-block", textAlign: "center" }}>
								<User className="text-[#FCC118]" />
							</span>
							Unique Users with instances
						</Label>
					</TableCell>

					<TableCell>
						<Label className="boldText">
							{data.exobj[showDataFor]?.High.user_name || 0}
							<br />
							<span>{bottomValue}%</span>
						</Label>
					</TableCell>
					<TableCell>
						<Label className="boldText">
							{data.exobj[showDataFor]?.Medium.user_name || 0}
							<br />
							<span>{bottomValue}%</span>
						</Label>
					</TableCell>
					<TableCell>
						<Label className="boldText">
							{data.userRole[0]?.users || 0}
							<br />
							<span>{bottomValue}%</span>
						</Label>
					</TableCell>
					<TableCell>
						<Label className="boldText">
							{data.exobj[showDataFor]?.Sensitive.user_name || 0}
							<br />
							<span>{bottomValue}%</span>
						</Label>
					</TableCell>
				</TableRow>

				{/* Row 4 */}
				<TableRow className="text-center">
					<TableCell>
						<Label className="font-bold">
							Company Codes
							<span className="newLine">{companycodes}</span>
							<span className="newLine">{0}%</span>
						</Label>
					</TableCell>

					<TableCell>
						<Label
							className="text-lg text-wrap"
							style={{ whiteSpace: "wrap", textAlign: "center" }}>
							<span
								className="m-0"
								style={{ display: "inline-block", textAlign: "center" }}>
								<UserPlus className="text-[#9E55FE]" />
							</span>
							Assigned roles leading to instances
						</Label>
					</TableCell>

					<TableCell>
						<Label className="boldText">
							<span>{data.exobj[showDataFor]?.High.role_name || 0}</span>
							<br />
							<span>{bottomValue}%</span>
						</Label>
					</TableCell>

					<TableCell>
						<Label className="boldText">
							<span>{data.exobj[showDataFor]?.Medium.role_name || 0}</span>
							<br />
							<span>{bottomValue}%</span>
						</Label>
					</TableCell>

					<TableCell>
						<Label className="boldText">
							<span>{data.userRole[0]?.roles || 0}</span>
							<br />
							<span>{bottomValue}%</span>
						</Label>
					</TableCell>

					<TableCell>
						<Label className="boldText">
							<span>{data.exobj[showDataFor]?.Sensitive.role_name || 0}</span>
							<br />
							<span>{bottomValue}%</span>
						</Label>
					</TableCell>
				</TableRow>

				{/* Row 5 */}
				<TableRow className="text-center">
					<TableCell>
						<Label className="font-bold">
							Roles Cosidered
							<span className="newLine">{data.totalRoles[1]?.roles || 0}</span>
							<span className="newLine">{0}%</span>
						</Label>
					</TableCell>

					<TableCell>
						<Label
							className="text-lg"
							style={{ whiteSpace: "nowrap", textAlign: "center" }}>
							<span
								className="m-0"
								style={{ display: "inline-block", textAlign: "center" }}>
								<ArrowUp10 className="text-[#3869E2]" />
							</span>
							Count of instances
						</Label>
					</TableCell>

					<TableCell>
						<Label className="boldText">
							<span>{data.exobj[showDataFor]?.High.instances || 0}</span>
							<br />
							<span>{bottomValue}%</span>
						</Label>
					</TableCell>

					<TableCell>
						<Label className="boldText">
							<span>{data.exobj[showDataFor]?.Medium.instances || 0}</span>
							<br />
							<span>{bottomValue}%</span>
						</Label>
					</TableCell>

					<TableCell>
						<Label className="boldText">
							<span>
								{Number(data.exobj[showDataFor]?.High.instances) +
									Number(data.exobj[showDataFor]?.Medium.instances) || 0}
							</span>
							<br />
							<span>{bottomValue}%</span>
						</Label>
					</TableCell>

					<TableCell>
						<Label className="boldText text-center">
							<span>{data.exobj[showDataFor]?.Sensitive.instances || 0}</span>
							<br />
							<span>{bottomValue}%</span>
						</Label>
					</TableCell>
				</TableRow>
			</Table>
		</Card>
	);
};

export default DataTable;
