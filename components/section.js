export default function Section(props) {
    return (
        <section className="py-20">
            <h2 className="text-3xl text-secondary text-center mb-16">{props.title}</h2>
            {props.children}
        </section>
    )
}