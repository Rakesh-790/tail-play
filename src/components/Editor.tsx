import Editor from "@monaco-editor/react"

type EditorProps = {
    code: string;
    setCode: (value: string) => void;
}

const CodeEditor: React.FC<EditorProps> = ({ code, setCode }) => {
    return(
        <>
            <div className="w-1/2 h-full">
                <Editor
                    height="100%"
                    defaultLanguage="html"
                    value={code}
                    theme="vs-dark"
                    onChange={(value) => setCode(value || "")}
                />
            </div>
        </>
    )
}

export default CodeEditor;