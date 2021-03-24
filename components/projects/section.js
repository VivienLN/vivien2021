import ProjectThumbnail from './thumbnail'
import SectionBase from '../section'

// import dynamic from 'next/dynamic'
// const ProjectThumbnail = dynamic(() => import('./thumbnail'), { ssr: false })

export default function Section() {
    return (
        <SectionBase title="Réalisations">
            <div className="container mx-auto px-4">
                <ProjectThumbnail 
                    title="The Sinking City"
                    subtitle="Site officiel"
                    src="/images/test-project.jpg" 
                    transitionMask="/images/project-mask.jpg" 
                />
                <ProjectThumbnail 
                    title="Xbox"
                    subtitle="Chatbot &amp; jeu mobile"
                    src="/images/test-project.jpg" 
                    transitionMask="/images/project-mask2.jpg" 
                />
                <ProjectThumbnail 
                    title="Le fil L'Oréal"
                    subtitle="Plateform influenceurs"
                    src="/images/test-project.jpg" 
                    transitionMask="/images/project-mask2.jpg" 
                />
                <ProjectThumbnail 
                    title="Ni No Kuni II"
                    subtitle="Site officiel"
                    src="/images/test-project.jpg" 
                    transitionMask="/images/project-mask2.jpg" 
                />
            </div>
        </SectionBase>
    )
}