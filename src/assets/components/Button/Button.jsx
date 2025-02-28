import styles from './Button.module.scss';

function Button({children, isDisabled = false, onClick}) {
    return (
        <button className={`btn ${styles["btn"]} font-fraunces`} disabled={isDisabled} onClick={!isDisabled? onClick: undefined}>
            {children}
        </button>
    )
}

export default Button
