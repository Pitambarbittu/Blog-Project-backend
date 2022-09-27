import React, {useEffect,useState } from 'react'
import { Link } from 'react-router-dom'
import Card from '../Component/Card'
import CardHome from '../Component/CardHome'
import SmallCard from '../Component/SmallCard'
// import { store } from './Details'
import axios from 'axios'

const Home = () => {

    // const [detail, setDetail] = useContext(store);
    const [detail,setDetail]=useState([])

    useEffect(()=>{
      const getData=async()=>{
          const data=await axios.get('https://blog-app-backend-node.herokuapp.com/api/bolly');
          setDetail(data.data);
      }
      getData();
    },[])
    return (

        <div>
            <div className='Home'>

                <div className="home__container">
                    <div className="home__first">
                        <h1>Ladakh- Pangong Lake</h1>
                    </div>
                    <div className="home__sec">
                        <Link to="/fitness" > <img src="https://images.unsplash.com/photo-1580274455191-1c62238fa333?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cG9yc2NoZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="not foun" /></Link>

                    </div>
                </div>

                <div className="home__thir">
                    <h4>PORSCHE</h4>
                    <Link to='/technology'>   <img src="https://media.istockphoto.com/photos/yellow-helicopter-flying-over-the-rocky-mountains-picture-id1306238094?b=1&k=20&m=1306238094&s=170667a&w=0&h=rPxH62Fy-ojAwwN6xgW6iOaQzfBOSOz8E-vhMPKgPxg=" alt="not found" /></Link>
                </div>
                <h1 style={{ marginTop: "40px" }}>The Latest</h1>
                <hr style={{ width: "200px", thickness: "20px" }} />
                <div className='home__left left1'>
                    {
                        detail.filter((article) => { return article.category === "bollywood" }).map((n) => (
                            <CardHome
                                articleid={n.id}
                                imgUrl={n.Image}
                                title={n.title}
                                description={n.description.slice(0, 200)}
                                author={n.author}
                            />
                        ))
                    }
                </div>
                <div className='home__left left1'>
                    {
                        detail.filter((article) => { return article.category === "technology" }).map((n) => (
                            <CardHome
                                articleid={n.id}
                                imgUrl={n.Image}
                                title={n.title}
                                description={n.description.slice(0, 200)}
                                author={n.author}
                            />
                        ))
                    }
                </div>
                <div className='home__left left1'>
                    {
                        detail.filter((article) => { return article.category === "food" }).map((n) => (
                            <CardHome
                                articleid={n.id}
                                imgUrl={n.Image}
                                title={n.title}
                                description={n.description.slice(0, 200)}
                                author={n.author}
                            />
                        ))
                    }
                </div>
                <h1 style={{ marginTop: "40px", display: "inline-block" }}>Latest Articles</h1>

                <h1 className='Top' >Top Posts</h1>
                <hr style={{ width: "200px", thickness: "20px", }} />


                <div className='rightbar2'>
                    {
                        detail.filter((article) => { return article.category === "mix" }).map((n) => (
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
                <div className="sidebar2">
                    {
                        detail.filter((article) => { return article.category === "mix" }).map((n) => (
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
                <h1 style={{ marginTop: "40px", display: "inline-block" }}>Latest Stories</h1>
                <hr />

                <div className='home__left'>
                    {
                        detail.filter((article) => { return article.category === "footer1" }).map((n) => (
                            <CardHome
                                articleid={n.id}
                                imgUrl={n.Image}
                                title={n.title}
                                description={n.description.slice(0, 200)}
                                author={n.author}
                            />
                        ))
                    }
                </div>

                <div className='home__left'>
                    {
                        detail.filter((article) => { return article.category === "footer2" }).map((n) => (
                            <CardHome
                                articleid={n.id}
                                imgUrl={n.Image}
                                title={n.title}
                                description={n.description.slice(0, 200)}
                                author={n.author}
                            />
                        ))
                    }
                </div>

                <div className='home__left'>
                    {
                        detail.filter((article) => { return article.category === "footer3" }).map((n) => (
                            <CardHome
                                articleid={n.id}
                                imgUrl={n.Image}
                                title={n.title}
                                description={n.description.slice(0, 200)}
                                author={n.author}
                            />
                        ))
                    }
                </div>

            </div>

        </div>
    )
}

export default Home