import React from 'react';
import SunHeader from "./header.js";
import Performance from "./performance.js";
import Performances from "./performances.json";
import { filter_list, disp_list } from "./repertoire.js";
import "./styles.css";


class SunSite extends React.Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        return <html lang='en'>
	<head>
		<meta charset='UTF-8' />
		<title>Sun Chang - Pianist & Harsichordist</title>
		<link rel='stylesheet' href='styles.css'/>
		<script src="script.js"></script>
		<script src="repertoire.js"></script>
	</head>
	<body>
		<SunHeader></SunHeader>
		<div class='container black'>
			<div class='page'>
				<div id="home" class="content home">
					<iframe title="ok" width="900" height="498" src="https://www.youtube.com/embed/nA8zLECYmlE" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>
					<h2>Mozart Piano Concerto No. 27</h2>
					Performed with musicians of Northwestern University on June 6th, 2017.
				</div>
				<div id="listen" class="content listen hidden">
					<h2>Listen</h2>
				</div>
				<div id="projects" class="content projects hidden">
					<h2>Projects</h2>
				</div>
				<div id="performances" class="content performances hidden">
					<h2>Performances</h2>
				</div>
				<div id="about" class="content about hidden">
					<div class="opaquish">
						<h1> </h1>
					</div>
						<div class="bio">
						<p />Sun Chang is a 23-year-old Korean-American pianist and harpsichordist. After graduating from the Bienen School of Music at Northwestern University in 2017 with a BMus, she is now studying at the Royal Academy of Music in London in pursuit of a Master’s in Historical Performance. Between degrees, she traveled and performed on Holland America Line as part of Lincoln Center Stage Piano Quintet. The LCS quintet performs six nights a week, with repertoire ranging from major piano quintets by Brahms, Schumann and Dvorak, to crossover works arranged specifically for the quintet, and original works commissioned by Holland America. 

						<p />In May 2018 with the help of soprano Harrah Friedlander and <a href="https://www.luminarts.org/" class="link">@Luminarts</a> Cultural Foundation Sun organised concerts celebrating underrepresented voices in music. She teamed up with Chicago-area artists to showcase works by women from the baroque time period such as Hildegard von Bingen, Isabella Leonarda, Elizabeth Jacquet de la Guerre, Francesca Caccini, Caterina Assadra, and Barbara Strozzi. Take a look at the program <a href="The-Second-Sex-in-the-City-Program.pdf" class="link">here</a> - designed by <a href="https://www.zhookie.com/" class="link">@Julie</a>. In addition to this fun project, she collaborated with Dr. Stephen Alltop to perform Mozart’s Piano Concerto No. 14 with the Champaign-Urbana Symphony Orchestra.

						<p />While earning her BMus with Mr. Alan Chow, she was also an active member of Chicago’s music scene. She gave a recital at the Chicago Cultural Centre, was a featured artist on Live from WFMT, where her two-hour recital was broadcast live, and collaborated frequently with the area’s leading chamber orchestra, Camerata Chicago. As a result, she gave performances of Rhapsody in Blue, Mozart Concerto No. 27, and Saint-Saens' Wedding Cake with Camerata Chicago under the baton of Maestro Drostan Hall and Dan Sommerville. She also won two of the main scholarship competitions in the area, becoming a Luminarts Fellow in 2014, and receiving the Jerome and Elaine Nerenberg Foundation Scholarship from the Musician’s Club of Women in 2015. 

						<p />Despite her solo engagements, Sun’s biggest passion is chamber music because she believes that musicking is a social activity. At Northwestern, she played continuo in the Baroque Music Ensemble, played keyboard in the Contemporary Music Ensemble, gave multiple recitals with violinist Miki Nagahara, and played in various chamber formations. After graduating, on top of playing in piano quintets, she always found ways to play other musicians, whether it be for groupmuse concerts or for public outreach events like Bach In The Subways, and she will continue to seek out ensemble opportunities for the rest of her life.  Her plan is to found, direct, conduct and play in a female-centred chamber ensemble. 

						<p />Sun is very grateful to her supporters for everything they’ve contributed to her career and humanity. She would especially like to thank Dr. Peter Mack for being her teacher of more than a decade, and for supporting her in her formative years. In addition to having such an excellent primary piano teacher, she is fortunate to have learned from many different teachers at various summer festivals. Mostly she would like to thank her family for the incredible support and for loving her into being. 


						<p /><i>"The move to unearth women artists in music, as in any other art, is not a neutral act, any more than is their previous neglect."</i>

						 <p />“sun is a real human” bio<br />
						Favourite movies - Ratatouille, The Room, Troll 2<br />
						TV Shows - Curb your Enthusiasm, Arrested Development, Planet Earth<br />
						Foods - Rice, sushi, cherry tomatoes<br />
						Music - Jacob Collier, anything I can dance to<br />
						activities - dancing, cooking, doing yoga, hiking<br />
                        
					</div>






				</div>

				<div id="repertoire" class="content repertoire hidden">
					<h2>Repertoire</h2>
					<button onclick={disp_list}>Display All</button> | 
					<button onclick={filter_list('configuration', 'Solo Piano')}>Solo Piano</button> | 
					<button onclick={filter_list('configuration', 'Chamber')}>Chamber</button> | 
					<button onclick={filter_list('configuration', 'Concerto')}>Concertos</button>
				</div>

			</div>
		</div>
		<div class="container white">
			<div class="page">
				<div class="content listen hidden">

					<div class="listing audio gray">
						<div>
							<h2>Piano Quintet in F Minor // Johannes Brahms</h2><p>We recorded this in a beautiful church in Juneau, Alaska, during a contract as a piano quintet on Holland America. I'm very thankful to my colleagues Victor Minke Huls (cello), Ali Comerford (viola), Hannah Ji, and Michael Turkell (violins) for participating and to Dave and Bruce for being so generous with their time, resources, and skills.</p>
							<div class="indent">
								<button class="link" onclick="move_time('brahms_player', 0)">Allegro non troppo</button><br />
								<button class="link" onclick="move_time('brahms_player', 658)">Andante, un poco adagio</button><br />
								<button class="link" onclick="move_time('brahms_player', 18 * 60 + 38)">Scherzo: Allegro</button><br />
								<button class="link" onclick="move_time('brahms_player', 26 * 60 + 20)">Finale: Poco sostenuto - Allegro non troppo - Presto, non troppo</button><br />
							</div>
						</div>

						<audio controls="controls" id="brahms_player">
							<source src="audio/Brahms.mp3" type="audio/mpeg" />

						</audio>
					</div>

					<div class="listing audio gray">
						<div>
							<h2>Rhapsody In Blue // George Gershwin</h2><p>I performed this with <a href="https://www.cameratachicago.org/">Camerata Chicago</a> with Maestro Drostan Hall for the Sylvia McNair series in 2015. The world-renowned singer performed some Gershwin songs with the orchestra, and the series also included An American In Paris, Catfish Row, as well as Rhapsody in Blue for an all-Gershwin evening. The recording you hear is from our third and final concert, which was part of the <a href="http://www.wheaton.edu/artist-series">Wheaton College Artists Series.</a></p>
						</div>

						<audio controls="controls" id="rhapsody_player">
							<source src="audio/SunChangRhapsodyInBlue.mp3" type="audio/mpeg" />

						</audio>
					</div>

					<div class="listing audio gray">	
						<div>
							<h2>Hommage à Rameau // Claude Debussy</h2><p>This is a wonderful second movement from Claude Debussy's Images, book I. This was recorded in Levin Studios at WFMT - Chicago's classical radio station - from when I played for a taping of <a href="https://www.wfmt.com/programs/live-from-wfmt/">Live! From WFMT</a>, hosted by Kerry Frumkin.</p>
						</div>

						<audio controls="controls" id="homage_player">
							<source src="audio/SunChangDebussyHomageARameau.mp3" type="audio/mpeg" />

						</audio>
					</div>

					<div class="listing audio gray">
						<div>
							<h2>Piano Sonata No. 2 // Grazyna Bacewicz</h2><p>Grazyna Bacewicz (1909-1969) is one of the first female composers I was introduced to as a student. I fell in love with this sonata immediately, and I am always happy when I am able to introduce it to others. I hope you enjoy listening to it! The movement titles are links, which you can click to move to the beginning of the movement. To read more about this piece visit this <a href="https://www.allmusic.com/composition/piano-sonata-no-2-mc0002384583">link.</a></p>
							<div class="indent">
								<button class="link" onclick="move_time('bacewicz_player', 0)">Maestoso</button><br />
								<button class="link" onclick="move_time('bacewicz_player', 337)">Largo</button><br />
								<button class="link" onclick="move_time('bacewicz_player', 776)">Toccata</button><br />
							</div>

						</div>

						<audio controls="controls" id="bacewicz_player">
							<source src="audio/SunChangBacewicz.mp3" type="audio/mpeg" />
						</audio>
					</div>

					<div class="listing audio gray">

						<div><h2>Piano Concerto No. 27 in B-flat // W.A. Mozart</h2><p>As part of my senior recital, I thought it would be fun to gather all my friends and play a concerto with them! With the help of conductor Daniel Brottman, I was able to perform this delightful piece in Galvin Hall at Northwestern University.</p>
						</div>
							
						<iframe title="ok1" width="560" height="315" src="https://www.youtube.com/embed/nA8zLECYmlE" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>
					</div>

					<div class="listing audio gray">

						<div><h2>Piano Sonata No. 20 in A major, D959 // Franz Schubert</h2><p>This was the other piece performed at my senior recital. I think it is a fantastic and moving work, and I felt it was appropriate to end my four years of university schooling with it. If you want to read what someone on the internet has to say about it, here's a <a href="https://www.allmusic.com/composition/piano-sonata-no-20-in-a-major-d-959-mc0002370927">link.</a></p>
						</div>
							
						<iframe title="ok2" width="560" height="315" src="https://www.youtube.com/embed/hMW1gpEKftA" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>
					</div>
				</div>


				<div class="content projects white hidden">
					<div class="gray list">
						<div class="category">
							<button class="link" onclick="toggle_visibility('concertos')"><h2>Concertos</h2></button>

							<div id="concertos" class="hidden">
								<div class="ensemble">
									<button class="link" onclick="toggle_visibility('cuso')"><h3>CUSO</h3></button>

									<div id="cuso" class="hidden">
										<div class="listing">
											<div class="project-left">
												<div class="project-title">Mozart Piano Concerto No. 14 with Champaign-Urbana Symphony Orchestra</div>
											</div>
											<div class="project-description">Part of the "Music of Titans" concert. Conducted by Maestro Stephen Alltop.
											</div>
										</div>
									</div>
								</div>

								<div class="ensemble">
									<button class="link" onclick="toggle_visibility('camerata_chicago')"><h3>Camerata Chicago</h3></button>

									<div id="camerata_chicago" class="hidden">
										<div class="listing">
											<div class="project-left">
												<div class="project-title">Mozart Piano Concerto No. 27</div>
											</div>
											<div class="project-description">Description.</div>
										</div>

										<div class="listing">
											<div class="project-left">
												<div class="project-title">Wedding Cake</div>
											</div>
											<div class="project-description">Description.</div>
										</div>

										<div class="listing">
											<div class="project-left">
												<div class="project-title">Rhapsody In Blue</div>
											</div>
											<div class="project-description">Description.</div>
										</div>
									</div>
								</div>

								<div class="ensemble">
									<button class="link" onclick="toggle_visibility('utah')"><h3>Utah Symphony</h3></button>

									<div id="utah" class="hidden">
										<div class="listing">
											<div class="project-left">
												<div class="project-title">Flist? Totentanz</div>
											</div>
											<div class="project-description">Description.
											</div>
										</div>
									</div>
								</div>

								<div class="ensemble">
									<button class="link" onclick="toggle_visibility('phil_nw')"><h3>Philharmonia NW</h3></button>

									<div id="phil_nw" class="hidden">
										<div class="listing">
											<div class="project-left">
												<div class="project-title">Flist? Totentanz</div>
											</div>
											<div class="project-description">Description.
											</div>
										</div>
									</div>
								</div>

								<div class="ensemble">
									<button class="link" onclick="toggle_visibility('bme')"><h3>Baroque Music Ensemble (Northwestern University)</h3></button>

									<div id="bme" class="hidden">
										<div class="listing">
											<div class="project-left">
												<div class="project-title">CPE Bach</div>
											</div>
											<div class="project-description">Description.
											</div>
										</div>

										<div class="listing">
											<div class="project-left">
												<div class="project-title">Double Harpsichord</div>
											</div>
											<div class="project-description">Description.
											</div>
										</div>
									</div>
								</div>

								<div class="ensemble">
									<button class="link" onclick="toggle_visibility('friends')"><h3>Friends?</h3></button>

									<div id="friends" class="hidden">
										<div class="listing">
											<div class="project-left">
												<div class="project-title">Mozart 27</div>
											</div>
											<div class="project-description">Description.
											</div>
										</div>
									</div>
								</div>
							</div>

						</div>

						<div class="category">
							<button class="link" onclick="toggle_visibility('chamber')"><h2>Chamber</h2></button>

							<div id="chamber" class="hidden">
								<div class="ensemble">
									<h3>Lincoln Center Stage</h3>
								</div>
								<div class="ensemble">
									<h3>Miki</h3>
								</div>
								<div class="ensemble">
									<h3>Jeff</h3>
								</div>
								<div class="ensemble">
									<h3>Dan and Danika</h3>
								</div>
								<div class="ensemble">
									<h3>Second Sex</h3>
								</div>
							</div>
						</div>
						<div class="category">
							<button class="link" onclick="toggle_visibility('women')"><h2>Women</h2></button>

							<div id="women" class="hidden">
								<div class="listing">
									<div class="project-left">
										<div class="project-title">Augusta Read Thomas</div>
									</div>
									<div class="project-description">Description
									</div>
								</div>	
								<div class="listing">
									<div class="project-left">
										<div class="project-title">The Second (Sex + City)</div>
									</div>
									<div class="project-description">A presentation of works by female composers from the renaissance and baroque periods, check out this program.
									</div>
								</div>	
								<div class="listing">
									<div class="project-left">
										<div class="project-title">Database / Theory examples</div>
									</div>
									<div class="project-description">Description
									</div>
								</div>
								<div class="listing">
									<div class="project-left">
										<div class="project-title">Bacewicz</div>
									</div>
									<div class="project-description">Description
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div class="content performances white hidden">
					
					<div class="listing list event future">
						<div class="event-left">
							<div class="event-title"> Ravel Concerto in G </div>
							<div class="event-date">4 May 2019, 7pm </div>
						</div>

						<div class="event-description">
							I will be playing Ravel's Piano Concerto in G with conductor Daniel Sommerville and Illinois Valley Symphony Orchestra. M.M. Weeg Cultural Center at IVCC.

							<br /><br />
							<i>repertoire:</i><br />
							Maurice Ravel // Piano Concerto in G major
						
						</div>
					</div>
					<div style={{
                        padding: '25px'}}>	
						<h2>	
							Past performances:
						</h2>
					</div>

                    { Performances.items.map(perf => <Performance title={perf.title}
                                                            date={perf.date}
                                                            description={perf.description}
                                                            repertoire={perf.repertoire}></Performance>)
                    }
				</div>

				<div class="content repertoire white hidden">
					<div id="repertoire_list" class="gray list">
					</div>
				</div>
			</div>
		</div>
		<div class='footer'>
			<a class="link" href="mailto:sunchangpiano@gmail.com">sunchangpiano at gmail</a>
		</div>
	</body>
</html>;
    }

}

export default SunSite;
