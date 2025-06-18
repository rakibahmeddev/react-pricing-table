import { AiFillCheckCircle } from "react-icons/ai";
import PropTypes from 'prop-types';

const PriceOption = ({option}) => {
    const {packageName, price, features} = option;
    return (
        <div className='bg-blue-700 relative text-white m-4 p-6 rounded-lg shadow-lg'>
            <div>
                <h2 className='text-center text-2xl mb-3'>{packageName}</h2>
                <div className='flex items-end justify-center'>
                    <p className='text-center text-5xl '>{price}</p>
                <span className='text-xl ml-1 text-green-400'>/ Month</span>
                </div>
            </div>
            <ul className="lg:px-6 md:px-0 my-8">
                {features.map((feature, index) => (
                    <li key={index} className="flex items-center my-1 font-normal"><AiFillCheckCircle className="mr-1 text-green-400 " /> {feature}</li>
                ))}
            </ul>
            <div className='text-center bottom-4'>
                <button className="bg-green-600 px-16 py-3 rounded-md">Buy Now</button>
            </div>
        </div>
    );
};

PriceOption.propTypes = {
    option: PropTypes.object
};

export default PriceOption;