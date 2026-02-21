import React, { useEffect } from "react";

type PreviewProps = {
    code: string;
}

const Preview: React.FC<PreviewProps> = ({ code }) => {
    const iframeRef = React.useRef<HTMLIFrameElement>(null);

    useEffect(() => {
        const iframe = iframeRef.current;
        if (!iframe) return;

        const doc = iframe.contentDocument
        if (!doc) return;

        doc.open();
        doc.write(`
                <!DOCTYPE html>
                <html>
                <head>
                    <script src="https://cdn.tailwindcss.com"></script>
                </head>
                <body class = "p-4">
                    ${code}
                </body>
                </html>
            `)
        doc.close();
    }, [code]);

    return(
        <iframe
            ref={iframeRef}
            className="w-1/2 h-full bg-white"
            title="preview"
        />
    )
}

export default Preview;