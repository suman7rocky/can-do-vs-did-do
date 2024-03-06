import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
	Button,
	CheckBox,
	Form,
	FormGroup,
	FormItem,
	Input,
	Loader,
} from "@ui5/webcomponents-react";
import "@ui5/webcomponents/dist/features/InputElementsFormSupport.js";
import { setCookie } from "../lib/setCookie";
import logIn from "../lib/login";
import { SignInFormData } from "../utils/types";

type SignInProps = {
	setIsLoggedIn: (isLoggedIn: boolean) => void;
};

const SignIn = ({ setIsLoggedIn }: SignInProps) => {
	const [rememberMe, setRememberMe] = useState<boolean>(false);
	const [error, setError] = useState<string | null>(null);
	const [loading, setLoading] = useState<boolean>(false);

	const signInSchema = z.object({
		Username: z
			.string()
			.min(3, { message: "Username must be at least 3 characters" }),
		Password: z.string().min(1, { message: "Please enter your Password" }),
		rememberMe: z.boolean().optional(),
	});

	type ValidationSchemaType = z.infer<typeof signInSchema>;

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<ValidationSchemaType>({
		resolver: zodResolver(signInSchema),
	});

	const onSubmit: SubmitHandler<SignInFormData> = async (data) => {
		const UserID = Number(import.meta.env.VITE_CUSTID);

		const loginValues = {
			CustId: UserID,
			Username: data.Username,
			Password: data.Password,
		};

		const logInData = await logIn(loginValues, setError, setLoading);
		if (!logInData) return;

		const token = logInData?.token;
		setCookie("authToken", token, 7);

		const userdetails = {
			user: logInData.fullname,
			custID: UserID,
			email: logInData.email,
			firstName: logInData?.firstname,
			lastName: logInData?.lastname,
			id: logInData.id,
			username: logInData?.username,
		};
		localStorage.setItem("userdetails", JSON.stringify(userdetails));
		setLoading(false);
		setIsLoggedIn(true);
	};

	return (
		<div className="h-svh w-full flex justify-center items-center">
			<div className="rounded-xl p-6">
				<div>
					{error && <div className="text-red-500 text-center">{error}</div>}
					{loading && <Loader progress={60} />}
				</div>
				<Form
					style={{
						backgroundColor: "var(--sapBackgroundColor)",
					}}
					className="w-[60rem] border border-gray-200 rounded-xl p-6"
					onSubmit={handleSubmit(onSubmit)}
					titleText="Sign In Form">
					<FormGroup titleText="Login Details">
						<FormItem label="Username">
							<Input
								type="Text"
								value="irmbot1"
								readonly
								className="mb-6 w-[50%]"
								{...register("Username")}
							/>
							{errors.Username && (
								<span className="text-red-500 text-center block">
									{errors.Username.message}
								</span>
							)}
						</FormItem>
						<FormItem label="Password">
							<Input
								readonly
								className="mb-6 w-[50%]"
								value={`${import.meta.env.VITE_LOGIN_PASS}`}
								type="Password"
								{...register("Password")}
							/>
							{errors.Password && (
								<span className="text-red-500 text-center block">
									{errors.Password.message}
								</span>
							)}
						</FormItem>
						<FormItem label="Remember me">
							<CheckBox
								checked={rememberMe}
								onChange={(event) => setRememberMe(event.target.checked)}
							/>
						</FormItem>
						<Button
							disabled={loading}
							design="Default"
							type="Submit"
							className="bg-blue-500 text-white  rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
							Sign In
						</Button>
					</FormGroup>
				</Form>
				L
			</div>
		</div>
	);
};

export default SignIn;
