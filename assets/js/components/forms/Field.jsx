import React from 'react';

const Field = ({name, placeholder, type = "text", error = "", value, onChange }) => ( 
    <div className="col-md-12">
        <div className="single-query">
            <input 
            name={name} 
            placeholder={placeholder} 
            type={type} 
            value={value} 
            onChange={onChange}
            className={"keyword-input" + (error && " is-invalid")} />

            {error && <p className="invalid-feedback errorLogin">{error}</p>}
        </div>
    </div>
); 

 
export default Field;