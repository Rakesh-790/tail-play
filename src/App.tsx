import { useState } from 'react'
import './App.css'
import Layout from './components/Layout';
import Preview from './components/Preview';
import CodeEditor from './components/Editor';

function App() {

  const [code, setCode] = useState<string>(`
      <div class= "bg-blue-500 text-white p-4 rounded">
        Hello, Tailwind!
      </div>
    `);

  return (
    <>
      <Layout>
        <CodeEditor code={code} setCode={setCode} />
        <Preview code = {code} />
      </Layout>
    </>
  )
}

export default App
