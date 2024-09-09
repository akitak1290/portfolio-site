import { useEffect, useRef, useState } from "react";

const useElementInViewport = (options: IntersectionObserverInit) => {
    const containerRef = useRef(null);
    const [isVisible, setIsVisible] = useState<boolean>(false);

    const onElementVisible = (entries: IntersectionObserverEntry[]) => {
        const entry = entries[0];
        // if root is the viewport, this is the same as setIsVisible(true)
        setIsVisible(entry.isIntersecting);
    }

    useEffect(() => {
        // to make it clear that containerRef only has 2 states: a specific DOM element or null
        const currentElement = containerRef.current;

        if (!currentElement) return;

        // setup callback when conditions in options are satisfied
        const observer = new IntersectionObserver(onElementVisible, options);

        // check if the DOM element has been rendered to the viewport
        observer.observe(currentElement)

        // cleanup after dismount
        return () => {
            observer.unobserve(currentElement);
        };
    }, [containerRef, options]);

    return { containerRef, isVisible };
}

export default useElementInViewport;