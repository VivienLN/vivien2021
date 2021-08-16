import Head from "next/head"
import Meta from "./meta"
import TitleBanner from "./title-banner"
import HeroBanner from "./hero-banner"
import ButtonBack from "./button-back"
import projectsDataHelpers from '../../../helpers/projects-data-helpers'
import { useRouter } from 'next/router'

export default function Header(props) {
    let slug = props.slug
    let data = projectsDataHelpers.getBySlug(slug, true)
    let heroUrl = "/images/projects/" + slug + "/hero.jpg"

    return (
        <header className="relative">
            <Head>
                <title>{ data.name } - Vivien</title>
            </Head>

            <ButtonBack />
            <TitleBanner url={ heroUrl } title={ data.name } subtitle={ data.subtitle } />
            <HeroBanner url={ heroUrl } />
            <Meta data={ data.meta }/>
        </header>
    )
}