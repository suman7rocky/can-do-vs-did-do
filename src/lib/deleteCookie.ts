import Cookies from "js-cookie";

export const deleteCookie = (cookieName: string): void => {
	Cookies.remove(cookieName);
};
