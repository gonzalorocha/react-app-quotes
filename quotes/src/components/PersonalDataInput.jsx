import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';

const PersonalDataInput = ({addQuotes})  => {

    const [quote, setQuote] = useState({
        name: '',
        lastname: '',
        document: '',
        date: new Date(),
        time: new Date().getTime(),
        symptoms: ''
    });
    const [error, setError ] = useState(false);

    const handleChange = (event) => {
        setError(false);
        setQuote({
            ...quote,
            [event.target.name]: event.target.value
        });
    }

    const submitQuote = (event) => {
        event.preventDefault();
        console.log(quote);
        if (quote.name.trim() === '' || quote.lastname.trim() === '' || quote.document.trim() === '' 
            || quote.time.trim() === '' || quote.symptoms.trim() === ''){
            setError(true);
            return;
        }
        //generate one id 
        quote.id = quote.name+quote.time;
        addQuotes(quote);
        setQuote({
            name: '',
            lastname: '',
            document: '',
            date: new Date(),
            time: new Date().getHours(),
            symptoms: ''
        })
    }

    return (
        <Fragment>
            <h2>
               Create quote
            </h2>
            {
                error && 
                <p className='alert-error'>Complete all the fields...</p>
            }
            <form
                onSubmit={submitQuote}
            >
                <label>
                    <strong>Person</strong>    
                </label>
                <label>
                    Name
                </label>
                <input 
                    type="text"
                    name="name"
                    className="u-full-width"
                    placeholder="Name"
                    onChange={handleChange}
                    value={quote.name}
                />
                <label>
                    Lastname
                </label>
                <input 
                    type="text"
                    name="lastname"
                    className="u-full-width"
                    placeholder="Lastname"
                    onChange={handleChange}
                    value={quote.lastname}

                />
                <label>
                    Document
                </label>
                <input 
                    type="text"
                    name="document"
                    className="u-full-width"
                    placeholder="Document"
                    onChange={handleChange}
                    value={quote.document}
                />
                <label>
                    Date
                </label>
                <input 
                    type="date"
                    name="date"
                    className="u-full-width"
                    onChange={handleChange}
                    value={quote.date}
                />
                <label>
                    Time
                </label>
                <input 
                    type="time"
                    name="time"
                    className="u-full-width"
                    onChange={handleChange}
                    value={quote.time}
                />
                 <label>
                    Symptoms
                </label>
                <textarea 
                    name="symptoms"
                    className="u-full-width"
                    onChange={handleChange}
                    value={quote.symptoms}
                ></textarea>
                <button
                    type="submit"
                    className="u-full-width primary"
                > Add </button>
            </form>
        </Fragment>
    )
}

PersonalDataInput.propTypes = {
    addQuotes: PropTypes.func.isRequired
}

export default PersonalDataInput
