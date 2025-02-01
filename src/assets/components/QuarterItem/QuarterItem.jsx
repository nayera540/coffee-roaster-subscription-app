import styles from "./styles.module.scss";

function QuarterItem({ continentImg, title, content }) {

    const contentParts = content.split(",").map(part => part.trim());

    return (
        <div className={`quarter-item flex justify-items-center justify-center flex-col md:items-start items-center`}>
            <img src={continentImg} alt="headquarter img" />
            <h2 className="font-fraunces text-[#333d4b] mt-[2rem] text-[2rem] font-black mb-[1.5rem]">
                {title}
            </h2>
            <div className="font-barlow">
            {
                contentParts.map((part, index) => (
                    <p key={index}>{part},</p>
                ))
            }
            </div>
        </div>
    )
}

export default QuarterItem
