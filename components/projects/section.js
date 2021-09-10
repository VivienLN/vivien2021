import ProjectThumbnail from './thumbnail'
import SectionBase from '../section'
import styles from './projects.module.scss'
import { useInView } from 'react-intersection-observer';
import projectsDataHelpers from '../../helpers/projects-data-helpers'

export default function Section(props) {
    const { ref, inView, entry } = useInView({
        threshold: .3,
        triggerOnce: true,
    })
    var projects = projectsDataHelpers.getActive()
    // Add empty projects to have a multiple of 3 (because there are 3 per line)
    while(projects.length < Math.ceil(projects.length / 3) * 3) {
        projects.push({})
    }

    return (
        <SectionBase title="Réalisations" id="section-projects">
            <div ref={ref} className={styles.projectsSection + " " + (inView ? styles.inView : "")}>
                <div className="grid grid-cols-1 md:grid-cols-3">
                    { 
                        projects.map(
                            (data, index) => <ProjectThumbnail key={data.slug} project={data} />
                        )
                    }
                </div>
            </div>
        </SectionBase>
    )
}