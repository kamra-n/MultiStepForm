import * as yup from "yup";
import { useFormik } from "formik";
import { useMultiStepForm } from "./useMultistepForm";
import { UserForm } from "./Forms/UserForm";
import { AddressForm } from "./Forms/AddressForm";
import { AccountsForm } from "./Forms/AccountsForm";
import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);

  const INITIAL_DATA = {
    firstName: "",
    lastName: "",
    age: "",
    street: "",
    city: "",
    state: "",
    zip: "",
    email: "",
    password: "",
  };

  let userNameSchema = yup.object().shape({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    age: yup.number().required().positive().integer(),
  });

  let accountsSchema = yup.object().shape({
    street: yup.string().required(),
    city: yup.string().required(),
    state: yup.string().required(),
    zip: yup.string().required(),
  });

  let accountCreation = yup.object().shape({
    email: yup.string().email(),
    password: yup.string().required(),
  });

  const { values, errors, handleChange, handleSubmit } = useFormik({
    initialValues: INITIAL_DATA,
    validationSchema:
      counter === 0
        ? userNameSchema
        : counter === 1
        ? accountsSchema
        : accountCreation,
    onSubmit: () => {
      if (!isLastStep) {
        setCounter(counter + 1);
        return next();
      } else {
        alert("submit daata Succesfully");
      }
    },
  });

  const { steps, step, currentStepIndex, isFirstStep, isLastStep, back, next } =
    useMultiStepForm([
      <UserForm {...values} handleChange={handleChange} errors={errors} />,
      <AddressForm {...values} handleChange={handleChange} errors={errors} />,
      <AccountsForm {...values} handleChange={handleChange} errors={errors} />,
    ]);
  console.log("finaldata", values);
  return (
    <div
      style={{
        position: "relative",
        background: "white",
        padding: "2rem",
        margin: "1rem",
        border: "1px solid black",
        borderRadius: ".5rem",
        fontFamily: "Arial",
        maxWidth: "500px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <form onSubmit={handleSubmit}>
        <div
          style={{
            position: "absolute",
            top: ".5rem",
            right: ".5rem",
          }}
        >
          {currentStepIndex + 1} / {steps.length}
        </div>
        {step}
        <div
          style={{
            marginTop: "1rem",
            display: "flex",
            justifyContent: "flex-end",
            gap: ".5rem",
          }}
        >
          {!isFirstStep && (
            <button
              type="button"
              onClick={() => {
                back(), setCounter(counter - 1);
              }}
            >
              Back
            </button>
          )}
          <button type="sumbit">{isLastStep ? "Finish" : "Next"}</button>
        </div>
      </form>
    </div>
  );
}

export default App;
