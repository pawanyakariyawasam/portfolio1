import React from 'react';
import Section from '../../structure/section';
import Container from '../../structure/container';
import SectionTitle from '../../blocks/section.title';
import css from '../../../styles/scss/sections/articles/recent.module.scss';
import Image from 'next/image';
import Icon from '../../utils/icon';

interface DevToArticle {
    title: string;
    description: string;
    user: {
        name: string;
    };
    id: string;
    cover_image: string;
    created_at: string;
    tags: string | string[];
}

interface DevToRecentProps {
    devToArticles: DevToArticle[];
}

const DevToRecent: React.FC<DevToRecentProps> = ({ devToArticles }) => {
    if (!devToArticles || !devToArticles.length) {
        return null; // Render nothing if there are no Dev.to articles
    }

};

export default DevToRecent;
