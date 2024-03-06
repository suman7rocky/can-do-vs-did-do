import {
	Button,
	ComboBoxItem,
	FlexBox,
	MultiComboBox,
} from "@ui5/webcomponents-react";

type CanDoVSDidDoHeaderProps = {
	title?: string;
};

const CardHeader = ({ title }: CanDoVSDidDoHeaderProps) => {
	return (
		<div className="mb-3">
			{title && (
				<div className="p-4">
					<h3 className="text-xl font-bold">{title}</h3>
				</div>
			)}

			<FlexBox
				alignItems="Start"
				justifyContent="Start"
				className="pl-4 pb-2 gap-x-3">
				<Button
					design="Positive"
					icon="excel-attachment"
					onClick={function _a() {}}></Button>

				<MultiComboBox
					className="w-64"
					onChange={function _a() {}}
					onInput={function _a() {}}
					onSelectionChange={function _a() {}}
					valueState="None">
					<ComboBoxItem text="Procure to Pay" />
					<ComboBoxItem text="Information Technology" />
					<ComboBoxItem text="Record to Report" />
					<ComboBoxItem text="Hire to Retire" />
					<ComboBoxItem text="Order to Cash" />
				</MultiComboBox>
			</FlexBox>
		</div>
	);
};

export default CardHeader;
