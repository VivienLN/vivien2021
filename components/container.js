export default function Container(props) {
    return (
        <div className={"container mx-auto px-8 " + (props.className || "")}>
            { props.children }
        </div>
    )
}