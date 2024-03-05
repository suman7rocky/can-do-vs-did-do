const getCurrentDatetime = (): string => {
	const date: Date = new Date();
	let hours: number = date.getHours();
	const period: string = hours < 12 ? "AM" : "PM";

	hours = hours % 12;
	hours = hours ? hours : 12;

	const datetime: string =
		(date.getDate() < 10 ? "0" : "") +
		date.getDate() +
		"/" +
		(date.getMonth() + 1 < 10 ? "0" : "") +
		(date.getMonth() + 1) +
		"/" +
		date.getFullYear() +
		" " +
		(hours < 10 ? "0" : "") +
		hours +
		":" +
		(date.getMinutes() < 10 ? "0" : "") +
		date.getMinutes() +
		":" +
		(date.getSeconds() < 10 ? "0" : "") +
		date.getSeconds() +
		" " +
		period;

	return datetime;
};

export default getCurrentDatetime;
