import Head from 'next/head'
import Layout from '../components/layout'
import IntroSection from '../components/intro/section'
import ServicesSection from '../components/services/section'
import ProjectsSection from '../components/projects/section'
import ContactSection from '../components/contact/section'
import projectsDataHelpers from '../helpers/projects-data-helpers'

export default function Home() {
  const projects = projectsDataHelpers.getActive()

  return (
    <Layout>
      <Head>
        <title>Vivien</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <IntroSection />
      <ServicesSection />
      <ProjectsSection projects={projects} />
      <ContactSection />
    </Layout>
  )
}
