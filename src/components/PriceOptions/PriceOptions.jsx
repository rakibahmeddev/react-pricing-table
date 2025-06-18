import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {
    const gymPackages = [
    {
        id: 1,
        packageName: "Basic",
        price: "$29",
        features: [
        "Access to gym equipment",
        "Locker facility",
        "1 personal training session/month",
        "Free Wi-Fi",
        "Access during working hours",
        "Weekly progress tracking",
        "Fitness orientation session"
        ]
    },
    {
        id: 2,
        packageName: "Standard",
        price: "$49",
        features: [
        "All Basic features",
        "Unlimited personal training",
        "Group fitness classes",
        "Steam bath access",
        "Zumba & Yoga classes",
        "Advanced strength training equipment",
        "Nutritional guidance",
        "Priority support"
        ]
    },
    {
        id: 3,
        packageName: "Premium",
        price: "$69",
        features: [
        "All Standard features",
        "Diet consultation with expert",
        "Body composition analysis",
        "24/7 gym access",
        "Private locker",
        "Personalized workout plan",
        "Massage therapy once a month",
        "Online fitness tracking app access"
        ]
    },
    {
        id: 4,
        packageName: "Couple Plan",
        price: "$99",
        features: [
        "All Premium features",
        "2 memberships included",
        "Couples workout sessions",
        "Discount on renewals",
        "Special events for couples",
        "Flexible timings for both members",
        "Free diet charts for both",
        "One free fitness photoshoot"
        ]
    },
    {
        id: 5,
        packageName: "Student Plan",
        price: "$25",
        features: [
        "Access to gym equipment",
        "Free fitness assessment",
        "Evening access only",
        "Discounted price",
        "Student ID required",
        "Weekly group classes",
        "Motivational fitness challenges",
        "Guest pass once a month"
        ]
    }
    ];



    return (
        <div className="w-full md:w-[80%] lg:w-[66%] mx-auto my-10">
            <h2 className="text-center text-4xl font-medium text-black mb-5">Price Options</h2>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-2 lg:gap-2 md:gap-1 bg-gray-100">
                {gymPackages.map((option) => <PriceOption key={option.id} option={option} />)}
            </div>
        </div>
    );
};

export default PriceOptions;