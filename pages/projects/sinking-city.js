
import Layout from "../../components/layout"
import ProjectHeader from "../../components/projects/page/header"
import ProjectSummary from "../../components/projects/page/summary"

export default function Project() {
    return (
        <Layout>
            <ProjectHeader slug="sinking-city" />
            <ProjectSummary>
                <p className="mb-4">The Sinking City est un jeu vidéo d'enquête édité par BigBen Interactive inspiré de l'univers de l'écrivain H.P. Lovecraft.</p>
                <p className="mb-4">J'ai notamment participé aux animations et effets spéciaux du site, avec l'agence Carburant.</p>
                <p className=""><em>Ph'nglui mglw'nqfh Cthulhu R'lyeh wgah'nagl fhtagn !</em></p>
            </ProjectSummary>
        </Layout>
    )
}