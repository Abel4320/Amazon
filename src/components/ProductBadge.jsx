const ProductBadge = ({badges}) => {
    if (badges === "choice") {
        return ( 
            <span className='bg-slate-900 p-1 text-white text-xs font-bold'> Amazon's <span className='text-orange-500'>Choice</span></span>
        )
     }
    else if (badges === "seller") { 
        return (
            <span className='bg-orange-500 p-1 text-white text-xs'>#1 Best seller</span>
        )
     }
    else if (badges === "limited") {
        return (
            <span className='bg-red-500 p-1 text-white text-xs'>Limited Time Deal</span>
        )
    }
}

export default ProductBadge

