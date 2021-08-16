import styles from '../projects.module.scss'
import projectsDataHelpers from '../../../helpers/projects-data-helpers'
import { useInView } from 'react-intersection-observer';
import ProjectThumbnail from '../thumbnail'
import Section from './section'
import SectionBase from '../../section'

export default function Links(props) {
    const { ref, inView, entry } = useInView({
        threshold: .3,
        triggerOnce: true,
    })
    let prevProject = projectsDataHelpers.getPreviousBySlug(props.slug)
    let nextProject = projectsDataHelpers.getNextBySlug(props.slug)

    return (
        
        <SectionBase title="Autres réalisations">
            <div ref={ref} className={"overflow-hidden width-full "  + styles.projectsSection + " " + (inView ? styles.inView : "")}>
                <div className={"grid grid-cols-1 md:grid-cols-2 gap-2 transform origin-bottom-left md:-rotate-3 " + styles.projectsGrid}>
                    <ProjectThumbnail smaller project={prevProject} />
                    <ProjectThumbnail smaller project={nextProject} />
                </div>
            </div>
        </SectionBase>
    )
}