import React from 'react';
import Navbar from './Components/Navigation'
import Form from './Components/form'
import Footer from './Components/footer'



function App() {
    /*const apidata = database.map(data => {
        return<Card
                key = {data.id}
                {...data}
            />
    })*/
    return(
        <div>
            <Navbar/>
            <Form/>
            <Footer/>
        </div>
    )
}
export default App;