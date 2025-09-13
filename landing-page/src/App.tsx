import Header from "./components/Header"
import Features  from "./components/Features"
import Categories from "./components/Categories"
import Intro from "./components/Intro"
import Arrivals from "./components/Arrivals"
import Footer from "./components/Footer"

const App = () => {
  return (
    <div className="w-full h-full flex flex-col bg-lightBg">
      <Header />
      <Features  />
      <Categories />
      <Intro />
      <Arrivals />
      <Footer />
    </div>
  )
}

export default App