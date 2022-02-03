import React from 'react'

const Information = (props) => {
    const {name,main,weather,wind} = props.info;

    return(
        <div className="container">
            <div className="row">
                <div className="col-sm-12">

                    <div className="card bg-dark mt-5">
                        <div className="card-header"></div>
                        <div className="card-body">
                            <table className="table text-white">
                                <thead>
                                    <tr>
                                        <th>CITY</th>
                                        <th>TEMPERATURE</th>
                                        <th>WEATHER CAST</th>
                                    </tr> 
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{name}</td>
                                        <td> {Math.round(main.temp-273.15)} &deg; C</td>
                                        <td> {weather[0].main} </td>
                                    </tr>
                                </tbody>
                                <br/>
                                <thead>
                                    <tr>
                                        <th>WIND</th>
                                        <th>TEMPERATURE FEEL</th>
                                        <th>HUMIDITY</th>
                                        
                                    </tr> 
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{wind.speed}Km/hr towards {wind.deg}&deg;</td>
                                        <td> {Math.round(main.feels_like-273.15)} &deg; C</td>
                                        <td>{main.humidity}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Information