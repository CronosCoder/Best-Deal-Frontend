import { Rating } from '@smastrom/react-rating';
import { useState } from 'react';
import '@smastrom/react-rating/style.css'

const PdRating = () => {
    const [rating, setRating] = useState(3) // Initial value

    return <Rating style={{ maxWidth: 100 }} readOnly={true} value={rating} onChange={setRating} />
};

export default PdRating;