
import Layout from "../../components/layout"
import ProjectHeader from "../../components/projects/page/header"
import ProjectSummary from "../../components/projects/page/summary"

export default function Project() {
    return (
        <Layout>
            <ProjectHeader slug="le-fil-loreal" />
            <ProjectSummary>
                <p className="mb-4">Le fil est une plateforme développée sur-mesure pour mettre en relation la marque L'Oréal et ses influenceurs.</p>
                <p className="mb-4">Ceux-ci peuvent s'engager pour des opérations spéciales, devenant ambassadeurs auprès de leur communauté.</p>
                <p className="">S'adressant principalement aux influenceurs modes et beauté sur Instagram, la plateforme propose également des articles sur les produits, nouveautés et guidelines de la marque. C'est donc un CMS complet qu'il a fallu développer.</p>
            </ProjectSummary>
        </Layout>
    )
}