import type { Component } from 'solid-js'

const App: Component = () => {
  const ipcHandle = (): void => window.electron.ipcRenderer.send('ping');
  const hello = window.native.helloFromRust;

  return (
    <>
      <div>
        <h1>Hello Rust, Solid, and Electron</h1>
        <button onClick={_ => ipcHandle()}>IPC Ping</button>
        <br />
        <button onClick={_ => hello()}>Hello from Rust</button>
      </div>
    </>
  )
}

export default App
