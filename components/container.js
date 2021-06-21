export default function Container(props) {
    return (
        <div className="container mx-auto px-4">
            { props.children }
        </div>
    )
}