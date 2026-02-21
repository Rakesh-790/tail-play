import Editor, { type OnMount } from "@monaco-editor/react"
import * as monaco from "monaco-editor"

type EditorProps = {
    code: string;
    setCode: (value: string) => void;
}

const tailwindClasses = [
    "bg-blue-500",
    "text-white",
    "p-4",
    "rounded",
    "flex",
    "items-center",
    "justify-center",
    "w-full",
    "h-full",
    "m-4",
    "border",
    "border-gray-300",
    "shadow-lg",
    "bg-gradient-to-r",
    "from-blue-400",
    "to-purple-500",
]

const CodeEditor: React.FC<EditorProps> = ({ code, setCode }) => {

    const handleEditorDidMount: OnMount = () => {
        monaco.languages.registerCompletionItemProvider("html", {
            provideCompletionItems: (model, position) => {
                const word = model.getWordUntilPosition(position);

                const range = {
                    startLineNumber: position.lineNumber,
                    endLineNumber: position.lineNumber,
                    startColumn: word.startColumn,
                    endColumn: word.endColumn
                }

                const suggestions = tailwindClasses
                    .filter(cls => cls.startsWith(word.word))
                    .map(cls => ({
                        label: cls,
                        kind: monaco.languages.CompletionItemKind.Property,
                        insertText: cls,
                        range: range
                    }))
                return { suggestions }
            }
        })
    }
    return (
        <>
            <div className="w-1/2 h-full">
                <Editor
                    height="100%"
                    defaultLanguage="html"
                    value={code}
                    theme="vs-dark"
                    onChange={(value) => setCode(value || "")}
                    onMount={handleEditorDidMount}
                />
            </div>
        </>
    )
}

export default CodeEditor;