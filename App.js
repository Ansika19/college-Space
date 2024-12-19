import React from 'react';
import Auth from './Auth';
import ResourceList from './ResourceList';

const App = () => {
    return (
        <div className="container">
            <h1 className="header">College Space</h1>
            <Auth />
            <ResourceList />
        </div>
    );
};

export default App;
