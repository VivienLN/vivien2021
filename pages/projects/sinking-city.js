
import Layout from "../../components/layout"
import { useRouter } from 'next/router'
import ProjectHeader from "../../components/projects/header"
import ProjectSummary from "../../components/projects/summary"

export default function Project() {
    const projectData = {
        name: "The Sinking City",
        subtitle: "Site officiel",
        meta: [
            {
                title: "Rôles",
                items: [
                    "Direction technique",
                    "Développement"
                ]
            },
            {
                title: "Technos",
                items: [
                    "Canvas 2D API",
                    "Bootstrap",
                ]
            },
            {
                title: "Equipe",
                items: [
                    "Carburant",
                ]
            },
            {
                title: "Client",
                items: [
                    "Bigben Interactive",
                ]
            },
            {
                title: "Année",
                items: [
                    "2019",
                ]
            },
        ]
    }

    return (
        <Layout>
            <ProjectHeader data={ projectData } />
            <ProjectSummary>
                <p className="mb-4">The Sinking City est un jeu vidéo d'enquête édité par BigBen Interactive inspiré de l'univers de l'écrivain H.P. Lovecraft.</p>
                <p className="mb-4">J'ai notamment participé aux animations et effets spéciaux du site, avec l'agence Carburant.</p>
                <p className="mb-4"><em>Ph'nglui mglw'nqfh Cthulhu R'lyeh wgah'nagl fhtagn !</em></p>
            </ProjectSummary>

        </Layout>
    )
}