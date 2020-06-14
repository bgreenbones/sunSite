

var rep_list = [];

function rep_listing(composer_last_name, composer_first_name, title, collection, period, configuration, instrumentation) {
	this.composer_last_name = composer_last_name;
	this.composer_first_name = composer_first_name
	this.title = title;
	this.collection = collection;
	this.period = period;
	this.configuration = configuration;
	this.instrumentation = instrumentation
}

function sort_list() {
	rep_list.sort(function(a, b) {
		var x = a.title.toLowerCase();
		var y = b.title.toLowerCase();
		if (x < y) { return -1; }
		if (x > y) { return 1; }
		return 0;
	});

	rep_list.sort(function(a, b) {
		var x = a.composer_last_name.toLowerCase() + a.composer_first_name.toLowerCase();
		var y = b.composer_last_name.toLowerCase() + a.composer_first_name.toLowerCase();
		if (x < y) { return -1; }
		if (x > y) { return 1; }
		return 0;
	});
}


export function disp_list(to_disp = rep_list) {
	if (rep_list.length === 0) {
		make_disp_rep_list();
		to_disp = rep_list;
	}

	var rep_html = "";
	var last_composer = "";
	for(var i = 0; i < to_disp.length; i++) {
		var current_composer = to_disp[i].composer_first_name + " " + to_disp[i].composer_last_name;
		if(current_composer !== last_composer) {
			rep_html += "<div><b>" + current_composer + "</b></div>";
		}
		rep_html += "<div class='indent'>" + to_disp[i].title + "</div>";
		last_composer = current_composer;
	}

	return rep_html;
	// document.getElementById("repertoire_list").innerHTML = rep_html;
}

export function make_disp_rep_list() {
	if (rep_list.length > 0) { return; }
	rep_list.push(new rep_listing("Rameau", "J-P.", "Nouvelles Pieces de Clavecin, Premier Livre", "None", "Baroque", "Solo Piano", ["Piano"]));
	rep_list.push(new rep_listing("Rameau", "J-P.", "La Poule", "None", "Baroque", "Solo Piano", ["Piano"]));
	rep_list.push(new rep_listing("Bach", "J.S.", "Partita No. 4 in D major, BWV 828", "None", "Baroque", "Solo Piano", ["Piano"]));
	rep_list.push(new rep_listing("Bach", "J.S.", "Prelude and Fugue. 20 in A minor, BWV 865", "The Well-Tempered Clavier Book I", "Baroque", "Solo Piano", ["Piano"]));
	rep_list.push(new rep_listing("Bach", "J.S.", "Prelude and Fugue No. 2 in C sharp major, BWV 848", "The Well-Tempered Clavier Book I", "Baroque", "Solo Piano", ["Piano"]));
	rep_list.push(new rep_listing("Bach", "J.S.", "Prelude and Fugue No. 6 in D minor, BWV 875", "The Well-Tempered Clavier Book II", "Baroque", "Solo Piano", ["Piano"]));
	rep_list.push(new rep_listing("Bach", "J.S.", "Prelude and Fugue No. 17 in A-flat major, BWV 886", "The Well-Tempered Clavier Book II", "Baroque", "Solo Piano", ["Piano"]));
	rep_list.push(new rep_listing("Bach", "J.S.", "English Suite No. 2 in A minor BWV 807", "None", "Baroque", "Solo Piano", ["Piano"]));
	rep_list.push(new rep_listing("Scarlatti", "D.", "Sonata in G major, K. 14", "Sonatas", "Baroque", "Solo Piano", ["Piano"]));
	rep_list.push(new rep_listing("Scarlatti", "D.", "Sonata in F minor, K. 481", "Sonatas", "Baroque", "Solo Piano", ["Piano"]));
	rep_list.push(new rep_listing("Scarlatti", "D.", "Sonata in F minor, K. 386", "Sonatas", "Baroque", "Solo Piano", ["Piano"]));
	rep_list.push(new rep_listing("Scarlatti", "D.", "Sonata in A major, K. 208", "Sonatas", "Baroque", "Solo Piano", ["Piano"]));
	rep_list.push(new rep_listing("Scarlatti", "D.", "Sonata in A major, K. 209", "Sonatas", "Baroque", "Solo Piano", ["Piano"]));
	rep_list.push(new rep_listing("Haydn", "J.", "Piano Sonata in F major, Hob. XVI/32", "Sonatas", "Classical", "Solo Piano", ["Piano"]));
	rep_list.push(new rep_listing("Haydn", "J.", "Piano Sonata in B minor, Hob. XVI/32", "Sonatas", "Classical", "Solo Piano", ["Piano"]));
	rep_list.push(new rep_listing("Mozart", "W.A.", "Variations on “Ah, vous dirai-je, Maman” KV 265", "None", "Classical", "Solo Piano", ["Piano"]));
	rep_list.push(new rep_listing("Mozart", "W.A.", "Sonata in C major, K. 330", "Sonatas", "Classical", "Solo Piano", ["Piano"]));
	rep_list.push(new rep_listing("Mozart", "W.A.", "Sonata in A minor K. 310", "Sonatas", "Classical", "Solo Piano", ["Piano"]));
	rep_list.push(new rep_listing("Beethoven", "L.V.", "Piano Sonata No. 2 in A major Op. 2 no 2", "Sonatas", "Classical", "Solo Piano", ["Piano"]));
	rep_list.push(new rep_listing("Beethoven", "L.V.", "Piano Sonata No. 7 in D major, Op. 10 No. 3", "Sonatas", "Classical", "Solo Piano", ["Piano"]));
	rep_list.push(new rep_listing("Beethoven", "L.V.", "Piano Sonata No. 11 in B-flat major Op. 22", "Sonatas", "Classical", "Solo Piano", ["Piano"]));
	rep_list.push(new rep_listing("Beethoven", "L.V.", "Piano Sonata in A-flat major, Op. 29", "Sonatas", "Classical", "Solo Piano", ["Piano"]));
	rep_list.push(new rep_listing("Schubert", "F.", "'Little' Piano Sonata in A major, D. 664", "Sonatas", "Classical", "Solo Piano", ["Piano"]));
	rep_list.push(new rep_listing("Schubert", "F.", "Piano Sonata in A major, Op. Posth. D. 959", "Sonatas", "Classical", "Solo Piano", ["Piano"]));
	rep_list.push(new rep_listing("Schumann", "R.", "Waldszenen, Op. 82", "None", "Classical", "Solo Piano", ["Piano"]));
	rep_list.push(new rep_listing("Schumann", "R.", "Piano Sonata No. 2 in G minor, Op. 22", "Sonatas", "Classical", "Solo Piano", ["Piano"]));
	rep_list.push(new rep_listing("Mendelssohn", "F.", "'Scottish' Fantasy in F sharp minor, Op. 28", "None", "Classical", "Solo Piano", ["Piano"]));
	rep_list.push(new rep_listing("Chopin", "F.", "Etude in F major, Op. 10 No. 8", "Etudes", "Romantic", "Solo Piano", ["Piano"]));
	rep_list.push(new rep_listing("Chopin", "F.", "Etude in C-sharp minor, Op. 35 No. 7", "Etudes", "Romantic", "Solo Piano", ["Piano"]));
	rep_list.push(new rep_listing("Chopin", "F.", "Prelude in F sharp major Op. 28 No. 13", "Preludes", "Romantic", "Solo Piano", ["Piano"]));
	rep_list.push(new rep_listing("Chopin", "F.", "Nocturne in F minor, Op. 55 No. 1", "Nocturnes", "Romantic", "Solo Piano", ["Piano"]));
	rep_list.push(new rep_listing("Chopin", "F.", "Ballade No. 3 in A-flat major, Op. 47", "Ballades", "Romantic", "Solo Piano", ["Piano"]));
	rep_list.push(new rep_listing("Chopin", "F.", "Ballade No. 4 in F major, Op. 52", "Ballades", "Romantic", "Solo Piano", ["Piano"]));
	rep_list.push(new rep_listing("Chopin", "F.", "Impromptu No. 2 in F-sharp major, Op. 36", "Impromptus", "Romantic", "Solo Piano", ["Piano"]));
	rep_list.push(new rep_listing("Liszt", "F.", "La leggierezza, S. 144 No. 2", "None", "Romantic", "Solo Piano", ["Piano"]));
	rep_list.push(new rep_listing("Liszt", "F.", "Année de Pèlerinage (2e année: Italie)", "None", "Romantic", "Solo Piano", ["Piano"]));
	rep_list.push(new rep_listing("Liszt", "F.", "Supplément, S. 162 (Gondoliera et Tarantella)", "None", "Romantic", "Solo Piano", ["Piano"]));
	rep_list.push(new rep_listing("Scriabin", "A.", "Fantasie in B minor, Op. 28", "None", "Romantic", "Solo Piano", ["Piano"]));
	rep_list.push(new rep_listing("Rachmaninoff", "S.", "Sonata in B-flat minor, (revised edition) No.2 Op. 36", "Sonatas", "Romantic", "Solo Piano", ["Piano"]));
	rep_list.push(new rep_listing("Poulenc", "F.", "Improvisation No. 13 in A minor", "None", "Romantic", "Solo Piano", ["Piano"]));
	rep_list.push(new rep_listing("Szymanowski", "K.", "Prelude in B minor, Op. 1 No. 1", "Preludes", "Romantic", "Solo Piano", ["Piano"]));
	rep_list.push(new rep_listing("Debussy", "C.", "Images Book I, L. 110  (1905)", "None", "Impressionist", "Solo Piano", ["Piano"]));
	rep_list.push(new rep_listing("Debussy", "C.", "L’isle joyeuse, L. 106  (1904)", "None", "Impressionist", "Solo Piano", ["Piano"]));
	rep_list.push(new rep_listing("Ravel", "M.", "III. Scarbo", "Gaspard de la nuit (1908)", "Impressionist", "Solo Piano", ["Piano"]));
	rep_list.push(new rep_listing("Leighton", "Kenneth", "V. Presto Con Bravura", "Five Studies for Piano, Op. 22", "20th C.", "Solo Piano", ["Piano"]));
	rep_list.push(new rep_listing("Morel", "Francois", "Etude de Sonorite No. 2", "Etudes", "20th C.", "Solo Piano", ["Piano"]));
	rep_list.push(new rep_listing("Messiaen", "Olivier", "XVI. Regard des prophètes, des bergers et des mages", "Vingt Regards sur l’enfant-Jésus", "20th C.", "Solo Piano", ["Piano"]));
	rep_list.push(new rep_listing("Bacewicz", "Grayzna", "Piano Sonata No. 2", "Sonatas", "20th C.", "Solo Piano", ["Piano"]));
	rep_list.push(new rep_listing("Hamelin", "M.-A.", "Etude No. 11 O’maggio a Domenico Scarlatti", "Etudes", "20th C.", "Solo Piano", ["Piano"]));
	rep_list.push(new rep_listing("Crumb", "George", "XI. Dream Images (Gemini)", "Makrokosmos", "20th C.", "Solo Piano", ["Piano"]));
	rep_list.push(new rep_listing("Schwantner", "Joseph", "Kindertodeslied Veiled Autumn", "None", "20th C.", "Solo Piano", ["Piano"]));
	rep_list.push(new rep_listing("Hindemith", "Paul", "Praludium", "Ludus Tonalis", "20th C.", "Solo Piano", ["Piano"]));
	rep_list.push(new rep_listing("Hindemith", "Paul", "XIV. Interludium", "Ludus Tonalis", "20th C.", "Solo Piano", ["Piano"]));
	rep_list.push(new rep_listing("Vanderbeek", "Conner", "VI. Half Empty", "9 Pieces for Piano and Electronics", "Contemporary", "Solo Piano", ["Piano"]));
	
	rep_list.push(new rep_listing("Chopin", "F.", "Concerto No. 1 in E minor", "None", "Romantic", "Concerto", ["Piano"]));
	rep_list.push(new rep_listing("Mozart", "W.A.", "Concerto No. 23 in A major, K. 488", "None", "Classical", "Concerto", ["Piano"]));
	rep_list.push(new rep_listing("Mozart", "W.A.", "Concerto No. 14 in E-flat major, K. 449", "None", "Classical", "Concerto", ["Piano"]));
	rep_list.push(new rep_listing("Mozart", "W.A.", "Concerto No. 27 in B-flat major, K. 595", "None", "Classical", "Concerto", ["Piano"]));
	rep_list.push(new rep_listing("Liszt", "F.", "Totentanz, S. 126", "None", "Romantic", "Concerto", ["Piano"]));
	rep_list.push(new rep_listing("Gershwin", "G.", "Rhapsody in Blue", "None", "20th C.", "Concerto", ["Piano"]));
	rep_list.push(new rep_listing("Prokofiev", "S.", "Concerto No. 3 in C major", "None", "20th C.", "Concerto", ["Piano"]));
	rep_list.push(new rep_listing("Saint-Saens", "C.", "Wedding Cake", "None", "Romantic", "Concerto", ["Piano"]));

	rep_list.push(new rep_listing("Brahms", "J.", "Cello Sonata No. 1 in E minor", "Cello Sonatas", "Romantic", "Chamber", ["Piano"]));
	rep_list.push(new rep_listing("Brahms", "J.", "Cello Sonata No. 2 in F major, Op. 99", "Cello Sonatas", "Romantic", "Chamber", ["Piano"]));
	rep_list.push(new rep_listing("Debussy", "C.", "Sonata for Cello and Piano", "Cello Sonatas", "Impressionist", "Chamber", ["Piano"]));
	rep_list.push(new rep_listing("Bach", "J.S.", "Sonata No. 2 in D major for Viola da Gamba", "Gamba Sonatas", "Baroque", "Chamber", ["Piano"]));
	rep_list.push(new rep_listing("Bowen", "York", "Phantasy for Viola and Piano", "Viola Sonatas", "20th C.", "Chamber", ["Piano"]));
	rep_list.push(new rep_listing("Jacob", "Gordon", "Sonata for Viola and Piano", "Viola Sonatas", "20th C.", "Chamber", ["Piano"]));
	rep_list.push(new rep_listing("Hindemith", "Paul", "Sonata for Viola and Piano Op. 11 No. 4", "Viola Sonatas", "20th C.", "Chamber", ["Piano"]));
	rep_list.push(new rep_listing("Tailleferre", "Germaine", "Berceuse", "Violin Pieces", "20th C", "Chamber", ["Piano"]));
	rep_list.push(new rep_listing("Kreisler", "Fritz", "Viennese Rhapsodic Fantasietta", "Violin Pieces", "20th C", "Chamber", ["Piano"]));
	rep_list.push(new rep_listing("Kreisler", "Fritz", "Liebesfreud", "Violin Pieces", "20th C", "Chamber", ["Piano"]));
	rep_list.push(new rep_listing("Mozart", "W.A.", "Violin Sonata No. 26 in B-flat major, K. 278", "Violin Sonatas", "Classical", "Chamber", ["Piano"]));
	rep_list.push(new rep_listing("Mozart", "W.A.", "Violin Sonata No. 32 in B-flat major, K. 454", "Violin Sonatas", "Classical", "Chamber", ["Piano"]));
	rep_list.push(new rep_listing("Mozart", "W.A.", "Violin Sonata in E-flat major, K. 380", "Violin Sonatas", "Classical", "Chamber", ["Piano"]));
	rep_list.push(new rep_listing("Ravel", "M.", "Violin Sonata No. 2 in G major", "Violin Sonatas", "Impressionist", "Chamber", ["Piano"]));
	rep_list.push(new rep_listing("Beethoven", "L.V.", "Violin Sonata No. 1 in D major, Op. 12", "Violin Sonatas", "Classical", "Chamber", ["Piano"]));
	rep_list.push(new rep_listing("Beethoven", "L.V.", "Violin Sonata No. 7 in C minor, Op. 20", "Violin Sonatas", "Classical", "Chamber", ["Piano"]));
	rep_list.push(new rep_listing("Beethoven", "L.V.", "Violin Sonata No. 8 in G , Op. 47", "Violin Sonatas", "Classical", "Chamber", ["Piano"]));
	rep_list.push(new rep_listing("Beethoven", "L.V.", "Violin Sonata No. 9 in A , 'Kreutzer'", "Violin Sonatas", "Classical", "Chamber", ["Piano"]));
	rep_list.push(new rep_listing("Brahms", "J.", "Sonata for Piano and Violin No. 1 in G major", "Violin Sonatas", "Romantic", "Chamber", ["Piano"]));
	rep_list.push(new rep_listing("Brahms", "J.", "Sonata for Piano and Violin No. 2 in A major", "Violin Sonatas", "Romantic", "Chamber", ["Piano"]));
	rep_list.push(new rep_listing("Brahms", "J.", "Sonata for Piano and Violin No. 3 in D minor", "Violin Sonatas", "Romantic", "Chamber", ["Piano"]));
	rep_list.push(new rep_listing("Stravinsky", "I.", "Suite Italienne", "Violin Pieces", "20th C.", "Chamber", ["Piano"]));
	rep_list.push(new rep_listing("Korngold", "E.W.", "Much Ado About Nothing", "Violin Pieces", "20th C.", "Chamber", ["Piano"]));
	rep_list.push(new rep_listing("Elgar", "E.", "Violin Sonata in E minor", "Violin Sonatas", "Romantic", "Chamber", ["Piano"]));
	rep_list.push(new rep_listing("Prokofiev", "S.", "Violin Sonata No. 1 in F minor", "Violin Sonatas", "Romantic.", "Chamber", ["Piano"]));
	rep_list.push(new rep_listing("Franck", "C.", "Violin Sonata (1886)", "Violin Sonatas", "Romantic", "Chamber", ["Piano"]));
	rep_list.push(new rep_listing("Chausson", "E.", "Poeme Op. 25", "Violin Pieces", "Romantic", "Chamber", ["Piano"]));
	rep_list.push(new rep_listing("Debussy", "C.", "Beau Soir", "Violin Pieces", "Impressionist.", "Chamber", ["Piano"]));
	rep_list.push(new rep_listing("Bartok", "B.", "Romanian Folk Dances", "Violin Pieces", "20th C.", "Chamber", ["Piano"]));
	rep_list.push(new rep_listing("Bartok", "B.", "Rhapsody No. 1", "Violin Pieces", "20th C.", "Chamber", ["Piano"]));
	rep_list.push(new rep_listing("Thomas", "Augusta Read", "Chant for Alto Saxophone and Piano", "Other Duo Pieces", "21st C.", "Chamber", ["Piano"]));
	rep_list.push(new rep_listing("Bach", "J.S.", "Sonata for Violin & Harpsichord No. 1 in B minor", "Violin Sonatas", "Baroque", "Chamber", ["Piano"]));
	rep_list.push(new rep_listing("Bach", "J.S.", "Sonata for Violin & Harpsichord No. 4 in C minor", "Violin Sonatas", "Baroque", "Chamber", ["Piano"]));

	rep_list.push(new rep_listing("Beethoven", "L.V.", "Piano Trio No. 5 in D major, Op. 70 No. 1", "Piano Trios", "Classical", "Chamber", ["Piano"]));
	rep_list.push(new rep_listing("Beethoven", "L.V.", "Piano Trio in C minor, Op. 1 No. 3", "Piano Trios", "Classical", "Chamber", ["Piano"]));
	rep_list.push(new rep_listing("Schumann", "Clara", "Piano Trio in G minor, Op. 17", "Piano Trios", "Classical", "Chamber", ["Piano"]));
	rep_list.push(new rep_listing("Dvorak", "A.", "Dumky-Trio Op. 90", "Piano Trios", "Romantic", "Chamber", ["Piano"]));
	rep_list.push(new rep_listing("Brahms", "J.", "Trio No. 2 in C major, Op. 87", "Piano Trios", "Romantic", "Chamber", ["Piano"]));
	rep_list.push(new rep_listing("Mendelssohn", "F.", "Trio No. 2 in D minor, Op. 49", "Piano Trios", "Romantic", "Chamber", ["Piano"]));
	rep_list.push(new rep_listing("Haydn", "J.", "Piano Trio in G major, Hob. XV / 25", "Piano Trios", "Romantic", "Chamber", ["Piano"]));
	rep_list.push(new rep_listing("Shostakovich", "D.", "Piano Trio in E minor: II. Allegro con brio", "Piano Trios", "20th C.", "Chamber", ["Piano"]));
	rep_list.push(new rep_listing("Piazzolla", "A.", "Primavery Portena", "Piano Trios", "21st C.", "Chamber", ["Piano"]));
	rep_list.push(new rep_listing("Piazzolla", "A.", "Verano Porteno", "Piano Trios", "21st C.", "Chamber", ["Piano"]));
	
	rep_list.push(new rep_listing("Mozart", "W.A.", "Piano Quartet No. 1 in G minor, K. 478", "Piano Quartets", "Classical", "Chamber", ["Piano"]));
	rep_list.push(new rep_listing("Mozart", "W.A.", "Piano Quartet No. 1 in G minor, K. 478", "Piano Quartets", "Classical", "Chamber", ["Piano"]));
	rep_list.push(new rep_listing("Mozart", "W.A.", "Piano Quartet No. 2 in E-flat major K. 493", "Piano Quartets", "Classical", "Chamber", ["Piano"]));
	rep_list.push(new rep_listing("Messiaen", "Olivier", "Quatour Pour Le Fin Du Temps", "Quartets", "20th C.", "Chamber", ["Piano"]));
	rep_list.push(new rep_listing("Faure", "G.", "Piano Quartet No. 1 in C minor, Op. 15", "Piano Quartets", "20th C.", "Chamber", ["Piano"]));

	rep_list.push(new rep_listing("Schumann", "R.", "Piano Quintet in E-flat major, Op. 44", "Piano Quintets", "Romantic", "Chamber", ["Piano"]));
	rep_list.push(new rep_listing("Brahms", "J.", "Piano Quintet in F minor, Op. 34", "Piano Quintets", "Romantic", "Chamber", ["Piano"]));
	rep_list.push(new rep_listing("Dvorak", "A.", "Piano Quintet No. 2 in A major, Op. 81", "Piano Quintets", "Romantic", "Chamber", ["Piano"]));
	rep_list.push(new rep_listing("Beach", "Amy", "Piano Quintet Op.67 II. Adagio", "Piano Quintets", "20th C.", "Chamber", ["Piano"]));

	// var rep_html = "";
	// rep_html = "<table><tr><td><b>Composer</b></td><td><b>Title</b></td><td><b>Collection</b></td><td><b>Period</b></td><td><b>Configuration</b></td></tr>";
	// for(i = 0; i< rep_list.length; i++) {
	// 	rep_html += "<tr>";
	// 	rep_html += "<td>" + rep_list[i].composer_first_name + " " + rep_list[i].composer_last_name + "</td>";
	// 	rep_html += "<td>" + rep_list[i].title + "</td>";
	// 	rep_html += "<td>" + rep_list[i].collection + "</td>";
	// 	rep_html += "<td>" + rep_list[i].period + "</td>";
	// 	rep_html += "<td>" + rep_list[i].configuration + "</td>";
	// 	rep_html += "</tr>";
	// }
	// rep_html += "</table>";




	// rep_list2 = [];
	// for(i = 0; i < rep_list.length; i++) {
	// 	if (rep_list[i].configuration == "Solo Piano") {
	// 		rep_list2.push(rep_list[i]);
	// 	}
	// }

	// rep_list = rep_list2;


	// rep_list.sort(function(a, b) {
	// 	var x = a.title.toLowerCase();
	// 	var y = b.title.toLowerCase();
	// 	if (x < y) { return -1; }
	// 	if (x > y) { return 1; }
	// 	return 0;
	// });

	// rep_list.sort(function(a, b) {
	// 	var x = a.composer_last_name.toLowerCase() + a.composer_first_name.toLowerCase();
	// 	var y = b.composer_last_name.toLowerCase() + a.composer_first_name.toLowerCase();
	// 	if (x < y) { return -1; }
	// 	if (x > y) { return 1; }
	// 	return 0;
	// });

	sort_list();
	// disp_list(rep_list);

// 	var last_composer = "";
// 	for(i = 0; i < rep_list.length; i++) {
// 		var current_composer = rep_list[i].composer_first_name + " " + rep_list[i].composer_last_name;
// 		if(current_composer != last_composer) {
// 			rep_html += "<div><b>" + current_composer + "</b></div>";
// 		}
// 		rep_html += "<div class='indent'>" + rep_list[i].title + "</div>";
// 		last_composer = current_composer;
// 	}

// 	document.getElementById("repertoire_list").innerHTML = rep_html;
	
}

export function filter_list(field, value) {
	var filtered = [];

	for(var i = 0; i < rep_list.length; i++) {
		if (field === "configuration") {
			if (rep_list[i].configuration === value) {
				filtered.push(rep_list[i]);
			}
		} else if (field === "period") {
			if (rep_list[i].period === value) {
				filtered.push(rep_list[i]);
			}
		}
	}

	// rep_list = filtered
	disp_list(filtered)
}
