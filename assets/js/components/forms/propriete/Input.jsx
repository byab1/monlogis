import React from 'react';

const Input = ({type = "checkbox", name = "check-box", value, onChange, label}) => {
    return (
        <>
        <div className="col-md-6">
            <div className="search-form-group white">
                <input value={value} onChange={onChange} type={type} name={name} />
                <span>{label}</span> 
            </div>
        </div>
        </>
    )
}
export default Input;