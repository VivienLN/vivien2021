import projectsDataHelpers from '../../../helpers/projects-data-helpers'
import { useInView } from 'react-intersection-observer';
import ProjectThumbnail from '../thumbnail'
import SectionBase from '../../section'
import Container from '../../container';
import InViewTransition from '../../in-view-transition'

export default function Links(props) {
    const { ref, inView, entry } = useInView({
        threshold: .3,
        triggerOnce: true,
    })
    let slug = props.slug
    let prevProject = projectsDataHelpers.getPreviousBySlug(slug)
    let nextProject = projectsDataHelpers.getNextBySlug(slug)

    return (
        
        <SectionBase title="Autres réalisations">
            <Container>
                <InViewTransition>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        <ProjectThumbnail project={prevProject} />
                        <ProjectThumbnail project={nextProject} />
                    </div>
                </InViewTransition>
            </Container>
        </SectionBase>
    )
}