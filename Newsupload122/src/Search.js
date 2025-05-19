import axios from 'axios';
import React, {  useEffect, useState } from 'react';
import Mycontext from './Mycontext';
import { useContext } from 'react';
import "./Search.css"

const Search = () => {
    const [write,Setwrite]=useState("");
    const [click4,SetClick4]=useState(false);
    const [data1,setDta]=useState([])
    const {Check}=useContext(Mycontext)
    
        useEffect(()=>
    {
        if(click4)
        {
            async function   get_data() {
                const response=await axios.get(`https://newsapi.org/v2/everything?q=${write}&from=2024-11-17&sortBy=publishedAt&apiKey=05d93cf3bfe54e338c610e9cba7ff512`
                     
                )
                setDta(response.data.articles);
                console.log(response.data.articles);
                
          
                
            }
            get_data();
           
            SetClick4(!click4)
        }

    },[click4,write,data1])
  return (
    <div>
    <div className='header_h1'>
    <h1> Serach for the latest news </h1>
    </div>
    {Check?
    <div className='input_Search'>

    <div className='type_input'>
    <input
     type="text"
     placeholder='enter the item to be searched'
     onChange={(e)=>Setwrite(e.target.value)}

    />
<button className='btn_search2' onClick={()=>SetClick4(!click4)}>Submit</button>
    </div>
 
    <div className="content">
    {data1.length>0&&<div>
    {
    data1.map((value,index)=>
    (
        <div  className="data_serch2" key={index}>
        <h3 className='source_h2'>
            The source of the news is {value.source.name}
        </h3>
        <h3 className='author_search'>
        The autho of the news is
             {value.author}
              
        </h3>
        <h3 className='title_search'>
            The tittle of the news is {value.title}
        </h3>
        <h3 className='news_search_content'>
        The content of the news is :{value.content}

        </h3>
        <h3 className='description_search'>
        The description of the news is :{value.description}

        </h3>
        <h3 className='publish_at'>
            The news is publishedAt: {value.publishedAt}
        </h3>
        <h3 className='link_search'>
            Read the full news at :<a href={value.url}  alt="the image" >the link to the news</a>
        </h3>
        <h3 className='image_search'>
            <img  className="serch_headline" src={value.urlToImage} alt='news_image'/>
        </h3>
        </div>
        
       
         

    ))
    }
    </div>}

    </div>
    
    </div>
    :<h1 className="not_login">Go to regsiter page  for chcek the lates news</h1>}
      
    </div>
  )
}

export default Search
