import { Routes, Route, useLocation } from "react-router-dom";
import LandingPage from '../views/LandingPage'
import { AnimatePresence } from "framer-motion";
import TransitionPage from "../views/TransitionPage"; // My PreLoader


function AnimatedRoutes() {
    //use useLocation to get current locaiton of page w/ framer motion
    const location = useLocation()
  return (
    <AnimatePresence mode="wait" initial={false}>
        <Routes location={location} key={location.pathname}>
            <Route path="/" element={<LandingPage />}>
            </Route>
        </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes
