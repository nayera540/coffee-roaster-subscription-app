import styles from './Button.module.scss';

function Button({children}) {
    return (
        <button className={`btn ${styles["btn"]} font-fraunces`}>
            {children}
        </button>
    )
}

export default Button
