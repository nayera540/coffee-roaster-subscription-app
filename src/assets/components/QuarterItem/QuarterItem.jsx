import styles from "./styles.module.scss";

function QuarterItem({continentImg, title, content}) {
    return (
        <div className={`quarter-item`}>
            <img src={continentImg} alt="headquarter img" />
            <h2>
                {title}
            </h2>
            <p>
                {content}
            </p>
        </div>
    )
}

export default QuarterItem
