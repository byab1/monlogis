import React from 'react';

const Select = ({name, placeholder="", value, onChange, error="", children}) => {
    return ( 
    <>
    <div class="col-md-6 col-sm-6 col-xs-12">
        <div class="single-query">
            <select 
                onChange={onChange} 
                placeholder={placeholder} 
                name={name} 
                value={value} 
                className={"selectpicker" + (error && " is-invalid")} 
                data-live-search="true">
                <option selected="" value="any">{placeholder}</option>
                    {children}

            </select>
            {error && <p className="invalid-feedback errorLogin">{error}</p>}
        </div>
    </div>
    </> );
}

   
export default Select;