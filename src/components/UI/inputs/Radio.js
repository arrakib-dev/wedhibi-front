import {Fragment} from "react";

export default function Radio(props) {
    const required = (props.required) ? props.required : false;
    const disabled = (props.disabled) ? props.disabled : false;
    const items = props.values;
    let inputs = items.map((item,index)=>{
        return (<Fragment key={index}>
            <input type="radio" name={props.name} id={item.id} disabled={disabled} required={required} value={item.value}/>
            <label htmlFor={item.id}>{item.value}</label>
        </Fragment>)
    })


    return(
        <Fragment>
            {inputs}
        </Fragment>
    )

}