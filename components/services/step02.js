import StepContent from './step-content'
import StepImage from './step-image'
import StepLeft from './step-left'
import IconWand from '../icons/wand'
import StepIcon from './step-icon'

export default function Step02(props) {
    return (
        <div className="grid grid-cols-3 items-stretch justify-center">
            <div className="col-span-1">
                <StepLeft>
                    <StepImage imageClass="linePatch02" className="flex-grow" />
                    <div className="relative">
                        <StepImage imageClass="hexagon02" />
                        <StepIcon icon={IconWand} />
                    </div>
                    <StepImage imageClass="linePatch02" className="flex-grow" />
                </StepLeft>
            </div>
            <div className="col-span-2 self-center">
                <StepContent title="2. Réaliser">
                    <p className="mb-4">Je suis développeur full-stack. Ca veut dire que je m'occupe de tout&nbsp;: vous pouvez vous détendre.</p>
                    <p>Je développe des sites et applications rapides, sécurisés et robustes.</p>
                </StepContent>
            </div>
        </div>
    )
}