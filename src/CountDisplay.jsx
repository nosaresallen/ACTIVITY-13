import PropTypes from 'prop-types';
function CountDisplay ({count}){

    return(
        <>
            <h1 className="fw-bold text-white">{count}</h1>
        </>
    )
}

CountDisplay.propTypes = {
    count: PropTypes.number.isRequired,
};



export default CountDisplay