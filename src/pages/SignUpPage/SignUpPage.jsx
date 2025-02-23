import { useState } from "react";
import { useNavigate } from "react-router-dom";
import fetchSignUp from "../../utils/backend/fetchSignUp";
import styles from "./SignUpPage.module.css";

const formFieldsList = [
  { name: "username", type: "text", minLength: "3", maxLength: "25" },
  { name: "email", type: "email", minLength: "13", maxLength: "40" },
  { name: "password", type: "password", minLength: "3", maxLength: "20" },
  {
    name: "confirm password",
    type: "password",
    minLength: "3",
    maxLength: "20",
  },
];

const capitalize = (name) => {
  const words = name.split(" ");
  const capitalizedWords = words.map(
    (word) => `${word.charAt(0).toUpperCase()}${word.slice(1)}`
  );

  return capitalizedWords.join(" ");
};

const FormField = ({ field }) => (
  <div className={styles.field}>
    <label
      className={styles.label}
      htmlFor={field.name}
    >
      {capitalize(field.name)}
    </label>
    <input
      className={styles.input}
      type={field.type}
      id={field.name}
      name={field.name}
      required={true}
      minLength={field.minLength}
      maxLength={field.maxLength}
    />
  </div>
);

export default function SignUpPage() {
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const formDataJSON = JSON.stringify(
      formFieldsList.reduce((acc, field) => {
        acc[field.name] = formData.get(field.name);
        return acc;
      }, {})
    );
    if (formData.get("password") !== formData.get("confirm password")) {
      setError("Passwords are different");
      return;
    }
    delete formDataJSON["confirm password"];

    const response = await fetchSignUp(formDataJSON);
    if (response.error) {
      setError(response.error.message);
      return;
    }

    navigate("/");
  };

  return (
    <main className={styles.main}>
      <span className={styles.error}>{error ? `❗${error}❗` : ""}</span>
      <h1 className={styles.h1}>Account Sign Up</h1>
      <form
        onSubmit={handleSubmit}
        className={styles.form}
      >
        {formFieldsList.map((field, index) => (
          <FormField
            key={index}
            field={field}
          />
        ))}
        <button
          className={styles.button}
          type="submit"
        >
          Sign up
        </button>
      </form>
    </main>
  );
}
