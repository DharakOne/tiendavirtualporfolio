import React from "react"
import Home from "./pages/Home"
import AppBar from "./pages/componets/AppBar"
import Footer from "./pages/componets/Footer"

export default function App (){
    return(
        <div className="App">
            <AppBar/>
            <Home/>
            <Footer/>

        </div>
    )
}