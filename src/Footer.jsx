import PropTypes from 'prop-types';

function Footer({copyright}) {

    return(
        <footer className="text-center">
            <div className="fw-bold mt-auto">
                <p className='bg-dark text-white p-3 mb-0 '>{copyright}</p>
            </div>
        </footer>
    )
}

Footer.propTypes = {
    copyright: PropTypes.string.isRequired,
};


export default Footer
