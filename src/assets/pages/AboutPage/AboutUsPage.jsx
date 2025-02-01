import QuarterItem from "../../components/QuarterItem/QuarterItem";
import styles from "./styles.module.scss";

function AboutUsPage() {
    return (
        <main>
            {/* Start Hero Section */}
            <section
                className={`hero-section ${styles["hero-section"]} px-[5.3rem] py-[8.5rem]`}
            >
                <div className="hero-section-container lg:w-4/12 md:w-8/12  md:text-start text-center w-full">
                    <h2 className="font-fraunces font-black text-[2.8rem] mb-[1rem]">
                        About Us
                    </h2>
                    <p className="font-barlow font-thin leading-7">
                        Coffeeroasters began its journey of exotic discovery in 1999,
                        highlighting stories of coffee from around the world. We have since
                        been dedicated to bring the perfect cup - from bean to brew - in
                        every shipment.
                    </p>
                </div>
            </section>
            {/* End Hero Section */}

            {/* Start Commitment Section */}
            <section
                className={`commitment-section py-[6em] ${styles["commitment-section"]} flex justify-center items-center`}
            >
                <div className="commitment-container flex lg:flex-nowrap flex-wrap justify-center lg:items-center md:items-start items-center lg:gap-[7rem] md:gap-[3.5rem] gap-[1.5rem] lg:w-[78%] w-full">
                    <img
                        src="/public/images/about/desktop/image-commitment.jpg"
                        className={`commitemnt-img ${styles["commitemnt-img"]} lg:w-[36%] md:w-[34%] max-w-[65%]`}
                    />
                    <div
                        className={`content lg:w-7/12 md:w-6/12 w-full ${styles["content"]} md:text-start text-center`}
                    >
                        <h2 className="font-fraunces font-black lg:text-[2.5rem] text-[2rem] mb-[1rem]">
                            Our commitment
                        </h2>
                        <p className="font-barlow leading-[1.7rem]">
                            We’re built on a simple mission and a commitment to doing good
                            along the way. We want to make it easy for you to discover and
                            brew the world’s best coffee at home. It all starts at the source.
                            To locate the specific lots we want to purchase, we travel nearly
                            60 days a year trying to understand the challenges and
                            opportunities in each of these places. We collaborate with
                            exceptional coffee growers and empower a global community of
                            farmers through with well above fair-trade benchmarks. We also
                            offer training, support farm community initiatives, and invest in
                            coffee plant science. Curating only the finest blends, we roast
                            each lot to highlight tasting profiles distinctive to their native
                            growing region.
                        </p>
                    </div>
                </div>
            </section>
            {/* End Commitment Section */}

            {/* Start Quality Section */}
            <section
                className={`quality-section ${styles["quality-section"]} pt-[5.5em] pb-[2rem] pr-[3em] pl-[6em] relative mt-[7rem]`}
            >
                <div className="content-container flex lg:flex-nowrap flex-wrap justify-between relative">
                    <div className="content lg:max-w-[41.6667%] w-full md:text-start text-center lg:h-[24rem]">
                        <h2 className="font-fraunces text-[2.5rem] font-black mb-[1rem]">
                            Uncompromising quality
                        </h2>
                        <p className="font-barlow leading-[28px] font-thin">
                            Although we work with growers who pay close attention to all
                            stages of harvest and processing, we employ, on our end, a
                            rigorous quality control program to avoid over-roasting or baking
                            the coffee dry. Every bag of coffee is tagged with a roast date
                            and batch number. Our goal is to roast consistent, user-friendly
                            coffee, so that brewing is easy and enjoyable.
                        </p>
                    </div>
                    <div className="img-container flex justify-self-end">
                        <img
                            src="/public/images/about/desktop/image-quality.jpg"
                            className={`quality-img ${styles["quality-img"]}`}
                        />
                    </div>
                </div>
            </section>
            {/* End Quality Section */}

            {/* Start Headquarters Section */}
            <section className={`headquarter-section pt-[7em] pb-[2em] px-[5em]`}>
                <h4 className="font-fraunces text-[#83888f] font-black text-[1.8rem]">Our headquarters</h4>
                <div className="flex sm:flex-nowrap flex-wrap justify-between items-start justify-items-center mt-[1.8rem] lg:gap-0 gap-[1.8rem]">
                    <div className="sm:w-4/12 w-full">
                        <QuarterItem
                            continentImg={"/public/images/about/desktop/illustration-uk.svg"}
                            title={"United Kingdom"}
                            content={"68 Asfordby Rd, Alcaston, SY6 1YA, +44 1241 918425"}
                        />
                    </div>
                    <div className="sm:w-4/12 w-full">
                        <QuarterItem
                            continentImg={"/public/images/about/desktop/illustration-canada.svg"}
                            title={"Canada"}
                            content={"1528 Eglinton Avenue, Toronto, Ontario M4P 1A6, +1 416 485 2997"}
                        />
                    </div>
                    <div className="sm:w-4/12 w-full">
                        <QuarterItem
                            continentImg={"/public/images/about/desktop/illustration-australia.svg"}
                            title={"Australia"}
                            content={"36 Swanston Street, Kewell, Victoria, +61 4 9928 3629"}
                        />
                    </div>
                </div>
            </section>
            {/* End Headquarters Section */}
        </main>
    );
}

export default AboutUsPage;
