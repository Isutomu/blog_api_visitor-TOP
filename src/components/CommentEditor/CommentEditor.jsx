// 3rd Party Modules
import { LuSendHorizontal } from "react-icons/lu";
import { useState } from "react";

// Local Modules
import styles from "./CommentEditor.module.css";
import { RiGitBranchFill } from "react-icons/ri";

// Exportable Container
const CommentEditor = () => {
  const [comment, setComment] = useState();
  const [progressStyling, setProgressStyling] = useState({
    height: "0%",
    backgroundColor: "rgb(0,0,255)",
  });
  const textLimit = 500; // characters limit for comment

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    const barProgress = e.target.value.length / textLimit;

    setComment(e.target.value);
    setProgressStyling({
      backgroundColor: `rgb(${barProgress * 255}, 0, ${
        255 - barProgress * 255
      })`,
      height: `${barProgress * 100}%`,
    });
  };

  return (
    <form
      className={styles.form}
      action=""
      onSubmit={handleSubmit}
    >
      <label
        className={styles.label}
        htmlFor="comment"
      >
        Add a comment
      </label>
      <div className={styles.comment}>
        <div className={styles.textProgress}>
          <textarea
            className={styles.input}
            type="text"
            name="comment"
            id="comment"
            placeholder="Type your comment here..."
            minLength={1}
            maxLength={textLimit}
            value={comment}
            onChange={handleChange}
          ></textarea>
          <span
            className={styles.textLimit}
            style={progressStyling}
          ></span>
        </div>
        <button
          className={styles.button}
          type="submit"
        >
          <LuSendHorizontal size="2rem" />
        </button>
      </div>
    </form>
  );
};

export default CommentEditor;
