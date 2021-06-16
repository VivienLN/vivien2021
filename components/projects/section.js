import ProjectThumbnail from './thumbnail'
import SectionBase from '../section'

// import dynamic from 'next/dynamic'
// const ProjectThumbnail = dynamic(() => import('./thumbnail'), { ssr: false })

export default function Section() {
    let containerStyles = {
        width: '104%', 
        padding: '5.5% 0'
    }
    return (
        <SectionBase title="Réalisations">
            <div className="overflow-hidden width-full">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2 transform origin-bottom-left -rotate-3" style={containerStyles}>
                    <ProjectThumbnail 
                        title="The Sinking City"
                        subtitle="Site officiel"
                        src="/images/test-project.jpg" 
                        transitionMask="/images/project-mask.jpg" 
                    />
                    <ProjectThumbnail 
                        title="Xbox"
                        subtitle="Chatbot &amp; jeu mobile"
                        src="/images/test-project2.jpg" 
                        transitionMask="/images/project-mask2.jpg" 
                    />
                    <ProjectThumbnail 
                        title="Le fil L'Oréal"
                        subtitle="Plateforme influenceurs"
                        src="/images/test-project3.jpg" 
                        transitionMask="/images/project-mask2.jpg" 
                    />
                    <ProjectThumbnail 
                        title="Ni No Kuni II"
                        subtitle="Site officiel"
                        src="/images/test-project4.jpg" 
                        transitionMask="/images/project-mask2.jpg" 
                    />
                    <ProjectThumbnail 
                        title="The Sinking City"
                        subtitle="Site officiel"
                        src="/images/test-project5.jpg" 
                        transitionMask="/images/project-mask2.jpg" 
                    />
                    <ProjectThumbnail 
                        title="Xbox"
                        subtitle="Chatbot &amp; jeu mobile"
                        src="/images/test-project6.jpg" 
                        transitionMask="/images/project-mask2.jpg" 
                    />
                </div>
            </div>
        </SectionBase>
    )
}