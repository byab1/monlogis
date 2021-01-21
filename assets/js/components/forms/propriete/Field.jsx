import React from 'react';

const Field = ({ name, placeholder, id, type, error = "", value, onChange }) => {
    return (
    <div class="col-md-6 col-sm-6 col-xs-12">
        <div class="single-query">
            <input 
            name={name} 
            placeholder={placeholder}
            id={id}
            type={type} 
            value={value} 
            onChange={onChange} 
            className={"keyword-input" + (error && " is-invalid")}
            />
            {error && <p className="invalid-feedback errorLogin">{error}</p>}
        </div>
    </div>
    );
}

export default Field;