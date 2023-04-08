import Layout from "../../../layout/Layout";
import classes from './NewsDetail.module.css';

const NewsDetail = (props) => {
    const news = props.news;
    return (
        <Layout type="detail">
            <img className={classes.image} src={news.image} alt=""/>
            <h1 className="text-center mt-5">{news.title}</h1>
            <p className="mt-3 fs-5">{news.content}</p>
        </Layout>
    )
};

export default NewsDetail;