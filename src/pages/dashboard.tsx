import { DynamicPage } from "@ui5/webcomponents-react";
import { ThemingParameters } from "@ui5/webcomponents-react-base";
import FilterbarComponent from "../components/FilterbarComponent";
import SimulationComparisonDate from "../components/SimulationComparisonDate";
import SimulationMode from "../components/SimulationMode";
import ExecutiveSummary from "../components/ExecutiveSummary";
import CanDoSummary from "../components/CanDoSummary";
import CanDovsDidDoAnalysis from "../components/CanDovsDidDoAnalysis";

const Dashboard = () => {
	return (
		<DynamicPage
			headerContent={
				<>
					<SimulationComparisonDate />
					<FilterbarComponent />
				</>
			}
			style={{
				maxHeight: "91svh",
				borderRadius: ThemingParameters.sapButton_BorderCornerRadius,
			}}
			showHideHeaderButton={false}
			headerContentPinnable={false}>
			<SimulationMode />

			<ExecutiveSummary />

			<CanDoSummary />

			<CanDovsDidDoAnalysis />
		</DynamicPage>
	);
};

export default Dashboard;
