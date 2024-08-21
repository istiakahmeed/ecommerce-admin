"use client";

import { useEffect, useState } from "react";

import { StoreModal } from "@/components/modals/store-modal";

export const ModalProvider = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    // to avoid hydration errors, return null
    // if we are in server side rendering
    if (!isMounted) {
        return null;
    }

    return (
        <>
            <StoreModal />
        </>
    );
};
