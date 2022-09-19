import React from 'react'

import dashLanguages from '../images/dash-languages.png';
import learnFinishedCard from '../images/learn-finishedcard.jpg';

import brainTrain from '../images/brain-train.png';
import ana from '../images/ana.png';
import ticTacToe from '../images/tic-tac-toe.png';

import Box from '@mui/material/Box';

import javascript from '../images/javascript.png';
import react from '../images/react.png';
import node from '../images/node.png';
import express from '../images/express.png';
import mongodb from '../images/mongodb.png';
import firebase from '../images/firebase.png';
import postgresql from '../images/postgresql.png';
import ruby from '../images/ruby.png';
import rails from '../images/rails.png';
import heroku from '../images/heroku.png';
import netlify from '../images/netlify.png';
import jquery from '../images/jquery.png';
import mui from '../images/mui.png';
import bootstrap from '../images/bootstrap.png';
import sass from '../images/sass.png';

export default function Projects(props) {

	return (
		<div ref={props.projectsRef} className='projects-backdrop'>
			<Box className='projects' sx={{ width: '100%' }}>
				<div className='projects-container'>
					<h1 className='section-title mono' style={{ marginTop: '54px' }}>My Projects</h1>
					<br />
					<div className='project reverse'>
						<div className='screenshot-container'>
							<img className='mobile-screenshot no-display-nokia' src={ dashLanguages } alt="tonguist dash languages" />
							<img className='mobile-screenshot' src={ learnFinishedCard } alt="" />
						</div>
						<div className='project-card'>
						 	<h1 className='mono'>tonguist</h1>
							<div className='skill-icons'>
								<img className='icon' src={ mongodb } alt="mongodb" />
								<img className='icon' src={ express } alt="express" />
								<img className='icon' src={ react } alt="react" />
								<img className='icon' src={ node } alt="node" />
								<img className='icon' src={ mui } alt="mui" />
								<img className='icon' src={ sass } alt="sass" />
								<img className='icon' src={ netlify } alt="netlify" />
								<img className='icon' src={ heroku } alt="heroku" />
							</div>
							<p>
								<a href="http://tonguist.netlify.app">
									tonguist.netlify.app
								</a>
							</p>
							<p>
								<a href="https://www.github.com/Foyoman/tonguist-client">
									Client repo
								</a>
								{" "}/{" "} 
								<a href="https://www.github.com/Foyoman/tonguist-server">
									Server repo
								</a>
							</p>
							<p>A flashcards web-app centered around language learning that dynamically tracks daily and weekly progress through intuitive visual cues. Best viewed on mobile.</p>
						</div>
					</div>
					<br />
					<div className='project'>
						<div className='project-card right-hand'>
							<h1 className='mono'>Brain Train</h1>
							<div className='skill-icons right-hand'>
								<img className='icon' src={ react } alt="react" />
								<img className='icon' src={ firebase } alt="firebase" />
								<img className='icon' src={ bootstrap } alt="bootstrap" />
							</div>
							<p>
								<a href="http://the-brain-train.web.app">
									the-brain-train.web.app
								</a>
								{" "}/{" "} 
								<a href="https://www.github.com/Foyoman/brain-train">
									GitHub repo
								</a>
							</p>
							<p>A collection of highly interactive brain trainer games made to showcase React's reactive capabilities. Best played on desktop.</p>
						</div>
						<img className='desktop-screenshot' src={ brainTrain } alt="brain train" />
					</div>
					<br />
					<div className='project reverse'>
						<img className='desktop-screenshot' src={ ana } alt="ana homepage" />
						<div className='project-card'>
							<h1 className='mono'>ana</h1>
							<div className='skill-icons' style={{ margin: '1em 0' }}>
								<img className='icon' src={ ruby } alt="ruby" />
								<img className='icon' src={ rails } alt="rails" />
								<img className='icon' src={ postgresql } alt="postgresql" />
								<img className='icon' src={ heroku } alt="heroku" />
							</div>
							<p>
								<a href="http://ana-anecdotes.herokuapp.com">
									Deployed page
								</a>
								{" "}/{" "} 
								<a href="https://www.github.com/Foyoman/ana">
									GitHub repo
								</a>
							</p>
							<p>A forum board built with Ruby on Rails that deals with complex handlings of its database.</p>
						</div>
					</div>
					<br />
					<div className='project'>
						<div className='project-card right-hand'>
							<h1 className='mono'>Tic-Tac-Toe</h1>
							<div className='skill-icons right-hand'>
								<img className='icon' src={ javascript } alt="javascript" />
								<img className='icon' src={ jquery } alt="jquery" />
							</div>
							<p>
								<a href="https://foyoman.github.io/tic-tac-toe/">
									Deployed page
								</a>
								{" "}/{" "}
								<a href="https://www.github.com/Foyoman/tic-tac-toe">
									GitHub repo
								</a>
							</p>
							<p>My very first project. This implementation of an in-browser tic-tac-toe game features an <strong><em>unbeatable</em></strong> "AI".</p>
						</div>
						<img className='desktop-screenshot' src={ ticTacToe } alt="tic tac toe" />
					</div>
				</div>
			</Box>
		</div>
	)
}