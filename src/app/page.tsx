import { Button } from "@/components/ui/button"
import Image from "next/image"
import burger from '../../public/images/burger.png'


const HomePage = () => {
  return (
    <div className="">
      <h1 className="text-gray-800 text-5xl font-medium">Make Your Burger</h1>
      <p className="text-gray-800 text-xl font-normal leading-relaxed mt-3">Parallax screen. Burger ingredients and emojis moving depending on the position of the mouse pointer.</p>
      <div className="relative flex justify-center items-center">
        <Button className="rounded-full h-24 w-24 text-xs absolute uppercase hover:bg-blue-900 duration-500">make burger</Button>
        <Image src={burger} alt="burger" quality={100} className="mx-auto"/>
      </div>
    </div>
  )
}

export default HomePage