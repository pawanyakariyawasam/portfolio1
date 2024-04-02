
import {useEffect, useState} from 'react';

import Container from '../structure/container';
import Icon from '../utils/icon';

import css from '../../styles/scss/structure/footer.module.scss';

import content from '../../content/section/footer.json';
import settings from '../../content/_settings.json';

interface GitHubInfo {
	stars: number | null;
	forks: number | null;
}

export default function Footer(): JSX.Element {
	const [gitHubInfo, setGitHubInfo] = useState<GitHubInfo>({
		stars: null,
		forks: null,
	});

	useEffect(() => {
		fetch(settings.portfolio.repo_api)
			.then(response => response.json())
			.then(json => {
				const { stargazers_count, forks_count } = json;
				setGitHubInfo({
					stars: stargazers_count,
					forks: forks_count,
				});
			})
			.catch(e => console.error(e));
	}, []);

	return (
		<footer className={css.container}>
			<Container spacing={['verticalXXLrg', 'bottomLrg']}>
				
				<section className={css.github}>
					<a href={settings.portfolio.repo_html} rel="noreferrer" target="_blank">
						<h5>{settings.portfolio.fork_this}</h5>
						<ul>
							<li>
								<p>
									<Icon icon={['fad', 'code-branch']} /> Forks: {gitHubInfo.forks}
								</p>
							</li>
							<li>
								<p>
									<Icon icon={['fad', 'star']} /> Stars: {gitHubInfo.stars}
								</p>
							</li>
						</ul>
					</a>
				</section>
			</Container>
			<canvas id="gradient-canvas" className={''} data-transition-in=""></canvas>
		</footer>
	);
}
