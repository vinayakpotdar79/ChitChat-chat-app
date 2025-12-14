import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { loginUser } from "../services/authService";

const Login = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [showPassword, setShowPassword] = useState(false);

	const { loading, login } = useContext(AuthContext);

	const handleSubmit = async (e) => {
		e.preventDefault();
		const data=await loginUser({username,password})
		await login(data);
	};

	return (
		<div className="flex items-center justify-center min-h-screen px-4">
			<div
				className="
					w-full max-w-md p-8 rounded-2xl
					bg-white/10 backdrop-blur-xl
					border border-white/20 shadow-2xl
					hover:shadow-blue-500/20
					transition-all duration-300
				"
			>
				<h1 className="text-3xl font-semibold text-center text-white mb-6">
					Login <span className="text-blue-400">ChatApp</span>
				</h1>

				<form onSubmit={handleSubmit} className="space-y-4">
					{/* Username */}
					<div>
						<label className="label text-sm text-gray-300">Username</label>
						<input
							type="text"
							placeholder="johndoe"
							className="
								w-full px-4 py-2 rounded-xl
								bg-white/10 text-white
								placeholder-gray-400
								border border-white/20
								focus:outline-none focus:ring-2 focus:ring-blue-400
							"
							value={username}
							onChange={(e) => setUsername(e.target.value)}
						/>
					</div>

					{/* Password with Eye */}
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
								value={password}
								onChange={(e) => setPassword(e.target.value)}
							/>

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

					{/* Signup link */}
					<Link
						to="/signup"
						className="text-sm text-gray-300 hover:text-blue-400 hover:underline block text-center"
					>
						Don't have an account?
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
						{loading ? <span className="loading loading-spinner"></span> : "Login"}
					</button>
				</form>
			</div>
		</div>
	);
};

export default Login;
