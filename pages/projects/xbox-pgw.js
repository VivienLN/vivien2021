
import Layout from "../../components/layout"
import ProjectHeader from "../../components/projects/page/header"
import ProjectSummary from "../../components/projects/page/summary"

export default function Project() {
    return (
        <Layout>
            <ProjectHeader slug="xbox-pgw" />
            <ProjectSummary>
                <p className="mb-4">Chaque année, le stand Xbox est un incontournable de la Paris Games Week, le premier salon dédié au jeu vidéo en France.</p>
                <p className="mb-4">Cette année là, nous avons engagé les visiteurs dès la file d'attente. Avec l'agence Carburant, nous avons créé un jeu vidéo leur permettant de gagner des prix et des coupe-files.</p>
                <p>J'ai principalement participé à la conception de ce jeu et à son développement.</p>
            </ProjectSummary>
        </Layout>
    )
}