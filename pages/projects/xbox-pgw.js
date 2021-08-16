
import Layout from "../../components/layout"
import ProjectBackground from "../../components/projects/page/background"
import ProjectHeader from "../../components/projects/page/header"
import ProjectSummary from "../../components/projects/page/summary"
import SummaryParagraph from "../../components/projects/page/summary-paragraph"
import Video from "../../components/projects/page/video"
import Container from "../../components/container"
import AnimatedNumber from "../../components/projects/page/animated-number"
import Links from "../../components/projects/page/links"

export default function Project() {
    return (
        <Layout>
            <ProjectHeader />
            <ProjectBackground>
                <Container>
                    <ProjectSummary>
                        <SummaryParagraph>Chaque année, le stand Xbox est un incontournable de la Paris Games Week, le premier salon dédié au jeu vidéo en France.</SummaryParagraph>
                        <SummaryParagraph>Cette année là, nous avons engagé les visiteurs dès la file d'attente. Avec l'agence Carburant, nous avons créé un jeu vidéo intégré au chatbot xbox (sur messenger)</SummaryParagraph>
                        <SummaryParagraph>Les meilleurs joueurs ont gagné des prix et des coupe-files.</SummaryParagraph>
                        <SummaryParagraph>J'ai principalement participé à la <strong>conception</strong> (game design) et au <strong>développement</strong> du jeu.</SummaryParagraph>
                    </ProjectSummary>
                    <Video url="https://player.vimeo.com/video/240979266" controls muted={false} playsinline={false} playing={false} />
                    <AnimatedNumber isFirst value={1176609} label="parties jouées" />
                    <AnimatedNumber isLast value={17} label="jours d'opération" align="right" />
                </Container>
                <Links />
            </ProjectBackground>
        </Layout>
    )
} 