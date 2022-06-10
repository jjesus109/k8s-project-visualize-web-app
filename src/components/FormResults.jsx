import React from "react";

class FormResults extends React.Component{
    


    render() {
        const result = this.props.results;
        return (
            <div>
            {   
                result.map( form =>{
                    return (
                        <div>
                        <div className="card">
            
                            <div className="card-content">
                                <div className="media">
                                    <div className="media-left">
                                        <figure className="image is-48x48">
                                        <img src="https://img.icons8.com/external-kiranshastry-lineal-color-kiranshastry/344/external-image-multimedia-kiranshastry-lineal-color-kiranshastry-2.png" alt="Placeholder image"/>
                                        </figure>
                                    </div>
                                    <div className="media-content">
                                        <p className="title is-4">{form.name}</p>
                                        <p className="subtitle is-6">{form.last_name}</p>
                                    </div>
                                </div>
                
                                <div className="content">
                                <b>Position:</b> {form.position}
                            
                                <br></br>
                                <i>Age</i>: {form.age}
                                </div>
                            </div>
                        </div>
                        <br></br>
                        </div>

                    )
                }
                    
                )
            }
            </div>
           

        )
    }

}

export default FormResults ;