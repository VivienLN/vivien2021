import Layout from "../../components/layout"
import ProjectBackground from "../../components/projects/page/background"
import ProjectHeader from "../../components/projects/page/header"
import ProjectSummary from "../../components/projects/page/summary"
import SummaryParagraph from "../../components/projects/page/summary-paragraph"
import Container from "../../components/container"
import Links from "../../components/projects/page/links"

export default function Project() {
    return (
        <Layout>
            <ProjectHeader />
            <ProjectBackground>
                <Container>
                    <ProjectSummary>                    
                        <SummaryParagraph>Le fil est une plateforme développée sur-mesure pour mettre en relation la marque L'Oréal et ses influenceurs.</SummaryParagraph>
                        <SummaryParagraph>Ceux-ci peuvent s'engager pour des opérations spéciales, devenant ambassadeurs auprès de leur communauté.</SummaryParagraph>
                        <SummaryParagraph>S'adressant principalement aux influenceurs mode et beauté sur Instagram, la plateforme propose également des articles sur les produits, nouveautés et guidelines de la marque. C'est donc un CMS complet qu'il a fallu développer.</SummaryParagraph>
                    </ProjectSummary>
                </Container>
                <Links />
            </ProjectBackground>
        </Layout>
    )
}