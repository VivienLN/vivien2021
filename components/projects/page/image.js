import Section from './section'
import Media from './media'
import Image from 'next/image'

export default function ProjectImage(props) {
    return (
        <Section>
            <Media>
                <Image layout="responsive" priority src={props.src} width={props.width} height={props.height} />
            </Media>
        </Section>
    )
}