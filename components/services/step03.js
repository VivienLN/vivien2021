import StepContent from './step-content'
import StepImage from './step-image'
import StepLeft from './step-left'

export default function Step03(props) {
    return (
        <div className="grid grid-cols-4 items-stretch justify-center">
            <div className="col-span-1">
                <StepLeft>
                    <StepImage imageClass="linePatch01" className="flex-grow" />
                    <StepImage imageClass="hexagon03" />
                    <div className="flex-grow"></div>
                </StepLeft>
            </div>
            <div className="col-span-3 self-center">
                <StepContent title="3. Accompagner">
                    <p>Je continue à vous accompagner après la première livraison, pour la maintenance et les évolutions futures.</p>
                </StepContent>
            </div>
        </div>
    )
}