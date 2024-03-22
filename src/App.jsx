import axios from 'axios'
import './App.css'
import { useState } from 'react';

function App() {
// const [data , SetData] = useState("hello");
// const [from , setFrom] = useState("en");
// const [to , setTo]  = useState("hi");
// const [input , setInput] = useState("");
// const [output , setOutput] = useState(" ");

const [inputdata, setinputData] = useState("");
  const [result, setResult] = useState("Output");
  const [source_language, set_source_language] = useState("en");
  const [target_language, set_target_language] = useState("bn");
//Api Calling 

async function getTranslatedData(){

  try{
    const encodeData = new URLSearchParams();
    encodeData.append("source_language" , source_language);
    encodeData.append("target_language" , target_language);
    encodeData.append("text" , inputdata);
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
    const response = await axios.request(option).then((data)=>{
      setResult(data.data.data.translatedText)
      //
    });
  
    
  }  
  catch(error){
    console.log(error)
  }

  }


  return(
    <>
        <div className=" container w-full h-screen bg-slate-200">

          <div className="innerContainer flex flex-col justify-center w-full h-screen items-center">

            <div className="languageSelection  bg-slate-800 flex  justify-center  p-3 items-center w-3/5">

                  <div className="source_language ">
                    <p className='text-white p-2 '>Source</p>
                        <select className='rounded p-1 mr-6' onClick={(e)=>{
                          set_source_language(e.target.value);
                          
                        }}>
                          <option value="en">English</option>
                          <option value="hi">Hindi</option>
                          <option value="bn">Bengali</option>
                          <option value="ml">Malayalam</option>
                          <option value="ta">Tamil</option>
                        </select>
                  </div>

                  <div className="target_language">
                  <p className='text-white p-2'>Target</p>
                    <select  className='rounded p-1' onClick={(e)=>{
                          set_target_language(e.target.value)
                          console.log(e.target.value)
                        }}>
                        <option value="en">English</option>
                        <option value="hi">Hindi</option>
                        <option value="bn">Bengali</option>
                        <option value="ml">Malayalam</option>
                        <option value="ta">Tamil</option>
                    </select>
                  </div>

            </div>

            <div className='inputBox w-3/5 bg-slate-800 flex  justify-around p-5 items-center text-black'>
                    <input type='text' placeholder='enter you text' onInput={(e)=>{
                      const userDefineInput = (e.target.value)
                      setinputData(userDefineInput)
                      console.log(userDefineInput);
                    }} value={inputdata} className='rounded p-1 w-3/5'/>
            </div>

            <div className='outputBox w-3/5 bg-slate-600 flex  justify-around p-3 items-center text-white'>
              <p>{result}</p>
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





