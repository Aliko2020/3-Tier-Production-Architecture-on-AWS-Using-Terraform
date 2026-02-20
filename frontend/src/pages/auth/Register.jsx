import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import { registerUser } from "../../api/authApi";
import FormInput from "../../components/FormInput";
import { registerFormConfig } from "../../config/formikConfig";

const Register = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const formik = useFormik({
    ...registerFormConfig,
    onSubmit: async (values, { setSubmitting }) => {
      try {
        await registerUser(values.name, values.email, values.password);

        toast.success("Registration successful!", {
          position: "bottom-right",
          autoClose: 2000,
        });

        navigate("/login");
      } catch (err) {
        const message =
          err?.response?.data?.message || err?.message || "Registration failed";

        toast.error(message, { position: "bottom-right" });
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <div className="min-h-screen flex justify-center  text-gray-700">
      <form
        onSubmit={formik.handleSubmit}
        className="w-full max-w-md p-8 space-y-4  rounded-lg"
      >
        <h1 className="text-xl font-bold mb-8">Register</h1>

        <FormInput
          label="Full Name"
          name="name"
          placeholder="John Smith"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.name && formik.errors.name}
        />

        <FormInput
          label="Email"
          name="email"
          type="email"
          placeholder="johnsmith@gmail.com"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.email && formik.errors.email}
        />

        <FormInput
          label="Password"
          name="password"
          type={showPassword ? "text" : "password"}
          placeholder="Enter your password"
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
            formik.isSubmitting
              ? "bg-green-400 cursor-not-allowed"
              : "bg-green-600 hover:bg-green-700"
          }`}
        >
          {formik.isSubmitting ? (
            <div className="w-5 h-5 border-2 border-white rounded-full animate-spin mx-auto"></div>
          ) : (
            "Register"
          )}
        </button>

        <p className="text-sm text-center mt-4">
          Already have an account?{" "}
          <span
            onClick={() => navigate("/login")}
            className="text-green-600 cursor-pointer"
          >
            Log in
          </span>
        </p>
      </form>
    </div>
  );
};

export default Register;