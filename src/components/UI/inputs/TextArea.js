export default function TextArea(props) {
    const required = (props.required) ? props.required : false;
    const disabled = (props.disabled) ? props.disabled : false;
    return (
        <textarea
            type="text"
            name={props.name}
            id={props.id}
            placeholder={props.placeholder}
            disabled={disabled}
            required={required}
        ></textarea>
    )
}