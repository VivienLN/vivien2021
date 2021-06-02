import SectionBase from '../section'
import Step from './step'

export default function Section() {
    return (
        <SectionBase title="Services">
            <div className="container mx-auto px-4">
                <Step imageClass="hexagon01" title="1. Concenvoir">            
                    <p className="mb-4">On prend un café et on parle de votre besoin. Je vous propose des solutions adaptées et sur-mesure.</p>
                    <p>Je m’appuie sur un réseau de spécialistes en design, UX, SEO, etc.</p>
                </Step>
                <Step imageClass="line01" noText />
                <Step imageClass="hexagon02" title="2. Réaliser">
                    <p className="mb-4">Je suis développeur full-stack. Ca veut dire que je m'occupe de tout : vous pouvez vous détendre.</p>
                    <p>Je développe des sites et applications rapides, sécurisés et robustes.</p>
                </Step>
                <Step imageClass="line02" noText />
                <Step imageClass="hexagon03" title="3. Accompagner">
                    <p>Je continue à vous accompagner après la première livraison, pour la maintenance et les évolutions futures.</p>
                </Step>
            </div>
        </SectionBase>
    )
}