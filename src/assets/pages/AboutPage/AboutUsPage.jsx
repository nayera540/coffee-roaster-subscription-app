import styles from "./styles.module.scss";

function AboutUsPage() {
    return (
        <main>
            {/* Start Hero Section */}
            <section className={`hero-section ${styles["hero-section"]} px-[5.3rem] py-[8.5rem]`}>
                <div className="hero-section-container lg:w-4/12 md:w-8/12  md:text-start text-center w-full">
                    <h2 className="font-fraunces font-black text-[2.8rem] mb-[1rem]">About Us</h2>
                    <p className="font-barlow font-thin leading-7">
                        Coffeeroasters began its journey of exotic discovery in 1999,
                        highlighting stories of coffee from around the world. We have since
                        been dedicated to bring the perfect cup - from bean to brew - in
                        every shipment.
                    </p>
                </div>
            </section>
            {/* End Hero Section */}
        </main>
    );
}

export default AboutUsPage;
