import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Gesture from '../pages/Gesture'
import App from '../pages/App'
import Home from '../pages/Home'
import Colourize from '../pages/Colourize'
import Detection from '../pages/Detection'
const BaseRouter=()=>(
    <BrowserRouter>
        <Routes>
            <Route path='/gesture' element={<Gesture/>}></Route>
            <Route path='/detection' element={<Detection/>}></Route>
            <Route path='/home' element={<Home/>}></Route>
            <Route path='/colourize' element={<Colourize/>}></Route>
        </Routes>
    </BrowserRouter>
)
export default BaseRouter