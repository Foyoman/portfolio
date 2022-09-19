import React from 'react'
import { Card, Avatar, Divider, Stack, Switch, Box, Typography, IconButton, Chip } from '@mui/material'
import profilePic from '../images/machupikachu.jpg'
import { LocationOn, LocalPolice } from '@mui/icons-material'
import javascript from '../images/javascript.png';
import react from '../images/react.png';
import node from '../images/node.png';
import express from '../images/express.png';
import mongodb from '../images/mongodb.png';
import firebase from '../images/firebase.png';
import postgresql from '../images/postgresql.png';
import vue from '../images/vue.png';
import ruby from '../images/ruby.png';
import rails from '../images/rails.png';
import jquery from '../images/jquery.png';
import mui from '../images/mui.png';
import bootstrap from '../images/bootstrap.png';
import sass from '../images/sass.png';
import css from '../images/css.png';
import html from '../images/html.png';

export default function Me() {
	return (
		<div className='me'>
			<Card className='profile-card'>
				<Box className='profile-box' sx={{ p: 2, display: 'flex', justifyContent: 'space-between' }}>
					<Avatar className='profile-pic' variant="rounded" src={ profilePic } />
					<Stack className='profile-info' spacing={0.5}>
						<h1 className='card-header'>Edward Do</h1>
						<p className='card-location'>
							<LocationOn sx={{color: 'grey'}} /> Sydney, NSW, AU
						</p>
						<p>An ambitious and hard-working young lad, Edward has uncovered his natural talent for coding with the help of General Assembly.</p>
						<br />
					</Stack>
					<div>
						<Card className='stat-card'>
							<h2>Stats</h2>
							<div className='stats'>
								<div className='stat'>
									Ambition
									<span className='stripes'>
										<div className={ `stripe finished` } />
										<div className={ `stripe finished` } />
										<div className={ `stripe finished` } />
										<div className={ `stripe finished` } />
										<div className={ `stripe finished` } />
									</span>
								</div>
								<div className='stat'>
									Charisma
									<span className='stripes'>
										<div className={ `stripe checked` } />
										<div className={ `stripe checked` } />
										<div className={ `stripe` } />
										<div className={ `stripe` } />
										<div className={ `stripe` } />
									</span>
								</div>
								<div className='stat'>
									Intellect
									<span className='stripes'>
										<div className={ `stripe checked` } />
										<div className={ `stripe checked` } />
										<div className={ `stripe` } />
										<div className={ `stripe` } />
										<div className={ `stripe` } />
									</span>
								</div>
								<div className='stat'>
									Debugging
									<span className='stripes'>
										<div className={ `stripe checked` } />
										<div className={ `stripe checked` } />
										<div className={ `stripe checked` } />
										<div className={ `stripe checked` } />
										<div className={ `stripe` } />
									</span>
								</div>
								<div className='stat'>
									<span className='stat-class'>Growth rate</span>
									<span className='stripes'>
										<div className={ `stripe finished` } />
										<div className={ `stripe finished` } />
										<div className={ `stripe finished` } />
										<div className={ `stripe finished` } />
										<div className={ `stripe finished` } />
									</span>
								</div>
								<div className='stat'>
									Competitiveness
									<span className='stripes'>
										<div className={ `stripe checked` } />
										<div className={ `stripe checked` } />
										<div className={ `stripe checked` } />
										<div className={ `stripe checked` } />
										<div className={ `stripe` } />
									</span>
								</div>
								<div className='stat'>
									Luck
									<span className='stripes'>
										<div className={ `stripe checked` } />
										<div className={ `stripe checked` } />
										<div className={ `stripe checked` } />
										<div className={ `stripe` } />
										<div className={ `stripe` } />
									</span>
								</div>
								<div className='stat'>
									Endurance
									<span className='stripes'>
										<div className={ `stripe checked` } />
										<div className={ `stripe checked` } />
										<div className={ `stripe checked` } />
										<div className={ `stripe checked` } />
										<div className={ `stripe` } />
									</span>
								</div>
								<div className='stat'>
									Dexterity
									<span className='stripes'>
										<div className={ `stripe checked` } />
										<div className={ `stripe checked` } />
										<div className={ `stripe checked` } />
										<div className={ `stripe checked` } />
										<div className={ `stripe` } />
									</span>
								</div>
							</div>
						</Card>
					</div>
				</Box>
				<Divider />
				<Stack
					direction="column"
					alignItems="flex-start"
					gap='1em'
					sx={{ px: 2, py: 1, bgcolor: 'background.default' }}
				>
					<div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
						<div className='badges-icon'>
							<LocalPolice style={{ margin: '0 0.5em 0 0' }} /> Badges: {" "}
						</div>
						<span className='badge-count'>
							15
						</span>
					</div>
					<div className='badges'>
						<img className='badge' src={ javascript } alt="javascript" />
						<img className='badge' src={ react } alt="react" />
						<img className='badge' src={ node } alt="node" />
						<img className='badge' src={ express } alt="express" />
						<img className='badge' src={ mongodb } alt="mongodb" />
						<img className='badge' src={ firebase } alt="firebase" />
						<img className='badge' src={ postgresql } alt="postgresql" />
						<img className='badge' src={ vue } alt="vue" />
						<img className='badge' src={ ruby } alt="ruby" />
						<img className='badge' src={ rails } alt="rails" />
						<img className='badge' src={ jquery } alt="jquery" />
						<img className='badge' src={ mui } alt="mui" />
						<img className='badge' src={ bootstrap } alt="bootstrap" />
						<img className='badge' src={ sass } alt="sass" />
						<img className='badge' src={ css } alt="css" />
						<img className='badge' src={ html } alt="html" />
					</div>
				</Stack>
			</Card>
		</div>
	)
}
