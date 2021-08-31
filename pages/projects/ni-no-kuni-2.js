
import Layout from "../../components/layout"
import ProjectBackground from "../../components/projects/page/background"
import ProjectHeader from "../../components/projects/page/header"
import ProjectSummary from "../../components/projects/page/summary"
import SummaryParagraph from "../../components/projects/page/summary-paragraph"
import Video from "../../components/projects/page/video"
import Image from "../../components/projects/page/image"
import Container from "../../components/container"
import Links from "../../components/projects/page/links"

export default function Project() {
    return (
        <Layout>
            <ProjectHeader slug="ni-no-kuni-2" />
            <ProjectBackground>
                <Container>
                    <ProjectSummary>
                        <SummaryParagraph>Pour la sortie du jeu Ni No Kuni 2, nous avons développé le site officiel en une page.</SummaryParagraph>
                        <SummaryParagraph>Le site devait être 100% statique et pouvoir tourner sans aucun code serveur, tout en offrant une expérience immersive en six langues.</SummaryParagraph>
                    </ProjectSummary>
                    <Video url="/images/projects/ni-no-kuni-2/home.mp4" />
                    <Video url="/images/projects/ni-no-kuni-2/scroll.mp4" />
                    <Image src="/images/projects/ni-no-kuni-2/menu.jpg" width={960} height={540} />
                </Container>
                <Links slug="ni-no-kuni-2" />
            </ProjectBackground>
        </Layout>
    )
}