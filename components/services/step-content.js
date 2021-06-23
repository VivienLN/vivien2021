import InViewTransition from '../in-view-transition'

export default function Step(props) {
    return (
        <InViewTransition delay={600}>
            <div className="text-sm md:text-base px-6">
                <h3 className="text-xl mb-4 font-extrabold fat-shadow-secondary-light">{props.title}</h3>
                {props.children}
            </div>
        </InViewTransition>
    )
}