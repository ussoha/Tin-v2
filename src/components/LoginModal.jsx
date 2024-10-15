import React, { useState } from "react";
import { Modal, Button, Form, Alert } from "react-bootstrap";
import { PersonFill, LockFill } from 'react-bootstrap-icons';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LoginModal = ({ show, handleClose, setLoggedIn }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Function to handle form submission
  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    // Loại bỏ khoảng trắng thừa
    const trimmedUsername = username.trim();
    const trimmedPassword = password.trim();

    if (!trimmedUsername || !trimmedPassword) {
      setError("Tên đăng nhập và mật khẩu không được để trống.");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(
        "https://api-demo-4gqb.onrender.com/users/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username: trimmedUsername, password: trimmedPassword }),
        }
      );

      if (!response.ok) {
        throw new Error("Tên đăng nhập hoặc mật khẩu không đúng");
      }

      const data = await response.json();
      console.log("Login successful:", data);

      // Hiển thị thông báo thành công
      toast.success("Đăng nhập thành công!");
      
      // Set trạng thái đăng nhập thành true
      setLoggedIn(true);

      handleClose(); // Đóng modal sau khi đăng nhập thành công
    } catch (err) {
      setError(err.message);
      toast.error("Đăng nhập thất bại! Vui lòng kiểm tra lại.");
    } finally {
      setLoading(false);
    }
  };


  return (
    <>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Đăng Nhập</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleLogin}>
            <Form.Group
              className="mb-3 d-flex align-items-center"
              controlId="formBasicEmail"
            >
              <Form.Label className="me-2">
                <PersonFill />
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Nhập tên đăng nhập"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group
              className="mb-3 d-flex align-items-center"
              controlId="formBasicPassword"
            >
              <Form.Label className="me-2">
                <LockFill />
              </Form.Label>
              <Form.Control
                type="password"
                placeholder="Nhập mật khẩu"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Text className="text-muted">
              <a href="#forgot-password">Quên mật khẩu?</a>
            </Form.Text>
          </Form>
        </Modal.Body>
        <Modal.Footer className="d-flex align-items-center">
          <Button variant="secondary" onClick={handleClose}>
            Đóng
          </Button>
          <Button variant="primary" onClick={handleLogin} disabled={loading}>
            {loading ? "Đang xử lý..." : "Đăng Nhập"}
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Toast Container to display toasts */}
      <ToastContainer />
    </>
  );
};

export default LoginModal;
