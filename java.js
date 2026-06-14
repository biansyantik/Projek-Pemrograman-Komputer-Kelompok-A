// Data dummy: minimal 10 tempat di Semarang/Tembalang
const places = [
	{
		id: 'p1',
		name: 'Kafe Kopi Tembalang',
		type: 'Kafe',
		location: 'Tembalang',
		budget: 'Murah',
		atmosphere: 'Tenang',
		rating: 4.3,
		wifi: true,
		sockets: true,
		comfySeats: true,
		openLate: false,
		longStudy: true,
		description: 'Kafe kecil dengan suasana tenang, cocok untuk belajar fokus.'
	},
	{
		id: 'p2',
		name: 'Perpustakaan Kampus A',
		type: 'Perpustakaan',
		location: 'Kampus A, Tembalang',
		budget: 'Murah',
		atmosphere: 'Tenang',
		rating: 4.6,
		wifi: true,
		sockets: false,
		comfySeats: true,
		openLate: false,
		longStudy: true,
		description: 'Perpustakaan kampus dengan koleksi lengkap dan area baca nyaman.'
	},
	{
		id: 'p3',
		name: 'Cafe Study Corner',
		type: 'Kafe',
		location: 'Ungaran - Semarang',
		budget: 'Sedang',
		atmosphere: 'Sedang',
		rating: 4.2,
		wifi: true,
		sockets: true,
		comfySeats: true,
		openLate: true,
		longStudy: true,
		description: 'Ruang kafe yang ramah pelajar, banyak colokan dan WiFi stabil.'
	},
	{
		id: 'p4',
		name: 'Perpustakaan Umum Semarang',
		type: 'Perpustakaan',
		location: 'Kota Semarang',
		budget: 'Murah',
		atmosphere: 'Tenang',
		rating: 4.0,
		wifi: false,
		sockets: false,
		comfySeats: false,
		openLate: false,
		longStudy: true,
		description: 'Tempat baca umum cocok buat review materi dan riset.'
	},
	{
		id: 'p5',
		name: 'Kafe Urban Brew',
		type: 'Kafe',
		location: 'Kawasan Kampus',
		budget: 'Sedang',
		atmosphere: 'Ramai',
		rating: 4.1,
		wifi: true,
		sockets: true,
		comfySeats: false,
		openLate: true,
		longStudy: false,
		description: 'Kafe modern, cocok buat diskusi kelompok dan nongkrong.'
	},
	{
		id: 'p6',
		name: 'Study Hub Tembalang',
		type: 'Kafe',
		location: 'Tembalang',
		budget: 'Murah',
		atmosphere: 'Sedang',
		rating: 4.4,
		wifi: true,
		sockets: true,
		comfySeats: true,
		openLate: true,
		longStudy: true,
		description: 'Cozy spot untuk belajar lama dengan fasilitas memadai.'
	},
	{
		id: 'p7',
		name: 'Corner Library',
		type: 'Perpustakaan',
		location: 'Tembalang',
		budget: 'Sedang',
		atmosphere: 'Sedang',
		rating: 4.0,
		wifi: true,
		sockets: true,
		comfySeats: true,
		openLate: false,
		longStudy: true,
		description: 'Perpustakaan kecil dengan area diskusi dan WiFi.'
	},
	{
		id: 'p8',
		name: 'Late Night Cafe',
		type: 'Kafe',
		location: 'Kota Semarang',
		budget: 'Mahal',
		atmosphere: 'Ramai',
		rating: 4.5,
		wifi: true,
		sockets: true,
		comfySeats: true,
		openLate: true,
		longStudy: false,
		description: 'Buka sampai larut, suasana energik cocok untuk brainstorming.'
	},
	{
		id: 'p9',
		name: 'Green Study Lounge',
		type: 'Kafe',
		location: 'Tembalang',
		budget: 'Sedang',
		atmosphere: 'Tenang',
		rating: 4.7,
		wifi: true,
		sockets: true,
		comfySeats: true,
		openLate: false,
		longStudy: true,
		description: 'Ruang hijau, tenang, dan nyaman untuk sesi belajar panjang.'
	},
	{
		id: 'p10',
		name: 'Perpus Mini Teknik',
		type: 'Perpustakaan',
		location: 'Fakultas Teknik, Tembalang',
		budget: 'Murah',
		atmosphere: 'Sedang',
		rating: 3.9,
		wifi: false,
		sockets: true,
		comfySeats: false,
		openLate: false,
		longStudy: true,
		description: 'Perpustakaan fakultas dengan akses mudah untuk mahasiswa teknik.'
	}
];

// Elemen DOM
const startBtn = document.getElementById('startBtn');
const onboarding = document.getElementById('onboarding');
const formSection = document.getElementById('formSection');
const resultsSection = document.getElementById('resultsSection');
const resultsList = document.getElementById('resultsList');
const detailSection = document.getElementById('detailSection');
const detailContent = document.getElementById('detailContent');
const backToResults = document.getElementById('backToResults');
const favoritesList = document.getElementById('favoritesList');
const prefForm = document.getElementById('prefForm');
const resetBtn = document.getElementById('resetBtn');

let favorites = loadFavorites(); // load favorites dari localStorage

// Event listeners
startBtn.addEventListener('click', () => {
	onboarding.classList.add('hidden');
	formSection.classList.remove('hidden');
	resultsSection.classList.add('hidden');
	detailSection.classList.add('hidden');
});
prefForm.addEventListener('submit', (e) => {
	e.preventDefault();
	const pref = readPreferences();
	const scored = calculateScores(pref, places);
	renderResults(scored);
	formSection.classList.add('hidden');
	resultsSection.classList.remove('hidden');
});
resetBtn.addEventListener('click', () => prefForm.reset());
backToResults.addEventListener('click', () => {
	detailSection.classList.add('hidden');
	resultsSection.classList.remove('hidden');
});

// Baca preferensi dari form
function readPreferences(){
	return {
		type: document.getElementById('type').value,
		budget: document.getElementById('budget').value,
		atmosphere: document.getElementById('atmosphere').value,
		wifi: document.getElementById('wifi').checked,
		sockets: document.getElementById('sockets').checked,
		comfy: document.getElementById('comfy').checked,
		openLate: document.getElementById('openLate').checked,
		longStudy: document.getElementById('longStudy').checked
	};
}

// Hitung skor berbobot untuk setiap tempat
function calculateScores(pref, data){
	// bobot poin sesuai spesifikasi
	const weights = {
		price: 20,
		atmosphere: 20,
		wifi: 15,
		sockets: 15,
		comfy: 10,
		openLate: 10,
		longStudy: 10
	};

	const results = data.map(place => {
		let score = 0;

		// Kesesuaian harga (20)
		if(pref.budget === 'Semua' || pref.budget === place.budget) score += weights.price;
		else if(pref.budget === 'Murah' && place.budget === 'Sedang') score += weights.price * 0.5;
		else if(pref.budget === 'Sedang' && (place.budget === 'Murah' || place.budget === 'Mahal')) score += weights.price * 0.5;
		else if(pref.budget === 'Mahal' && place.budget === 'Sedang') score += weights.price * 0.5;

		// Kesesuaian suasana (20)
		if(pref.atmosphere === 'Semua' || pref.atmosphere === place.atmosphere) score += weights.atmosphere;
		else if((pref.atmosphere === 'Tenang' && place.atmosphere === 'Sedang') || (pref.atmosphere === 'Ramai' && place.atmosphere === 'Sedang')) score += weights.atmosphere * 0.5;

		// Fasilitas boolean (wifi, sockets, comfy, openLate, longStudy)
		if(!pref.wifi || place.wifi) score += weights.wifi;
		if(!pref.sockets || place.sockets) score += weights.sockets;
		if(!pref.comfy || place.comfySeats) score += weights.comfy;
		if(!pref.openLate || place.openLate) score += weights.openLate;
		if(!pref.longStudy || place.longStudy) score += weights.longStudy;

		// Jika pengguna memilih jenis tempat, beri penalti jika beda
		if(pref.type !== 'Semua' && pref.type !== place.type){
			// turunkan skor 15% jika jenis beda
			score = score * 0.85;
		}

		// Pastikan skor tidak melebihi 100
		if(score > 100) score = 100;

		const percent = Math.round((score / 100) * 100); // persen kecocokan

		return {...place, score: Math.round(score), percent};
	});

	// Sort dari score tertinggi ke terendah
	results.sort((a,b) => b.score - a.score);
	return results;
}

// Render daftar hasil
function renderResults(list){
	resultsList.innerHTML = '';
	if(list.length === 0){
		resultsList.innerHTML = '<p>Tidak ada hasil.</p>';
		return;
	}
	list.forEach(item => {
		const card = document.createElement('div');
		card.className = 'cardItem';
		card.innerHTML = `
			<h4>${item.name}</h4>
			<div class="meta">${item.type} • ${item.location} • Rating: ${item.rating}</div>
			<div class="meta">Budget: ${item.budget} • Suasana: ${item.atmosphere}</div>
			<div class="cardFooter">
				<span class="badge ${badgeClass(item.score)}">${badgeText(item.score)}</span>
				<div>
					<button class="btn iconBtn" data-id="${item.id}" data-action="detail">Lihat Detail</button>
					<button class="btn iconBtn" data-id="${item.id}" data-action="fav">${isFavorite(item.id)? 'Saved' : 'Simpan'}</button>
				</div>
			</div>
		`;
		// event delegation via buttons
		card.querySelectorAll('button').forEach(b=>{
			b.addEventListener('click', (e)=>{
				const id = e.currentTarget.getAttribute('data-id');
				const action = e.currentTarget.getAttribute('data-action');
				if(action === 'detail') showDetail(id);
				if(action === 'fav') toggleFavorite(id);
			});
		});
		resultsList.appendChild(card);
	});
	renderFavorites(); // update favorites panel
}

// Tampilkan detail tempat
function showDetail(id){
	const place = places.find(p=>p.id===id);
	if(!place) return;
	detailContent.innerHTML = `
		<h3>${place.name}</h3>
		<div class="meta">${place.type} • ${place.location} • Rating: ${place.rating}</div>
		<p>${place.description}</p>
		<h4>Fasilitas</h4>
		<ul>
			<li>WiFi: ${place.wifi ? 'Ada' : 'Tidak'}</li>
			<li>Colokan: ${place.sockets ? 'Ada' : 'Tidak'}</li>
			<li>Kursi nyaman: ${place.comfySeats ? 'Ya' : 'Tidak'}</li>
			<li>Buka sampai malam: ${place.openLate ? 'Ya' : 'Tidak'}</li>
			<li>Cocok belajar lama: ${place.longStudy ? 'Ya' : 'Tidak'}</li>
		</ul>
		<button class="btn" id="favDetailBtn">${isFavorite(id)? 'Hapus dari Favorit' : 'Simpan ke Favorit'}</button>
	`;
	// hubungkan tombol favorit di detail
	document.getElementById('favDetailBtn').addEventListener('click', ()=>{
		toggleFavorite(id);
		// update label
		document.getElementById('favDetailBtn').textContent = isFavorite(id)? 'Hapus dari Favorit' : 'Simpan ke Favorit';
	});
	resultsSection.classList.add('hidden');
	detailSection.classList.remove('hidden');
}

// Badge helper
function badgeClass(score){
	if(score >= 80) return 'best';
	if(score >= 50) return 'ok';
	return 'low';
}
function badgeText(score){
	if(score >= 80) return 'Sangat Direkomendasikan';
	if(score >= 50) return 'Cukup Sesuai';
	return 'Kurang Sesuai';
}

// Favorit: localStorage
function loadFavorites(){
	try{
		const raw = localStorage.getItem('fav_places_v1');
		return raw ? JSON.parse(raw) : [];
	}catch(e){
		return [];
	}
}
function saveFavorites(){
	localStorage.setItem('fav_places_v1', JSON.stringify(favorites));
}
function isFavorite(id){
	return favorites.includes(id);
}
function toggleFavorite(id){
	if(isFavorite(id)){
		favorites = favorites.filter(x=>x!==id);
	}else{
		favorites.push(id);
	}
	saveFavorites();
	renderFavorites();
	renderResultsAfterFavToggle(); // update labels in results
}
// Render daftar favorit
function renderFavorites(){
	favoritesList.innerHTML = '';
	if(favorites.length === 0){
		favoritesList.innerHTML = '<p>Belum ada tempat tersimpan.</p>';
		return;
	}
	favorites.forEach(id=>{
		const p = places.find(x=>x.id===id);
		if(!p) return;
		const card = document.createElement('div');
		card.className = 'cardItem';
		card.innerHTML = `
			<h4>${p.name}</h4>
			<div class="meta">${p.type} • ${p.location} • Rating: ${p.rating}</div>
			<div class="cardFooter">
				<button class="btn iconBtn" data-id="${p.id}" data-action="detail">Lihat Detail</button>
				<button class="btn iconBtn" data-id="${p.id}" data-action="remove">Hapus</button>
			</div>
		`;
		card.querySelectorAll('button').forEach(b=>{
			b.addEventListener('click', (e)=>{
				const id = e.currentTarget.getAttribute('data-id');
				const action = e.currentTarget.getAttribute('data-action');
				if(action === 'detail') showDetail(id);
				if(action === 'remove') { toggleFavorite(id); }
			});
		});
		favoritesList.appendChild(card);
	});
}

// Ketika toggle favorit, perbarui label tombol di hasil
function renderResultsAfterFavToggle(){
	// Simple re-render of results if visible
	if(!resultsSection.classList.contains('hidden')){
		// find currently displayed list from DOM and rebuild by reusing last searched scores
		// For simplicity, recalc using default form values if any results exist
		// Attempt to read current results from DOM: if no results, nothing to do
		const any = resultsList.children.length;
		if(any){
			// We cannot retrieve previous scored list easily, so re-submit form if available
			// If form was filled, re-run with current preferences
			// Otherwise, leave as-is.
			try{
				const pref = readPreferences();
				const scored = calculateScores(pref, places);
				renderResults(scored);
			}catch(e){}
		}
	}
}

// Inisialisasi: tampilkan favorit ketika halaman dibuka
document.addEventListener('DOMContentLoaded', ()=>{
	renderFavorites();
});
