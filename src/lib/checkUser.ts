import { checkUser } from "../utils/types";
import axios from "axios";

const checkUser = async (
	data: checkUser,
	setError: ((arg0: string) => void) | undefined,
	setLoading: ((arg0: boolean) => void) | undefined
) => {
	try {
		if (setLoading) {
			setLoading(true);
		}

		const response = await axios.post(
			`${import.meta.env.VITE_BASE_LOGIN_URL}/api/auth/userpresentcheck`,
			data,
			{
				headers: {
					"Content-Type": "application/json",
				},
			}
		);
		return response.data;
	} catch (error) {
		console.error("error from user check", error);
		if (setLoading) {
			setLoading(false);
		}
		if (setError) {
			setError("User not found. Please check username.");
		}
		return null;
	}
};

export default checkUser;
