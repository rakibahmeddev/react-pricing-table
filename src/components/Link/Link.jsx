import PropTypes from 'prop-types';

const Link = ({route}) => {
    return (
        <li className="mr-8 my-2 hover:bg-blue-600 hover:text-white hover:px-2 hover:rounded-md"><a href={route.path}>{route.name}</a></li>
    );
};

export default Link;

Link.propTypes = {
    route:PropTypes.object,
}
