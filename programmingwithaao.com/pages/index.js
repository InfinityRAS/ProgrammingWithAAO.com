import Head from 'next/head'
import Spinner from "../Components/Spinner"
import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import styles from "../styles/Home.module.css"

const Introsection = dynamic(() => import('../Components/Index/Introsection'), {
  suspense: true,
})

const HowmuchlangSection = dynamic(() => import('../Components/Index/HowmuchlangSection'), {
  suspense: true,
})

const Specification = dynamic(() => import('../Components/Index/Specification'), {
  suspense: true,
})

const Whytotakesection = dynamic(() => import('../Components/Index/Whytotakesection'), {
  suspense: true,
})

const Sponsers = dynamic(() => import('../Components/Index/Sponsers'), {
  suspense: true,
})

const Buttons = dynamic(() => import('../Components/Index/Buttons'), {
  suspense: true,
})

export default function Home({ loader }) {
  return (
    <>
      <Head>
        <title>Learn Programming for Free, Free Programming Videos, Courses & more - ProgrammingWithAAO</title>
      </Head>
      <Suspense fallback={<Spinner />}>
        <Introsection />
        <HowmuchlangSection />
        <Specification />
        <Whytotakesection />
        <Sponsers />
        <Buttons loader={loader} />
      </Suspense>
    </>
  )
}
