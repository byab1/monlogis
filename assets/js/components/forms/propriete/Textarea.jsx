import React from 'react';

const Textarea = ({ name, placeholder, id, type = "text", error = "", value, onChange }) => {
    return (<>
        <div className="col-md-12">
            <div className="single-query">
                <textarea 
                name={name}
                id={id}
                type={type}
                value={value} 
                onChange={onChange} 
                placeholder={placeholder}
                className={"keyword-input" + (error && " is-invalid")}
                >
                </textarea>
                {error && <p className="invalid-feedback errorLogin">{error}</p>}
            </div>
        </div>
    </>);
}

export default Textarea;