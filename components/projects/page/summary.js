import Container from '../../container'
import InViewTransition from '../../in-view-transition'

export default function Summary(props) {
    return (
        <Container>
                <section className="mx-auto py-20 w-3/4 md:w-1/2">
                    {/* <InViewTransition> */}
                        { props.children }
                    {/* </InViewTransition> */}
                </section>
        </Container>
    )
}