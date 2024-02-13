import { useMemo } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons'

import Row from "./layouts/Row"

const Star = () => <FontAwesomeIcon width={20} height={20} icon={faStarRegular} />
const StarFilled = () => <FontAwesomeIcon width={20} height={20} icon={faStar} />

const Stars = ({ level, maxLevel = 5 }) => {

    const filledStars = useMemo(() => Array.from(Array(level).keys()), [level])
    const emptyStars = useMemo(() => Array.from(Array(maxLevel - level).keys()), [level, maxLevel])

    const stars = useMemo(() => {
        return (
            <Row className="ms-2">
                {filledStars.map(e => <StarFilled key={e} />)}
                {emptyStars.map(e => <Star key={e} />)}
            </Row>
        )
    }, [level])

    return stars

}

export default Stars