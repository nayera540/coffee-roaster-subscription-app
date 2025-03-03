import { useState, useEffect } from "react";
import styles from "./ScrollTopButton.module.scss";

function ScrollTopButton() {
    const [showBtn, setShowBtn] = useState(false);

    useEffect(() => {
        const handleScrollToTopButtonVisiblity = () => {
            window.scrollY > 500 ? setShowBtn(true) : setShowBtn(false);
        };
        window.addEventListener("scroll", handleScrollToTopButtonVisiblity);
        return () => {
            window.removeEventListener("scroll", handleScrollToTopButtonVisiblity);
        };
    }, []);

    function handleScrollTop() {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    return (
        <button className={`scroll-top-btn fixed bottom-[15%] right-[6%] ${showBtn ? "opacity-100 visible" : "opacity-0 invisible"} ${styles["scroll-top-btn"]}`} onClick={() => handleScrollTop()}>
            <img src="/images/goToTopArrow.svg" alt="scroll top icon" className="h-[48px] w-[48px]" />
        </button>
    )
}

export default ScrollTopButton
