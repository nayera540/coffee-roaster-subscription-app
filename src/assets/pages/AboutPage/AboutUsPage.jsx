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
            <section className={`commitment-section py-[6em] ${styles["commitment-section"]} flex justify-center items-center`}>
                <div className="commitment-container flex lg:flex-nowrap flex-wrap justify-center lg:items-center md:items-start items-center lg:gap-[7rem] md:gap-[3.5rem] gap-[1.5rem] lg:w-[78%] w-full">
                    <img src="/public/images/about/desktop/image-commitment.jpg" className={`commitemnt-img ${styles["commitemnt-img"]} lg:w-[36%] md:w-[34%] max-w-[65%]`} />
                    <div className={`content lg:w-7/12 md:w-6/12 w-full ${styles["content"]} md:text-start text-center`}>
                        <h2 className="font-fraunces font-black lg:text-[2.5rem] text-[2rem] mb-[1rem]">Our commitment</h2>
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
        </main>
    );
}

export default AboutUsPage;
