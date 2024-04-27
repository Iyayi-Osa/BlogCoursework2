import React from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';

const Layout = ({ children }) => {
    return (
        <div className="layout">
            <Header />
            <main className="container py-4">
                {children}
            </main>
            <Footer />
        </div>
    );
}

export default Layout;

