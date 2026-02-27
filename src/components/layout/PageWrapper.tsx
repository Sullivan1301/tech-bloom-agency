import { ReactNode } from "react";

interface PageWrapperProps {
    children: ReactNode;
    className?: string;
}

export default function PageWrapper({ children, className = "" }: PageWrapperProps) {
    return (
        <div className={`bg-background min-h-screen ${className}`}>
            <main>
                {children}
            </main>
        </div>
    );
}