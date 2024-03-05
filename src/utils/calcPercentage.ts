export const calcPercentage = (num: number, num2: number) => {
	const total = num + num2;

	const value = ((num / total) * 100).toFixed(2);
	return `${value}%`;
};
