import Button from "./Button";
import SectionContainer from "./common/SectionContainer";
import ImageWithFallback from "./common/ImageWithFallback";
import { BACKGROUND_CLASSES } from "../utils/constants";

const OurMission = ({ 
    sectionTitle = "Our Mission",
    sectionSubtitle = "Dedicated to excellence in every cup",
    badge = "Our Mission",
    title = "Bringing Authentic Chinese Tea to Africa",
    description = "Our mission is to bridge cultures and connect tea lovers across continents by delivering the finest quality Sichuan tea with authenticity, passion, and excellence.",
    image = "/img1.jpeg",
    imagePosition = "right",
    buttonText = "Learn More",
    buttonTo = "/about",
    showButton = true,
    showHeaderButton = true,
    backgroundColor = "gray-50",
    className = ""
}) => {
    const isImageLeft = imagePosition === "left";

    return (
        <SectionContainer backgroundColor={backgroundColor} className={className}>
                {/* Header */}
                <div className="flex justify-between items-start mb-12 flex-wrap gap-4">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold text-green-800 mb-3">
                            {sectionTitle}
                        </h2>
                        <p className="text-gray-600 text-lg">
                            {sectionSubtitle}
                        </p>
                    </div>
                    {showHeaderButton && showButton && (
                        <Button to={buttonTo} variant="outline">
                            {buttonText}
                        </Button>
                    )}
                </div>

                {/* Content Grid */}
                <div className={`grid md:grid-cols-2 gap-8 items-center ${!isImageLeft ? 'md:grid-flow-dense' : ''}`}>
                    {/* Text Content */}
                    <div className={`bg-white rounded-3xl p-8 md:p-10 shadow-lg ${!isImageLeft ? 'md:col-start-1 md:row-start-1' : ''}`}>
                        {badge && (
                            <p className="text-green-600 font-medium mb-4">
                                {badge}
                            </p>
                        )}
                        <h3 className="text-3xl md:text-4xl font-bold text-green-800 mb-6">
                            {title}
                        </h3>
                        <p className="text-gray-700 text-lg leading-relaxed mb-6">
                            {description}
                        </p>
                        {showButton && (
                            <Button to={buttonTo} variant="outline">
                                {buttonText}
                            </Button>
                        )}
                    </div>
                    {/* Image */}
                    <div className={`rounded-3xl overflow-hidden bg-gradient-to-br from-green-100 to-amber-100 h-96 ${!isImageLeft ? 'md:col-start-2' : ''}`}>
                        <ImageWithFallback
                            src={image}
                            alt={title}
                            fallbackEmoji="🎯"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
        </SectionContainer>
    );
};

export default OurMission;
