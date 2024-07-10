import { useState } from "react";
import emojis from "..//EmojiData";
import './EmojiSearch.css';

function EmojiSearch()
{
  const [emojiName,setEmojiName]=useState("");  // for searching input
  const [emojiData,setEmojiData]=useState([]);   // for getting output in array or showing searched data 
  const [showAllData,setShowAllData]=useState(true);   // for showing all data
  
  const search=()=>{
    console.warn(emojiName);  // showing input data
    // console.warn(emojis);   // showing json data
    const results = emojis.emoji.filter((data)=>data.keyword.toLowerCase().includes(emojiName.toLowerCase()));
    setEmojiData(results);
    setShowAllData(false);
  }
  
  return(
    <>
      <div id="main" >
        <h1>Emoji Search</h1>
        <input type="text" placeholder="Search Emoji" onChange={(e)=>setEmojiName(e.target.value)}/>
        <button onClick={search}>Search</button>
      </div>
      
      <div className="list">
        {showAllData&&(
          <ul>
            {
              emojis.emoji.map((data, index)=>
                <li key={index}>
                  {data.character} {data.name}
                </li>
                )
            }
          </ul>
        )}
        
        {!showAllData &&(
        <ul>
          {
            emojiData.length > 0 ?(       // showing search data
              emojiData.map((data, index)=>
                <li key={index}>
                  {data.character} {data.name}
                </li>
                )
              )
          :(<li style={{textAlign:"center"}}>Value not found</li>)       // it will show the not found value
          
          }
        </ul>
      )}
      </div>
    </>
  )
}

export default EmojiSearch;