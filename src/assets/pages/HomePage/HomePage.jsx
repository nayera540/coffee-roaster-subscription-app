import { NavLink } from "react-router";
import styles from "./styles.module.scss";
import Button from "../../components/Button/Button";
import CollectionItem from "../../components/CollectionItem/CollectionItem";


function HomePage() {
    return (
        <main>
            {/* Start Hero Section */}
            <section className={`hero-section ${styles["hero-section"]} sm:py-[6.25rem] py-[5rem] px-[2rem] sm:px-[5.5rem] `}>
                <div className="hero-section--wrapper flex flex-col flex-nowrap xl:w-4/12 md:w-9/12 w-100">
                    <h2 className="hero-title font-fraunces font-black sm:text-[4.5rem] text-[2.4rem] text-[#ffff] leading-[4.5rem]">
                        Great coffee made simple.
                    </h2>
                    <p className="hero-content font-barlow text-[#ffff] sm:pt-[2rem] pt-[1rem] font-light leading-[1.7rem]">
                        Start your mornings with the world’s best coffees. Try our expertly curated artisan coffees from our best roasters delivered directly to your door, at your schedule.
                    </p>
                    <NavLink to='/plan' className="mt-[3rem]">
                        <Button>Create your plan</Button>
                    </NavLink>
                </div>
            </section>
            {/* End Hero Section */}

            {/* Start Collection Section */}
            <section className={`collection-section flex flex-col content-center ${styles["collection-section"]} py-[6em]`}>
                <h2 className="font-fraunces lg:text-[12rem] font-black text-center md:text-[9rem] text-[6rem] leading-[1]">
                    our collection
                </h2>
                <div className={`collection-wrapper ${styles["collection-wrapper"]} flex flex-wrap lg:flex-nowrap relative  w-full lg:bottom-[5rem] md:bottom-[3rem] xl:px-[5rem] lg:px-[5rem] bottom-0 gap-4`}>
                    <CollectionItem className="lg:w-3/12 w-full" imgSrc={"/images/home/desktop/image-gran-espresso.png"} itemName={"espresso"} title={"Gran Espresso"} content={"Light and flavorful blend with cocoa and black pepper for an intense experience."}/>
                    <CollectionItem className="lg:w-3/12 w-full" imgSrc={"/images/home/desktop/image-planalto.png"} itemName={"planalto"} title={"Planalto"} content={"Brazilian dark roast with rich and velvety body, and hints of fruits and nuts."}/>
                    <CollectionItem className="lg:w-3/12 w-full" imgSrc={"/images/home/desktop/image-piccollo.png"} itemName={"piccollo"} title={"Piccollo"} content={"Mild and smooth blend featuring notes of toasted almond and dried cherry."}/>
                    <CollectionItem className="lg:w-3/12 w-full" imgSrc={"/images/home/desktop/image-danche.png"} itemName={"danche"} title={"Danche"} content={"Ethiopian hand-harvested blend densely packed with vibrant fruit notes."}/>
                </div>
            </section>
            {/* End Collection Section */}
            {/* Start Features Section */}
            <section className={`features-section ${styles["features-section"]} py-[4em]`}>
                
            </section>
            {/* End Features Section */}
        </main>
    )
}

export default HomePage
