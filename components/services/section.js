import SectionBase from '../section'
import Step01 from './step01'
import StepLine01 from './step-line01'
import Step02 from './step02'
import StepLine02 from './step-line02'
import Step03 from './step03'
import Container from '../container'

export default function Section() {
    return (
        <SectionBase title="Services" id="section-services">
            <Container>
                <Step01 />
                <StepLine01 />
                <Step02 />
                <StepLine02 />
                <Step03 />
            </Container>
        </SectionBase>
    )
}