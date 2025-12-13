import jwt from "jsonwebtoken";

export const generateToken = (id,res) => {
  const token= jwt.sign(
    { id }, 
    process.env.JWT_SECRET,
     { expiresIn: "10d" });

	res.cookie("token", token, {
		maxAge: 10 * 24 * 60 * 60 * 1000, // 10days
		httpOnly: true, // prevent XSS attacks cross-site scripting attacks
		sameSite: "strict", // CSRF attacks cross-site request forgery attacks
		secure: process.env.NODE_ENV !== "development",
	});
};
