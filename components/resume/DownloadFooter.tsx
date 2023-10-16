import Button from '../Button'


const FooterCTA = () => {
    



    return (

<div className="fixed bottom-0 w-full bg-yellow-600 py-2">
    <p className="text-center">
        {/* <a className="hover:bg-gray-500 hover:text-white bg-white text-gray-500 py-2 px-4 border hover:border-gray-500 border-white rounded transition duration-500" 
            target="_blank" rel="noreferrer"  
            href="https://drive.google.com/file/d/1PuPYO0u5tYwWTIbTCtEbKX_ArNKQf2CV/view?usp=sharing">
            Download full CV (PDF)
        </a> */}

    <Button to="www.google.com" yellow={false} transparent={true} >
        Download full CV (PDF)
    </Button>
    </p>
</div>
  
)}



export default FooterCTA