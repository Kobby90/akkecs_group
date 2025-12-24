"use client";

import React, { createContext, useContext, useState } from 'react';

interface DemoContextType {
    isOpen: boolean;
    openDemoModal: () => void;
    closeDemoModal: () => void;
}

const DemoContext = createContext<DemoContextType | undefined>(undefined);

export const DemoProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const openDemoModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    return (
        <DemoContext.Provider value={{ isOpen, openDemoModal, closeDemoModal: closeModal }}>
            {children}
        </DemoContext.Provider>
    );
};

export const useDemoModal = () => {
    const context = useContext(DemoContext);
    if (!context) {
        throw new Error('useDemoModal must be used within a DemoProvider');
    }
    return context;
};
