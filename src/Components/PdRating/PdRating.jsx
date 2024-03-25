import { Rating } from '@smastrom/react-rating';
import { useState } from 'react';
import '@smastrom/react-rating/style.css'

const PdRating = () => {
    const [rating, setRating] = useState(0) // Initial value

    return <Rating style={{ maxWidth: 100 }} value={rating} onChange={setRating} />
};

export default PdRating;