const GenderCheckbox = ({ onCheckboxChange, selectedGender }) => {
	return (
		<div className="flex gap-4 justify-center mt-4">
			{/* Male */}
			<label
				className={`
					relative flex flex-col items-center justify-center
					w-28 h-24 rounded-2xl cursor-pointer
					border backdrop-blur-xl transition-all duration-300
					${
						selectedGender === "male"
							? "bg-blue-500/20 border-blue-400 shadow-lg shadow-blue-500/30 scale-105"
							: "bg-white/5 border-white/20 hover:bg-white/10"
					}
				`}
			>
				<input
					type="radio"
					name="gender"
					value="male"
					
					className="sr-only"
					checked={selectedGender === "male"}
					onChange={() => onCheckboxChange("male")}
				/>

				<span className="text-3xl mb-1">👨</span>
				<span
					className={`text-sm font-semibold ${
						selectedGender === "male" ? "text-white" : "text-gray-300"
					}`}
				>
					Male
				</span>
			</label>

			{/* Female */}
			<label
				className={`
					relative flex flex-col items-center justify-center
					w-28 h-24 rounded-2xl cursor-pointer
					border backdrop-blur-xl transition-all duration-300
					${
						selectedGender === "female"
							? "bg-pink-500/20 border-pink-400 shadow-lg shadow-pink-500/30 scale-105"
							: "bg-white/5 border-white/20 hover:bg-white/10"
					}
				`}
			>
				<input
					type="radio"
					name="gender"
					value="female"
					required
					className="sr-only"
					checked={selectedGender === "female"}
					onChange={() => onCheckboxChange("female")}
				/>

				<span className="text-3xl mb-1">👩</span>
				<span
					className={`text-sm font-semibold ${
						selectedGender === "female" ? "text-white" : "text-gray-300"
					}`}
				>
					Female
				</span>
			</label>
		</div>
	);
};

export default GenderCheckbox;
