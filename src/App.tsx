import Input from "./components/uiKit/input/Input.tsx";
import QuestionIcon from "./components/uiKit/svgIcons/QuestionIcon.tsx";

function App() {

  return (
    <>
      <Input label={"Email"} placeholder={"name@email.com"} hint={"This is a hint text."} icon={<QuestionIcon/>} className={'text-lg'}/>
      <Input label={"Email"} placeholder={"name@email.com"} hint={"This is an error message."}/>
      <Input label={"Email"} placeholder={"name@email.com"} error={"This is an error message."} icon={<QuestionIcon/>}/>
      <Input label={"Email"} disabled={true} placeholder={"name@email.com"} hint={"This is an error message."} icon={<QuestionIcon/>}/>
    </>
  )
}

export default App
