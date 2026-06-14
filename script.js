// ===================================
// DATA TEMPAT NYATA DI TEMBALANG
// ===================================

const places = [
	{
		id: 1,
		name: "Embun Senja Coffee n Eatery",
		type: "Kafe",
		location: "Tembalang",
		budget: "Sedang",
		suasana: "Tenang",
		rating: 4.7,
		wifi: true,
		plug: true,
		comfyChair: true,
		openLate: false,
		longStudy: true,
		ac: true,
		area: "Indoor",
		description: "Embun Senja Coffee n Eatery di Tembalang populer dengan suasana nyaman, WiFi kencang, dan menu kopi plus makanan yang lengkap."
	},
	{
		id: 2,
		name: "Kopi Nako Semarang Tembalang",
		type: "Kafe",
		location: "Tembalang",
		budget: "Sedang",
		suasana: "Sedang",
		rating: 4.8,
		wifi: true,
		plug: true,
		comfyChair: true,
		openLate: false,
		longStudy: true,
		ac: true,
		area: "Indoor",
		description: "Kopi Nako Tembalang terkenal karena suasana cozy dan kopi enak, cocok untuk nugas atau kerja kelompok."
	},
	{
		id: 3,
		name: "Treetales Coffee & Eatery by Taman Teduh",
		type: "Kafe",
		location: "Tembalang",
		budget: "Sedang",
		suasana: "Tenang",
		rating: 4.9,
		wifi: true,
		plug: true,
		comfyChair: true,
		openLate: false,
		longStudy: true,
		ac: true,
		area: "Indoor",
		description: "Treetales Coffee & Eatery sering direkomendasikan untuk nugas karena suasana tenang, kopi enak, dan tempat yang nyaman."
	},
	{
		id: 4,
		name: "Anak Panah Kopi",
		type: "Kafe",
		location: "Tembalang",
		budget: "Murah",
		suasana: "Ramai",
		rating: 4.5,
		wifi: true,
		plug: true,
		comfyChair: true,
		openLate: true,
		longStudy: true,
		ac: true,
		area: "Indoor",
		description: "Anak Panah Kopi buka 24 jam dan cocok untuk nugas malam di Tembalang dengan pilihan kopi dan tempat yang cukup luas."
	},
	{
		id: 5,
		name: "Mitsu Cafe Tembalang",
		type: "Kafe",
		location: "Tembalang",
		budget: "Sedang",
		suasana: "Tenang",
		rating: 4.4,
		wifi: true,
		plug: true,
		comfyChair: true,
		openLate: false,
		longStudy: true,
		ac: true,
		area: "Indoor",
		description: "Mitsu Cafe adalah kafe cozy di Tembalang yang nyaman untuk belajar, lengkap dengan menu kopi dan camilan."
	},
	{
		id: 6,
		name: "Antara Kata Coffee",
		type: "Kafe",
		location: "Tembalang",
		budget: "Sedang",
		suasana: "Tenang",
		rating: 4.3,
		wifi: true,
		plug: true,
		comfyChair: true,
		openLate: false,
		longStudy: true,
		ac: true,
		area: "Indoor",
		description: "Antara Kata Coffee menawarkan suasana santai dan WiFi cepat, cocok untuk mahasiswa yang butuh fokus belajar."
	},
	{
		id: 7,
		name: "Tower Cafe Tembalang",
		type: "Kafe",
		location: "Tembalang",
		budget: "Sedang",
		suasana: "Sedang",
		rating: 4.2,
		wifi: true,
		plug: true,
		comfyChair: true,
		openLate: false,
		longStudy: true,
		ac: true,
		area: "Indoor",
		description: "Tower Cafe Tembalang menyediakan tempat yang luas dan nyaman untuk belajar bersama sambil menikmati kopi."
	},
	{
		id: 8,
		name: "River View Cafe Tembalang",
		type: "Kafe",
		location: "Tembalang",
		budget: "Sedang",
		suasana: "Sedang",
		rating: 4.0,
		wifi: true,
		plug: true,
		comfyChair: true,
		openLate: false,
		longStudy: true,
		ac: true,
		area: "Indoor & Outdoor",
		description: "River View Cafe cocok untuk nugas santai dengan pemandangan tenang dan pilihan menu kopi di Tembalang."
	},
	{
		id: 9,
		name: "Kopi Tembalang",
		type: "Kafe",
		location: "Tembalang",
		budget: "Murah",
		suasana: "Tenang",
		rating: 4.1,
		wifi: true,
		plug: false,
		comfyChair: true,
		openLate: false,
		longStudy: true,
		ac: false,
		area: "Indoor",
		description: "Kopi Tembalang adalah kedai kopi lokal yang sering jadi pilihan mahasiswa untuk nugas dan diskusi."
	},
	{
		id: 10,
		name: "Dapur Kampus Tembalang",
		type: "Kafe",
		location: "Tembalang",
		budget: "Sedang",
	suasana: "Sedang",
		rating: 4.1,
		wifi: true,
		plug: true,
		comfyChair: true,
		openLate: false,
		longStudy: true,
		ac: true,
		area: "Indoor & Outdoor",
		description: "Dapur Kampus Tembalang menyediakan menu makan ringan dan tempat nugas dekat area kampus."
	},
	{
		id: 11,
		name: "Perpustakaan Universitas Diponegoro",
		type: "Perpustakaan",
		location: "Tembalang",
		budget: "Murah",
		suasana: "Tenang",
		rating: 4.7,
		wifi: true,
		plug: true,
		comfyChair: true,
		openLate: false,
		longStudy: true,
		ac: true,
		area: "Indoor",
		description: "Perpustakaan Undip adalah tempat resmi di Tembalang untuk belajar fokus dengan koleksi lengkap dan ruang nyaman."
	},
	{
		id: 12,
		name: "Ruang Publik Kampus UNDIP",
		type: "Perpustakaan",
		location: "Tembalang",
		budget: "Murah",
		suasana: "Sedang",
		rating: 4.3,
		wifi: true,
		plug: true,
		comfyChair: true,
		openLate: false,
		longStudy: true,
		ac: false,
		area: "Indoor & Outdoor",
		description: "Ruang publik kampus UNDIP menawarkan area belajar terbuka dan indoor untuk mahasiswa dengan akses stopkontak."
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
 * Menghasilkan rekomendasi AI dari pertanyaan pengguna
 * @param {String} query - Pertanyaan pengguna
 */
function generateAIRecommendation(query) {
	const normalized = query.toLowerCase();
	const wantsCafe = /cafe|kafe|kopi|makan|makanan/.test(normalized);
	const wantsLibrary = /perpustakaan|library|buku/.test(normalized);
	const wantsStudyLong = /nugas|belajar|sampai jam|lama|kerja tugas|tugas/.test(normalized);
	const wantsLate = /malam|jam 6|jam 7|jam 8|jam 9|sore|larut/.test(normalized);
	const locationPref = /geodesi|tembalang|semarang tengah|semarang kota|semarang barat|semarang timur|ungaran/.exec(normalized);

	let preferredType = "Semua";
	if (wantsCafe && !wantsLibrary) preferredType = "Kafe";
	if (wantsLibrary && !wantsCafe) preferredType = "Perpustakaan";

	let filtered = places.slice();
	if (preferredType !== "Semua") {
		filtered = filtered.filter(place => place.type === preferredType);
	}

	if (locationPref) {
		const keyword = locationPref[0];
		if (/geodesi|tembalang/.test(keyword)) {
			filtered = filtered.filter(place => place.location.toLowerCase().includes("tembalang"));
		} else if (/semarang tengah/.test(keyword)) {
			filtered = filtered.filter(place => place.location.toLowerCase().includes("semarang tengah"));
		} else if (/semarang kota/.test(keyword)) {
			filtered = filtered.filter(place => place.location.toLowerCase().includes("semarang kota"));
		} else if (/semarang barat/.test(keyword)) {
			filtered = filtered.filter(place => place.location.toLowerCase().includes("semarang barat"));
		} else if (/semarang timur/.test(keyword)) {
			filtered = filtered.filter(place => place.location.toLowerCase().includes("semarang timur"));
		} else if (/ungaran/.test(keyword)) {
			filtered = filtered.filter(place => place.location.toLowerCase().includes("ungaran"));
		}
	}

	if (filtered.length === 0) {
		filtered = places.slice();
	}

	const aiPreferences = {
		budget: "Semua",
		suasana: wantsStudyLong ? "Tenang" : "Semua",
		ac: "Semua",
		area: "Semua",
		wifi: true,
		plug: true,
		comfyChair: wantsStudyLong,
		openLate: wantsLate,
		longStudy: wantsStudyLong
	};

	const scored = filtered.map(place => ({
		...place,
		score: calculateScore(place, aiPreferences)
	}));

	scored.sort((a, b) => b.score - a.score || b.rating - a.rating);

	const bestPlaces = scored.slice(0, 3);
	if (bestPlaces.length === 0) {
		return {
			title: "Maaf, tidak ada rekomendasi dari daftar saat ini",
			message: "Coba ubah pertanyaan atau gunakan preferensi lain.",
			places: []
		};
	}

	const reasonParts = [];
	if (preferredType === "Kafe") reasonParts.push("kamu mencari kafe atau tempat makan");
	if (preferredType === "Perpustakaan") reasonParts.push("kamu mencari perpustakaan atau tempat belajar tenang");
	if (wantsStudyLong) reasonParts.push("kamu butuh tempat yang cocok untuk nugas atau belajar lama");
	if (wantsLate) reasonParts.push("kamu mencari tempat dengan jam buka lebih panjang");
	if (locationPref) reasonParts.push(`berdasarkan area ${locationPref[0]}`);

	return {
		title: "Rekomendasi AI untuk rute dan tempat",
		message: `Berdasarkan pertanyaanmu, AI merekomendasikan tempat berikut dari daftar kami:`,
		places: bestPlaces,
		reasons: reasonParts.filter(Boolean)
	};
}

function showAIResponse(result) {
	const aiResponse = document.getElementById("aiResponse");
	if (!result || !result.places) {
		aiResponse.textContent = "Terjadi kesalahan. Silakan coba lagi.";
		aiResponse.classList.remove("hidden");
		return;
	}

	const placeItems = result.places.map(place => `
					<li><strong>${place.name}</strong> (${place.type}, ${place.location}) - Kecocokan ${place.score}%</li>
				`).join("");

	aiResponse.innerHTML = `
				<p><strong>${result.title}</strong></p>
				<p>${result.message}</p>
				${result.reasons && result.reasons.length ? `<p><em>Mengapa?</em> ${result.reasons.join(', ')}.</p>` : ""}
				<ul>${placeItems}</ul>
			`;
	aiResponse.classList.remove("hidden");
}

function handleAIPlanClick() {
	const query = document.getElementById("aiQuery").value.trim();
	if (!query) {
		showAIResponse({
			title: "Masukkan pertanyaan terlebih dahulu",
			message: "Tuliskan kebutuhanmu agar AI bisa merekomendasikan tempat terbaik dari daftar.",
			places: []
		});
		return;
	}

	const aiResult = generateAIRecommendation(query);
	showAIResponse(aiResult);
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
	document.getElementById("aiPlanBtn").addEventListener("click", handleAIPlanClick);
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
