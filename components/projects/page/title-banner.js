import Container from '../../container'
import Link from "next/link"

export default function TitleBanner(props) {
    return (
        <Container>
            <div className="">
                <h1 className="text-3xl font-extrabold ">{ props.title }</h1>
                <p className="text-xl font-extrabold text-primary">{ props.subtitle }</p>
            </div>
        </Container>
    )
}