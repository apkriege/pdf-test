// import { createSignal } from 'solid-js'
// import solidLogo from './assets/solid.svg'
// import viteLogo from '/vite.svg'


import { jsPDF } from "jspdf";

import './App.css'

function App() {
  const pdf = document.getElementById("pdf");

  const downloadPDF = () => {
    const doc = new jsPDF({
      format: "a4",
      unit: "px",
      orientation: 'p'
    });
    doc.setFontSize(10)
    doc.html(pdf.current, {
      async callback(doc) {
        await window.open(URL.createObjectURL(doc.output("blob")));
      },
    });
  }

  return (
    <>
      <div id="pdf">
        <div class="bg-white text-black p-10 h-[500px] w-[400px]">
          <h1 class="">TESTING PDF</h1>
        </div>

      </div>

      <div class="mt-5">
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2" onClick={downloadPDF}>
          JSPDF
        </button>

        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Button
        </button>
      </div>


      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} class="logo" alt="Vite logo" />
        </a>
        <a href="https://solidjs.com" target="_blank">
          <img src={solidLogo} class="logo solid" alt="Solid logo" />
        </a>
      </div>
      <h1>Vite + Solid</h1>
      <div class="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count()}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMRsdf
        </p>
      </div>
      <p class="read-the-docs">
        Click on the Vite and Solid logos to learn more
      </p> */}
    </>
  )
}

export default App
