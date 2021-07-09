import Section from './section'
import Media from './media'
import Image from 'next/image'

export default function ProjectImage(props) {
    return (
        <Section>
            <style jsx>{`
                .image div {
                    display: block !important;
                }
            `}</style>
            <Media className="image">
                <Image priority src={props.src} width={props.width} height={props.height} />
            </Media>
        </Section>
    )
}