import LanguageUi from "./assets/components/LanguageTranslatorPage.jsx/TranslatoeUi"
import './App.css'
import { useEffect, useState } from "react"
import axios from "axios"
function App() {
 //creating states
 const [from , setFrom] = useState("");
 const [to , setTo] = useState("");
 const [fromInput , setFromInput] = useState("");
 const [toOutput , setToOutput] = useState("");





//  const encodedParams = new URLSearchParams();
//  encodedParams.set('source_language', 'en');
//  encodedParams.set('target_language', 'id');
//  encodedParams.set('text', 'What is your name?');
 
//  const options = {
//    method: 'POST',
//    url: 'https://text-translator2.p.rapidapi.com/translate',
//    headers: {
//      'content-type': 'application/x-www-form-urlencoded',
//      'X-RapidAPI-Key': '420f80fab0mshe404d58ebeec317p173d3fjsndbaad82e0aa5',
//      'X-RapidAPI-Host': 'text-translator2.p.rapidapi.com'
//    },
//    data: encodedParams,
//  };
 
//  try {
//    const response =  axios.request(options);
//    console.log(response.data);
//  } catch (error) {
//    console.error(error);
//  }


 async function getTranslatedData() {
  try {
    // to convert from string to encoded format we use URLSearchParams
   // const encodeData = new URLSearchParams();
    // append the data with key and value
    // encodeData.append("source_language", sourceLanguage);
    // encodeData.append("target_language", targetLanguage);
    // encodeData.append("text", data);

    
    const res = await axios.request(option);
    //setResult(res.data.data.translatedText);
    console.log(res)
  } catch (error) {
    console.log(error);
  }
}


const option = {
  method: "post",
  url: "https://text-translator2.p.rapidapi.com/translate",
  headers: {
    "content-type": "application/x-www-form-urlencoded",
    "X-RapidAPI-Key":
      "61fe42194dmsha3e696751cf48edp14633fjsn5dd03c4a1e74",
    "X-RapidAPI-Host": "text-translator2.p.rapidapi.com",
  },
//  data: encodeData, // payload // request body
};
useEffect(()=>{
    const data = axios.get(option).then((datarec)=>console.log(datarec))
})


  return (
    <>
      <LanguageUi/>
    </>
  )
}

export default App
