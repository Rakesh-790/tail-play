import React from "react";

type LayoutProps = {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <>
            <div className="h-screen flex flex-col">
                <header className="bg-gray-900 text-white p-4 text-lg font-semibold">
                    Tailwind Playground
                </header>

                <div className="flex flex-1">
                    {children}
                </div>
            </div>
        </>
    )
}

export default Layout;