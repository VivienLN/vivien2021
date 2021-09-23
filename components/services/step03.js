import StepContent from './step-content'
import StepImage from './step-image'
import StepLeft from './step-left'
import IconRocket from '../icons/rocket'
import StepIcon from './step-icon'

export default function Step03(props) {
    return (
        <div className="grid grid-cols-4 items-stretch justify-center">
            <div className="col-span-1">
                <StepLeft>
                    <StepImage imageClass="linePatch03" className="flex-grow" />
                    <div className="relative">
                        <StepImage imageClass="lineEnd" className="absolute top-0 left-0 right-0" />
                        <StepImage imageClass="hexagon03" />
                        <StepIcon icon={IconRocket} />
                    </div>
                    <div className="flex-grow"></div>
                </StepLeft>
            </div>
            <div className="col-span-3 md:col-span-2 self-center">
                <StepContent title="3. Suivi">
                    <p className="mb-4">Je ne vous abandonne une fois la mise en ligne terminée&nbsp;!</p>
                    <p className="">Parcequ'une bonne collaboration se construit <strong>sur le long&nbsp;terme</strong>, on met en place des outils pour mesurer, corriger, et faire évoluer.</p>
                </StepContent>
            </div>
        </div>
    )
}