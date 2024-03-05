import { SetStateAction } from "react";
import { logInData } from "../utils/types";
import axios from "axios";

const logIn = async (
	data: logInData,
	setError: {
		(value: SetStateAction<string | null>): void;
		(arg0: string): void;
	},
	setLoading: { (value: SetStateAction<boolean>): void; (arg0: boolean): void }
) => {
	try {
		setLoading(true);
		const response = await axios.post(
			`${import.meta.env.VITE_BASE_LOGIN_URL}/api/auth/login`,
			{
				CustId: data.CustId,
				Username: data.Username,
				Password: data.Password,
			},
			{
				headers: {
					"Content-Type": "application/json",
				},
			}
		);
		return response.data;
	} catch (error) {
		setLoading(false);
		setError("Invalid Username or Password");
		console.error(error);
		return null;
	}
};

export default logIn;
