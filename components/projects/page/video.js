import ReactPlayer from 'react-player'
import Section from './section'
import Media from './media'

export default function Video(props) {
    return (
        <Section>
            <Media>
                <div className="aspect-w-16 aspect-h-9">
                    <ReactPlayer playsinline playing loop muted width="100%" height="100%" {...props} />
                </div>
            </Media>
        </Section>
    )
}