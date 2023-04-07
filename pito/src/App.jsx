import {React} from 'react'
import Home from './Pages/Home'
import Workout from './Pages/Workouts'
import Insparations from './Pages/Insparations'
import Socials from './Pages/Socials'
import {
    BrowserRouter as Router,
    Routes,
    Route
  } from "react-router-dom";
  


const App = () => {
    return ( 
        <div>
            <div>
            <Router>
                    <div>
                            <p style={{height: '10vh'}} />
                            <Routes>
                                <Route index element={<Home />} />
                                <Route path='workouts' element={(<Workout/>)} />
                                <Route path='socials' element={(<Socials/>)}/>
                                <Route path='insparations' element={(<Insparations/>)}/>
                            </Routes>
                        </div>
                </Router>
        </div>
        </div>
    )
}

export default App
