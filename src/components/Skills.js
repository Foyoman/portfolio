import React from 'react';
import javascript from '../images/javascript.png';
import typescript from '../images/typescript.png';
import react from '../images/react.png';
import node from '../images/node.png';
import express from '../images/express.png';
import mongodb from '../images/mongodb.png';
import firebase from '../images/firebase.png';
import postgresql from '../images/postgresql.png';
import vue from '../images/vue.png';
import ruby from '../images/ruby.png';
import rails from '../images/rails.png';
import heroku from '../images/heroku.png';
import netlify from '../images/netlify.png';
import jquery from '../images/jquery.png';
import mui from '../images/mui.png';
import bootstrap from '../images/bootstrap.png';
import sass from '../images/sass.png';
import css from '../images/css.png';
import html from '../images/html.png';

export default function Skills() {
	return (
		<div className='skills mono'>
			<h1 style={{ marginTop: '0' }}>Technologies utilised in projects so far</h1>
			<div className='skill-icons'>
				<img className='badge' src={ javascript } alt="javascript" />
				<img className='badge' src={ react } alt="react" />
				<img className='badge' src={ node } alt="node" />
				<img className='badge' src={ express } alt="express" />
				<img className='badge' src={ mongodb } alt="mongodb" />
				<img className='badge' src={ firebase } alt="firebase" />
				<img className='badge' src={ postgresql } alt="postgresql" />
				<img className='badge' src={ ruby } alt="ruby" />
				<img className='badge' src={ rails } alt="rails" />
				<img className='badge' src={ heroku } alt="heroku" /> 
				<img className='badge' src={ netlify } alt="netlify" />
				<img className='badge' src={ jquery } alt="jquery" />
				<img className='badge' src={ mui } alt="mui" />
				<img className='badge' src={ bootstrap } alt="bootstrap" />
				<img className='badge' src={ sass } alt="sass" />
				<img className='badge' src={ css } alt="css" />
				<img className='badge' src={ html } alt="html" />
			</div>

			<h1 className='mono'>What I'd love to practice more of</h1>
			<div className='skill-icons'>
				<img className='badge' src={ typescript } alt="typescript" />
				<img className='badge' src={ vue } alt="vue" />
			</div>
		</div>
	)
}
