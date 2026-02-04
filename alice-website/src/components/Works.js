import '../css/works.css'
import WorksGrid from './Works-Grid';
import WorksList from './Works-List';
import { useState, useEffect } from 'react';


function Works() {
    const [viewMode, setViewMode] = useState('list');

    useEffect(() => {
        const saved = localStorage.getItem('viewMode');
        if (saved) {
            setViewMode(saved);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('viewMode', viewMode);
    }, [viewMode]);

    useEffect(() => {
        function handleResize() {
            if (window.innerWidth < 900 && viewMode === 'list') {
                setViewMode('grid');
            }
        }

        handleResize();

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [viewMode]);

    return (
        <div class="section-main" id="portfolio-section">
            <div class="works-header">
                <div class="section-title">Works</div>
                <div class="view-toggle">
                    <button
                        class={viewMode === 'list' ? 'active' : ''}
                        onClick={() => setViewMode('list')}
                    >
                        List
                    </button>
                    <button
                        class={viewMode === 'grid' ? 'active' : ''}
                        onClick={() => setViewMode('grid')}
                    >
                        Grid
                    </button>
                </div>
            </div>

            {viewMode === 'grid' ? <WorksGrid /> : <WorksList />}
        </div>
    );
}

export default Works;
