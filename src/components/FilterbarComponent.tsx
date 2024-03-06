import {
	FilterBar,
	FilterGroupItem,
	MultiComboBox,
	MultiComboBoxItem,
	Title,
} from "@ui5/webcomponents-react";

const FilterbarComponent = () => {
	return (
		<>
			<FilterBar
				filterContainerWidth="13.125rem"
				header={<Title>Applied Filter</Title>}>
				<FilterGroupItem label="BUISNESS PROCESS">
					<MultiComboBox valueState="None">
						<MultiComboBoxItem text="Procure to Pay" />
						<MultiComboBoxItem text="Information Technology" />
						<MultiComboBoxItem text="Record to Report" />
						<MultiComboBoxItem text="Hire to Retire" />
						<MultiComboBoxItem text="Order to Cash" />
					</MultiComboBox>
				</FilterGroupItem>

				<FilterGroupItem label="WHITELISTED USERS">
					<MultiComboBox valueState="None">
						<MultiComboBoxItem text="Procure to Pay" />
						<MultiComboBoxItem text="Information Technology" />
						<MultiComboBoxItem text="Record to Report" />
						<MultiComboBoxItem text="Hire to Retire" />
						<MultiComboBoxItem text="Order to Cash" />
					</MultiComboBox>
				</FilterGroupItem>

				<FilterGroupItem label="RISK RATING">
					<MultiComboBox valueState="None">
						<MultiComboBoxItem text="Procure to Pay" />
						<MultiComboBoxItem text="Information Technology" />
						<MultiComboBoxItem text="Record to Report" />
						<MultiComboBoxItem text="Hire to Retire" />
						<MultiComboBoxItem text="Order to Cash" />
					</MultiComboBox>
				</FilterGroupItem>

				<FilterGroupItem label="WHITELISTED ROLES">
					<MultiComboBox valueState="None">
						<MultiComboBoxItem text="Procure to Pay" />
						<MultiComboBoxItem text="Information Technology" />
						<MultiComboBoxItem text="Record to Report" />
						<MultiComboBoxItem text="Hire to Retire" />
						<MultiComboBoxItem text="Order to Cash" />
					</MultiComboBox>
				</FilterGroupItem>

				<FilterGroupItem label="CHOOSE A LEVEL">
					<MultiComboBox valueState="None">
						<MultiComboBoxItem text="Procure to Pay" />
						<MultiComboBoxItem text="Information Technology" />
						<MultiComboBoxItem text="Record to Report" />
						<MultiComboBoxItem text="Hire to Retire" />
						<MultiComboBoxItem text="Order to Cash" />
					</MultiComboBox>
				</FilterGroupItem>

				<FilterGroupItem label="ORG LEVEL">
					<MultiComboBox valueState="None">
						<MultiComboBoxItem text="Procure to Pay" />
						<MultiComboBoxItem text="Information Technology" />
						<MultiComboBoxItem text="Record to Report" />
						<MultiComboBoxItem text="Hire to Retire" />
						<MultiComboBoxItem text="Order to Cash" />
					</MultiComboBox>
				</FilterGroupItem>
			</FilterBar>
		</>
	);
};

export default FilterbarComponent;
