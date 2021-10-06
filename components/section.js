import Container from './container'
import InViewTransition from './in-view-transition'

export default function Section(props) {
    let classes = props.className || ""
    return (
        <section className={"py-12 md:py-20 relative z-10 bg-gray-darkest " + classes} id={props.id}>
            <Container>
                <InViewTransition>
                    <h2 className="text-3xl mb-16 font-extrabold">{props.title}</h2>
                </InViewTransition>
            </Container>
            {props.children}
        </section>
    )
}