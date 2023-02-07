import {React} from 'react'
import Home from './Pages/Home'
import Workout from './Pages/Workouts'
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
                            </Routes>
                        </div>
                </Router>
        </div>
        </div>
    )
}

export default App
