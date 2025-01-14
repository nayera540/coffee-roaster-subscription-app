import styles from './styles.module.scss';

function StepItem({stepNumber, title, content}) {
    return (
        <div className={`steps-item pr-[2rem]`}>
            <div className="step-number">
                <span className='font-fraunces text-[#fdd6ba] font-black text-[4.5rem]'>
                    {stepNumber}
                </span>
            </div>
            <div className="step-body">
                <h3 className='font-fraunces text-[#333d4b] font-black text-[2rem]'>
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
