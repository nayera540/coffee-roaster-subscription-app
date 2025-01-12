import styles from './styles.module.scss';

function CollectionItem({ imgSrc, title, content, itemName }) {
    return (
        <div className={`collection-item flex lg:flex-col md:flex-row flex-col lg:text-center items-center md:text-start text-center ${itemName} ${styles["collection-item"]} `}>
            <img src={imgSrc} alt={`${title} image`} className={`lg:w-[67%] w-[47%] h-full object-contain ${styles[itemName]}`} />
            <div className="item-content">
                <h3 className='item-title font-fraunces lg:text-[1.7rem] text-[2.5rem] font-black mt-[2rem]'>
                    {title}
                </h3>
                <p className='item-content font-barlow lg:text-[1rem] text-[1.2rem] pt-[1.5rem] lg:px-[1rem] px-[3rem] md:pr-[9rem] md:pl-0'>
                    {content}
                </p>
            </div>
        </div>
    )
}

export default CollectionItem
