import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'
import IntroSection from '../components/intro/section'
import ServicesSection from '../components/services/section'
import ProjectsSection from '../components/projects/section'
import ContactSection from '../components/contact/section'
import FxGoo from '../components/fx/goo'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="relative z-10">
        <IntroSection />
        <ServicesSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      <FxGoo />

      <div>
        <h1 className="title">
          Read{' '}
          <Link href="/posts/first-post">
            <a>this page!</a>
          </Link>
        </h1>
      </div>
    </Layout>
  )
}
