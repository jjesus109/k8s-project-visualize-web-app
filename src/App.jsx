import React, { Fragment, useState, useEffect } from "react";

import FormResults  from './components/FormResults';

export function App() {
    
    const [results, setResults] = useState([])

    useEffect(() => {
      fetchComments();
    }, [])
    useEffect(() => {
    }, [results])
    const fetchComments=async()=>{
        const url = 'http://gsus-apis'
        await fetch(url+'/app/v1/forms',
        
        {
        method: 'GET',
        mode: 'cors',
        })
                .then(response => response.json())
                .then(
                    response => {
                        setResults(response);
                    }
                ).catch(
                    err => console.log(err)
                )

    }
    return (
        <Fragment>
                     <section className="hero is-primary">
                         <div className="hero-body has-text-centered">
                             <p className="title">
                             Check the form results
                             </p>
          
                         </div>
                     </section>
                     <br></br>
                     <div className="container">
                         <FormResults results={results}/>
                     </div>
                        
                    
                 </Fragment>
     )
  }

export default App ;