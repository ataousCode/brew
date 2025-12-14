import SectionContainer from "./common/SectionContainer";
import SectionHeader from "./common/SectionHeader";
import ImageWithFallback from "./common/ImageWithFallback";
import { GRID_PATTERNS, CARD_STYLES } from "../utils/constants";

const OurExpertTeam = ({ 
    title = "Our Expert Team",
    subtitle = "Meet the passionate tea experts behind our success",
    teamMembers = [],
    backgroundColor = "gray-50",
    className = ""
}) => {
    // Default team members data if none provided
    const defaultTeamMembers = [
        {
            id: 1,
            name: "Li Wei",
            role: "Tea Master & Founder",
            image: "/team1.jpg",
            bio: "20+ years of experience in Sichuan tea cultivation and processing.",
            social: {
                linkedin: "https://linkedin.com",
                email: "liwei@example.com"
            }
        },
        {
            id: 2,
            name: "Amina Hassan",
            role: "African Market Director",
            image: "/team2.jpg",
            bio: "Expert in tea distribution across African markets.",
            social: {
                linkedin: "https://linkedin.com",
                email: "amina@example.com"
            }
        },
        {
            id: 3,
            name: "Zhang Ming",
            role: "Quality Control Specialist",
            image: "/team3.jpg",
            bio: "Ensures every batch meets our premium quality standards.",
            social: {
                linkedin: "https://linkedin.com",
                email: "zhang@example.com"
            }
        },
        {
            id: 4,
            name: "Fatima Alami",
            role: "Customer Relations Manager",
            image: "/team4.jpg",
            bio: "Building lasting relationships with tea lovers across Morocco.",
            social: {
                linkedin: "https://linkedin.com",
                email: "fatima@example.com"
            }
        }
    ];

    const displayMembers = teamMembers.length > 0 ? teamMembers : defaultTeamMembers;

    return (
        <SectionContainer backgroundColor={backgroundColor} className={className}>
            <SectionHeader title={title} subtitle={subtitle} />

            {/* Team Grid */}
            <div className={GRID_PATTERNS.cards}>
                {displayMembers.map((member) => (
                    <div
                        key={member.id}
                        className={`group ${CARD_STYLES.withBorder} overflow-hidden`}
                    >
                        {/* Image */}
                        <div className="relative h-64 bg-gradient-to-br from-green-100 to-amber-100 overflow-hidden">
                            <ImageWithFallback
                                src={member.image}
                                alt={member.name}
                                fallbackEmoji="👤"
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                                
                                {/* Social Links Overlay */}
                                {member.social && (
                                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                                        {member.social.linkedin && (
                                            <a
                                                href={member.social.linkedin}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="bg-white rounded-full p-3 hover:bg-green-50 transition-colors"
                                                aria-label={`${member.name} LinkedIn`}
                                            >
                                                <svg className="w-5 h-5 text-green-700" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                                                </svg>
                                            </a>
                                        )}
                                        {member.social.email && (
                                            <a
                                                href={`mailto:${member.social.email}`}
                                                className="bg-white rounded-full p-3 hover:bg-green-50 transition-colors"
                                                aria-label={`Email ${member.name}`}
                                            >
                                                <svg className="w-5 h-5 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                                </svg>
                                            </a>
                                        )}
                                    </div>
                                )}
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                {/* Name */}
                                <h3 className="text-xl font-bold text-green-800 mb-1 group-hover:text-green-700 transition-colors">
                                    {member.name}
                                </h3>

                                {/* Role */}
                                <p className="text-green-600 font-medium text-sm mb-3">
                                    {member.role}
                                </p>

                                {/* Bio */}
                                {member.bio && (
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        {member.bio}
                                    </p>
                                )}
                            </div>
                        </div>
                    ))}
            </div>
        </SectionContainer>
    );
};

export default OurExpertTeam;
