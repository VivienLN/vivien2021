import InViewTransition from '../../in-view-transition'

export default function Media(props) {
    return (
        <InViewTransition>
            <style jsx>{`
                .media {
                    box-shadow: 0 10px 60px rgba(0, 0, 0, .15);
                }
            `}</style>
            <div className="media overflow-hidden rounded">
                { props.children }
            </div>
        </InViewTransition>
    )
}