import ProjectThumbnail from './thumbnail'
import SectionBase from '../section'
import styles from './projects.module.scss'
import { useInView } from 'react-intersection-observer';

export default function Section(props) {
    const { ref, inView, entry } = useInView({
        threshold: .3,
        triggerOnce: true,
    })
    const projectsData = props.projects
    return (
        <SectionBase title="Réalisations" id="section-projects">
            <div ref={ref} className={"overflow-hidden width-full -mt-12 "  + styles.projectsSection + " " + (inView ? styles.inView : "")}>
                <div className={"grid grid-cols-1 md:grid-cols-3 gap-2 transform origin-bottom-left md:-rotate-3 " + styles.projectsGrid}>
                    { 
                        projectsData.map(
                            (data, index) => <ProjectThumbnail key={data.slug} project={data} slug={data.slug} />
                        )
                    }
                </div>
            </div>
        </SectionBase>
    )
}