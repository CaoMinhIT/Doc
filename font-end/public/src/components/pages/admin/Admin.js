import React, { useCallback, useState } from "react";
import { Button, Table } from "react-bootstrap";
import Layout from "../../layout/Layout";
import { dummyDataNews } from '../../dummyData/dummyData';
import MyPagination from "../../common/MyPagination";

const Admin = () => {
    const [newsList, setNewsList] = useState([...dummyDataNews]);
    const [page, setPage] = useState(1);
    const total = newsList.length % 8 > 0 ? newsList.length/8+1 : newsList.length/8;

    const deletedNewsHandler = (id) => {
        const list = [...newsList];
        const index = list.findIndex((news) => news.id === id);
        list.splice(index, 1);
        setNewsList(list);
    }

    const handlerChangePage = useCallback((page) => {
        setPage(page);
    }, [])

    return (
        <Layout props={{type: "admin"}}>
            <h1 className="my-4">Danh sách bài viết</h1>
            <Table hover className="table table-bordered border-dark" style={{"table-layout": "fixed"}}>
                <thead>
                    <tr>
                        <th colspan="1">id</th>
                        <th colspan="6">Tiêu đề</th>
                        <th colspan="2">Ngày đăng</th>
                        <th colspan="3">Xóa bài viết</th>
                    </tr>
                </thead>
                <tbody>
                    {newsList.slice((page-1)*8, (page-1)*8+8).map((news, index) => {
                        return (<tr key={index}>
                            <td colspan="1">{news.id}</td>
                            <td colspan="6">{news.title}</td>
                            <td colspan="2">{news.date_created}</td>
                            <td colspan="3"><Button variant="outline-danger" onClick={() => deletedNewsHandler(news.id)}>Xóa bài viết</Button></td>
                        </tr>)
                    })}
                </tbody>
            </Table>
            <div className="d-flex">
                <div className="ms-auto">
                    {total > 0 && <MyPagination 
                        total={total}
                        current={page}
                        onChangePage={handlerChangePage}
                    />}
                </div>
            </div>
        </Layout>
    )
}

export default Admin;