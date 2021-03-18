import ServiceBlock from './block'
import SectionBase from '../section'

export default function Section() {
    return (
        <SectionBase title="Services">
            <div className="md:grid grid-cols-3 text-center container mx-auto px-4 gap-8">
                <ServiceBlock title="Etudier" icon="https://placehold.it/100x100">
                    <p className="mb-4">On prend un café et on parle de votre besoin. Je vous propose des solutions adaptées et sur-mesure.</p>
                    <p>Je m’appuie sur un réseau de spécialistes en design, UX, SEO, etc.</p>
                </ServiceBlock>
                <ServiceBlock title="Construire" icon="https://placehold.it/100x100">
                    <p className="mb-4">Je suis développeur full-stack. Ca veut dire que je m'occupe de tout : vous pouvez vous détendre.</p>
                    <p>Je réalise des sites et applications rapides, sécurisés et robustes.</p>
                </ServiceBlock>
                <ServiceBlock title="Accompagner" icon="https://placehold.it/100x100">
                    <p>Je continue à vous accompagner après la première livraison, pour la maintenance et les évolutions futures.</p>
                </ServiceBlock>
            </div>
        </SectionBase>
    )
}