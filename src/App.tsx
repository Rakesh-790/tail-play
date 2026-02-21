import { useEffect, useState } from 'react'
import './App.css'
import Layout from './components/Layout';
import Preview from './components/Preview';
import CodeEditor from './components/Editor';

function App() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const [code, setCode] = useState<string>(`
      <div class= "bg-blue-500 text-white p-4 rounded">
        Hello, Tailwind!
      </div>
    `);

    useEffect(() => {
      const root = document.documentElement;

      if(theme === "dark") {
        root.classList.add("dark");
      } else {
        root.classList.remove("dark");
      }
    }, [theme])

  return (
    <>
      <Layout theme={theme} setTheme={setTheme}>
        <CodeEditor code={code} setCode={setCode} theme={theme}/>
        <Preview code = {code} theme={theme} />
      </Layout>
    </>
  )
}

export default App
