import API from "./api";

export const registerUser = async (userData) => {
  try {
    const { data } = await API.post("/auth/register", userData);
    return { success: true, data };
  } catch (err) {
    return {
      success: false,
      message:
        err?.response?.data?.message || "Something went wrong. Try again.",
    };
  }
};

export const loginUser = async (userData) => {
  try {
    const { data } = await API.post("/auth/login", userData);
    return { success: true, data };
  } catch (err) {
    return {
      success: false,
      message:
        err?.response?.data?.message || "Invalid credentials",
    };
  }
};
