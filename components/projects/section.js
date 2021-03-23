import ProjectThumbnail from './thumbnail'
import SectionBase from '../section'

export default function Section() {
    return (
        <SectionBase title="Réalisations">
            <div className="container mx-auto px-4">
                <ProjectThumbnail src="https://placehold.it/980x300" />
                <ProjectThumbnail src="https://placehold.it/980x300" />
                <ProjectThumbnail src="https://placehold.it/980x300" />
                <ProjectThumbnail src="https://placehold.it/980x300" />
            </div>
        </SectionBase>
    )
}