import Container from '../container'

export default function Summary(props) {
    return (
        <Container>
            <section className="mx-auto py-20 w-3/4 md:w-1/2">
                { props.children }
            </section>
        </Container>
    )
}