import React, { Fragment, useState, useEffect } from 'react';
import PersonalDataInput from './components/PersonalDataInput'
import Quote from './components/Quote'


const App = () => {
    const [quotes, setQuotes] = useState([]);

    useEffect(() => {
       
    }, [])

    const addQuotes = quote => {
        console.log(quotes, quotes);
        setQuotes([...quotes, quote]);
    }

    const deleteQuote = (id) => {
        const quotesFilter = quotes.filter((q) => q.id !== id);
        setQuotes(quotesFilter);
    }

    const title = quotes.length === 0 ? 'Nothing to show' : 'Quotes ';
    
    return (
        <Fragment>
            <h1 >
                Patient administrator 
            </h1>
            <div className="container">
                <div className="row">
                    <div className="one-half column">
                        <PersonalDataInput
                            addQuotes={addQuotes}
                        />
                    </div>
                    <div className="one-half column">
                        <h2>{title}</h2>
                        {
                            quotes.map((quote) => (
                                <Quote 
                                    key={quote.id}
                                    quote={quote}
                                    deleteQuote={deleteQuote}
                                />
                            ))
                        }
                    </div>
                </div> 
            </div>
        </Fragment> 
    );
    }

export default App;