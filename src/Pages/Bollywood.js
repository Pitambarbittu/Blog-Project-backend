import React, { useContext,useEffect,useState } from 'react'

// import { store } from './Details'
import Card from '../Component/Card'
import SmallCard from '../Component/SmallCard';
import axios from 'axios';

const Bollywood = () => {
    // const [detail, setDetail] = useContext(store);
    // console.log(detail);
    const [detail,setDetail]=useState([])

    useEffect(()=>{
      const getData=async()=>{
          const data=await axios.get('http://localhost:8000/');
          setDetail(data.data);
      }
      getData();
    },[])
    
    return (
        <div>
            <h1 style={{ margin: "20px 10%", display: "inline-block" }}>BOLLYWOOD</h1>
            <h1 style={{ margin: "20px 0px 20px 34.15%", display: "inline-block" }}>Top Posts</h1>
            <div className="main__container">
                <div className='rightbar'>
                    {
                        detail.filter((article) => { return article.category === "Bollywood" }).map((n) => (
                            <Card
                                articleid={n.id}
                                imgUrl={n.Image}
                                title={n.title}
                                description={n.description.slice(0, 200)}
                                author={n.author}
                            />
                        ))
                    }
                </div>

                <div className="sidebar">
                    {
                        detail.filter((article) => { return article.category === "Bollywood" }).map((n) => (
                            <SmallCard
                                articleid={n.id}
                                imgUrl={n.Image}
                                description={n.description.slice(0, 200)}
                                title={n.title.slice(0, 25)}
                                author={n.author}
                            />
                        ))
                    }

                    <div className='advertisement'>
                        <p>Advertisement</p>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default Bollywood