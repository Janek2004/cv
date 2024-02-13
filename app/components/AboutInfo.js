import Stars from "./Stars"
import Row from "./layouts/Row"

const AboutInfo = ({ text, starsLevel = 0 }) => {

    return (
        <Row className="ms-2">
            <span>{text}</span>
            {starsLevel ? <Stars level={starsLevel} /> : null}
        </Row>
    )
}

export default AboutInfo