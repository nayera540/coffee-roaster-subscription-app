import styles from './Button.module.scss';

function Button({children, isDisabled = false}) {
    return (
        <button className={`btn ${styles["btn"]} font-fraunces`} disabled={isDisabled}>
            {children}
        </button>
    )
}

export default Button
