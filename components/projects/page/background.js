export default function Background(props) {
    return (
        <div className="bg-white relative z-10 pt-12">
            { props.children }
        </div>
    )
}