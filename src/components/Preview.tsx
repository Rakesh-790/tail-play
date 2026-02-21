import React, { useEffect } from "react";

type Theme = "light" | "dark";

type PreviewProps = {
    code: string;
    theme: Theme;
}

const Preview: React.FC<PreviewProps> = ({ code, theme}) => {
    const iframeRef = React.useRef<HTMLIFrameElement>(null);

    useEffect(() => {
        const iframe = iframeRef.current;
        if (!iframe) return;

        const doc = iframe.contentDocument
        if (!doc) return;

        doc.open();
        doc.write(`
                <!DOCTYPE html>
                <html class="${theme === "dark" ? "dark" : ""}">
                <head>
                    <script src="https://cdn.tailwindcss.com"></script>
                </head>
                <body class = "p-4">
                    ${code}
                </body>
                </html>
            `)
        doc.close();
    }, [code, theme]);

    return(
        <iframe
            ref={iframeRef}
            className="w-1/2 h-full bg-white"
            title="preview"
        />
    )
}

export default Preview;