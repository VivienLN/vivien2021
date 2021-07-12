import ProjectThumbnail from './thumbnail'
import SectionBase from '../section'
import projectsData from '../../resources/projects'
import styles from './projects.module.scss'
import { useInView } from 'react-intersection-observer';

export default function Section() {
    const { ref, inView, entry } = useInView({
        threshold: .3,
        triggerOnce: true,
    });
    return (
        <SectionBase title="Réalisations" id="section-projects">
            <div ref={ref} className={"overflow-hidden width-full -mt-12 "  + styles.projectsSection + " " + (inView ? styles.inView : "")}>
                <div className={"grid grid-cols-1 md:grid-cols-3 gap-2 transform origin-bottom-left md:-rotate-3 " + styles.projectsGrid}>
                    { 
                        Object.keys(projectsData).map(
                            slug => projectsData[slug].active && <ProjectThumbnail key={slug} project={projectsData[slug]} slug={slug} />
                        ) 
                    }
                </div>
            </div>
        </SectionBase>
    )
}