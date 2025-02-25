import OrderForm from "../../components/OrderForm/OrderForm";
import StepsSection from "../../components/StepsSection/StepsSection";
import styles from "./styles.module.scss";

function PlanPage() {
    return (
        <main>
            {/* Start Hero Section */}
            <section
                className={`hero-section ${styles["hero-section"]} px-[5.3rem] py-[8.5rem]`}
            >
                <div className="hero-section-container lg:w-5/12 md:w-8/12  md:text-start text-center w-full">
                    <h2 className="font-fraunces font-black text-[3.7rem] mb-[1rem]">
                        Create plan
                    </h2>
                    <p className="font-barlow font-thin leading-7 text-[#fefcf7]">
                        Coffee the way you wanted it to be. For coffee delivered tomorrow,
                        or next week. For whatever brew method you use. For choice, for
                        convenience, for quality.
                    </p>
                </div>
            </section>
            {/* End Hero Section */}

            {/* Start Steps Section */}
            <section
                className={`steps-section ${styles["steps-section"]} my-[8em] py-[3.5rem] px-[5rem]`}
            >
                <StepsSection />
            </section>
            {/* End Steps Section */}

            {/* Start Order Form Section */}
            <section className="pb-[10em]">
                <OrderForm />
            </section>
            {/* End Order Form Section */}
        </main>
    );
}

export default PlanPage;
