import type { NextPage } from "next"
import Head from "next/head"
import Quote from "../components/quote"
import { BsFillDice6Fill } from "react-icons/bs"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { BeatLoader } from "react-spinners"

const Home: NextPage = ({ advice }: any) => {
  const [isFetchingQuote, setIsFetchingQuote] = useState(false)
  const router = useRouter()

  const fetchAdvice = () => {
    router.replace(router.asPath)
    setIsFetchingQuote(true)
    console.log("sup")
  }

  useEffect(() => {
    console.log("use Effect")
    setIsFetchingQuote(false)
  }, [router])

  return (
    <>
      <Head>
        <title>Quote Generator</title>
        <meta name="description" content="A simple quote generator" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {isFetchingQuote && (
        <main className="bg-gray-900 flex justify-center items-center h-screen p-7">
          {/* Quote Wrapper */}
          <div className="relative bg-gray-700 px-6 py-10 rounded-lg max-w-xl">
            {/* Title */}
            <h1 className="text-green-400 text-center mb-5 text-lg sm:text-2xl">Advice incoming...</h1>
            {/* Quote */}
            <div className="flex justify-center items-center py-5">
              <BeatLoader color="#4ade80" />
            </div>
            {/* Lines */}
            <div className="mb-5 my-7 flex gap-2 justify-between items-center">
              <div className="bg-white h-[1px] w-1/2 opacity-40"></div>
              <div className="bg-white h-4 w-[5px] rounded-lg"></div>
              <div className="bg-white h-4 w-[5px] rounded-lg"></div>
              <div className="bg-white h-[1px] w-1/2 opacity-40"></div>
            </div>
            {/* Dice */}
            <div
              onClick={fetchAdvice}
              className="w-16 h-16 bg-green-400 flex justify-center items-center rounded-full absolute -bottom-16 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer">
              <BsFillDice6Fill size={30} />
            </div>
          </div>
        </main>
      )}

      {!isFetchingQuote && (
        <main className="bg-gray-900 flex justify-center items-center h-screen p-7">
          {/* Quote Wrapper */}
          <div className="relative bg-gray-700 px-6 py-10 rounded-lg max-w-xl">
            {/* Title */}
            <h1 className="text-green-400 text-center mb-5 text-lg sm:text-2xl">Advice #{advice.slip.id}</h1>
            {/* Quote */}
            <Quote advice={advice.slip.advice} />
            {/* Lines */}
            <div className="mb-5 my-7 flex gap-2 justify-between items-center">
              <div className="bg-white h-[1px] w-1/2 opacity-40"></div>
              <div className="bg-white h-4 w-[5px] rounded-lg"></div>
              <div className="bg-white h-4 w-[5px] rounded-lg"></div>
              <div className="bg-white h-[1px] w-1/2 opacity-40"></div>
            </div>
            {/* Dice */}
            <div
              onClick={fetchAdvice}
              className="w-16 h-16 bg-green-400 flex justify-center items-center rounded-full absolute -bottom-16 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer">
              <BsFillDice6Fill size={30} />
            </div>
          </div>
        </main>
      )}
    </>
  )
}

export default Home

export async function getServerSideProps() {
  const result = await fetch(`https://api.adviceslip.com/advice`)

  return {
    props: {
      advice: await result.json()
    }
  }
}
