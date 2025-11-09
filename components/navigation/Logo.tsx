import Link from 'next/link';
import Image from "next/image"

const Logo = () => (
    <Link href="/">
        {/* <h1 className="text-5xl font-bold text-gray-600 pb-4"><span className="font-black text-6xl text-green-600">.</span></h1> */}
        <Image 
            src="/images/paulo-teixeira-image-image.png" 
            alt="Paulo Teixeira" 
            className="w-12 max-h-12 mb-6 p-0 xs:p-4 rounded-full"
            width="64" 
            height="64" 
            priority={true}/>
    </Link>

)

export default Logo