import React, { useCallback, useState } from "react";
import { Button, Table } from "react-bootstrap";
import Layout from "../../layout/Layout";
import { dummyDataUsers } from '../../dummyData/dummyData';
import MyPagination from "../../common/MyPagination";

const AccountManagement = () => {
    const [usersList, setUsersList] = useState([...dummyDataUsers]);
    const [page, setPage] = useState(1);
    const total = usersList.length % 8 > 0 ? usersList.length/8+1 : usersList.length/8;

    const deletedUserHandler = (id) => {
        const list = [...usersList];
        const index = list.findIndex((user) => user.id === id);
        list.splice(index, 1);
        setUsersList(list);
    }

    const blockedUserHandler = (id) => {
        const list = [...usersList];
        const index = list.findIndex((user) => user.id === id);
        list[index].status = list[index].status === 'Bị khóa' ? 'Hoạt động' : 'Bị khóa';
        setUsersList(list);
    }


    const handlerChangePage = useCallback((page) => {
        setPage(page);
    }, [])

    return (
        <Layout props={{type: "admin"}}>
            <h1 className="my-4">Danh sách bài viết</h1>
            <Table hover className="table table-bordered border-dark" style={{"table-layout": "fixed"}}>
                <thead className="table-dark">
                    <tr>
                        <th colspan="2">id</th>
                        <th colspan="2">Họ và tên</th>
                        <th colspan="2">Gmail</th>
                        <th colspan="2">Trạng thái</th>
                        <th colspan="4"></th>
                    </tr>
                </thead>
                <tbody>
                    {usersList.slice((page-1)*8, (page-1)*8+8).map((user, index) => {
                        return (<tr key={index}>
                            <td colspan="2">{user.id}</td>
                            <td colspan="2">{user.name}</td>
                            <td colspan="2">{user.gmail}</td>
                            <td colspan="2">{user.status}</td>
                            <td colspan="4">
                               <div className="d-flex">
                                    <div className="me-3"><Button variant="outline-danger" onClick={() => deletedUserHandler(user.id)}>Xóa người dùng</Button></div>
                                    <div><Button variant="outline-primary" onClick={() => blockedUserHandler(user.id)}>{user.status === 'Bị khóa' ? "Mở khóa người dùng" : "Khóa người dùng"}</Button></div>
                               </div> 
                            </td>
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
};

export default AccountManagement;