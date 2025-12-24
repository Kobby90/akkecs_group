"use client";

import { DemoProvider } from "@/context/DemoContext";
import DemoModal from "@/components/modals/DemoModal";

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <DemoProvider>
            {children}
            <DemoModal />
        </DemoProvider>
    );
}
