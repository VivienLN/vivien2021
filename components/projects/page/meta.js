import Container from '../../container'
import MetaList from "./meta-list";
import InViewTransition from '../../in-view-transition'

export default function Meta(props) {
    return (
        <div className="relative z-10 bg-gray-darkest">
            <style jsx>{`
                .boxShadow {
                    box-shadow: 0px -4px 4px rgb(0 0 0 / 10%);
                }
            `}</style>
            <div className="boxShadow bg-secondary-darker py-12 md:py-20 transform -skew-y-3 origin-top-left">
                <div className="transform skew-y-3 py-8">
                    <InViewTransition>
                        <Container>
                            <div className="md:flex justify-between">
                                { props.data.map((meta, i) => (
                                        <MetaList key={i} title={ meta.title } items={ meta.items } />
                                )) }
                            </div>
                        </Container>
                    </InViewTransition>
                </div>
            </div>
        </div>
    )
}