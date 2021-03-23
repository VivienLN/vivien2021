import ServiceBlock from './block'
import SectionBase from '../section'
import IconRocket from '../icons/rocket'
import IconBrainstorm from '../icons/brainstorm'
import IconWand from '../icons/wand'

export default function Section() {
    return (
        <SectionBase title="Services">
            <div className="md:grid grid-cols-3 container mx-auto px-4 gap-8">
                <ServiceBlock title="Etudier" icon={<IconBrainstorm />}>
                    <p className="mb-4">On prend un café et on parle de votre besoin. Je vous propose des solutions adaptées et sur-mesure.</p>
                    <p>Je m’appuie sur un réseau de spécialistes en design, UX, SEO, etc.</p>
                </ServiceBlock>
                <ServiceBlock title="Construire" icon={<IconWand />}>
                    <p className="mb-4">Je suis développeur full-stack. Ca veut dire que je m'occupe de tout : vous pouvez vous détendre.</p>
                    <p>Je réalise des sites et applications rapides, sécurisés et robustes.</p>
                </ServiceBlock>
                <ServiceBlock title="Accompagner" icon={<IconRocket />}>
                    <p>Je continue à vous accompagner après la première livraison, pour la maintenance et les évolutions futures.</p>
                </ServiceBlock>
            </div>
        </SectionBase>
    )
}