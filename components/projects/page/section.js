import Container from '../../container'

export default function Section(props) {
    return (
        <section className={ "py-10 md:py-16 " + (props.className || "") }>
            { props.children }
        </section>
    )
}