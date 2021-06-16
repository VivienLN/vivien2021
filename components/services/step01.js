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
            <div className="col-span-4 self-center">
                <StepContent title="1. Concevoir">
                    <p className="mb-4">On prend un café et on parle de votre besoin. Je vous propose des solutions adaptées et sur-mesure.</p>
                    <p>Je m’appuie sur un réseau de spécialistes en design, UX, SEO, etc.</p>
                </StepContent>
            </div>
        </div>
    )
}