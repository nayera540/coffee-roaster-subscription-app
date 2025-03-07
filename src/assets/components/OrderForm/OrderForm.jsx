import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { useEffect, useReducer, useRef, useState } from "react";
import styles from "./styles.module.scss";
import Button from "../Button/Button";
import OrderModal from "../Modal/OrderModal";

const order_options = {
    preference: {
        question: "How do you drink your coffee?",
        options: [
            {
                name: "Capsule",
                content: "Compatible with Nespresso systems and similar brewers",
            },
            {
                name: "Filter",
                content:
                    "For pour over or drip methods like Aeropress, Chemex, and V60",
            },
            {
                name: "Espresso",
                content:
                    "Dense and finely ground beans for an intense, flavorful experience",
            },
        ],
    },
    beanType: {
        question: "What type of coffee?",
        options: [
            {
                name: "Single Origin",
                content:
                    "Distinct, high quality coffee from a specific family-owned farm",
            },
            {
                name: "Decaf",
                content:
                    "Just like regular coffee, except the caffeine has been removed",
            },
            {
                name: "Blended",
                content:
                    "Combination of two or three dark roasted beans of organic coffees",
            },
        ],
    },
    quantity: {
        question: "How much would you like?",
        options: [
            {
                name: "250g",
                content:
                    "Perfect for the solo drinker. Yields about 12 delicious cups.",
            },
            {
                name: "500g",
                content:
                    "Perfect option for a couple. Yields about 40 delectable cups.",
            },
            {
                name: "1000g",
                content:
                    "Perfect for offices and events. Yields about 90 delightful cups.",
            },
        ],
    },
    grindOption: {
        question: "Want us to grind them?",
        options: [
            {
                name: "Wholebean",
                content: "Best choice if you cherish the full sensory experience",
            },
            {
                name: "Filter",
                content:
                    "For drip or pour-over coffee methods such as V60 or Aeropress",
            },
            {
                name: "Cafetiére",
                content: "Course ground beans specially suited for french press coffee",
            },
        ],
    },
    deliveries: {
        question: "How often should we deliver?",
        options: [
            {
                name: "Every week",
                price: 7.20,
                content: " per shipment. Includes free first-class shipping.",
            },
            {
                name: "Every 2 weeks",
                price: 9.60,
                content: " per shipment. Includes free priority shipping.",
            },
            {
                name: "Every month",
                price: 12.00,
                content: " per shipment. Includes free priority shipping.",
            },
        ],
    },

};

const initialState = {
    accordionOpen: [],
    selectedOptions: {
        preference: null,
        beanType: null,
        quantity: null,
        grindOption: null,
        deliveries: null,
    },
};

const deliveryPrices = {
    "250g": {
        "Every week": 7.20,
        "Every 2 weeks": 9.60,
        "Every month": 12.00
    },
    "500g": {
        "Every week": 13.00,
        "Every 2 weeks": 17.50,
        "Every month": 22.00
    },
    "1000g": {
        "Every week": 22.00,
        "Every 2 weeks": 32.00,
        "Every month": 42.00
    }
};


function reducer(state = initialState, action) {
    switch (action.type) {
        case "toggle_accordion":
            return {
                ...state,
                accordionOpen: state.accordionOpen.includes(action.payload)
                    ? state.accordionOpen.filter((key) => key !== action.payload)
                    : [...state.accordionOpen, action.payload],
            };
        case "add_order_details": {
            const { category, name } = action.payload;
            let updatedOptions = { ...state.selectedOptions, [category]: name };
            if(category === "quantity"){
                order_options.deliveries.options = Object.keys(deliveryPrices[name]).map(freq => ({
                    name: freq,
                    price: deliveryPrices[name][freq],
                    content: " per shipment. Includes free shipping."
                }));
            }
            return {
                ...state,
                selectedOptions: updatedOptions
            };
        }
        case "clear_order":
            return state = initialState;
        default:
            return state;
    }
}

function formatKey(key) {
    return key
        .replace(/([A-Z])/g, " $1")
        .replace(/^./, (str) => str.toUpperCase());
}

function areAllOptionsSelected(options) {
    return Object.values(options).every(value => value !== null);
}

function OrderForm() {
    const [openModal, setOpenModal] = useState(false);
    const [state, dispatch] = useReducer(reducer, initialState);
    const accordionRefs = useRef({});

    function handleAccordion(key) {
        dispatch({ type: "toggle_accordion", payload: key });

        setTimeout(() => {
            accordionRefs.current[key]?.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }, 100);
    }

    function handleOrderDetails(name, category) {
        dispatch({
            type: "add_order_details",
            payload: { category: category, name: name },
        });
    }


    return (
        <div className="order-container flex lg:flex-nowrap gap-[8rem] flex-wrap w-full">
            <div className="lg:w-[15%] lg:sticky lg:top-[50px] lg:block hidden h-fit max-h-[80vh] overflow-y-auto options-headers">
                {Object.keys(order_options).map((key, index) => (
                    <p
                        key={key}
                        className={`option-title hover:cursor-pointer font-fraunces font-black ${state.accordionOpen.includes(key) ? "text-[#83888f]" : "text-[#d5d5d4]"} text-[1.4rem] border-b-[1px] my-[1.7rem] pb-[1rem]`}
                        onClick={() => handleAccordion(key)}
                    >
                        <span className="option-number mr-[1.7rem]">
                            {String(index + 1).padStart(2, "0")}
                        </span>
                        {formatKey(key)}
                    </p>
                ))}
            </div>
            <div className="lg:w-9/12 w-full">
                {Object.keys(order_options).map((category) => (
                    <Accordion 
                        key={category}
                        ref={(el) => (accordionRefs.current[category] = el)}
                        className="!bg-transparent !shadow-none !border-none !static"
                        expanded={state.accordionOpen.includes(category)}
                        onChange={() => handleAccordion(category)}
                    >
                        <AccordionSummary
                            expandIcon={
                                <img src="/public/images/plan/desktop/icon-arrow.svg" />
                            }
                            className="!p-0"
                            aria-controls={`${category}-panel`}
                            id={`${category}-header`}
                        >
                            <Typography
                                component="span"
                                className={`!font-fraunces !font-black md:!text-[3rem] !text-[2.4rem]  ${state.accordionOpen.includes(category)
                                    ? "text-[#83888f]"
                                    : "text-[#d5d5d4]"
                                    }`}
                            >
                                {order_options[category].question}
                            </Typography>
                        </AccordionSummary>
                        <div className="option-details flex md:flex-row flex-col gap-10">
                            {order_options[category].options.map((options, index) => (
                                <div
                                    key={index}
                                    className={`options-content flex flex-col md:items-start items-center rounded-md py-[2rem] px-[1.75rem] md:h-[16rem] h-fit w-full md:max-w-fit ${state.selectedOptions[category] === options.name
                                        ? "bg-[#0e8784] text-white"
                                        : "bg-[#f4f1eb] hover:bg-[#fdd6ba] text-[#333d4b]"
                                        } duration-300  hover:cursor-pointer`}
                                    onClick={() => handleOrderDetails(options.name, category)}
                                >
                                    <AccordionDetails className="font-fraunces  text-[1.5rem] font-black">
                                        {options.name}
                                    </AccordionDetails>
                                    <AccordionDetails>{options.price? `$${options.price.toFixed(2)} ${options.content}`: options.content}</AccordionDetails>
                                </div>
                            ))}
                        </div>
                    </Accordion>
                ))}
                <div className={`order_summary ${styles["order_summary"]}`}>
                    <p className="summary-title font-barlow uppercase font-thin text-[#fff] opacity-[0.5037] mb-[1rem]">order summary</p>
                    <p className={`summary-section ${styles["summary-section"]} font-fraunces font-black text-[2rem]`}>
                        "I drink my coffee as{" "}
                        <span>
                            {state.selectedOptions.preference
                                ? state.selectedOptions.preference
                                : "_____"}
                        </span>
                        , with a{" "}
                        <span>
                            {state.selectedOptions.beanType
                                ? state.selectedOptions.beanType
                                : "_____"}
                        </span>
                        .{" "}
                        <span>
                            {state.selectedOptions.quantity
                                ? state.selectedOptions.quantity
                                : "_____"}
                        </span>{" "}
                        ground ala{" "}
                        <span>
                            {state.selectedOptions.grindOption
                                ? state.selectedOptions.grindOption
                                : "_____"}
                        </span>
                        , sent to me{" "}
                        <span>
                            {state.selectedOptions.deliveries
                                ? state.selectedOptions.deliveries
                                : "_____"}
                        </span>
                        ."
                    </p>
                </div>
                <div className="order-btn mt-[2rem] flex justify-end">
                    <Button isDisabled={!areAllOptionsSelected(state.selectedOptions)} onClick={() => setOpenModal(true)}>Create My Plan!</Button>
                </div>
            </div>
            <OrderModal openModal={openModal} setOpenModal={setOpenModal} dispatch={dispatch} selectedOptions={state.selectedOptions} orderOptions={order_options}/>
        </div>
    );
}

export default OrderForm;
