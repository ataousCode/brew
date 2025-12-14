import { BACKGROUND_CLASSES, SECTION_STYLES } from '../../utils/constants';

const SectionContainer = ({ 
    children, 
    backgroundColor = "gray-50", 
    className = "",
    maxWidth = true
}) => {
    const backgroundClass = BACKGROUND_CLASSES[backgroundColor] || BACKGROUND_CLASSES["gray-50"];
    const maxWidthClass = maxWidth ? SECTION_STYLES.maxWidth : "";

    return (
        <section className={`${SECTION_STYLES.container} ${backgroundClass} ${className}`}>
            <div className={maxWidthClass}>
                {children}
            </div>
        </section>
    );
};

export default SectionContainer;
