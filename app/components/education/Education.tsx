import {education} from "../../../public/information/education"

const PopulateEducation = () => {
    return (
        <div id = "school-card-wrapper" className = "flex flex-wrap w-full justify-evenly items-stretch">
            {education.map((school) => {
                return (
                    <div className = "school-card w-80 sm:w-[483px] p-4 flex flex-col gap-2" key = {school.id}>
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