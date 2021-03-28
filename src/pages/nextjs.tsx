import {motion} from 'framer-motion'
import Link from 'next/link'

export default function NextPage() {
  return (
    <div className="flex flex-col items-center">
      <motion.img src="/img/nextjs.svg" className="w-full h-full" layoutId="nextjs-logo"  />


      <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{delay: 1, duration: 1}}

      >

        <Link href="/" >

          <a className="bg-gray-900 text-gray-500 px-6 py-3 font-semibold rounded-xl hover:bg-gray-700 ">
            Voltar para a home
          </a>
        </Link>


      </motion.div>

    </div>
  )
}