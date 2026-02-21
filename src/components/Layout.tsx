import React from "react";

type Theme = "light" | "dark";

type LayoutProps = {
    children: React.ReactNode;
    theme: "light" | "dark";
    setTheme: React.Dispatch<React.SetStateAction<"light" | "dark">>;
}

const Layout: React.FC<LayoutProps> = ({ children, theme, setTheme }) => {
    return (
        <>
            <div className="h-screen flex flex-col">
                <header className="bg-gray-900 text-white p-4 text-lg font-semibold">
                    Tailwind Playground

                    <button
                        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                        className="px-3 py-1 rounded bg-gray-800 text-white dark:bg-gray-200 dark:text-black"
                    >
                        {theme === "dark" ? "Light Mode" : "Dark Mode"}
                    </button>
                </header>

                <div className="flex flex-1">
                    {children}
                </div>
            </div>
        </>
    )
}

export default Layout;