import dynamic from 'next/dynamic';
import Color from '../../src/components/utils/page.colors';
import colors from '../../src/content/articles/_colors.json';
import settings from '../../src/content/_settings.json';
import TitleArticles from './title.articles';
import DevToRecent from '../../src/components/sections/articles/recents.blogs';
import React from "react";

// Define the props for the Articles component
interface ArticlesProps {
    mediumArticles: any; // Modify this with the actual type for mediumArticles
    devToArticles: any; // Modify this with the actual type for devToArticles
}

// Articles page component
const Articles: React.FC<ArticlesProps> = ({ mediumArticles, devToArticles }) => {
    return (
        <div style={{ paddingTop: '150px', display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
            <h1>Articles</h1>
			<a href="https://www.linkedin.com/posts/pawanya-kariyawasam-193984230_aiartwork-graphicdesign-ai-activity-7083802769660264448-9yJP?utm_source=share&utm_medium=member_desktop" target="_blank" rel="noopener noreferrer">
                <img src="https://media.licdn.com/dms/image/D5612AQFYGA01a8fr6g/article-cover_image-shrink_600_2000/0/1688910041045?e=1717027200&v=beta&t=4IihBjRTGFu0Gexfb0IfwU88wfO4rDFQfP0vFsAjRJA" alt="Article Image" style={{ width: '200px', height: '200px', objectFit: 'cover', marginBottom: '20px' }} />
            </a>
            <p>My AI Graphic Design Journey</p>
        </div>
    );
};

export default Articles;
