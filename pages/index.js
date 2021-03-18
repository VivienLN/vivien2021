import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'
import Intro from '../components/intro'
import Services from '../components/services'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Intro />
      <Services />

      <main>
        <h1 className="title">
          Read{' '}
          <Link href="/posts/first-post">
            <a>this page!</a>
          </Link>
        </h1>
      </main>
    </Layout>
  )
}
