import { Dispatch, SetStateAction } from "react";

type SidebarContextType = {
	isSidebarCollapsed: boolean;
	setSidebarCollapsed: Dispatch<SetStateAction<boolean>>;
};

type SignInFormData = {
	Username: string;
	Password: string;
	rememberMe?: boolean;
};

type checkUser = {
	Username: string;
};

type logInData = {
	CustId: number;
	Username: string;
	Password: string;
};

type SoDData = {
	Level: string;
	sod_risk_id: string;
	sod_rule: string;
	business_process: string;
	sod_risk_rating: string;
	org_level: string;
	org_value: string;
	can_do_users: string;
	diddo_users: string;
	breach_count: string;
	breach_value: string;
	local_currency: string;
	raw_json: string;
};

type levels = {
	Level: string;
};

type ERP = {
	ERP: string;
};

type CanDovsDidDoDataApiResponse = {
	diddoData: SoDData[];
	erps: ERP[];
	levels: levels[];
};

type transactionDetailsTypes = {
	USERS: string;
	Vendor: string;
	Customer_Invoice_Number: string;
	Clearing_document: string;
	Clearing_Date: string;
	Document_type: string;
	Invoice_Creation_Date: string;
	Posting_Key: string;
	Invoice_Posting_Date: string;
	Company_Code: string;
	Line_item: string;
	Valuated_amount: number;
	Amount_in_local_currency: number;
	Local_Currency: string;
	Net_due_date: string;
	Fiscal_Year: string;
	Account_Type: string;
	Document_currency: string;
	GL_Account: string;
};

type UserRole = {
	users: string;
	roles: string;
	sync_id: number;
};

type MstObjItem = {
	High: {
		rules: number;
		SOD_RISK_RATING: string;
		TYPE_OF_VIOLATION: string;
		POLICY_ID: string;
		sync_id: number;
	};
	Medium: {
		rules: number;
		SOD_RISK_RATING: string;
		TYPE_OF_VIOLATION: string;
		POLICY_ID: string;
		sync_id: number;
	};
	Sensitive: {
		rules: number;
		SOD_RISK_RATING: string;
		TYPE_OF_VIOLATION: string;
		POLICY_ID: string;
		sync_id: number;
	};
};

type ExObjItem = {
	sod_name: string;
	user_name: string;
	role_name: string;
	instances: string;
	risk_rating: string;
	sync_id: string;
};

type ExDataItem = {
	BUSINESS_PROCESS: string;
	count: string;
	sync_id: string;
};

type RoleConflictsItem = {
	[key: string]: {
		type_of_role_conflict: string;
		COUNT: string;
		sync_id: string;
	};
};

type TotalActiveUsersItem = {
	USER_DISPLAY_NAME: number;
};

type EmployeesUsersItem = {
	USER_DISPLAY_NAME: number;
};

type OtherUsersItem = {
	USER_DISPLAY_NAME: number;
};

type CompanyCodesItem = {
	bu_name: number;
};

type TotalUsersItem = {
	users: number;
	sync_id: string;
};

type NonDialogUsersItem = {
	users: number;
	sync_id: string;
};

type DialogUsersItem = {
	users: number;
	sync_id: string;
};

type TotalRolesItem = {
	roles: number;
	sync_id: string;
};

type DrillItem = {
	IRM_BI_SYNC_ID: number;
	table: string;
	last_sync_id: number;
	mst_last_sync_id: number;
	projectID: number;
};

type ApiResponse = {
	userRole: UserRole[];
	mstObj: {
		[key: number]: MstObjItem;
	};
	exobj: {
		[key: number]: {
			[key: string]: ExObjItem;
		};
	};
	exdata: {
		[key: number]: ExDataItem[];
	};
	role_conflicts: {
		[key: number]: RoleConflictsItem;
	};
	totalActiveUsers: TotalActiveUsersItem[];
	employessUsers: EmployeesUsersItem[];
	otherUsers: OtherUsersItem[];
	companyCodes: CompanyCodesItem[];
	totalusers: TotalUsersItem[];
	nonDialogUsers: NonDialogUsersItem[];
	dialogUsers: DialogUsersItem[];
	totalRoles: TotalRolesItem[];
	erp: string;
	drill: DrillItem;
};

type candoDataType = {
	BUSINESS_PROCESS: string;
	sod_name: string;
	risk_description: string;
	SOD_RISK_RATING: string;
	can_do_users: string;
	role_name: string;
	xx_row_id: string;
	conflict_type: string;
};

type canDoDetailsDataApiResponse = {
	BUSINESS_PROCESS: string;
	risk_level: string;
	sod_name: string;
	user_display: string;
	function_name: string;
	role_name: string;
	role_conflict_type: string;
	transaction_code: string;
	incident_path: string;
	function_name2: string;
	conflicting_role_leg2: string;
	transaction_code2: string;
	conflict_type: string;
	org_level: string;
	org_value: string;
};

type CanDoSummaryDataApiResponse = {
	CanDoSummaryDataApiResponse: candoDataType[];
};

export type {
	CanDoSummaryDataApiResponse,
	ApiResponse,
	CanDovsDidDoDataApiResponse,
	SoDData,
	levels,
	ERP,
	transactionDetailsTypes,
	SignInFormData,
	SidebarContextType,
	checkUser,
	logInData,
	UserRole,
	candoDataType,
	canDoDetailsDataApiResponse,
};
