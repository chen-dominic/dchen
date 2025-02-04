import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGraduationCap, faLaptopCode } from "@fortawesome/free-solid-svg-icons"
import experiences from "../data/experiences"
import paths from "../data/paths"

export default function Experience(){
    return (
        <div className="flex my-8 text-lightText" id="Experience">
            <div className="flex-1 mx-4 bg-offPrimary p-4 rounded-3xl transition-all group">
                <div className="flex">
                    <div className="flex items-center flex-col">
                        <div className="bg-secondary rounded-full p-2">
                            <FontAwesomeIcon icon={faGraduationCap} className="text-white w-8 h-8" />
                        </div>
                        <div className="w-[2px] h-full bg-lightText group-hover:bg-secondary transition-all" />
                    </div>
                    <div className="flex flex-col ml-4">
                        <h1 className="text-white font-bold text-2xl pb-2 uppercase group-hover:text-secondary transition-all">Education</h1>
                        {experiences.education.map((item, index) => (
                            <div className="text-lightText py-4 border-t border-primary" key={index}>
                                <h1 className="text-white text-xl font-bold">{item.location}</h1>
                                <h1 className="text-lg font-semibold">{item.title}</h1>
                                <h1 className="font-normal">{item.subtitle}</h1>
                                <h1 className="font-normal">{item.grade}</h1>
                                <div className="flex justify-between items-center mt-2">
                                    <img src={item.src} alt={item.src} className="w-auto h-12" />
                                    <div className="bg-gray-600 w-fit px-4 py-1 float-end rounded-full text-center hover:text-secondary transition-all">
                                        <h1 className="text-sm font-semibold">{item.date}</h1>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="flex-1 mx-4 bg-offPrimary p-4 rounded-3xl transition-all group">
                <div className="flex">
                    <div className="flex items-center flex-col">
                        <div className="bg-secondary rounded-full p-2">
                            <FontAwesomeIcon icon={faLaptopCode} className="text-white w-8 h-8" />
                        </div>
                        <div className="w-[2px] h-full bg-lightText group-hover:bg-secondary transition-all" />
                    </div>
                    <div className="flex flex-col ml-4">
                        <h1 className="text-white font-bold text-2xl pb-2 uppercase group-hover:text-secondary transition-all">Professional</h1>
                        {experiences.professional.map((item, index) => (
                            <div className="text-lightText py-4 border-t border-primary" key={index}>
                                <h1 className="text-white text-xl font-bold">{item.title}</h1>
                                <h1 className="text-lg font-semibold">{item.location}</h1>
                                {item.description.map((desc, index) => (
                                    <h1 className="font-normal" key={index}>• {desc}</h1>
                                ))}
                                <div className="flex justify-between items-center mt-2">
                                    <img src={item.src} alt={item.src} className="w-auto h-12" />
                                    <div className="bg-gray-600 w-fit px-4 py-1 float-end rounded-full text-center hover:text-secondary transition-all">
                                        <h1 className="text-sm font-semibold">{item.date}</h1>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}