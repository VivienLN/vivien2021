export default function Step(props) {
    return (
        <div className="text-sm md:text-base px-6">
            <h3 className="text-xl mb-4 font-extrabold">{props.title}</h3>
            {props.children}
        </div>
    )
}