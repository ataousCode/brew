import OurMission from "./OurMission";

const OurStory = ({ showButton = true }) => {
    return (
        <OurMission
            sectionTitle="Our Story"
            sectionSubtitle="Connecting tea cultures across continents through authentic flavors."
            badge="Origin Story · Since 2020"
            title="From Sichuan Mountains to African Tables"
            description="Our journey began with a passion for sharing authentic Chinese tea culture with tea lovers around the world, especially in Morocco where tea is deeply woven into daily life."
            image="/img3.jpeg"
            imagePosition="right"
            buttonText="Discover Our Journey"
            buttonTo="/about"
            showButton={showButton}
            showHeaderButton={showButton}
            backgroundColor="gray-50"
        />
    );
}

export default OurStory;