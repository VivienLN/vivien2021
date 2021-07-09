import Container from '../../container'
import Section from './section'

export default function Summary(props) {
    return (
        <Section>
            <div className="mx-auto w-3/4 md:w-1/2">
                { props.children }
            </div>
        </Section>
    )
}