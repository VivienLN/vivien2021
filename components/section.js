import Container from './container'

export default function Section(props) {
    return (
        <section className="py-20" id={props.id}>
            <Container>
                <h2 className="text-3xl mb-16 font-extrabold">{props.title}</h2>
            </Container>
            {props.children}
        </section>
    )
}