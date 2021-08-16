
import Layout from "../../components/layout"
import ProjectBackground from "../../components/projects/page/background"
import ProjectHeader from "../../components/projects/page/header"
import ProjectSummary from "../../components/projects/page/summary"
import SummaryParagraph from "../../components/projects/page/summary-paragraph"
import Video from "../../components/projects/page/video"
import Image from "../../components/projects/page/image"
import Container from "../../components/container"
import Links from "../../components/projects/page/links"

export default function Project() {
    return (
        <Layout>
            <ProjectHeader slug="sinking-city" />
            <ProjectBackground>
                <Container>
                    <ProjectSummary>
                        <SummaryParagraph>The Sinking City est un jeu vidéo d'enquête édité par BigBen Interactive inspiré de l'univers de l'écrivain H.P. Lovecraft.</SummaryParagraph>
                        <SummaryParagraph>J'ai participé au site officiel avec l'agence Carburant, traduit en sept langues. J'ai entre autre codé les animations et effets spéciaux du site, avec l'API Canvas.</SummaryParagraph>
                        <SummaryParagraph><em>Ph'nglui mglw'nqfh Cthulhu R'lyeh wgah'nagl fhtagn !</em></SummaryParagraph>
                    </ProjectSummary>
                    <Video url="/images/projects/sinking-city/sinking-city-scroll.mp4" />
                    <Video url="/images/projects/sinking-city/sinking-city-gallery.mp4" />
                    <Image src="/images/projects/sinking-city/buy-page.jpg" width={960} height={654} />
                </Container>
                <Links slug="sinking-city" />
            </ProjectBackground>
        </Layout>
    )
}