import SectionContainer from "./common/SectionContainer";
import SectionHeader from "./common/SectionHeader";
import ImageWithFallback from "./common/ImageWithFallback";
import { GRID_PATTERNS, CARD_STYLES } from "../utils/constants";

const OurPartners = ({ 
    title = "Our Partners",
    subtitle = "Trusted by leading companies worldwide",
    partners = [],
    backgroundColor = "white",
    className = ""
}) => {
    // Default partners data if none provided
    const defaultPartners = [
        {
            id: 1,
            name: "Sichuan Tea Gardens",
            logo: "/logo1.png",
            website: "https://example.com",
            description: "Premium tea supplier"
        },
        {
            id: 2,
            name: "African Tea Distributors",
            logo: "/logo2.png",
            website: "https://example.com",
            description: "Distribution partner"
        },
        {
            id: 3,
            name: "Global Tea Network",
            logo: "/logo3.png",
            website: "https://example.com",
            description: "International partner"
        },
        {
            id: 4,
            name: "Morocco Tea Importers",
            logo: "/logo4.png",
            website: "https://example.com",
            description: "Regional partner"
        }
    ];

    const displayPartners = partners.length > 0 ? partners : defaultPartners;

    return (
        <SectionContainer backgroundColor={backgroundColor} className={className}>
            <SectionHeader title={title} subtitle={subtitle} />

            {/* Partners Grid */}
            <div className={GRID_PATTERNS.cards}>
                {displayPartners.map((partner) => (
                    <a
                        key={partner.id}
                        href={partner.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`group ${CARD_STYLES.withBorder} p-6`}
                    >
                        {/* Logo Container */}
                        <div className="flex items-center justify-center mb-4 h-24 bg-gray-50 rounded-2xl group-hover:bg-green-50 transition-colors duration-300">
                            <ImageWithFallback
                                src={partner.logo}
                                alt={`${partner.name} logo`}
                                fallbackEmoji="🏢"
                                className="max-h-16 max-w-full object-contain"
                                containerClassName="w-full h-full"
                            />
                        </div>

                            {/* Company Name */}
                            <h3 className="text-xl font-bold text-green-800 mb-2 text-center group-hover:text-green-700 transition-colors">
                                {partner.name}
                            </h3>

                            {/* Description (optional) */}
                            {partner.description && (
                                <p className="text-sm text-gray-600 text-center mb-3">
                                    {partner.description}
                                </p>
                            )}

                            {/* Website Link */}
                            <div className="flex items-center justify-center text-sm text-green-600 group-hover:text-green-700 transition-colors">
                                <span className="mr-2">Visit website</span>
                                <svg 
                                    className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" 
                                    fill="none" 
                                    stroke="currentColor" 
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </div>
                        </a>
                        ))}
            </div>
        </SectionContainer>
    );
};

export default OurPartners;
