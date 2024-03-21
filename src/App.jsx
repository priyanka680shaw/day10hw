import axios from 'axios'
import './App.css'

function App() {



  return(
    <>
        <div className=" container w-full h-screen bg-slate-200">
           <div className="optionBoxContainer">
                <div className="from">
                   <div className="fromSelect">
                        <select>
                            <option>car</option>
                            <option>auddi</option>
                        </select>
                   </div>
                    <textarea rows="10" cols="60"></textarea>
                </div>
                <div className="to">
                    <div className="ToSelect">
                        <select>
                            <option>car</option>
                            <option>auddi</option>
                        </select>
                   </div>
                    <textarea rows="10" cols="60"></textarea>
                </div>
                <div className="button">
                <button>Translate</button>
            </div>
            </div>
           <div className="button">
                <button>Translate</button>
            </div>

        </div>
    </>
)

}

export default App;