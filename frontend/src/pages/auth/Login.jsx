import { useNavigate } from "react-router-dom";
import { loginUser } from "../../api/authApi";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import { loginFormConfig } from "../../config/formikConfig";
import FormInput from "../../components/FormInput";
import { useState } from "react";


const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const formik = useFormik({
    ...loginFormConfig,
    onSubmit: async (values, { setSubmitting }) => {
      try {
        const data = await loginUser(values.email, values.password);
        if (!data?.token) throw new Error("Authentication failed");

        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify({ email: values.email }));

        toast.success("Login successful!", { position: "bottom-right" });
        navigate("/userdashboard");
      } catch (err) {
        toast.error(err?.response?.data?.message || err.message || "Login failed", {
          position: "bottom-right",
        });
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <div className="min-h-screen flex justify-center text-gray-700">
      <form
        onSubmit={formik.handleSubmit}
        className="w-full max-w-sm p-8 space-y-4 rounded-lg"
      >
        <h1 className="text-xl font-semibold mb-8">Login</h1>

        <FormInput
          label="Email"
          name="email"
          type="email"
          placeholder="john@example.com"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.email && formik.errors.email}
        />

        <FormInput
          label="Password"
          name="password"
          type={showPassword ? "text" : "password"}
          placeholder="Enter password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.password && formik.errors.password}
          showPasswordToggle
          togglePassword={() => setShowPassword(!showPassword)}
        />

        <button
          type="submit"
          disabled={formik.isSubmitting}
          className={`w-full py-2 rounded-lg text-white ${
            formik.isSubmitting ? "bg-green-400 cursor-not-allowed" : "bg-green-600 hover:bg-green-700"
          }`}
        >
          {formik.isSubmitting ? "Logging in..." : "Login"}
        </button>

        <p className="text-sm">
          Don't have an account?{" "}
          <span
            onClick={() => navigate("/register")}
            className="text-green-600 cursor-pointer"
          >
            Register
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;