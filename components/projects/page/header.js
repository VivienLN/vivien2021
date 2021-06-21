import Head from "next/head"
import Meta from "./meta";
import TitleBanner from "./title-banner";
import HeroBanner from "./hero-banner";
import projectsData from "../../../resources/projects"

export default function Header(props) {
    let data = projectsData[props.slug]
    let heroUrl = "/images/projects/" + props.slug + "/hero.jpg"

    return (
        <header>
            <Head>
                <title>{ data.name } - Vivien</title>
            </Head>

            <TitleBanner url={ heroUrl } title={ data.name } subtitle={ data.subtitle } />
            <HeroBanner url={ heroUrl } />
            <Meta data={ data.meta }/>
        </header>
    )
}