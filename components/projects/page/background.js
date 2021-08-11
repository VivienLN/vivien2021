export default function Background(props) {
    return (
        <div className="bg-gray-darkest relative z-10 pt-12">
            { props.children }
        </div>
    )
}