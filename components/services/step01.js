import StepContent from './step-content'
import StepImage from './step-image'
import StepLeft from './step-left'
import IconBrainstorm from '../icons/brainstorm'
import StepIcon from './step-icon'

export default function Step01(props) {

    return (
        <div className="grid grid-cols-5 items-stretch justify-center">
            <div className="col-span-1">
                <StepLeft>
                    <div className="flex-grow"></div>
                    <div className="relative">
                        <StepImage imageClass="hexagon01" />
                        <StepIcon icon={IconBrainstorm} />
                    </div>
                    <StepImage imageClass="linePatch01" className="flex-grow" />
                </StepLeft>
            </div>
            <div className="col-span-4 md:col-span-3 self-center">
                <StepContent title="1. Accompagner">
                    <p className="mb-4">Votre projet est unique, discutons-en autour d'un café&nbsp;!</p>
                    <p className="mb-4">Je vous propose des solutions sur-mesure, adaptées à votre besoin et votre budget.</p>
                    <p className="mb-4">Appuyé par mon réseau de spécialistes, je vous accompagne de&nbsp;A&nbsp;à&nbsp;Z&nbsp;: Design, expérience utilisateur, rédaction, etc.</p>
                </StepContent>
            </div>
        </div>
    )
}