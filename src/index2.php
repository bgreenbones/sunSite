<!DOCTYPE html>
<html lang='en'>
	<head>
		<meta charset='UTF-8' />
		<title>Sun Chang - Pianist & Harsichordist</title>
		<link rel='stylesheet' href='styles.css'/>
		<script src="script.js"></script>
	</head>
	<body>
		<div class="header-container">
			<div class="header">
				<div>
					<div style="font-size: 150%;">
						Sun Chang
					</div>
					<div style="font-size: 80%; margin-top: 10px;">
						PIANIST & HARPSICHORDIST
					</div>
				</div>
				<table>
					<tr>
						<td>
							<a class="nav_link" onclick="load_content('home')">Home</a>
						</td>
						<td>
							<a class="nav_link" onclick="load_content('listen')">Listen</a>
						</td>
						<td>
							<a class="nav_link" onclick="load_content('upcoming')">Upcoming</a>
						</td>
						<td>
							<a class="nav_link" onclick="load_content('about')">About</a>
						</td>
						<td>
							<a class="nav_link" onclick="load_content('contact')">Contact</a>
						</td>
					</tr>
				</table>
			</div>
		</div>
		<div class='container black'>
			<div class='page'>
				<div id="home" class="content home">
					<iframe width="900" height="498" src="https://www.youtube.com/embed/nA8zLECYmlE" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>
					<h1>Mozart Piano Concerto No. 27</h1>
					Performed with musicians of Northwestern University on June 6th, 2017.
				</div>
				<div id="listen" class="content listen hidden">
					<h1>Listen</h1>
				</div>
				<div id="upcoming" class="content upcoming hidden">
					<h1>Upcoming</h1>
				</div>
				<div id="about" class="content about hidden">
					<img src="sunCsq.jpg"></img>
					<h1>About</h1>
					<p>Sun Chang is a 22-year-old Korean-American pianist and harpsichordist. She is currently playing with Friction Quartet aboard the MS Oosterdam as part Holland America Line’s  Lincoln Center Stage Piano Quintet. The LCS quintet performs six nights a week, with repertoire ranging from major piano quintets by Brahms, Schumann and Dvorak, to crossover works arranged specifically for the quintet, and original works commissioned by Holland America.</p>
					<p>Sun earned her BMus at the Bienen School of Music at Northwestern University as a student of Alan Chow in 2017. During her studies, in addition to her involvements within the school, she was also an active member of Chicago’s music scene. She gave a recital at the Chicago Cultural Center, was a featured artist on Live from WFMT, where her two-hour recital was broadcast live, and collaborated frequently with the area’s leading chamber orchestra, Camerata Chicago. As a result, she gave performances of Rhapsody in Blue, Mozart Concerto No. 27, and Saint-Saens' Wedding Cake with Camerata Chicago under the baton of Maestro Drostan Hall and Dan Sommerville. She also won two of the main scholarship competitions in the area, becoming a Luminarts Fellow in 2014, and receiving the Jerome and Elaine Nerenberg Foundation Scholarship from the Musician’s Club of Women in 2015.</p>
					<p>During her year abroad at the Royal Academy of Music in London, she became more involved with the world of historical performance, taking harpsichord and fortepiano lessons from Carole Cerasi. She was fortunate to also study piano with professor Rustem Hayroudinoff during her time there.</p>
					<p>Although her solo engagements are many, Sun is almost always involved in a chamber music project because she loves to make music with others. At Northwestern, she played continuo in the Baroque Music Ensemble, played keyboard in the Contemporary Music Ensemble, gave multiple recitals with violinist Miki Nagahara, and played in various chamber formations. She also sang in University Chorale, Chapel Choir, and University Singers. She continues to seek collaborative opportunities. Next April, she will be playing Mozart’s Piano Concerto No. 14 with the Champaign-Urbana Symphony Orchestra conducted by Stephen Alltop. She will also be returning to Chicago and New York to work on a project focusing on women composers.</p>
				</div>
				<div id="contact" class="content contact hidden">
					<h1>Contact Me</h1>
					<input type="text" value="Name"></input>
					<input type="text" value="E-mail"></input>
					<input type="text" value="Message" width=900 height=400></input>
					<br><br>
					Contact me for questions and/or comments! I'll do my best to respond. Thank you!
				</div>
			</div>
		</div>
		<div class="container white">
			<div class="page">
				<div class="content listen hidden">
					<div class="listing black">
						<div><h2>June 2017</h2><p>Prokofiev Sonata for Violin & Piano with Miki Nagahara</p>
						</div>

						<iframe width="560" height="315" src="https://www.youtube.com/embed/q1cvpu66e1A" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>
					</div>

					<div class="listing black">	
						<div>
							<h2>October 2016</h2>
						</div>
						<div>
						Live! from WFMT Broadcast
						</div>
					</div>

					<div class="listing black">
						<div>
							<h2>September 2015</h2>
						</div>
						<div>
							<a href="https://soundcloud.com/sun-chang-2/7-audio-track">Rhapsody in Blue with Camerata Chicago</a>
						</div>
					</div>
				</div>
				<div class="content upcoming listing white hidden">
					<div class="listing">
						<div class="event-left">
							<div class="event-title">Mozart Piano Concerto No. 14 with Champaign-Urbana Symphony Orchestra</div>
							<div class="event-date">April 28th, 2018</div>
						</div>
						<div class="event-description">Part of the "Music of Titans" concert. Conducted by Maestro Stephen Alltop.
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class='footer'>
			<a href="mailto:sunchangpiano@gmail.com">sunchangpiano@gmail.com</a>
		</div>
	</body>
</html>
