import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSchool } from "@fortawesome/free-solid-svg-icons"

export default function Experience(){
    return (
        <div className="flex" id="Experience">
            <div className="flex-1 bg-offPrimary p-4 rounded-xl">
                <div className="flex">
                    <FontAwesomeIcon icon={faSchool} className="text-white w-4" />
                </div>
            </div>
            <div className="flex-1 bg-offPrimary p-4 rounded-xl">

            </div>
        </div>
    )
}