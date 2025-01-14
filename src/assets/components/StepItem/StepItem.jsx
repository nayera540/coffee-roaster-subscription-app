import styles from './styles.module.scss';

function StepItem({stepNumber, title, content}) {
    return (
        <div className={`steps-item`}>
            <div className="step-number">
                <span>
                    {stepNumber}
                </span>
            </div>
            <div className="step-body">
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

export default StepItem
