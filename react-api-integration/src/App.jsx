import {useEffect} from "react";
function App() {

    useEffect(()=>{
      getAllData();
    },[])

    async function getAllData(){

      const url = "https://jsonplaceholder.typicode.com/users"

      let response = await fetch(url);
      response = await response.json();
      console.log(response);
    }
  return (
    <>
      <h1 className="text-center bg-sky-500 mt-5 p-3 text-white font-semibold text-2xl ">
        Fetch and Display From API Using Get Method
      </h1>
      <p className="p-3 bg-slate-400 text-2xl mt-5">
        API (Application Programming Interface) म्हणजे दोन वेगवेगळ्या software
        systems मध्ये communication करण्यासाठी वापरला जाणारा bridge असतो. साध्या
        भाषेत सांगायचं तर, frontend (जसं की React app) आणि backend
        (server/database) हे थेट एकमेकांशी बोलत नाहीत, त्यांच्यामध्ये API काम
        करतं. जेव्हा user काही action करतो (उदा. login किंवा data fetch), तेव्हा
        frontend API ला request पाठवतो; API ती request process करून database
        किंवा server कडून आवश्यक माहिती घेतो आणि पुन्हा response frontend ला
        पाठवतो, साधारणपणे JSON format मध्ये. यामुळे system secure, organized आणि
        scalable राहतो, कारण frontend ला database structure माहिती असण्याची गरज
        नसते. Real-life example घ्यायचा तर restaurant मधला waiter — आपण थेट
        kitchen मध्ये न जाता waiter कडे order देतो, आणि तोच आपल्यासाठी food आणतो
        — तसंच software मध्ये API दोन systems मध्ये मध्यस्थ म्हणून काम करतं.
      </p>

    </>
  );
}

export default App;
