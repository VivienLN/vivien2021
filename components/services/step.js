import StepImage from './step-image'

export default function Step(props) {
    // let content;
    // if(noText) {
    //     content = null;
    // } else {
    //     content = (
    //         <h3 className="text-xl mb-4 font-extrabold">{props.title}</h3>
    //         {props.children}
    //     )
    // }

    return (
        <div className="grid grid-cols-3 gap-4 items-center">
            <div>
                <StepImage imageClass={props.imageClass} />
            </div>
            <div className="col-span-2">
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