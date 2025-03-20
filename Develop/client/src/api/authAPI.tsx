import { UserLogin } from "../interfaces/UserLogin";

const login = async (userInfo: UserLogin) => {
  console.log("Login function called with:", userInfo);  // Debugging log

  // TODO: make a POST request to the login route
  try {
    const response = await fetch("http://localhost:3001/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userInfo),
    });
    if (!response.ok) {
      const errorMessage = await response.text(); // Get error message from server
      throw new Error(`Login failed: ${errorMessage || "Check credentials"}`);
    }

    const data = await response.json();
    console.log("Login response from server:", data);
    
    if (data.token) {
      localStorage.setItem("token", data.token);  // Store the token in localStorage
      console.log("Token saved in localStorage:", localStorage.getItem("token")); 
      return data;
    } else {
      throw new Error("No token returned from server");
    }
  } catch (error) {
    console.error("Error loggin in:", error);
    return null;
  }
};



export { login };
