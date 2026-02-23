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
      .min(6, "")
      .required("Password is required"),
  }),
};


export const registerFormConfig = {
  initialValues: {
    username: "",  
    email: "",
    password: "",
  },

  validationSchema: Yup.object({
    username: Yup.string()
      .min(3, "Enter a valid username")
      .required("Username is required"),

    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),

    password: Yup.string()
      .min(6, "Weak password")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
        "Must contain uppercase, lowercase and number"
      )
      .required("Password is required"),
  }),
};