const getCookie = (name: string): string | undefined => {
	const cookies = document.cookie.split("; ");
	for (const cookie of cookies) {
		const [cookieName, cookieValue] = cookie.split("=");
		if (cookieName === name) {
			return cookieValue;
		}
	}
	return undefined;
};

export default getCookie;
