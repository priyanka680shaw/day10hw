import axios from 'axios'
import './App.css'
import { useState } from 'react';

function App() {
// const [data , SetData] = useState("hello");
// const [from , setFrom] = useState("en");
// const [to , setTo]  = useState("hi");
// const [input , setInput] = useState("");
// const [output , setOutput] = useState(" ");

const [data, setData] = useState("hello");
  const [result, setResult] = useState("");
  const [sourceLanguage, setSourceLanguage] = useState("en");
  const [targetLanguage, setTargetLanguage] = useState("bn");
//Api Calling 

async function getTranslatedData(){

  try{
    const encodeData = new URLSearchParams();
    encodeData.append("source_language" , sourceLanguage);
    encodeData.append("target_language" , targetLanguage);
    encodeData.append("text" , data);
    // encodeData.append("source_language", sourceLanguage);
    // encodeData.append("target_language", targetLanguage);
    // encodeData.append("text", data);
    const option = {
      method : "post",
      url: 'https://text-translator2.p.rapidapi.com/translate',
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        'X-RapidAPI-Key': '420f80fab0mshe404d58ebeec317p173d3fjsndbaad82e0aa5',
        'X-RapidAPI-Host': 'text-translator2.p.rapidapi.com'
      },
      data: encodeData,
    }
    const response = await axios.request(option);
    console.log(response)
  }  
  catch(error){
    console.log(error)
  }

  }


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
                <button onClick={()=>{
                  getTranslatedData()
                }}>Translate</button>
            </div>
            </div>
          

        </div>
    </>
)

}

export default App;





