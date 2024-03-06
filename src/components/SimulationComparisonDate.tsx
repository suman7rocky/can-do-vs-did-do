import {
	Button,
	DateTimePicker,
	FlexBox,
	Text,
} from "@ui5/webcomponents-react";
import getCurrentDatetime from "../utils/getCurrentDatetime";

const SimulationComparisonDate = () => {
	return (
		<FlexBox
			alignItems="End"
			justifyContent="End"
			className="gap-x-4 mr-10 mb-2 mt-3">
			<Text
				style={{
					fontSize: "1.5rem",
					fontWeight: "bold",
					textAlign: "center",
				}}
				className="text-center text-2xl">
				Simulation Comparison
			</Text>
			<Button
				design="Transparent"
				icon="navigation-left-arrow"></Button>
			<DateTimePicker
				onChange={function _a() {}}
				onInput={function _a() {}}
				onValueStateChange={function _a() {}}
				primaryCalendarType="Gregorian"
				value={getCurrentDatetime()}
				valueState="None"
			/>
			<DateTimePicker
				onChange={function _a() {}}
				onInput={function _a() {}}
				onValueStateChange={function _a() {}}
				primaryCalendarType="Gregorian"
				value={getCurrentDatetime()}
				valueState="None"
			/>
			<Button>Apply</Button>
			<Button
				className="rounded-full"
				design="Transparent"
				icon="refresh"></Button>
		</FlexBox>
	);
};

export default SimulationComparisonDate;
