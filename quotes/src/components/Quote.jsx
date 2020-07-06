import React from 'react'
import PropTypes from 'prop-types';

const Quote = ({quote, deleteQuote}) => (
        <div className="quote">
            <p><strong>Patient</strong></p>
            <p><strong>Name:</strong> {quote.name}</p>
            <p><strong>Lastname:</strong> {quote.lastname}</p>
            <p><strong>document:</strong> {quote.document}</p>
            <p><strong>date:</strong> {quote.date}</p>
            <p><strong>Symptoms:</strong> {quote.symptoms}</p>
            <button
                className="button delete u-full-widht"
                onClick={() => deleteQuote(quote.id)}
            >Detele quote</button>
        </div>
    )

Quote.propTypes = {
    quote: PropTypes.object.isRequired,
    deleteQuote: PropTypes.func.isRequired
}

export default Quote
