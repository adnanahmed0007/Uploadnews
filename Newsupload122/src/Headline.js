


import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Mycontext from './Mycontext';
import { useContext } from 'react';
import "./Headline.css";
const Headline = () => {
    const [Click5, SetCick5] = useState(false);
    const [Write5, Setwrite5] = useState("")
    const [data2, setDta2] = useState([])
    const { Check } = useContext(Mycontext)
    useEffect(() => {
        if (Click5) {
            async function get_data2() {
                const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=${Write5}&apiKey=05d93cf3bfe54e338c610e9cba7ff512`)
                console.log(response.data)
                setDta2(response.data.articles);

            }
            get_data2();
            SetCick5(!Click5)
        }

    }, [Click5, Write5])
    return (
        <div>
            <div className='header_haedline'>
                <h1>
                    Search for the Latest headline in the country
                </h1>
                {Check ?
                    <div className='data_fetchheadline'>

                        <div className='input_headline'>
                            <input
                                type="text"
                                placeholder='enter the country name '

                                onChange={(e) => Setwrite5(e.target.value)} />
                            <button onClick={() => SetCick5(!Click5)}>
                                Click
                            </button>
                        </div>
                        <div className='datafetchng'>
                            {data2.length > 0 && <div>
                                {data2.map((value, index) =>
                                    <div className='data_headline' key={index}>
                                        <h3 className='headline_source'>
                                            The source of the news is {value.source.name}
                                        </h3>
                                        <h3 className='author_Headline'>
                                            The author of the news is
                                            {value.author}

                                        </h3>
                                        <h3 className='title_headline'>
                                            The tittle of the news is {value.title}
                                        </h3>

                                        <h3 className='description_Headline'>
                                            The description of the news is :{value.description}

                                        </h3>
                                        <h3 className="publish_headline">
                                            The news is publishedAt: {value.publishedAt}
                                        </h3>
                                        <h3 className='link_Headlin'>
                                            Read the full news at :<a href={value.url} alt="the image" >the link to the news</a>
                                        </h3>
                                        <h2>
                                            <img className='image_headline' src={value.urlToImage} alt='news_image' />
                                        </h2>
                                    </div>

                                )}
                            </div>}

                        </div>
                    </div> : <h1 className='not_login_headline'>Go to the login/Register page</h1>}

            </div>

        </div>
    )
}

export default Headline
