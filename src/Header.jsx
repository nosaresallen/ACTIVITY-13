import PropTypes from 'prop-types';

function Header({title}) {



    return(
        <>
            <header className="">
                <h1 className="text-center p-5 fw-bold bg-dark text-white">{title}</h1>
            </header>
        </>
    )
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
};

export default Header


