import { NavLink } from "react-router";
import styles from "./styles.module.scss";
import Button from "../../components/Button/Button";


function HomePage() {
    return (
        <main>
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
        </main>
    )
}

export default HomePage
