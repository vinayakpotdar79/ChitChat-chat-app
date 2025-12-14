import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import GenderCheckbox from "./GenderPage";
import { AuthContext } from "../context/AuthContext";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { registerUser } from "../services/authService";

const SignUp = () => {
	const [inputs, setInputs] = useState({
		fullName: "",
		username: "",
		password: "",
		confirmPassword: "",
		gender: "",
	});

	const { login,loading } = useContext(AuthContext);
	const [showPassword, setShowPassword] = useState(false);
	const handleCheckboxChange = (gender) => {
		setInputs({ ...inputs, gender });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const data=await registerUser(inputs)
		console.log("Registered successfully!");
		await login(data)
	};

	return (
		<div className="flex items-center justify-center min-h-screen px-4">
			<div
				className="
					w-full max-w-md p-8
					rounded-2xl
					bg-white/10 backdrop-blur-xl
					border border-white/20
					shadow-2xl
					transition-all duration-300
					hover:shadow-blue-500/20
				"
			>
				<h1 className="text-3xl font-semibold text-center text-white mb-6">
					Sign Up <span className="text-blue-400">ChatApp</span>
				</h1>

				<form onSubmit={handleSubmit} className="space-y-4">
					{/* Full Name */}
					<div>
						<label className="label">
							<span className="text-sm text-gray-300">Full Name</span>
						</label>
						<input
							type="text"
							placeholder="John Doe"
							className="
								w-full px-4 py-2
								rounded-xl
								bg-white/10 text-white
								placeholder-gray-600
								border border-white/20
								focus:outline-none focus:ring-2 focus:ring-blue-400
							"
							value={inputs.fullName}
							onChange={(e) =>
								setInputs({ ...inputs, fullName: e.target.value })
							}
						/>
					</div>

					{/* Username */}
					<div>
						<label className="label">
							<span className="text-sm text-gray-300">Username</span>
						</label>
						<input
							type="text"
							placeholder="johndoe"
							className="
								w-full px-4 py-2
								rounded-xl
								bg-white/10 text-white
								placeholder-gray-600
								border border-white/20
								focus:outline-none focus:ring-2 focus:ring-blue-400
							"
							value={inputs.username}
							onChange={(e) =>
								setInputs({ ...inputs, username: e.target.value })
							}
						/>
					</div>

					{/* Password */}
					<div>
						<label className="label text-sm text-gray-300">Password</label>

						<div className="relative">
							<input
								type={showPassword ? "text" : "password"}
								placeholder="••••••••"
								className="
									w-full px-4 py-2 pr-12 rounded-xl
									bg-white/10 text-white
									placeholder-gray-400
									border border-white/20
									focus:outline-none focus:ring-2 focus:ring-blue-400
								"
								value={inputs.password}
								onChange={(e) =>
								setInputs({ ...inputs, password: e.target.value })
									}	/>

							<button
								type="button"
								onClick={() => setShowPassword(!showPassword)}
								className="
									absolute right-3 top-1/2 -translate-y-1/2
									text-gray-400 hover:text-blue-400
									transition-colors
								"
							>
								{showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
							</button>
						</div>
					</div>

					{/* Confirm Password */}
					<div>
						<label className="label">
							<span className="text-sm text-gray-300">Confirm Password</span>
						</label>
						<input
							type="password"
							placeholder="••••••••"
							className="
								w-full px-4 py-2
								rounded-xl
								bg-white/10 text-white
								placeholder-gray-400
								border border-white/20
								focus:outline-none focus:ring-2 focus:ring-blue-400
							"
							value={inputs.confirmPassword}
							onChange={(e) =>
								setInputs({ ...inputs, confirmPassword: e.target.value })
							}
						/>
					</div>

					{/* Gender */}
					<GenderCheckbox
						onCheckboxChange={handleCheckboxChange}
						selectedGender={inputs.gender}
					/>

					{/* Login Link */}
					<Link
						to="/login"
						className="text-sm text-gray-300 hover:text-blue-400 hover:underline block text-center"
					>
						Already have an account?
					</Link>

					{/* Button */}
					<button
						className="
							w-full mt-2 py-2 rounded-xl
							bg-blue-500/80 hover:bg-blue-500
							text-white font-medium
							transition-all duration-300
							disabled:opacity-60
						"
						disabled={loading}
					>
						{loading ? (
							<span className="loading loading-spinner"></span>
						) : (
							"Create Account"
						)}
					</button>
				</form>
			</div>
		</div>
	);
};

export default SignUp;
