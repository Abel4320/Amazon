import { StarIcon } from '@heroicons/react/24/outline'

const ProductRating = ({ avgRating,ratings }) => {
    const starNumber = avgRating
    const ratingNumber=ratings
  return (
      <div className='flex'>
          {Array.from({ length: starNumber }, (_, i) => <StarIcon key={i} className='stroke-[#F1B61F] fill-[#F1B61F] h-[20px]' />)}
          {Array.from({ length: 5 - starNumber }, (_, i) => <StarIcon key={i} className='stroke-[#F1B61F] h-[20px]' />)}
          <span className='ml-3 text-blue-500'>{ratingNumber}</span>
    </div>
  )
}

export default ProductRating