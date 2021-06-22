
import Layout from "../../components/layout"
import ProjectHeader from "../../components/projects/page/header"
import ProjectSummary from "../../components/projects/page/summary"

export default function Project() {
    return (
        <Layout>
            <ProjectHeader slug="xbox-pgw" />
            <ProjectSummary>
                <p className="mb-4">Chaque année, le stand Xbox est un incontournable de la Paris Games Week, le premier salon dédié au jeu vidéo en France.</p>
                <p className="mb-4">Cette année là, nous avons engagé les visiteurs dès la file d'attente. Avec l'agence Carburant, nous avons créé un jeu vidéo intégré au chatbot xbox (sur messenger)</p>
                <p className="mb-4">Les meilleurs joueurs ont gagné des prix et des coupe-files.</p>
                <p>J'ai principalement participé à la <strong>conception</strong> (game design) et au <strong>développement</strong> du jeu.</p>
            </ProjectSummary>
        </Layout>
    )
}