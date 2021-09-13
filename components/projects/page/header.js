import Head from "next/head"
import Meta from "./meta"
import HeroBanner from "./hero-banner"
import projectsDataHelpers from '../../../helpers/projects-data-helpers'

export default function Header(props) {
    let slug = props.slug
    let data = projectsDataHelpers.getBySlug(slug, true)
    let heroUrl = "/images/projects/" + slug + "/hero.jpg"

    return (
        <header className="relative">
            <Head>
                <title>{ data.name } - Vivien</title>
            </Head>

            <HeroBanner url={ heroUrl } title={ data.name } subtitle={ data.subtitle } />
            <Meta data={ data.meta }/>
        </header>
    )
}