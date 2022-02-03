import React,{useEffect, useState} from 'react'

const Form = (props) => { 
    const [stat, setCity] = useState('Sirsaganj')
    useEffect(()=>{
        sendData()
    },[])
    const sendData =()=>{
            {props.getDataFromServer(stat)}
    }
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-sm-4"></div>
                <div className="col-sm-4">
                    <div className="form-group" style={{ display: "flex" }}>
                        <input type="text"
                            placeholder="Sirsaganj \ Enter City"
                            className="form-control"
                            onChange={(e) => { setCity(e.target.value) }}
                        />
                        <button onClick={sendData} className="btn btn-primary px-5 mx-2">Search</button> 
                    </div>
                </div>
                <div className="col-sm-4"></div>
            </div>

        </div>
    )
}

export default Form