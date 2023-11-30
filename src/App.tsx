// import { createSignal } from 'solid-js'
// import solidLogo from './assets/solid.svg'
// import viteLogo from '/vite.svg'

import { jsPDF } from "jspdf";

import './App.css'

function App() {
  // const [count, setCount] = createSignal(0)

  const pdf = document.getElementById('.pdf');
  // const htmlpdf = () => {
  //   const element = document.getElementById('pdf');
  //   const opt = {
  //     margin:       1,
  //     filename:     'myfile.pdf',
  //     image:        { type: 'jpeg', quality: 0.98 },
  //     html2canvas:  { scale: 2 },
  //     jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
  //   };


  //   // html2pdf().from(element).set(opt).save();
  // }

  const downloadPDF = () => {
    const doc = new jsPDF();
    doc.text("Hello world!", 10, 10);
    doc.save("a4.pdf");
  }

  return (
    <>
      <div id="pdf">
        <div class="bg-white text-black p-10 h-[500px] w-[400px]">
          <h1>TESTING PDF</h1>
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
