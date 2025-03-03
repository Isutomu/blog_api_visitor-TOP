import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import fetchLogIn from "../../utils/backend/fetchLogIn";
import styles from "./LogIn.module.css";
import isLogged from "../../utils/auth/isLogged";

const LogIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  if (isLogged()) {
    return <Navigate to="/dashboard" />;
  }

  const handleUsernameChange = ({ target }) => setUsername(target.value);
  const handlePasswordChange = ({ target }) => setPassword(target.value);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetchLogIn({ username, password });

    if (response.error) {
      setError(response.error.message);
      setPassword("");
      return;
    }

    const expirationInMlSeconds = response.expires * 1000;
    const timeNowInMlSeconds = new Date().getTime();
    const expires = new Date(timeNowInMlSeconds + expirationInMlSeconds);
    localStorage.setItem("token", response.token);
    localStorage.setItem("expires", expires);

    navigate("/");
  };

  return (
    <main className={styles.main}>
      <span className={styles.error}>{error ? `❗${error}❗` : ""}</span>
      <h1 className={styles.h1}>Account Login</h1>
      <form
        onSubmit={handleSubmit}
        className={styles.form}
      >
        <div className={styles.field}>
          <label
            htmlFor="username"
            className={styles.label}
          >
            Username
          </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
            className={styles.input}
            required={true}
            minLength={3}
            maxLength={25}
          />
        </div>
        <div className={styles.field}>
          <label
            htmlFor="password"
            className={styles.label}
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            className={styles.input}
            required={true}
            minLength={3}
            maxLength={20}
          />
        </div>
        <button className={styles.button}>Log in</button>
      </form>
    </main>
  );
};

export default LogIn;
