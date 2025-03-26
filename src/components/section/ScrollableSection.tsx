import { useState, useEffect, useRef } from 'react';
import { sections } from '@/utils/data/sections';
import  SectionComponent  from './SectionComponent';

interface ScrollableSectionProps {
    className?: string; // Allow custom styling when used as a block
}

const ScrollableSection = ({ className }: ScrollableSectionProps) => {
    const [activeSection, setActiveSection] = useState(0);
    const [isScrolling, setIsScrolling] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);
    const imagesRef = useRef<HTMLDivElement>(null);

    // Handle scroll to update active section
    useEffect(() => {
        const handleScroll = () => {
            if (!containerRef.current || isScrolling) return;

            const scrollPosition = window.scrollY + window.innerHeight / 3;

            const sectionElements = containerRef.current.querySelectorAll('[id^="design-"], [id^="web-"], [id^="custom-"], [id^="mobile-"], [id^="maintenance-"], [id^="quality-"], [id^="other-"]');

            let currentIndex = 0;
            sectionElements.forEach((section, index) => {
                const rect = section.getBoundingClientRect();
                const offsetTop = rect.top + window.scrollY;

                if (scrollPosition >= offsetTop) {
                    currentIndex = index;
                }
            });

            if (currentIndex !== activeSection) {
                setActiveSection(currentIndex);
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [activeSection, isScrolling]);

    // Add parallax effect to the images
    useEffect(() => {
        const handleParallax = () => {
            if (!imagesRef.current) return;

            const scrollY = window.scrollY;
            imagesRef.current.style.transform = `translateY(${scrollY * 0.1}px)`;
        };

        window.addEventListener('scroll', handleParallax);

        return () => {
            window.removeEventListener('scroll', handleParallax);
        };
    }, []);

    const handleSectionClick = (index: number) => {
        setIsScrolling(true);
        setActiveSection(index);

        setTimeout(() => {
            setIsScrolling(false);
        }, 1000);
    };

    return (
        <div className={`min-h-screen bg-white text-gray-900 dark:bg-gray-900/10 dark:text-white transition-colors duration-300 ${className || ''}`}>
            <div className="container mx-auto max-w-7xl px-4 py-20 md:py-32">
                <div className="flex flex-col lg:flex-row">
                    {/* Left column - Sections */}
                    <div ref={containerRef} className="w-full lg:w-1/2 lg:pr-8">
                        {sections.map((section, index) => (
                            <SectionComponent
                                key={section.id}
                                section={section}
                                isActive={index === activeSection}
                                onClick={() => handleSectionClick(index)}
                            />
                        ))}
                    </div>

                    {/* Right column - Images */}
                    <div className="hidden lg:flex lg:w-1/2 sticky top-32 h-[500px]">
                        <div ref={imagesRef} className="image-container w-full floating-animation">
                            {sections.map((section, index) => (
                                <div
                                    key={section.id}
                                    className={`section-image ${index === activeSection ? 'active' : ''}`}
                                    aria-hidden={index !== activeSection}
                                >
                                    <img
                                        src={section.image}
                                        alt={section.title}
                                        className="w-full h-auto object-contain rounded-lg shadow-lg transition-all duration-500"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ScrollableSection;