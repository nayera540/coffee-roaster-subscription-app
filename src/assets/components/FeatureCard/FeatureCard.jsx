import styles from "./styles.module.scss"

function FeatureCard({icon, title, content}) {
    return (
        <div className={`feature-card ${styles["feature-card"]}`}>
            <img src={icon} alt={`${title} icon`} />
            <div className="card-body">
                <h3>
                    {title}
                </h3>
                <p>
                    {content}
                </p>
            </div>
        </div>
    )
}

export default FeatureCard
