import InViewTransition from '../../in-view-transition'

export default function SummaryParagraph(props) {
    return (
        <InViewTransition>
            <p className="mb-8">{ props.children } </p>
        </InViewTransition>
    )
}