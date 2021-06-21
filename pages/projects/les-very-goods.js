
import Layout from "../../components/layout"
import ProjectHeader from "../../components/projects/page/header"
import ProjectSummary from "../../components/projects/page/summary"

export default function Project() {
    return (
        <Layout>
            <ProjectHeader slug="les-very-goods" />
            <ProjectSummary>
                <p className="mb-4">Les Very Goods est un site de recommandation d'achat fonctionnant avec le programme d'affiliation Amazon. Les utilisateurs y trouvent des guides d'achat sur deux catégories principales : tech et maison.</p>
                <p className="">Le back-office est construit sur-mesure pour les rédacteurs, et offre des fonctionnalités spécifiques liées à l'API amazon : sélection de produit, mise à jour des produits en rupture de stock, sélection des variantes et leurs prix, etc.</p>
            </ProjectSummary>
        </Layout>
    )
}