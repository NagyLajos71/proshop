import {FaStar, FaStarHalfAlt, FaRegStar} from 'react-icons/fa';

function Rating({ratingValue, ratingText}) {
  return (
    <div className='rating'>
        {/*conditional check: if-else 
        FaStar=full, FaStarHalfAlt=half FaRegStar=empty star
        we need 5 spans for 5 stars
        */}
        <span>
        {/*first star*/}
           {ratingValue>=1 ? <FaStar/> : ratingValue >=0.5 ? <FaStarHalfAlt />: <FaRegStar />} 
        </span>
        <span>
        {/*2nd star*/}
           {ratingValue>=2 ? <FaStar/> : ratingValue >=1.5 ? <FaStarHalfAlt />: <FaRegStar />} 
        </span>
        <span>
        {/*3rd star*/}
           {ratingValue>=3 ? <FaStar/> : ratingValue >=2.5 ? <FaStarHalfAlt />: <FaRegStar />} 
        </span>
        <span>
        {/*4th star*/}
           {ratingValue>=4 ? <FaStar/> : ratingValue >=3.5 ? <FaStarHalfAlt />: <FaRegStar />} 
        </span>
        <span>
        {/*5th star*/}
           {ratingValue>=5 ? <FaStar/> : ratingValue >=4.5 ? <FaStarHalfAlt />: <FaRegStar />} 
        </span>
        <span className='rating-text'>
            {ratingText ? ratingText :  null}
        </span>
    </div>
  )
}

export default Rating