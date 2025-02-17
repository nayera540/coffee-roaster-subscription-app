const options = {
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

function OrderForm() {
    return (
        <div>

        </div>
    )
}

export default OrderForm;
