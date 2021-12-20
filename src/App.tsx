import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Routes,
    Route,
    Link
} from "react-router-dom";
import {User, Home, Chat} from "./routes";
import {Container, Navbar} from "react-bootstrap";

function App() {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Link to="/">Home</Link>
                    <Link to="/chat">Chats</Link>
                    <Link to="/user">User</Link>
                </Container>
            </Navbar>

            <Routes>
                <Route path="/user" element={<User/>}/>
                <Route path="/chat" element={<Chat/>}/>
                <Route path="/chat/:chatId" element={<Chat/>}/>
                <Route path="/" element={<Home/>}/>
            </Routes>
        </div>
    )
}

export default App;
