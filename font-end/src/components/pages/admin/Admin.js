import React, { useCallback, useState } from "react";
import { Button, Table } from "react-bootstrap";
import Layout from "../../layout/Layout";
import { dummyDataNews } from '../../dummyData/dummyData';
import MyPagination from "../../common/MyPagination";

const Admin = () => {
    const newsList = dummyDataNews;
    const [page, setPage] = useState(1);
    const total = newsList.length % 8 > 0 ? newsList.length/8+1 : newsList.length/8;

    const deletedNewsHandler = (id) => {
        console.log('deleted: ', id);
    }
    const handlerChangePage = useCallback((page) => {
        setPage(page);
    }, [])

    return (
        <Layout props={{type: "admin"}}>
            <h1 className="my-4">Danh sách bài viết</h1>
            <Table hover>
                <thead>
                    <tr>
                        <th>id</th>
                        <th className="w-50">Tiêu đề</th>
                        <th>Ngày đăng</th>
                        <th>Xóa bài viết</th>
                    </tr>
                </thead>
                <tbody>
                    {newsList.slice((page-1)*8, (page-1)*8+8).map((news, index) => {
                        return (<tr key={index}>
                            <td>{news.id}</td>
                            <td className="w-50">{news.title}</td>
                            <td>{news.date_created}</td>
                            <td><Button variant="outline-danger" onClick={() => deletedNewsHandler(news.id)}>Xóa bài viết</Button></td>
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