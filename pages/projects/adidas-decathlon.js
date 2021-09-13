
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
        <Layout isProject>
            <ProjectHeader slug="adidas-decathlon" />
            <ProjectBackground>
                <Container>
                    <ProjectSummary>
                        <SummaryParagraph>En 2020, Adidas lance deux gammes de produits en matières recyclées.</SummaryParagraph>
                        <SummaryParagraph>Nous avons développé une page boutique dédiée sur Décathlon, ainsi qu'une page de présentation du procédé de recyclage et de fabrication de ces produits. Elles sont traduites en cinq langues.</SummaryParagraph>
                    </ProjectSummary>
                    <Video url="/images/projects/adidas-decathlon/adidas-scroll.mp4" />
                    <Image src="/images/projects/adidas-decathlon/ecodesign.jpg" width={960} height={815} />
                </Container>
                <Links slug="adidas-decathlon" />
            </ProjectBackground>
        </Layout>
    )
}