import projects from "../app/data/projects";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

export default function ArtProjects() {
    const artProjects = projects.artwork;
    const [selectedImage, setSelectedImage] = useState<{
        imageUrl: string;
        title: string;
        subtitle: string;
    } | null>(null);
    const [isVisible, setIsVisible] = useState(false);

    const handleImageClick = (project: {
        imageUrl: string;
        title: string;
        subtitle: string;
    }) => {
        setSelectedImage(project);
        setTimeout(() => setIsVisible(true), 0);
    };

    const handleClose = () => {
        setIsVisible(false);
    };

    useEffect(() => {
        if (!isVisible && selectedImage) {
            const timer = setTimeout(() => setSelectedImage(null), 400); // Match duration-400
            return () => clearTimeout(timer);
        }
    }, [isVisible, selectedImage]);

    return (
        <div className="mx-0 w-screen px-12 lg:px-40 h-fit items-center justify-center my-12 font-poppins">
            <div className="grid grid-cols-2 gap-2 lg:grid-cols-3 lg:gap-2 lg:gap-y-6">
                {artProjects.map((project, index) => (
                    <div
                        className="w-full h-[40vw] lg:h-[25vw] overflow-hidden cursor-pointer rounded-2xl group hover:shadow-secondary shadow-lg transition-all duration-300"
                        key={index}
                        onClick={() => handleImageClick(project)}
                    >
                        <img
                            src={project.imageUrl}
                            alt={project.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-all duration-300"
                        />
                    </div>
                ))}
            </div>
            {selectedImage && (
                <div
                    className={`fixed w-screen top-0 inset-0 flex items-center justify-center z-50 transition-all duration-400 bg-black bg-opacity-75 ${
                        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                    }`}
                >
                    <div className="relative w-fit rounded-xl flex">
                        <button className="fixed top-8 right-20 lg:top-0 lg:right-10 z-50" onClick={handleClose}>
                            <FontAwesomeIcon
                                icon={faCircleXmark}
                                className="w-10 h-10 md:w-12 md:h-12 lg:w-8 lg:h-8 text-white hover:text-red-300 transition-all duration-300"
                            />
                        </button>
                        <a href={selectedImage.imageUrl} target="_blank">
                            <img
                                src={selectedImage.imageUrl}
                                alt={selectedImage.title}
                                className="w-auto h-[70vh] lg:h-[90vh] object-contain rounded-lg"
                            />
                        </a>
                        <div className="overflow-hidden absolute top-0 left-0">
                            <div className="text-white mt-4 max-w-96 p-4 bg-[#121212] h-fit w-fit opacity-80 hover:opacity-100 transition-all duration-300 rounded-r-xl -translate-x-[95%] hover:translate-x-0 cursor-pointer">
                                <h3 className="text-xl font-bold">{selectedImage.title}</h3>
                                <p className="text-wrap text-sm">{selectedImage.subtitle}</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}