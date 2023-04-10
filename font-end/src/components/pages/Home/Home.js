import React, { useEffect, useState} from 'react';
import classes from './Home.module.css';
import NewsCard from './news/NewsCard';
import HotNews from './news/HotNews';
import Layout from '../../layout/Layout';
import { getNews } from '../../../api/newsApi';
const Home = () => {
    const [newsList, setNewsList] = useState([]);
    useEffect(() => {
        const token = localStorage.getItem('access-token');
        const getNewsList = async () => {
            try {
                const res = await getNews(token);
                setNewsList(res.data);
                console.log("data", res.data);
            } catch (error) {
                console.log(error.message);
            }
        };
        getNewsList();
    }, [])
    return (
        <Layout>
            <img className={classes.banner} src="https://thumbs.dreamstime.com/b/orange-sky-over-sea-sunset-coloring-clouds-bright-light-51802926.jpg" alt="banner"></img>
            <h1 className={classes.color_pink}>Tin mới nhất</h1>
            <div className="row">
                {newsList.slice(0,8).map((item, index) => {
                    return (
                        <div key={index} className="col-3">
                            <NewsCard news={item} color="pink" />
                        </div>
                    );
                })}
            </div>
            <h1 className={classes.color_blue}>Tin hot</h1>
            <HotNews news={newsList} />
        </Layout>
    )
}

export default Home;