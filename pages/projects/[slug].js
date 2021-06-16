import Link from "next/link"
import Head from "next/head"
import Layout from "../../components/layout"
import { useRouter } from 'next/router'

export default function Project() {
    const router = useRouter()
    const { slug } = router.query

    return (
        <Layout>
            <Head>
                <title>Project test</title>
            </Head>
            <h1>C'EST NOTRE PROJEEEEET ({slug})</h1>
            <h2><Link href="/"><a>Return to index</a></Link></h2>
        </Layout>
    )
}