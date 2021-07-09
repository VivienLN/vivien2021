import InViewTransition from '../in-view-transition'

export default function Step(props) {
    return (
            <div className="text-sm md:text-base px-6">
                <InViewTransition delay={100}>
                    <h3 className="text-xl mb-4 font-extrabold fat-shadow-secondary-light">{props.title}</h3>
                </InViewTransition>
                <InViewTransition delay={600}>
                    {props.children}
                </InViewTransition>
            </div>
    )
}