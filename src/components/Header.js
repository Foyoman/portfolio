import React from 'react';
import profilePic from '../images/machupikachu.jpg';
import donut from '../images/donut.jpg';

import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Button, Box } from '@mui/material';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
			className='tabpanel'
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          <div className='tab'>{children}</div>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}


export default function Header(props) {
	const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

	const scrollOnClick = () => {
		props.scrollOnClick();
		// ref.current.scrollIntoView({ behaviour: 'smooth' });
	};


	return (
		<div className='header'>
			<div className='box'>
				<div className='head'>
					<h3 className='mono'>Edward</h3>
					<div className='tabs'>
						<Box sx={{ width: '100%' }}>
							<Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
								<Tabs 
								  value={value} 
									onChange={handleChange} 
									aria-label="basic tabs example" 
									textColor='secondary'
									indicatorColor='secondary'
								>
									<Tab label="Intro" {...a11yProps(0)} />
									<Tab label="About" {...a11yProps(1)} />
									<Tab label="Contact" {...a11yProps(2)} />
								</Tabs>
							</Box>
							
							
						</Box>
					</div>
				</div>
				<div className='header-body'>
					<TabPanel value={value} index={0}>
						<div className='content'>
							<p className='bigger content-p'>Hello,</p>
							<p className='bigger content-p'>I'm <strong>Edward Do</strong></p>
							<p className='mono content-p brief'>An aspiring, ambitious, and adventurous young lad looking to build and maintain momentum for my career in software development.</p>
							<div className='dot-points'>
								<p className='dot-point smaller mono content-p'>
									<div className='dot'></div>
									Exponential growth
								</p>
								<p className='dot-point smaller mono content-p'>
									<div className='dot'></div>
									Rapid rate of learning
								</p>
								<p className='dot-point smaller mono content-p'>
									<div className='dot'></div>
									Complete dedication and commitment
								</p>
							</div>
							<br />
							<br />
							<div className='display-mobile hire-me'>
								<img src={ profilePic } alt="Edward Do" />
								<div className='buttons'>
									<Button variant='contained' color='secondary' size='large'>
										Hire me
									</Button>
									<Button onClick={ scrollOnClick } className='see-my-works' variant='outlined' color='secondary' size='large'>
										My works
									</Button>
								</div>
							</div>
							<div className='buttons no-display-mobile'>
								<Button variant='contained' color='secondary' size='large'>
									Hire me
								</Button>
								<Button onClick={ scrollOnClick } className='see-my-works' variant='outlined' color='secondary' size='large'>
									My works
								</Button>
							</div>
						</div>
						<img className='no-display-mobile' src={ profilePic } alt="Edward Do" />
					</TabPanel>
					<TabPanel value={value} index={1}>
						<div className='about-me'>
							<div>
								<h5 style={{ padding: '0', margin: '0' }}>My story</h5>
								<p className='mono about' style={{ paddingRight: '2em', marginTop: '1em' }}>
									The first thing you should know about me is that it is my ultimate life long dream to be able to sustain a good life for me and my dog while travelling and working from a view like you see behind this div. With software developing being the best field for remote work, I'm extra glad I found a passion for coding.
								</p>
								<p className='mono about' style={{ paddingRight: '2em', marginTop: '1em' }}>
									With a background in education, I hope to find myself working with a team that values learning and education as much as I do. In particular, language learning! If you'd like to learn more about me, please don't hesitate to contact me :)
								</p>
							</div>
							<div className='donut-stat-container'>
								<div className='stat-card mono no-display-tablet'>
									<p style={{ textAlign: 'center' }}>Ed's Stats</p>
									<div className='stats'>
										<div className='stat'>
											<p className='smaller'>Ambition</p>
											<span className='stripes'>
												<div className={ `stripe finished` } />
												<div className={ `stripe finished` } />
												<div className={ `stripe finished` } />
												<div className={ `stripe finished` } />
												<div className={ `stripe finished` } />
											</span>
										</div>
										<div className='stat'>
											<p className='smaller'>Charisma</p> 
											<span className='stripes'>
												<div className={ `stripe checked` } />
												<div className={ `stripe checked` } />
												<div className={ `stripe` } />
												<div className={ `stripe` } />
												<div className={ `stripe` } />
											</span>
										</div>
										<div className='stat'>
											<p className='smaller'>Intellect</p>
											<span className='stripes'>
												<div className={ `stripe checked` } />
												<div className={ `stripe checked` } />
												<div className={ `stripe` } />
												<div className={ `stripe` } />
												<div className={ `stripe` } />
											</span>
										</div>
										<div className='stat'>
											<p className='smaller'>Debugging</p>
											<span className='stripes'>
												<div className={ `stripe checked` } />
												<div className={ `stripe checked` } />
												<div className={ `stripe checked` } />
												<div className={ `stripe checked` } />
												<div className={ `stripe` } />
											</span>
										</div>
										<div className='stat'>
											<p className='stat-class smaller'>Growth rate</p>
											<span className='stripes'>
												<div className={ `stripe finished` } />
												<div className={ `stripe finished` } />
												<div className={ `stripe finished` } />
												<div className={ `stripe finished` } />
												<div className={ `stripe finished` } />
											</span>
										</div>
										<div className='stat'>
											<p className='smaller'>Competitiveness</p>
											<span className='stripes'>
												<div className={ `stripe checked` } />
												<div className={ `stripe checked` } />
												<div className={ `stripe checked` } />
												<div className={ `stripe checked` } />
												<div className={ `stripe` } />
											</span>
										</div>
									</div>
								<div>
									<p className='donut-container mono smaller'>
										Donut!
										<img className='donut' src={ donut } alt="donut the dog" />
									</p>
								</div>
								</div>
							</div>
						</div>
					</TabPanel>
					<TabPanel value={value} index={2}>
						<div className='contact mono' style={{ margin: '0 auto', textAlign: 'center' }}>
							<br />
							<p><strong>email:</strong> edwardtdo@gmail.com</p>
							<p><strong>phone:</strong> +61 451 542 232</p>
							<p><strong>linkedIn:<a href="https://www.linkedin.com/in/edwardtdo/"> edwardtdo</a></strong></p>
							<p><strong>GitHub:<a href="https://github.com/Foyoman"> Foyoman</a></strong></p>
							<p><strong>Resume:</strong> coming soon.</p>
						</div>
					</TabPanel>
				</div>
			</div>
		</div>
	)
}
