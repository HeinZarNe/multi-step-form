import React from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";

const StepOne = () => {
  const navigate = useNavigate();
  // Define input, label, and group styles
  const input =
    "border-2 border-stone-300 px-4 py-1 rounded-md w-full focus-visible:outline-primary md:text-lg";
  const label = "text-sm font-bold text-primary md:text-lg";
  const group = "flex flex-col w-full font-bold";

  // Define validation function
  const validate = (values) => {
    const errors = {};
    if (!values.name) {
      errors.name = "Required";
    }
    if (!values.email) {
      errors.email = "Required";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = "Invalid email address";
    }
    if (!values.phone) {
      errors.phone = "Required";
    } else if (!/^\+?\d{1,3}[- ]?\d{3,4}[- ]?\d{4}$/.test(values.phone)) {
      errors.phone = "Invalid phone number";
    }
    return errors;
  };

  // Use formik hook to handle form and validation
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
    },
    validateOnChange: true,
    validate,
    onSubmit: (values) => {
      navigate("/2");
    },
  });

  const { values, errors, touched, handleChange, handleSubmit } = formik;

  return (
    <div className=" flex flex-col gap-3 rounded-lg bg-white text-primary md:h-full md:justify-between md:pb-0 ">
      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-1">
          <span className="w-full text-start text-2xl font-bold md:text-3xl">
            Personal info
          </span>
          <span className="text-md text-gray md:text-lg">
            Please provide your name, email, address, and your phone number.
          </span>
        </div>
        <form
          className="flex flex-col items-start gap-5"
          onSubmit={handleSubmit}
        >
          <div className={group}>
            <label className={label}>Name</label>
            <input
              className={input}
              required
              type="text"
              name="name"
              placeholder="e.g. Tom"
              value={values.name}
              onChange={handleChange}
            />
            <span className="font-md text-sm text-red-500">
              {errors.name && touched.name && <div>{errors.name}</div>}
            </span>
          </div>
          <div className={group}>
            <label className={label}>Email</label>
            <input
              type="email"
              required
              name="email"
              className={input}
              placeholder="e.g. tom@gmail.com"
              value={values.email}
              onChange={handleChange}
            />
            <span className="font-md text-sm text-red-500">
              {errors.email && touched.email && <div>{errors.email}</div>}
            </span>
          </div>
          <div className={group}>
            <label className={label}>Phone Number</label>
            <input
              className={input}
              name="phone"
              required
              type="number"
              placeholder="e.g. +1 23 456 789"
              value={values.phone}
              onChange={handleChange}
            />
            <span className="font-md text-sm text-red-500">
              {errors.phone && touched.phone && <div>{errors.phone}</div>}
            </span>
          </div>
        </form>
      </div>
      <div className="fixed bottom-0 left-0 flex w-full items-center  justify-between bg-white p-3 md:relative">
        <span></span>
        <button
          className="w-fit cursor-pointer select-none rounded-md bg-[#483EFF] p-3 font-bold text-white hover:bg-indigo-500"
          onClick={formik.handleSubmit}
        >
          Next Step
        </button>
      </div>
    </div>
  );
};

export default StepOne;

// Comments:
// 1. Define input, label, and group styles for consistency throughout the form.
// 2. Define validation function to validate form inputs.
// 3. Use formik hook to handle form and validation.
// 4. Handle form submission with onSubmit function
