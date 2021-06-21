
import Layout from "../../components/layout"
import ProjectHeader from "../../components/projects/page/header"
import ProjectSummary from "../../components/projects/page/summary"

export default function Project() {
    return (
        <Layout>
            <ProjectHeader slug="ni-no-kuni-2" />
            <ProjectSummary>
                <p className="mb-4">Pour la sortie du jeu Ni No Kuni 2, nous avons développé un site officiel en une page.</p>
                <p>Le site devait être 100% statique et pouvoir tourner sans aucun code serveur, tout en offrant une expérience immersive en six langues.</p>
            </ProjectSummary>
        </Layout>
    )
}