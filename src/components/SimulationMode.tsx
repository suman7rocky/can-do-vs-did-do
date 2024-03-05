import { Button, FlexBox, Text } from "@ui5/webcomponents-react";
import getCurrentDatetime from "../utils/getCurrentDatetime";

const SimulationMode = () => {
	const date = getCurrentDatetime();
	return (
		<FlexBox
			direction="Column"
			className="gap-2 mb-4">
			<Text style={{ fontSize: "1.12rem", fontWeight: "bold" }}>
				Simulation Date : {date}
			</Text>
			<FlexBox
				direction="Row"
				className="gap-x-3 ml-3">
				<Button design="Emphasized">Executive Summary</Button>
				<Button design="Default">SoD Analysis</Button>
				<Button design="Default">Sensitive Access Analysis</Button>
				<Button design="Default">Ruleset</Button>
			</FlexBox>
		</FlexBox>
	);
};

export default SimulationMode;
