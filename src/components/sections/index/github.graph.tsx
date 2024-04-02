'use client';

import React, { useState } from 'react';
import GitHubCalendar from 'react-github-calendar';
import about from '../../../styles/scss/sections/index/about.module.scss';
import styles from "../../../styles/scss/sections/index/career.module.scss";
import SectionTitle from "../../blocks/section.title";
import Section from "../../structure/section";
import Container from "../../structure/container";

const contributionYears = [2023, 2022, 2021, 2020];
export default function GithubGraphSection() {
    const [year, setYear] = useState(2023);

    
}