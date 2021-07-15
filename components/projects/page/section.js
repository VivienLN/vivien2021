import Container from '../../container'

export default function Section(props) {
    return (
        <section className="py-20">
            { props.children }
        </section>
    )
}