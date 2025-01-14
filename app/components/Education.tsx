import {education} from "../../public/information/education"

const PopulateEducation = () => {
    return (
        <div>
            {education.map((school) => {
                return (
                    <div className = "school-card" key = {school.id}>
                        {school.degree.map((degree) => {
                            return <p key = {degree}>{degree}</p>
                        })}
                        <h3>{school.school}</h3>
                        <address>{school.location}</address>
                    </div>
                )
            })}
        </div>
    )
}

export default PopulateEducation