import Head from "next/head"
import Meta from "./meta";
import TitleBanner from "./title-banner";
import HeroBanner from "./hero-banner";

export default function Header(props) {
    return (
        <header>
            <Head>
                <title>{ props.data.name } - Vivien</title>
            </Head>

            <TitleBanner title={ props.data.name } subtitle={ props.data.subtitle } />
            <HeroBanner url="/images/test-project-hero.jpg" />
            <Meta data={ props.data.meta }/>
        </header>
    )
}