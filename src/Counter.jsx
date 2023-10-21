import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import CountDisplay from "./CountDisplay";
import PropTypes from 'prop-types';


function Counter({count, setCount}) {
    


    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };



    return(
        <>
        <section className="text-center">
            <CountDisplay count={count}/>
            <button className="btn btn-success m-1" onClick={increment}>
            Increment +
            </button>
            <button className="btn btn-danger m-1" onClick={decrement}>
            Decrement -
            </button>
        </section>
        </>
    )
}

Counter.propTypes = {
    count: PropTypes.number.isRequired,
    setCount: PropTypes.number.isRequired
};



export default Counter
