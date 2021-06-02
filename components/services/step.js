import StepImage from './step-image'

export default function Step(props) {
    return (
        <div className="grid grid-cols-12 gap-4 items-center">
            <div className="col-span-5 md:col-span-4">
                <StepImage imageClass={props.imageClass} />
            </div>
            <div className="col-span-7 md:col-span-8 text-sm md:text-base">
                {!props.noText &&
                    <>
                        <h3 className="text-xl mb-4 font-extrabold">{props.title}</h3>
                        {props.children}   
                    </>             
                }
            </div>
        </div>
    )
}