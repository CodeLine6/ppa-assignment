import { useEffect, useRef } from 'react';

const useIntersectionObserver = (callback, options) => {
    const observer = useRef(null);
    const elements = useRef([]);

    useEffect(() => {
        if (observer.current) observer.current.disconnect();

        observer.current = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    callback(entry.target);
                    observer.current.unobserve(entry.target);
                }
            });
        }, options);

        elements.current.forEach(element => observer.current.observe(element));

        return () => {
            if (observer.current) observer.current.disconnect();
        };
    }, [callback, options]);

    const observe = (element) => {
        if (!elements.current.includes(element)) {
            elements.current.push(element);
            if (observer.current) observer.current.observe(element);
        }
    };

    return observe;
};

export default useIntersectionObserver;
