import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// This component handles scrolling to top for route changes
// and works with Lenis smooth scroll
const ScrollToTop = ({ lenisInstance }) => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
        if (lenisInstance) {
            lenisInstance.scrollTo(0, { immediate: true });
        }
    }, [pathname, lenisInstance]);

    return null; // This component doesn't render anything
};

export default ScrollToTop;