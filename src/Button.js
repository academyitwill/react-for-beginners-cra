import PropTypes from "prop-types";
import styles from "./Button.module.css";
function Button({ text }) {
    return (
        <div>
            <button
                className={`${styles.title} ${styles.btn}`} >{text}</button>
        </div>
    );
}
Button.propTypes = {
    text: PropTypes.string
}
export default Button;