import Container from '../../container'

export default function Section(props) {
    return (
        <section className="mx-auto py-20 bg-white relative z-10">
            <Container>
                { props.children }
            </Container>
        </section>
    )
}