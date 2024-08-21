import { useState, useEffect } from "react";

export const useOrigin = () => {
    const [mounted, setMounted] = useState(false);
    const origin =
        // is the window available? and window.location exists?
        // use window.location.origin, otherwise use an empty string
        typeof window !== "undefined" && window.location.origin
            ? window.location.origin
            : "";

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return "";
    }

    return origin;
};
