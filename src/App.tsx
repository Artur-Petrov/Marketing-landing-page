import TextArea from "./components/uiKit/textArea/TextArea.tsx";

function App() {

  return (
    <>
      <TextArea label={"Email"} placeholder={"name@email.com"} hint={"This is a hint text."} className={'text-lg'}/>
      <TextArea label={"Email"} placeholder={"name@email.com"} maxLength={5} hint={"This is an error message."} className={'text-lgs'}/>
      <TextArea label={"Email"} placeholder={"name@email.com"} error={"This is an error message."}/>
      <TextArea label={"Email"} disabled={true} placeholder={"name@email.com"} hint={"This is an error message."}/>
    </>
  )
}

export default App
