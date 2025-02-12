import StepItem from "../StepItem/StepItem";
import { NavLink } from "react-router";
import Button from "../../components/Button/Button";
import styles from "./styles.module.scss";

function StepsSection() {
    return (
        <section
                className={`steps-section ${styles["steps-section"]} md:text-start text-center`}
            >
                <h4 className="font-fraunces text-[1.8rem] font-black mb-[5rem]">
                    How it works
                </h4>
                <div className="line-container hidden md:flex md:flex-row md:items-center md:max-w-[72%] md:mb-[3rem]">
                    <span className="border-2 border-[#0e8784] rounded-full h-[35px] w-[40px]"></span>
                    <span className="line w-[50%] h-[2px] block bg-[#fdd6ba]"></span>
                    <span className="border-2 border-[#0e8784] rounded-full h-[35px] w-[40px]"></span>
                    <span className="line w-[50%] h-[2px] block bg-[#fdd6ba]"></span>
                    <span className="border-2 border-[#0e8784] rounded-full h-[35px] w-[40px]"></span>
                </div>
                <div className="steps-wrapper flex md:flex-nowrap w-full flex-wrap md:items-start mb-[5rem] lg:w-[93%] md:justify-start lg:gap-[6.5rem] gap-[3rem] items-center justify-center">
                    <StepItem
                        className="md:w-4/12 w-full"
                        stepNumber={"01"}
                        title={"Pick your coffee"}
                        content={
                            "Select from our evolving range of artisan coffees. Our beans are ethically sourced and we pay fair prices for them. There are new coffees in all profiles every month for you to try out."
                        }
                    />
                    <StepItem
                        className="md:w-4/12 w-full"
                        stepNumber={"02"}
                        title={"Choose the frequency"}
                        content={
                            "Customize your order frequency, quantity, even your roast style and grind type. Pause, skip or cancel your subscription with no commitment through our online portal."
                        }
                    />
                    <StepItem
                        className="md:w-4/12 w-full"
                        stepNumber={"03"}
                        title={"Receive and enjoy!"}
                        content={
                            "We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning world-class coffees curated to provide a distinct tasting experience."
                        }
                    />
                </div>
                <NavLink to="/plan">
                        <Button>Create your plan</Button>
                    </NavLink>
            </section>
    )
}

export default StepsSection
