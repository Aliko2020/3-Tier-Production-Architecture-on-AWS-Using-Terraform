import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { loginUser } from "../api/authApi";

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const data = await loginUser(email, password);
            localStorage.setItem("token", data.token);
            localStorage.setItem("user", JSON.stringify({ email }));
            navigate("/userdashboard");
        } catch (err) {
            alert(err.message);
        }
    };

    return (
        <div className="min-h-screen flex justify-center">
            <div className="w-full max-w-md p-8 mt-4 bg-white rounded-lg shadow-sm">
                <h1 className="text-lg font-bold text-gray-700 mb-6 flex items-center gap-2">
                    Login
                </h1>

                <form onSubmit={handleSubmit} className="space-y-4 max-w-xs">
                    {/* Email */}
                    <div>
                        <label className="block text-gray-700 text-sm font-medium mb-1">
                            Email
                        </label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Johnsmith@gmail.com"
                            required
                            className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                    </div>

                    {/* Password with toggle */}
                    <div>
                        <label className="block text-gray-700 text-sm font-medium mb-1">
                            Password
                        </label>
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 pr-10"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 top-1/2 mt-1 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none"
                            >
                                {showPassword ? (
                                    <AiOutlineEye size={20} />
                                ) : (
                                    <AiOutlineEyeInvisible size={20} />
                                )}
                            </button>
                        </div>
                    </div>

                    {/* Submit and register link */}
                    <div className="flex flex-col justify-center items-center gap-4 mt-4">
                        <button
                            type="submit"
                            className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition w-full"
                        >
                            Login
                        </button>

                        <p className="text-sm text-gray-500 text-center">
                            Don't have an account?{" "}
                            <span
                                onClick={() => navigate("/register")}
                                className="text-green-600 cursor-pointer hover:underline"
                            >
                                Register
                            </span>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
