import { SetStateAction } from "react";
import { SignInFormData } from "../utils/types";
import axios from "axios";

const getUserID = async (
	data: SignInFormData,
	setError: {
		(value: SetStateAction<string | null>): void;
		(arg0: string): void;
	},
	setLoading: { (value: SetStateAction<boolean>): void; (arg0: boolean): void }
) => {
	try {
		setLoading(true);
		const response = await axios.post(
			`${import.meta.env.VITE_BASE_LOGIN_URL}/api/auth/customersnuserdefault`,
			data,
			{
				headers: {
					"Content-Type": "application/json",
				},
			}
		);
		return response.data;
	} catch (error) {
		console.error(error);
		setLoading(false);
		setError("Invalid Username or Password");
	}
};

export default getUserID;
