export default function Section(props) {
    return (
        <section className="py-20">
            <h2 className="container mx-auto px-4 text-3xl mb-16 font-extrabold">{props.title}</h2>
            {props.children}
        </section>
    )
}