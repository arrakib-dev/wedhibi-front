export default function Select(props) {
    const required = (props.required) ? props.required : false;
    const disabled = (props.disabled) ? props.disabled : false;
    return (
        <select
            name={props.name}
            id={props.id}
            disabled={disabled}
            required={required}>
            {props.children}
        </select>
    )
}