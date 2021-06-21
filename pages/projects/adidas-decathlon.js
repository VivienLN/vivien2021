
import Layout from "../../components/layout"
import ProjectHeader from "../../components/projects/page/header"
import ProjectSummary from "../../components/projects/page/summary"

export default function Project() {
    return (
        <Layout>
            <ProjectHeader slug="adidas-decathlon" />
            <ProjectSummary>
                <p className="mb-4">En 2020, Adidas lance deux gammes de produits en matières recyclées.</p>
                <p className="">Nous avons développé une page boutique dédiée sur Décathlon, ainsi qu'une page de présentation du procédé de recyclage et de fabrication de ces produits. Elles sont traduites en cinq langues.</p>
            </ProjectSummary>
        </Layout>
    )
}