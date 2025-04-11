import {useEffect, useState} from "react"
import { BrowserRouter } from "react-router-dom";
import AnimatedRoutes from "./components/AnimatedRoutes";
import TransitionPage from "./views/TransitionPage"; // My PreLoader
import { AnimatePresence } from "framer-motion";

function App() {
  // State for preloader
const [isLoading, setIsLoading] = useState(true)

// Setting timeout for preloader

useEffect(() =>{
  setTimeout(() =>{
    setIsLoading(false)
    window.scrollTo(0,0)
  }, [1100])
})
  return (
<>
      {/* Preloader logic */}
      <AnimatePresence mode="wait">
        {isLoading && <TransitionPage />}
      </AnimatePresence>

      <BrowserRouter>
        {/* Putting all the page components into a animated routes so we can use useLocation */}
          <AnimatedRoutes />
        </BrowserRouter>
</>
  )
}

export default App
