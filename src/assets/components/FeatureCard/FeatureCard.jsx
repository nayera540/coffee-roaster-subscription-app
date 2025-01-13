import styles from "./styles.module.scss"

function FeatureCard({icon, title, content}) {
    return (
        <div className={`feature-card ${styles["feature-card"]} flex lg:flex-col md:flex-row flex-col items-center w-full justify-center lg:text-center md:text-start text-center`}>
            <img src={icon} alt={`${title} icon`} className=" object-contain"/>
            <div className="card-body flex flex-col justify-center">
                <h3 className="pt-[3rem]">
                    {title}
                </h3>
                <p className="pt-[1.5rem]">
                    {content}
                </p>
            </div>
        </div>
    )
}

export default FeatureCard
