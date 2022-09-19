import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Accents() {
	return (
		<div className='accents no-display-tesla-screen'>
			<div className='line left'></div>
			<div className='linkedin-github'>
				<LinkedInIcon />
				<GitHubIcon />
			</div>
			<div className='line right'></div>
			<div>
				<p className='email mono'>
					edwardtdo@gmail.com
				</p>
			</div>
		</div>
	)
}
