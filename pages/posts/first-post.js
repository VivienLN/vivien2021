import Link from "next/link"
import Head from "next/head"
import Layout from "../../components/layout"
import { motion } from "framer-motion";

export default function FirstPost() {
    return (
        <Layout>
            <Head>
                <title>My first post</title>
            </Head>
            <h1>First post</h1>
            <h2><Link href="/"><a>Return to index</a></Link></h2>
        </Layout>
    )
}