import Editor, { type OnMount } from "@monaco-editor/react"
import * as monaco from "monaco-editor"

type Theme = "light" | "dark"

type EditorProps = {
    code: string
    setCode: (value: string) => void
    theme: Theme
}

const tailwindClasses = [
    "bg-blue-500",
    "bg-red-500",
    "bg-green-500",
    "text-white",
    "text-black",
    "p-4",
    "p-2",
    "rounded",
    "flex",
    "items-center",
    "justify-center"
]

const CodeEditor: React.FC<EditorProps> = ({ code, setCode, theme }) => {

    const handleEditorDidMount: OnMount = (editor, monacoInstance) => {

        monacoInstance.languages.registerCompletionItemProvider("html", {

            provideCompletionItems: (model: monaco.editor.ITextModel,
                position: monaco.Position) => {

                const word = model.getWordUntilPosition(position)

                const range = {
                    startLineNumber: position.lineNumber,
                    endLineNumber: position.lineNumber,
                    startColumn: word.startColumn,
                    endColumn: word.endColumn,
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
        <div className="w-1/2 h-full">
            <Editor
                height="100%"
                defaultLanguage="html"
                value={code}
                theme={theme === "dark" ? "vs-dark" : "light"}
                onChange={(value) => setCode(value || "")}
                onMount={handleEditorDidMount}
            />
        </div>
    )
}

export default CodeEditor