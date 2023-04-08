import React, { useRef } from "react";
import { Button, Modal } from "react-bootstrap";

const CreateNewsModal = (props) => {
    const title = useRef(null);
    const url = useRef(null);
    const content = useRef(null);

    const createNews = (event) => {
        event.preventDefault();
        const dateCreated = new Date().toLocaleDateString('en-GB');
        console.log(dateCreated);
        const newsPost = {
            id: props.newsList.length,
            "date_created": dateCreated,
            title: title.current.value,
            image: url,
            content: content.current.value,
        }
        
        const list = [...props.newsList];
        list.push(newsPost);
        props.setNewsList(list);
        props.handleClose();
    };

    return (
        <Modal show={props.show} onHide={props.handleClose} centered>
            <Modal.Header closeButton>
                <Modal.Title>Tạo bài viết</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="input-group mb-3 mt-4">
                    <span className="input-group-text" id="basic-addon1">Tiêu đề</span>
                    <input type="text" className="form-control" aria-describedby="basic-addon1" ref={title}/>
                </div>
                <div className="input-group mb-3 mt-4">
                    <span className="input-group-text" id="basic-addon1">Link ảnh</span>
                    <input type="text" className="form-control" aria-describedby="basic-addon1" ref={url}/>
                </div>
                <div className="input-group mb-4">
                    <span className="input-group-text">Nội dung</span>
                    <textarea className="form-control w-100" rows="5" ref={content}></textarea>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={props.handleClose}>
                    Đóng
                </Button>
                <Button variant="success" onClick={createNews}>
                    Xác nhận
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default CreateNewsModal;