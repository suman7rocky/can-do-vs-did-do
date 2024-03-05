import { Card, CardHeader } from "@ui5/webcomponents-react";
import { ThemingParameters, spacing } from "@ui5/webcomponents-react-base";
import { Monitor, ShoppingCart } from "lucide-react";

type DataCardProps = {
	header: string;
	icon: string;
	value: string;
};

const Iconmap: { [key: string]: JSX.Element } = {
	Monitor: <Monitor className="h-12 w-12 text-[#1AD5C3]" />,
	Cart: <ShoppingCart className="h-12 w-12 text-[#9747FF]" />,
};

const DataCard = ({ icon, header, value }: DataCardProps) => {
	return (
		<Card
			className="cursor-pointer"
			header={
				<CardHeader
					style={{
						fontSize: ThemingParameters.sapFontLargeSize,
					}}
					titleText={header}
					interactive={true}
				/>
			}
			style={{
				width: "27rem",
				...spacing.sapUiTinyMargin,
			}}>
			<div className="flex flex-row gap-x-2 justify-center items-center pb-4">
				<div className=" p-3 text-2xl">{Iconmap[icon]}</div>
				<div className="text-3xl font-extrabold"> {value}</div>
			</div>
		</Card>
	);
};

export default DataCard;
