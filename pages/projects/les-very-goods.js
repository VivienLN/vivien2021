
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
            <ProjectHeader slug="les-very-goods" />
            <ProjectBackground>
                <Container>
                    <ProjectSummary>
                        <SummaryParagraph>Les Very Goods est un site de recommandation d'achat fonctionnant avec le programme d'affiliation Amazon.</SummaryParagraph>
                        <SummaryParagraph>On y trouve des guides d'achat sur deux sujets principaux : la tech et la maison.</SummaryParagraph>
                        <SummaryParagraph>Le back-office est construit sur-mesure pour les rédacteurs, et <strong>est connecté au catalogue amazon</strong> (via l'API partenaires), offrant des fonctionnalités dédiées : recherche et sélection de produit, mise à jour des produits en rupture de stock, sélection des variantes et leurs prix, etc.</SummaryParagraph>
                    </ProjectSummary>
                </Container>
                <Links slug="les-very-goods" />
            </ProjectBackground>
        </Layout>
    )
}