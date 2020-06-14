// import { make_disp_rep_list } from './repertoire.js';



// function move_time(player, time) {
// 	var audio_player = document.getElementById(player);
// 	audio_player.currentTime = time;
// }




// function remove_show() {
// 	document.getElementById("about").classList.add('hidden');
// }

export function load_content(content_class) {
	var contents = document.getElementsByClassName('content');
	var i;
	for(i = 0; i < contents.length; i++) {
		contents[i].classList.add('hidden');
	}

	contents = document.getElementsByClassName(content_class);

	for(i = 0; i < contents.length; i++) {
		contents[i].classList.remove('hidden');
	}

	// if (content_class === 'repertoire') {
	// 	make_disp_rep_list();
	// }
}

// function toggle_visibility(listing_id) {
// 	var listing = document.getElementById(listing_id);

// 	var was_hidden = false;

// 	 for(var i = 0; i < listing.classList.length; i++) {
// 	 	if(listing.classList[i] === 'hidden') {
// 	 		listing.classList.remove('hidden');
// 	 		was_hidden = true;
// 	 	}
// 	 }

// 	 if(!was_hidden) {
// 	 	listing.classList.add('hidden');
// 	 }
// }