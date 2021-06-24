import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'
import IntroSection from '../components/intro/section'
import ServicesSection from '../components/services/section'
import ProjectsSection from '../components/projects/section'
import ContactSection from '../components/contact/section'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Vivien</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <IntroSection />
      <ServicesSection />
      <ProjectsSection />
      <ContactSection />
    </Layout>
  )
}
