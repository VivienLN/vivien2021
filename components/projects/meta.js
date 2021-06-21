import Container from '../container'
import MetaList from "../../components/projects/meta-list";

export default function Meta(props) {
    return (
        <div className="relative z-10 bg-white">
            <div className="bg-primary py-12 md:py-20 transform -skew-y-3 origin-top-left">
                <div className="transform skew-y-3 py-8">
                    <Container>
                        <div className="md:flex justify-between">
                            { props.data.map((meta, i) => <MetaList key={i} title={ meta.title } items={ meta.items } />) }
                        </div>
                    </Container>
                </div>
            </div>
        </div>
    )
}