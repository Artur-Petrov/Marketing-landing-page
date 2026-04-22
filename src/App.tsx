import Button from "./components/uiKit/button/Button.tsx";

function App() {

  return (
    <>
      <Button className={"text-lg"} btnType={"primary"}>
        show more
      </Button>
      <Button className={"text-lg"} btnType={"secondary"}>
        show more
      </Button>
        <Button className={"text-lg"} btnType={"primary"}>
            show more
        </Button>
        <Button className={"text-lg"} btnType={"secondary"}>
            show more
        </Button>
        <Button className={"text-lg"} btnType={"primary"} disabled={true}>
            show more
        </Button>
        <Button className={"text-lg"} btnType={"secondary"} disabled={true}>
            show more
        </Button>
    </>
  )
}

export default App
