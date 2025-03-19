import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGraduationCap, faLaptopCode } from "@fortawesome/free-solid-svg-icons"
import experiences from "../app/data/experiences"

export default function Experience(){
    return (
        <div className="flex md:flex-row flex-col md:gap-0 gap-4 my-8 text-lightText" id="Experience">
            <div className="flex-1 md:mx-4 mx-0 bg-offPrimary p-4 rounded-3xl transition-all group">
                <div className="flex">
                    <div className="flex items-center flex-col">
                        <div className="bg-secondary rounded-full p-2 flex items-center justify-center">
                            <FontAwesomeIcon icon={faGraduationCap} className="text-white w-8 h-8" />
                        </div>
                        <div className="w-[1px] h-full bg-gray-600 group-hover:bg-secondary transition-all" />
                    </div>
                    <div className="flex flex-col ml-4">
                        <h1 className="text-white font-bold text-xl pb-2 uppercase group-hover:text-secondary transition-all md:block hidden">Education</h1>
                        {experiences.education.map((item, index) => (
                            <div className="text-lightText md:py-2 py-0 group/child" key={index}>
                                <div className="flex justify-between items-center mb-2">
                                    {item.url ? (
                                        <a href={item.url} target="_blank"><img src={item.src} alt={item.src} className="w-auto h-12" /></a>
                                    ) : (
                                        <img src={item.src} alt={item.src} className="w-auto h-12" />
                                    )}
                                    <div className="bg-gray-600 w-fit px-4 py-1 float-end rounded-full text-center hover:text-secondary transition-all">
                                        <h1 className="text-sm font-bold uppercase">{item.date}</h1>
                                    </div>
                                </div>
                                <h1 className="text-white text-xl font-bold group-hover/child:text-secondary transition-all">{item.location}</h1>
                                <h1 className="text-lg font-semibold">{item.title}</h1>
                                <h1 className="font-normal">{item.subtitle}</h1>
                                {item.description.map((desc, index) => (
                                    <h1 className="font-light text-sm italic" key={index}>{desc}</h1>
                                ))}
                                <h1 className="font-semibold text-sm">{item.grade}</h1>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="flex-1 md:mx-4 mx-0 bg-offPrimary p-4 rounded-3xl transition-all group">
                <div className="flex">
                    <div className="flex items-center flex-col">
                        <div className="bg-secondary rounded-full p-2 flex items-center justify-center">
                            <FontAwesomeIcon icon={faLaptopCode} className="text-white w-8 h-8" />
                        </div>
                        <div className="w-[1px] h-full bg-gray-600 group-hover:bg-secondary transition-all" />
                    </div>
                    <div className="flex flex-col ml-4">
                        <h1 className="text-white font-bold text-xl pb-2 uppercase group-hover:text-secondary transition-all md:block hidden">Work</h1>
                        {experiences.professional.map((item, index) => (
                            <div className="text-lightText md:py-2 py-0 group/child" key={index}>
                                <div className="flex justify-between items-center mb-2">
                                    {item.url ? (
                                        <a href={item.url} target="_blank"><img src={item.src} alt={item.src} className="w-auto h-12" /></a>
                                    ) : (
                                        <img src={item.src} alt={item.src} className="w-auto h-12" />
                                    )}
                                    <div className="bg-gray-600 w-fit px-4 py-1 float-end rounded-full text-center hover:text-secondary transition-all">
                                        <h1 className="text-sm font-bold uppercase">{item.date}</h1>
                                    </div>
                                </div>
                                <h1 className="text-white text-xl font-bold group-hover/child:text-secondary transition-all">{item.title}</h1>
                                <h1 className="text-lg font-semibold">{item.location}</h1>
                                {item.description.map((desc, index) => (
                                    <h1 className="font-light text-sm" key={index}>• {desc}</h1>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}