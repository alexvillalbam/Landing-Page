import Header from "./components/Header"
import Features  from "./components/Features"

const App = () => {
  return (
    <div className="w-full h-full flex flex-col bg-lightBg">
      <Header />
      <Features  />
    </div>
  )
}

export default App