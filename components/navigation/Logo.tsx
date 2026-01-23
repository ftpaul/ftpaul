import Link from 'next/link';
import Image from "next/image"

const Logo = () => (
    <Link href="/">
        
        <Image 
            src="/images/paulo-teixeira-image-image.png" 
            alt="Paulo Teixeira" 
            className="w-12 max-h-12 mb-6 p-0 xs:mb-0 rounded-full"
            width="64" 
            height="64" 
            priority={true}/>
    </Link>

)

export default Logo