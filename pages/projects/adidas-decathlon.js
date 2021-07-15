
import Layout from "../../components/layout"
import ProjectBackground from "../../components/projects/page/background"
import ProjectHeader from "../../components/projects/page/header"
import ProjectSummary from "../../components/projects/page/summary"
import SummaryParagraph from "../../components/projects/page/summary-paragraph"
import Container from "../../components/container"

export default function Project() {
    return (
        <Layout>
            <ProjectHeader slug="adidas-decathlon" />
            <ProjectBackground>
                <Container>
                    <ProjectSummary>
                        <SummaryParagraph>En 2020, Adidas lance deux gammes de produits en matières recyclées.</SummaryParagraph>
                        <SummaryParagraph>Nous avons développé une page boutique dédiée sur Décathlon, ainsi qu'une page de présentation du procédé de recyclage et de fabrication de ces produits. Elles sont traduites en cinq langues.</SummaryParagraph>
                    </ProjectSummary>
                </Container>
            </ProjectBackground>
        </Layout>
    )
}