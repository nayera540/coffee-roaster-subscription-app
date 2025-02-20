import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

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
                content: "For pour over or drip methods like Aeropress, Chemex, and V60",
            },
            {
                name: "Espresso",
                content: "Dense and finely ground beans for an intense, flavorful experience",
            },
        ],
    },
    beanType: {
        question: "What type of coffee?",
        options: [
            {
                name: "Single Origin",
                content: "Distinct, high quality coffee from a specific family-owned farm",
            },
            {
                name: "Decaf",
                content: "Just like regular coffee, except the caffeine has been removed",
            },
            {
                name: "Blended",
                content: "Combination of two or three dark roasted beans of organic coffees",
            },
        ],
    },
    quantity: {
        question: "How much would you like?",
        options: [
            {
                name: "250g",
                content: "Perfect for the solo drinker. Yields about 12 delicious cups.",
            },
            {
                name: "500g",
                content: "Perfect option for a couple. Yields about 40 delectable cups.",
            },
            {
                name: "1000g",
                content: "Perfect for offices and events. Yields about 90 delightful cups.",
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
                content: "For drip or pour-over coffee methods such as V60 or Aeropress",
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
                content: "$7.20 per shipment. Includes free first-class shipping.",
            },
            {
                name: "Every 2 weeks",
                content: "$9.60 per shipment. Includes free priority shipping.",
            },
            {
                name: "Every month",
                content: "$12.00 per shipment. Includes free priority shipping.",
            },
        ],
    },
};

const initialState = {
    accordionOpen: null,
    selectedOptions: {
        preference: null,
        beanType: null,
        quantity: null,
        grindOption: null,
        deliveries: null,
    },
};

function formatKey(key) {
    return key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
}

function OrderForm() {
    return (
        <div className="order-container flex lg:flex-nowrap flex-wrap w-full">
            <div className="lg:w-3/12 lg:block hidden options-headers">
                {Object.keys(order_options).map((key, index) => (
                    <p
                        key={key}
                        className={`option-title`}

                    >
                        <span className="option-number">{String(index + 1).padStart(2, '0')}</span>
                        {formatKey(key)}
                    </p>
                ))}
            </div>
            <div className="lg:w-9/12 w-full">
                {Object.keys(order_options).map((category) => (
                    <Accordion key={category} className='!bg-transparent !shadow-none !border-none !static'>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls={`${category}-panel`}
                            id={`${category}-header`}
                        >
                            <Typography component="span" className='!font-fraunces'>{order_options[category].question}</Typography>
                        </AccordionSummary>
                        <div className='option-details flex gap-10'>
                            {
                                order_options[category].options.map((options, index) => (
                                    <div key={index} className='options-content flex flex-col bg-red-500'>
                                        <AccordionDetails className='font-fraunces'>
                                            {options.name}
                                        </AccordionDetails>
                                        <AccordionDetails>
                                            {options.content}
                                        </AccordionDetails>
                                    </div>
                                ))
                            }
                        </div>
                    </Accordion>
                ))}
            </div>
        </div>
    )
}

export default OrderForm;
