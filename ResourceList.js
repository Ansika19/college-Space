import React from 'react';

const ResourceList = () => {
    const resources = [
        { id: 1, title: 'Past Year Exam Papers', link: '#' },
        { id: 2, title: 'Official Circulars', link: '#' },
        // Add more resources as needed
    ];

    return (
        <div>
            <h2>Academic Resources</h2>
            {resources.map(resource => (
                <div key={resource.id} className="resource">
                    <a href={resource.link}>{resource.title}</a>
                </div>
            ))}
        </div>
    );
};

export default ResourceList;
