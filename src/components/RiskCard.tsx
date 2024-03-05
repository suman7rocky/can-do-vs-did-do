import {
	Card,
	CardHeader,
	Icon,
	Badge,
	ExpandableText,
} from "@ui5/webcomponents-react";
import { spacing } from "@ui5/webcomponents-react-base";

type RiskCardProps = {
	header: string;
	icon: string;
	risk: string;
	desciption: string;
};

const RiskCard = ({ header, icon, risk, desciption }: RiskCardProps) => {
	return (
		<Card
			className="cursor-pointer"
			header={
				<CardHeader
					avatar={<Icon name={icon} />}
					titleText={header}
					action={
						<Badge
							onClick={function _a() {}}
							colorScheme={
								Number(risk) >= 0 && Number(risk) <= 30
									? "8"
									: Number(risk) > 30 && Number(risk) <= 70
									? "1"
									: "2"
							}>
							Risk : {risk}
						</Badge>
					}
					interactive={true}
				/>
			}
			style={{
				width: "27rem",
				...spacing.sapUiTinyMargin,
			}}>
			<ExpandableText
				maxCharacters={100}
				className="text-center p-2">
				{desciption}
			</ExpandableText>
			{/* <div className="p-3 text-center">{desciption}</div> */}
		</Card>
	);
};

export default RiskCard;
