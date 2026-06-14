// ===================================
// DATA DUMMY - 10+ Tempat di Semarang
// ===================================

const places = [
	{
		id: 1,
		name: "Kafe Hijau Tembalang",
		type: "Kafe",
		location: "Tembalang",
		budget: "Sedang",
		suasana: "Tenang",
		rating: 4.5,
		wifi: true,
		plug: true,
		comfyChair: true,
		openLate: true,
		longStudy: true,
		description: "Kafe nyaman dengan suasana tenang dan WiFi stabil. Cocok untuk nugas panjang dengan kursi ergonomis."
	},
	{
		id: 2,
		name: "Perpus Universitas",
		type: "Perpustakaan",
		location: "Tembalang",
		budget: "Murah",
		suasana: "Tenang",
		rating: 4.7,
		wifi: true,
		plug: false,
		comfyChair: true,
		openLate: false,
		longStudy: true,
		description: "Perpustakaan kampus dengan koleksi lengkap dan kursi belajar nyaman. Suasana sangat kondusif untuk fokus belajar."
	},
	{
		id: 3,
		name: "Kopi Santai",
		type: "Kafe",
		location: "Semarang Tengah",
		budget: "Murah",
		suasana: "Ramai",
		rating: 4.0,
		wifi: true,
		plug: true,
		comfyChair: false,
		openLate: true,
		longStudy: false,
		description: "Kafe populer dengan harga terjangkau dan WiFi gratis. Suasana hidup namun kadang ramai untuk konsentrasi."
	},
	{
		id: 4,
		name: "Study Hub Premium",
		type: "Kafe",
		location: "Tembalang",
		budget: "Mahal",
		suasana: "Tenang",
		rating: 4.8,
		wifi: true,
		plug: true,
		comfyChair: true,
		openLate: true,
		longStudy: true,
		description: "Ruang belajar premium dengan semua fasilitas lengkap. Fokus pada kenyamanan dan efisiensi belajar. Kursi gaming nyaman."
	},
	{
		id: 5,
		name: "Perpustakaan Kota Semarang",
		type: "Perpustakaan",
		location: "Semarang Kota",
		budget: "Murah",
		suasana: "Sedang",
		rating: 4.3,
		wifi: false,
		plug: true,
		comfyChair: false,
		openLate: false,
		longStudy: false,
		description: "Perpustakaan umum dengan ruang baca yang luas dan koleksi buku lengkap. Buka hingga sore saja."
	},
	{
		id: 6,
		name: "Kafe Kopi Pagi",
		type: "Kafe",
		location: "Ungaran",
		budget: "Sedang",
		suasana: "Sedang",
		rating: 4.1,
		wifi: true,
		plug: false,
		comfyChair: true,
		openLate: false,
		longStudy: true,
		description: "Kafe dengan menu lengkap dan suasana santai. Cocok untuk belajar siang hari bersama teman."
	},
	{
		id: 7,
		name: "Pojok Belajar Mahasiswa",
		type: "Kafe",
		location: "Tembalang",
		budget: "Murah",
		suasana: "Tenang",
		rating: 4.4,
		wifi: true,
		plug: true,
		comfyChair: false,
		openLate: false,
		longStudy: true,
		description: "Tempat kecil khusus mahasiswa dengan suasana kondusif. Harga terjangkau, WiFi stabil, banyak stopkontak."
	},
	{
		id: 8,
		name: "Library Corner Modern",
		type: "Perpustakaan",
		location: "Semarang Timur",
		budget: "Sedang",
		suasana: "Tenang",
		rating: 4.6,
		wifi: true,
		plug: true,
		comfyChair: true,
		openLate: false,
		longStudy: true,
		description: "Perpustakaan modern dengan area diskusi dan silent room. Cocok untuk mahasiswa yang butuh fokus tinggi."
	},
	{
		id: 9,
		name: "Kopi Malam Semarang",
		type: "Kafe",
		location: "Semarang Barat",
		budget: "Mahal",
		suasana: "Ramai",
		rating: 4.2,
		wifi: true,
		plug: true,
		comfyChair: true,
		openLate: true,
		longStudy: false,
		description: "Kafe buka sampai larut dengan suasana hidup dan nyaman. Cocok untuk diskusi kelompok atau santai."
	},
	{
		id: 10,
		name: "Ruang Publik Kampus",
		type: "Perpustakaan",
		location: "Tembalang",
		budget: "Murah",
		suasana: "Sedang",
		rating: 4.0,
		wifi: false,
		plug: true,
		comfyChair: true,
		openLate: false,
		longStudy: true,
		description: "Ruang publik terbuka di dalam kampus. Gratis, banyak kursi nyaman, stopkontak tersedia di banyak tempat."
	},
	{
		id: 11,
		name: "Warung Kopi Tempo Dulu",
		type: "Kafe",
		location: "Semarang Pusat",
		budget: "Murah",
		suasana: "Tenang",
		rating: 3.9,
		wifi: true,
		plug: true,
		comfyChair: true,
		openLate: false,
		longStudy: true,
		description: "Warung kopi tradisional dengan harga super terjangkau. Nyaman untuk belajar dalam waktu lama."
	}
];

// ===============================
// STATE MANAGEMENT
// ===============================

// Objek untuk menyimpan preferensi pengguna saat ini
let currentPreferences = {
	type: "Semua",
	budget: "Semua",
	suasana: "Semua",
	wifi: false,
	plug: false,
	comfyChair: false,
	openLate: false,
	longStudy: false
};

// Variabel untuk menyimpan hasil rekomendasi saat ini
let currentResults = [];

// Variabel untuk menyimpan tempat yang sedang dilihat detail
let currentDetailPlace = null;

// ===============================
// UTILITY FUNCTIONS
// ===============================

/**
 * Mengambil daftar tempat favorit dari localStorage
 * @returns {Array} Array ID tempat favorit
 */
function getFavorites() {
	const saved = localStorage.getItem("favoritesTempat");
	return saved ? JSON.parse(saved) : [];
}

/**
 * Menyimpan daftar favorit ke localStorage
 * @param {Array} favorites - Array ID tempat favorit
 */
function saveFavorites(favorites) {
	localStorage.setItem("favoritesTempat", JSON.stringify(favorites));
}

/**
 * Menambahkan tempat ke daftar favorit
 * @param {Number} placeId - ID tempat
 */
function addToFavorites(placeId) {
	const favorites = getFavorites();
	if (!favorites.includes(placeId)) {
		favorites.push(placeId);
		saveFavorites(favorites);
	}
}

/**
 * Menghapus tempat dari daftar favorit
 * @param {Number} placeId - ID tempat
 */
function removeFromFavorites(placeId) {
	let favorites = getFavorites();
	favorites = favorites.filter(id => id !== placeId);
	saveFavorites(favorites);
}

/**
 * Mengecek apakah tempat ada di daftar favorit
 * @param {Number} placeId - ID tempat
 * @returns {Boolean} true jika ada di favorit
 */
function isFavorite(placeId) {
	return getFavorites().includes(placeId);
}

/**
 * Format rating dengan bintang
 * @param {Number} rating - Rating tempat (0-5)
 * @returns {String} Format rating dengan emoji bintang
 */
function formatRating(rating) {
	const fullStars = Math.floor(rating);
	const hasHalfStar = rating % 1 !== 0;
	let stars = "⭐".repeat(fullStars);
	if (hasHalfStar) stars += "✨";
	return `${stars} ${rating}`;
}

/**
 * Menentukan badge rekomendasi berdasarkan skor
 * @param {Number} score - Skor kecocokan (0-100)
 * @returns {Object} Object dengan class dan text badge
 */
function getRecommendationBadge(score) {
	if (score >= 80) {
		return { class: "badge-excellent", text: "✅ Sangat Direkomendasikan" };
	} else if (score >= 60) {
		return { class: "badge-good", text: "👍 Cukup Sesuai" };
	} else if (score >= 40) {
		return { class: "badge-fair", text: "⚠️ Cukup Sesuai" };
	} else {
		return { class: "badge-poor", text: "❌ Kurang Sesuai" };
	}
}

// ===============================
// SISTEM PERHITUNGAN BOBOT / SKOR
// ===============================

/**
 * Menghitung skor kecocokan tempat dengan preferensi pengguna
 * Rumus: Total poin maksimal 100
 * - Kesesuaian budget: 20 poin
 * - Kesesuaian suasana: 20 poin
 * - WiFi: 15 poin
 * - Colokan: 15 poin
 * - Kursi nyaman: 10 poin
 * - Buka malam: 10 poin
 * - Cocok belajar lama: 10 poin
 *
 * @param {Object} place - Data tempat
 * @param {Object} preferences - Preferensi pengguna
 * @returns {Number} Skor kecocokan (0-100)
 */
function calculateScore(place, preferences) {
	const weights = {
		budget: 18,
		suasana: 18,
		wifi: 12,
		plug: 12,
		comfyChair: 8,
		openLate: 8,
		longStudy: 8,
		ac: 8,
		area: 8
	};

	let score = 0;

	if (preferences.budget !== "Semua") {
		if (place.budget === preferences.budget) {
			score += weights.budget;
		}
	} else {
		score += weights.budget;
	}

	if (preferences.suasana !== "Semua") {
		if (place.suasana === preferences.suasana) {
			score += weights.suasana;
		}
	} else {
		score += weights.suasana;
	}

	if (!preferences.wifi || place.wifi) {
		score += weights.wifi;
	}

	if (!preferences.plug || place.plug) {
		score += weights.plug;
	}

	if (!preferences.comfyChair || place.comfyChair) {
		score += weights.comfyChair;
	}

	if (!preferences.openLate || place.openLate) {
		score += weights.openLate;
	}

	if (!preferences.longStudy || place.longStudy) {
		score += weights.longStudy;
	}

	if (preferences.ac === "Semua") {
		score += weights.ac;
	} else if (preferences.ac === "AC" && place.ac) {
		score += weights.ac;
	} else if (preferences.ac === "Non AC" && !place.ac) {
		score += weights.ac;
	}

	if (preferences.area === "Semua") {
		score += weights.area;
	} else if (place.area === preferences.area) {
		score += weights.area;
	} else if (preferences.area === "Indoor" && place.area === "Indoor & Outdoor") {
		score += weights.area;
	} else if (preferences.area === "Outdoor" && place.area === "Indoor & Outdoor") {
		score += weights.area;
	}

	return Math.min(score, 100);
}

/**
 * Menjalankan logika pencarian dan scoring
 * @returns {Array} Array tempat yang diurutkan dari skor tertinggi
 */
function searchAndScore() {
	// Simpan preferensi saat ini
	currentPreferences = {
		type: document.getElementById("type").value,
		budget: document.getElementById("budget").value,
		suasana: document.getElementById("suasana").value,
		ac: document.getElementById("ac").value,
		area: document.getElementById("area").value,
		wifi: document.getElementById("wifi").checked,
		plug: document.getElementById("plug").checked,
		comfyChair: document.getElementById("chair").checked,
		openLate: document.getElementById("lateOpen").checked,
		longStudy: document.getElementById("longStudy").checked
	};

	// Filter tempat berdasarkan tipe
	let filtered = places;
	if (currentPreferences.type !== "Semua") {
		filtered = places.filter(p => p.type === currentPreferences.type);
	}

	// Hitung skor untuk setiap tempat
	const withScores = filtered.map(place => ({
		...place,
		score: calculateScore(place, currentPreferences)
	}));

	// Urutkan dari skor tertinggi
	withScores.sort((a, b) => b.score - a.score);

	return withScores;
}

// ===============================
// RENDERING FUNCTIONS
// ===============================

/**
 * Membuat HTML card tempat untuk ditampilkan di hasil rekomendasi
 * @param {Object} place - Data tempat dengan property score
 * @returns {String} HTML string
 */
function createPlaceCard(place) {
	const favorites = getFavorites();
	const isSaved = favorites.includes(place.id);
	const badge = getRecommendationBadge(place.score);

	const html = `
		<div class="place-card" id="place-${place.id}">
			<button class="favorite-btn ${isSaved ? "saved" : ""}" data-place-id="${place.id}" title="Simpan ke favorit">
				${isSaved ? "⭐" : "☆"}
			</button>

			<div class="place-header">
				<h3 class="place-name">${place.name}</h3>
				<span class="place-type">${place.type}</span>
			</div>

			<div class="place-location">📍 ${place.location}</div>

			<div class="place-meta">
				<span class="place-rating">${formatRating(place.rating)}</span>
				<span class="place-budget">${place.budget}</span>
			</div>

			<div class="score-section">
				<div class="score-label">Kecocokan dengan Preferensimu</div>
				<div class="score-bar">
					<div class="score-fill" style="width: ${place.score}%"></div>
				</div>
				<div class="score-value">${place.score}%</div>
			</div>

			<span class="recommendation-badge ${badge.class}">${badge.text}</span>

			<div class="place-description">${place.description}</div>

			<div class="place-actions">
				<button class="btn secondary detail-btn" data-place-id="${place.id}">Lihat Detail</button>
			</div>
		</div>
	`;

	return html;
}

/**
 * Menampilkan hasil rekomendasi di halaman
 */
function displayResults() {
	const resultsList = document.getElementById("resultsList");
	const resultSection = document.getElementById("resultSection");
	const emptyState = document.getElementById("emptyState");

	if (currentResults.length === 0) {
		resultSection.classList.add("hidden");
		emptyState.classList.remove("hidden");
		return;
	}

	resultSection.classList.remove("hidden");
	emptyState.classList.add("hidden");

	const html = currentResults.map(place => createPlaceCard(place)).join("");
	resultsList.innerHTML = html;

	// Attach event listeners untuk favorite buttons
	document.querySelectorAll(".favorite-btn").forEach(btn => {
		btn.addEventListener("click", handleFavoriteClick);
	});

	// Attach event listeners untuk detail buttons
	document.querySelectorAll(".detail-btn").forEach(btn => {
		btn.addEventListener("click", handleDetailClick);
	});
}

/**
 * Menampilkan halaman detail tempat
 * @param {Number} placeId - ID tempat
 */
function showDetailPage(placeId) {
	const place = places.find(p => p.id === placeId);
	if (!place) return;

	currentDetailPlace = place;
	const detailContent = document.getElementById("detailContent");

	// Hitung skor untuk konteks
	const score = calculateScore(place, currentPreferences);
	const badge = getRecommendationBadge(score);

	let reasons = [];

	// Generate alasan rekomendasi
	if (currentPreferences.budget !== "Semua" && place.budget === currentPreferences.budget) {
		reasons.push(`Budget ${place.budget} sesuai dengan preferensimu`);
	}
	if (currentPreferences.suasana !== "Semua" && place.suasana === currentPreferences.suasana) {
		reasons.push(`Suasana ${place.suasana} cocok untuk belajarmu`);
	}
	if (currentPreferences.wifi && place.wifi) {
		reasons.push("Menyediakan WiFi gratis");
	}
	if (currentPreferences.plug && place.plug) {
		reasons.push("Ada stopkontak untuk charge perangkat");
	}
	if (currentPreferences.comfyChair && place.comfyChair) {
		reasons.push("Kursi nyaman untuk nugas lama");
	}
	if (currentPreferences.openLate && place.openLate) {
		reasons.push("Buka sampai malam, cocok untuk night owls");
	}
	if (currentPreferences.longStudy && place.longStudy) {
		reasons.push("Sangat cocok untuk sesi belajar panjang");
	}

	// Jika tidak ada alasan custom, buat default
	if (reasons.length === 0) {
		reasons = [
			`Rating tinggi: ${place.rating}/5`,
			`Terletak di ${place.location}`,
			place.type === "Kafe"
				? "Menyediakan minuman dan makanan"
				: "Koleksi buku dan sumber belajar lengkap"
		];
	}

	const html = `
		<h2>${place.name}</h2>

		<div class="detail-meta">
			<div class="detail-item">
				<div class="detail-item-label">Tipe</div>
				<div class="detail-item-value">${place.type}</div>
			</div>
			<div class="detail-item">
				<div class="detail-item-label">Lokasi</div>
				<div class="detail-item-value">${place.location}</div>
			</div>
			<div class="detail-item">
				<div class="detail-item-label">Rating</div>
				<div class="detail-item-value">${formatRating(place.rating)}</div>
			</div>
			<div class="detail-item">
				<div class="detail-item-label">Budget</div>
				<div class="detail-item-value">${place.budget}</div>
			</div>
		</div>

		<p style="color: var(--text-light); font-size: 15px;">${place.description}</p>

		<div class="detail-facilities">
			<h3>Fasilitas</h3>
			<div class="facility-item">
				<span class="facility-icon">📶</span>
				<span class="facility-name">WiFi Gratis</span>
				<span class="facility-status ${place.wifi ? "yes" : "no"}">${place.wifi ? "✓ Ada" : "✗ Tidak"}</span>
			</div>
			<div class="facility-item">
				<span class="facility-icon">🔌</span>
				<span class="facility-name">Stopkontak</span>
				<span class="facility-status ${place.plug ? "yes" : "no"}">${place.plug ? "✓ Ada" : "✗ Tidak"}</span>
			</div>
			<div class="facility-item">
				<span class="facility-icon">🪑</span>
				<span class="facility-name">Kursi Nyaman</span>
				<span class="facility-status ${place.comfyChair ? "yes" : "no"}">${place.comfyChair ? "✓ Ada" : "✗ Tidak"}</span>
			</div>
			<div class="facility-item">
				<span class="facility-icon">🌙</span>
				<span class="facility-name">Buka Sampai Malam</span>
				<span class="facility-status ${place.openLate ? "yes" : "no"}">${place.openLate ? "✓ Ya" : "✗ Tidak"}</span>
			</div>
			<div class="facility-item">
				<span class="facility-icon">⏰</span>
				<span class="facility-name">Cocok Belajar Lama</span>
				<span class="facility-status ${place.longStudy ? "yes" : "no"}">${place.longStudy ? "✓ Ya" : "✗ Tidak"}</span>
			</div>
			<div class="facility-item">
				<span class="facility-icon">❄️</span>
				<span class="facility-name">AC</span>
				<span class="facility-status ${place.ac ? "yes" : "no"}">${place.ac ? "✓ Ya" : "✗ Tidak"}</span>
			</div>
			<div class="facility-item">
				<span class="facility-icon">🏠</span>
				<span class="facility-name">Area</span>
				<span class="facility-status yes">${place.area}</span>
			</div>
			<div class="facility-item">
				<span class="facility-icon">🎵</span>
				<span class="facility-name">Suasana</span>
				<span class="facility-status yes">${place.suasana}</span>
			</div>
		</div>

		<div class="score-reason">
			<h3>Mengapa Tempat Ini Direkomendasikan?</h3>
			<div style="margin-bottom: 12px;">
				<span class="recommendation-badge ${badge.class}">${badge.text}</span>
				<div style="font-size: 14px; color: var(--text-light); margin-top: 8px;">Kecocokan: <strong>${score}%</strong></div>
			</div>
			<ul>
				${reasons.map(r => `<li>${r}</li>`).join("")}
			</ul>
		</div>

		<div style="display: flex; gap: 10px; margin-top: 20px;">
			<button class="btn primary full" id="saveFromDetail">⭐ ${isFavorite(place.id) ? "Hapus dari Favorit" : "Simpan ke Favorit"}</button>
		</div>
	`;

	detailContent.innerHTML = html;

	// Event listener untuk tombol simpan favorit di halaman detail
	document.getElementById("saveFromDetail").addEventListener("click", () => {
		if (isFavorite(place.id)) {
			removeFromFavorites(place.id);
		} else {
			addToFavorites(place.id);
		}
		// Update tampilan
		showDetailPage(place.id);
		updateFavoritesDisplay();
	});

	// Tampilkan halaman detail
	document.getElementById("onboarding").classList.add("hidden");
	document.getElementById("app").classList.add("hidden");
	document.getElementById("favoritesPage").classList.add("hidden");
	document.getElementById("detailPage").classList.remove("hidden");
}

/**
 * Menampilkan halaman favorit
 */
function showFavoritesPage() {
	const favorites = getFavorites();
	const favoritePlaces = favorites.map(id => places.find(p => p.id === id)).filter(p => p);
	const favoritesGrid = document.getElementById("favoritesGrid");

	if (favoritePlaces.length === 0) {
		favoritesGrid.innerHTML = '<p class="empty-text">Belum ada tempat yang disimpan. Cari dan simpan tempat favoritmu!</p>';
	} else {
		// Score konteks kosong untuk display di halaman favorit
		const html = favoritePlaces
			.map(place => {
				const score = calculateScore(place, currentPreferences);
				return `
					<div class="place-card" id="place-${place.id}">
						<button class="favorite-btn saved" data-place-id="${place.id}" title="Hapus dari favorit">⭐</button>
						<div class="place-header">
							<h3 class="place-name">${place.name}</h3>
							<span class="place-type">${place.type}</span>
						</div>
						<div class="place-location">📍 ${place.location}</div>
						<div class="place-meta">
							<span class="place-rating">${formatRating(place.rating)}</span>
							<span class="place-budget">${place.budget}</span>
						</div>
						<div class="place-description">${place.description}</div>
						<div class="place-actions">
							<button class="btn secondary detail-btn" data-place-id="${place.id}">Lihat Detail</button>
						</div>
					</div>
				`;
			})
			.join("");
		favoritesGrid.innerHTML = html;

		// Attach event listeners
		document.querySelectorAll(".favorite-btn").forEach(btn => {
			btn.addEventListener("click", handleFavoriteClick);
		});
		document.querySelectorAll(".detail-btn").forEach(btn => {
			btn.addEventListener("click", handleDetailClick);
		});
	}

	document.getElementById("onboarding").classList.add("hidden");
	document.getElementById("app").classList.add("hidden");
	document.getElementById("detailPage").classList.add("hidden");
	document.getElementById("favoritesPage").classList.remove("hidden");
}

/**
 * Update tampilan favorites di sidebar
 */
function updateFavoritesDisplay() {
	const favorites = getFavorites();
	const favoritesList = document.getElementById("favoritesList");

	if (favorites.length === 0) {
		favoritesList.innerHTML = '<p class="empty-text">Belum ada tempat tersimpan</p>';
	} else {
		const favoritePlaces = favorites
			.map(id => places.find(p => p.id === id))
			.filter(p => p);

		const html = favoritePlaces
			.map(
				place => `
				<div class="favorite-item">
					<span class="favorite-item-name">${place.name}</span>
					<button class="favorite-item-btn" data-place-id="${place.id}" title="Lihat detail">👁️</button>
				</div>
			`
			)
			.join("");

		favoritesList.innerHTML = html;

		// Attach event listeners
		document.querySelectorAll(".favorite-item-btn").forEach(btn => {
			btn.addEventListener("click", () => {
				const placeId = parseInt(btn.dataset.placeId);
				showDetailPage(placeId);
			});
		});
	}
}

// ===============================
// EVENT HANDLERS
// ===============================

/**
 * Handler untuk tombol "Mulai Cari Tempat" di halaman onboarding
 */
function handleStartClick() {
	document.getElementById("onboarding").classList.add("hidden");
	document.getElementById("app").classList.remove("hidden");
	updateFavoritesDisplay();
}

/**
 * Handler untuk tombol "Cari Rekomendasi"
 */
function handleSearchClick() {
	currentResults = searchAndScore();
	displayResults();

	// Scroll ke hasil
	document.querySelector(".results-panel").scrollIntoView({ behavior: "smooth" });
}

/**
 * Handler untuk tombol "Reset"
 */
function handleResetClick() {
	document.getElementById("type").value = "Semua";
	document.getElementById("budget").value = "Semua";
	document.getElementById("suasana").value = "Semua";
	document.getElementById("ac").value = "Semua";
	document.getElementById("area").value = "Semua";
	document.getElementById("wifi").checked = false;
	document.getElementById("plug").checked = false;
	document.getElementById("chair").checked = false;
	document.getElementById("lateOpen").checked = false;
	document.getElementById("longStudy").checked = false;

	currentResults = [];
	const resultSection = document.getElementById("resultSection");
	const emptyState = document.getElementById("emptyState");
	resultSection.classList.add("hidden");
	emptyState.classList.remove("hidden");
}

/**
 * Handler untuk tombol favorite di place card
 * @param {Event} e - Event object
 */
function handleFavoriteClick(e) {
	e.stopPropagation();
	const placeId = parseInt(e.currentTarget.dataset.placeId);

	if (isFavorite(placeId)) {
		removeFromFavorites(placeId);
		e.currentTarget.textContent = "☆";
		e.currentTarget.classList.remove("saved");
	} else {
		addToFavorites(placeId);
		e.currentTarget.textContent = "⭐";
		e.currentTarget.classList.add("saved");
	}

	updateFavoritesDisplay();
}

/**
 * Handler untuk tombol "Lihat Detail"
 * @param {Event} e - Event object
 */
function handleDetailClick(e) {
	const placeId = parseInt(e.currentTarget.dataset.placeId);
	showDetailPage(placeId);
}

/**
 * Handler untuk tombol back
 */
function handleBackClick() {
	document.getElementById("detailPage").classList.add("hidden");
	document.getElementById("app").classList.remove("hidden");
}

/**
 * Handler untuk tombol back dari favorites
 */
function handleBackFromFavClick() {
	document.getElementById("favoritesPage").classList.add("hidden");
	document.getElementById("app").classList.remove("hidden");
}

/**
 * Handler untuk tombol favorites di topbar
 */
function handleFavoritesButtonClick() {
	document.getElementById("onboarding").classList.add("hidden");
	document.getElementById("app").classList.add("hidden");
	document.getElementById("detailPage").classList.add("hidden");
	showFavoritesPage();
}

// ===============================
// INITIALIZATION
// ===============================

document.addEventListener("DOMContentLoaded", () => {
	// Attach event listeners untuk tombol utama
	document.getElementById("startBtn").addEventListener("click", handleStartClick);
	document.getElementById("searchBtn").addEventListener("click", handleSearchClick);
	document.getElementById("resetBtn").addEventListener("click", handleResetClick);
	document.getElementById("backBtn").addEventListener("click", handleBackClick);
	document.getElementById("backFromFavBtn").addEventListener("click", handleBackFromFavClick);
	document.getElementById("favoritesBtn").addEventListener("click", handleFavoritesButtonClick);

	// Optional: Trigger Enter key di form
	document.getElementById("prefForm").addEventListener("keypress", (e) => {
		if (e.key === "Enter") {
			e.preventDefault();
			handleSearchClick();
		}
	});

	// Log untuk development
	console.log("✅ Aplikasi Rekomendasi Tempat Belajar Semarang berhasil dimuat!");
	console.log("📍 Jumlah tempat:", places.length);
	console.log("💾 Favorit tersimpan:", getFavorites().length);
});
