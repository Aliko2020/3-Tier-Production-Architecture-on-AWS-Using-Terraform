import * as Yup from "yup";


export const loginFormConfig = {
  initialValues: {
    email: "",
    password: "",
  },

  validationSchema: Yup.object({
    email: Yup.string()
      .email("Enter a valid email address")
      .required("Email is required"),

    password: Yup.string()
      .min(6, "Must be at least 6 characters")
      .required("Password is required"),
  }),
};



export const registerFormConfig = {
  initialValues: {
    name: "",
    email: "",
    password: "",
  },

  validationSchema: Yup.object({
    name: Yup.string()
      .min(3, "Must be at least 3 characters")
      .required("Name is required"),

    email: Yup.string()
      .email("Enter a valid email address")
      .required("Email is required"),

    password: Yup.string()
      .min(6, "Must be at least 6 characters")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
        "Must contain uppercase, lowercase, and a number"
      )
      .required("Password is required"),
  }),
};