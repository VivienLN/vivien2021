import Container from '../../container'
import Section from './section'

export default function Summary(props) {
    return (
        <Section>
            <div className="mx-auto md:w-3/4">
                { props.children }
            </div>
        </Section>
    )
}