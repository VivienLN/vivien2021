import ProjectThumbnail from './thumbnail'
import SectionBase from '../section'
import styles from './projects.module.scss'
import projectsDataHelpers from '../../helpers/projects-data-helpers'
import InViewTransition from '../in-view-transition'

export default function Section(props) {
    var projects = projectsDataHelpers.getActive()
    // Add empty projects to have a multiple of 3 (because there are 3 per line)
    while(projects.length < Math.ceil(projects.length / 3) * 3) {
        projects.push({})
    }

    return (
        <SectionBase title="Réalisations" id="section-projects">
            <InViewTransition>
                <div className="grid grid-cols-1 md:grid-cols-3">
                    { 
                        projects.map(
                            (data, index) => <ProjectThumbnail key={data.slug} project={data} />
                        )
                    }
                </div>
            </InViewTransition>
        </SectionBase>
    )
}