import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout';
import PostList from './components/posts/PostList';
import PostDetail from './components/posts/PostDetail';
import CategoryList from './components/categories/CategoryList';
import TagList from './components/tags/TagList';
import Login from './components/auth/Login';
import Register from './components/auth/Register';

const App = () => {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route exact path="/" element={PostList} />
                    <Route exact path="/posts" element={PostList} />
                    <Route path="/posts/:id" element={PostDetail} />
                    <Route path="/categories" element={CategoryList} />
                    <Route path="/tags" element={TagList} />
                    <Route path="/login" element={Login} />
                    <Route path="/register" element={Register} />
                </Routes>
            </Layout>
        </Router>
    );
}

export default App;
