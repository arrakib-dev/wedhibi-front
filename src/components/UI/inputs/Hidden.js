export default function Hidden(props) {
    return (
        <input
            type="hidden"
            name={props.name}
            id={props.id}
        />
    )
}