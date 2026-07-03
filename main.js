window.addEventListener("load", () => {
	setTimeout(() => {
		document.getElementById("loader").classList.add("hide");
		startCounters();
		createParticles();
	}, 2800);
});

const nav = document.getElementById("main-nav");
window.addEventListener("scroll", () => {
	nav.classList.toggle("scrolled", window.scrollY > 50);
});
document.getElementById("burger").addEventListener("click", () => {
	document.getElementById("mobile-menu").classList.add("open");
});
document.getElementById("menu-close").addEventListener("click", closeMob);
function closeMob() {
	document.getElementById("mobile-menu").classList.remove("open");
}

function createParticles() {
	const c = document.getElementById("particles");
	for (let i = 0; i < 40; i++) {
		const p = document.createElement("div");
		p.className = "particle";
		const x = Math.random() * 100;
		const dur = 8 + Math.random() * 15;
		const delay = -Math.random() * 20;
		const size = 1 + Math.random() * 2;
		p.style.cssText = `left:${x}%;bottom:-10px;width:${size}px;height:${size}px;--rx:${Math.random()};animation-duration:${dur}s;animation-delay:${delay}s;`;
		c.appendChild(p);
	}
}

function startCounters() {
	document.querySelectorAll("[data-count]").forEach((el) => {
		const target = +el.dataset.target;
		let cur = 0;
		const step = target / 60;
		const t = setInterval(() => {
			cur = Math.min(cur + step, target);
			el.textContent =
				cur >= 1000
					? (Math.floor(cur / 100) / 10).toFixed(0) + "k+"
					: Math.floor(cur) + (el.dataset.target == "98" ? "%" : "");
			if (cur >= target) clearInterval(t);
		}, 25);
	});
}

const obs = new IntersectionObserver(
	(entries) => {
		entries.forEach((e) => {
			if (e.isIntersecting) {
				e.target.classList.add("visible");
				obs.unobserve(e.target);
			}
		});
	},
	{ threshold: 0.1 },
);
document.querySelectorAll(".reveal").forEach((el) => obs.observe(el));

function showToast(msg) {
	const t = document.getElementById("toast");
	t.textContent = msg;
	t.classList.add("show");
	setTimeout(() => t.classList.remove("show"), 3000);
}

document.querySelectorAll(".filter-btn").forEach((btn) => {
	btn.addEventListener("click", function () {
		document
			.querySelectorAll(".filter-btn")
			.forEach((b) => b.classList.remove("active"));
		this.classList.add("active");
		filterMarkers(this.dataset.cat);
	});
});

const locations = [
	{
		id: 1,
		name: "Говерла",
		cat: "mountain",
		lat: 48.1593,
		lng: 24.5008,
		region: "Карпати",
		desc: "Найвища вершина України (2061 м). Священна гора карпатських гуцулів.",
		rating: 5,
		diff: "Складний",
		height: "2061 м",
		duration: "6-8 год",
		season: "Літо-осінь",
		icon: "⛰️",
		color: "#3B82F6",
	},
	{
		id: 2,
		name: "Озеро Синевир",
		cat: "lake",
		lat: 48.613,
		lng: 23.6785,
		region: "Закарпаття",
		desc: "Найбільше гірське озеро Карпат на висоті 989 м. «Морське Око».",
		rating: 5,
		diff: "Легкий",
		height: "989 м",
		duration: "1-2 год",
		season: "Весна-осінь",
		icon: "🏞️",
		color: "#06B6D4",
	},
	{
		id: 3,
		name: "Манявський водоспад",
		cat: "waterfall",
		lat: 48.7095,
		lng: 24.5433,
		region: "Карпати",
		desc: "Найбільший рівнинний водоспад України. Висота падіння — 19 м.",
		rating: 4,
		diff: "Легкий",
		height: "600 м",
		duration: "2-3 год",
		season: "Весна-літо",
		icon: "💧",
		color: "#8B5CF6",
	},
	{
		id: 4,
		name: "Хотинська фортеця",
		cat: "castle",
		lat: 48.5154,
		lng: 26.4917,
		region: "Чернівецька",
		desc: "Середньовічна фортеця XIII-XVIII ст. на березі Дністра. ЮНЕСКО.",
		rating: 5,
		diff: "Легкий",
		height: "200 м",
		duration: "2-3 год",
		season: "Круглий рік",
		icon: "🏰",
		color: "#F59E0B",
	},
	{
		id: 5,
		name: "Кришталева печера",
		cat: "cave",
		lat: 48.752,
		lng: 25.905,
		region: "Тернопільська",
		desc: "Унікальна гіпсова печера з кристалами кальциту. Довжина — 22 км.",
		rating: 4,
		diff: "Середній",
		height: "320 м",
		duration: "3-4 год",
		season: "Круглий рік",
		icon: "🕳️",
		color: "#EC4899",
	},
	{
		id: 6,
		name: "Карпатський НПП",
		cat: "park",
		lat: 48.2,
		lng: 24.45,
		region: "Карпати",
		desc: "Найстаріший національний парк України. Площа 50 000 га. Первісні ліси.",
		rating: 5,
		diff: "Різний",
		height: "1800 м",
		duration: "1-7 днів",
		season: "Травень-жовтень",
		icon: "🌲",
		color: "#10B981",
	},
	{
		id: 7,
		name: "Дендропарк Софіївка",
		cat: "park",
		lat: 48.7363,
		lng: 30.2197,
		region: "Черкаська",
		desc: "Легендарний парк-шедевр, закладений 1796 р. Одне з чудес України.",
		rating: 5,
		diff: "Легкий",
		height: "170 м",
		duration: "3-4 год",
		season: "Весна-осінь",
		icon: "🌲",
		color: "#10B981",
	},
	{
		id: 8,
		name: "Кам'янець-Подільський",
		cat: "castle",
		lat: 48.678,
		lng: 26.574,
		region: "Хмельницька",
		desc: "Місто-острів. Фортеця XIV ст., оповита легендами і дивовижним каньйоном.",
		rating: 5,
		diff: "Легкий",
		height: "120 м",
		duration: "Цілий день",
		season: "Круглий рік",
		icon: "🏰",
		color: "#F59E0B",
	},
	{
		id: 9,
		name: "Покинутий санаторій Крим",
		cat: "abandoned",
		lat: 49.05,
		lng: 32.3,
		region: "Центральна",
		desc: "Зруйнований санаторій радянської епохи. Унікальна індустріальна естетика.",
		rating: 3,
		diff: "Середній",
		height: "150 м",
		duration: "2-3 год",
		season: "Весна-осінь",
		icon: "🏚️",
		color: "#6B7280",
	},
	{
		id: 10,
		name: "Шипіт водоспад",
		cat: "waterfall",
		lat: 48.3667,
		lng: 23.1167,
		region: "Закарпаття",
		desc: "Найгучніший водоспад Карпат. Висота 14 м, ширина 20 м.",
		rating: 4,
		diff: "Легкий",
		height: "500 м",
		duration: "1-2 год",
		season: "Весна-літо",
		icon: "💧",
		color: "#8B5CF6",
	},
	{
		id: 11,
		name: "Олеський замок",
		cat: "castle",
		lat: 49.958,
		lng: 24.895,
		region: "Львівська",
		desc: "Давній замок XIV ст. Батьківщина короля Яна ІІІ Собєського.",
		rating: 4,
		diff: "Легкий",
		height: "340 м",
		duration: "2-3 год",
		season: "Круглий рік",
		icon: "🏰",
		color: "#F59E0B",
	},
	{
		id: 12,
		name: "Піщані скелі Олешки",
		cat: "abandoned",
		lat: 46.5567,
		lng: 32.6078,
		region: "Херсонська",
		desc: "Унікальні піщані дюни та скелі в степовій зоні України.",
		rating: 3,
		diff: "Легкий",
		height: "20 м",
		duration: "2-4 год",
		season: "Весна-осінь",
		icon: "🏚️",
		color: "#6B7280",
	},
	{
		id: 13,
		name: "Замок Паланок",
		cat: "castle",
		lat: 48.2553,
		lng: 22.4115,
		region: "Закарпатська",
		desc: "Давній замок XI ст. Колишня резиденція Трансильванського князівства.",
		rating: 4,
		diff: "Легкий",
		height: "68 м",
		duration: "2-3 год",
		season: "Круглий рік",
		icon: "🏰",
		color: "#F59E0B",
	},
	{
		id: 14,
		name: "Палац графів Шенборнів",
		cat: "castle",
		lat: 48.313,
		lng: 22.5229,
		region: "Закарпатська",
		desc: "Сьогодні це – санаторій “Карпати”, а колись тут, у Закарпатській області, австрійські графи Шенборни збудували свою резиденцію та мисливський будинок.",
		rating: 5,
		diff: "Легкий",
		height: "400 м",
		duration: "2-3 год",
		season: "Круглий рік",
		icon: "🏰",
		color: "#F59E0B",
	},
	{
		id: 15,
		name: "Ужгородський замок",
		cat: "castle",
		lat: 48.3718,
		lng: 22.1824,
		region: "Закарпатська",
		desc: "Це унікальне укріплення бастіонного типу і справжній шедевр романського архітектурного стилю в Ужгороді.",
		rating: 4,
		diff: "Легкий",
		height: "149 м",
		duration: "2-3 год",
		season: "Круглий рік",
		icon: "🏰",
		color: "#F59E0B",
	},
	{
		id: 16,
		name: "Жовківський замок",
		cat: "castle",
		lat: 50.0545,
		lng: 23.96976,
		region: "Львівська",
		desc: "Неймовірна пам’ятка архітектури епохи ренесансу в місті Жовква Львівської області.",
		rating: 4,
		diff: "Легкий",
		height: "234 м",
		duration: "2-3 год",
		season: "Круглий рік",
		icon: "🏰",
		color: "#F59E0B",
	},
	{
		id: 17,
		name: "Кам’янець-Подільська фортеця",
		cat: "castle",
		lat: 48.67332,
		lng: 26.56351,
		region: "Хмельницька",
		desc: "Легендарний середньовічний велетень над глибоким каньйоном, що жодного разу не був узятий штурмом. Відчуйте справжню атмосферу лицарської епохи!",
		rating: 5,
		diff: "Легкий",
		height: "162 м",
		duration: "2-3 год",
		season: "Круглий рік",
		icon: "🏰",
		color: "#F59E0B",
	},
	{
		id: 18,
		name: "Палац Кирила Разумовського",
		cat: "castle",
		lat: 51.33444,
		lng: 32.89361,
		region: "Чернігівська",
		desc: "Єдиний збережений гетьманський палац України з королівським блиском інтер'єрів. Пориньте в історію козацької еліти в серці Батурина!",
		rating: 4,
		diff: "Легкий",
		height: "139 м",
		duration: "2-3 год",
		season: "Круглий рік",
		icon: "🏰",
		color: "#F59E0B",
	},
	{
		id: 19,
		name: "Шарівський замок",
		cat: "castle",
		lat: 50.04527,
		lng: 35.43279,
		region: "Харківська",
		desc: "Білокам’яна неоготична казка Східної України серед старовинного терасового парку. Ідеальне місце для ваших найромантичніших фотосесій!",
		rating: 3,
		diff: "Легкий",
		height: "162 м",
		duration: "2-3 год",
		season: "Круглий рік",
		icon: "🏰",
		color: "#F59E0B",
	},
	{
		id: 20,
		name: "Замок Попова",
		cat: "castle",
		lat: 47.44658,
		lng: 35.27659,
		region: "Запорізька",
		desc: "Унікальний шедевр мавританської готики, який зачаровує своєю архітектурою навіть у напівзруйнованому стані. Відкрийте таємниці грандіозної південної садиби!",
		rating: 3,
		diff: "Легкий",
		height: "45 м",
		duration: "2-3 год",
		season: "Круглий рік",
		icon: "🏰",
		color: "#F59E0B",
	},
	{
		id: 21,
		name: "Підгорецький замок",
		cat: "castle",
		lat: 49.94314,
		lng: 24.98354,
		region: "Львівська",
		desc: "Величний «український Версаль» у стилі ренесансу та зірка історичних кінофільмів. Насолодіться містичною атмосферою та розкішною панорамою з висоти пташиного польоту!",
		rating: 4,
		diff: "Легкий",
		height: "399 м",
		duration: "2-3 год",
		season: "Круглий рік",
		icon: "🏰",
		color: "#F59E0B",
	},
	{
		id: 22,
		name: "Золочівський замок",
		cat: "castle",
		lat: 49.80184,
		lng: 24.9058,
		region: "Львівська",
		desc: "Королівська резиденція з єдиним у Східній Європі загадковим Китайським палацом. Загадайте бажання біля таємничих каменів тамплієрів!",
		rating: 3,
		diff: "Легкий",
		height: "280 м",
		duration: "2-3 год",
		season: "Круглий рік",
		icon: "🏰",
		color: "#F59E0B",
	},
	{
		id: 23,
		name: "Олеський замок",
		cat: "castle",
		lat: 49.96828,
		lng: 24.90115,
		region: "Львівська",
		desc: "Один із найдавніших замків України на високому пагорбі, де зібрані сотні шедеврів середньовічного мистецтва. Торкніться живої історії колишньої королівської колиски!",
		rating: 3,
		diff: "Легкий",
		height: "244 м",
		duration: "2-3 год",
		season: "Круглий рік",
		icon: "🏰",
		color: "#F59E0B",
	},
	{
		id: 24,
		name: "Аккерманська фортеця",
		cat: "castle",
		lat: 46.20052,
		lng: 30.34902,
		region: "Львівська",
		desc: "Найбільша твердиня України, що вже п'ять століть велично височіє над Дністровським лиманом. Пройдіться кілометровими мурами стародавньої цитаделі!",
		rating: 3,
		diff: "Легкий",
		height: "17 м",
		duration: "2-3 год",
		season: "Круглий рік",
		icon: "🏰",
		color: "#F59E0B",
	},
	{
		id: 25,
		name: "Манявський водоспад",
		cat: "waterfall",
		lat: 48.62569,
		lng: 24.30386,
		region: "Івано-Франківська",
		desc: "Один із найвищих і найдикіших водоспадів Карпат у глибокій скельній ущелині. Справжній магніт для любителів екстриму та незайманої природи!",
		rating: 4,
		diff: "Середній",
		height: "545 м",
		duration: "2-3 год",
		season: "Круглий рік",
		icon: "💧",
		color: "#8B5CF6",
	},
	{
		id: 26,
		name: "Водоспад Пробій",
		cat: "waterfall",
		lat: 48.43936,
		lng: 24.53982,
		region: "Івано-Франківська",
		desc: "Шалений та бурхливий гігант у самому серці Яремче, що пробиває шлях крізь скелі. Зазирніть у вир стихії з 20-метрового мосту!",
		rating: 3,
		diff: "Легкий",
		height: "500 м",
		duration: "2-3 год",
		season: "Круглий рік",
		icon: "💧",
		color: "#8B5CF6",
	},
	{
		id: 27,
		name: "Водоспад Женецький Гук",
		cat: "waterfall",
		lat: 48.39103,
		lng: 24.49969,
		region: "Івано-Франківська",
		desc: "Юний та гучний однокаскадний красень, що утворився внаслідок повені. Ідеально доступний водоспад з неймовірними краєвидами у будь-яку пору року!",
		rating: 5,
		diff: "Середній",
		height: "850 м",
		duration: "2-3 год",
		season: "Круглий рік",
		icon: "💧",
		color: "#8B5CF6",
	},
	{
		id: 28,
		name: "Джуринський водоспад",
		cat: "waterfall",
		lat: 48.80524,
		lng: 25.58781,
		region: "Тернопільська",
		desc: "Найбільший рівнинний водоспад України, оточений містичними руїнами Червоногородського замку. Поніжтеся в унікальному природному джакузі!",
		rating: 4,
		diff: "Середній",
		height: "170 м",
		duration: "2-3 год",
		season: "Круглий рік",
		icon: "💧",
		color: "#8B5CF6",
	},
	{
		id: 29,
		name: "Озеро Світязь",
		cat: "lake",
		lat: 51.49842,
		lng: 23.84361,
		region: "Волинь",
		desc: "«Український Байкал» та найглибше озеро країни з неймовірно прозорою, цілющою водою. Ідеальний оазис для літнього відпочинку всією родиною!",
		rating: 5,
		diff: "Легкий",
		height: "163 м",
		duration: "1-2 год",
		season: "Весна-осінь",
		icon: "🏞️",
		color: "#06B6D4",
	},
	{
		id: 30,
		name: "Озеро Бребенескул",
		cat: "lake",
		lat: 48.10263,
		lng: 24.56141,
		region: "на кордоні Івано-Франківської та Закарпатської областей",
		desc: "Найвище високогірне озеро України, розташоване в затишній льодовиковій чаші Чорногори. Тут ви зможете торкнутися хмар і заночувати під зорями!",
		rating: 4,
		diff: "Середній",
		height: "1801 м",
		duration: "3-4 год",
		season: "Весна-осінь",
		icon: "🏞️",
		color: "#06B6D4",
	},
	{
		id: 31,
		name: "Лемурійське(Рожеве) озеро",
		cat: "lake",
		lat: 46.24151,
		lng: 33.73641,
		region: "Херсонська",
		desc: "Українське «Мертве море» з унікальною яскраво-рожевою водою та лікувальними грязями. Зробіть фантастичні космічні кадри, не виїжджаючи за межі країни!",
		rating: 5,
		diff: "Легкий",
		height: "0 м",
		duration: "1-2 год",
		season: "Весна-осінь",
		icon: "🏞️",
		color: "#06B6D4",
	},
	{
		id: 32,
		name: "Біле озеро",
		cat: "lake",
		lat: 51.48281,
		lng: 25.75924,
		region: "Рівненська",
		desc: "Перлина Полісся з унікальною «шовковою» водою, яка багата на природний гліцерин. Відновіть сили серед первозданної озерної тиші та соснового бору!",
		rating: 3,
		diff: "Легкий",
		height: "156 м",
		duration: "1-2 год",
		season: "Весна-осінь",
		icon: "🏞️",
		color: "#06B6D4",
	},
	{
		id: 33,
		name: "Бребенескул",
		cat: "mountain",
		lat: 48.09833,
		lng: 24.58056,
		region: "Карпати",
		desc: "Друга за висотою, куполоподібна вершина з унікальним альпійським рельєфом. Відкрийте спокійнішу та величнішу сторону Чорногірського хребта!",
		rating: 5,
		diff: "Складний",
		height: "2036 м",
		duration: "6-8 год",
		season: "Весна-осінь",
		icon: "⛰️",
		color: "#3B82F6",
	},
	{
		id: 34,
		name: "Піп Іван",
		cat: "mountain",
		lat: 48.04694,
		lng: 24.62778,
		region: "Карпати",
		desc: "Містична вершина, увінчана кам’яною обсерваторією «Білий Слон». Пориньте в атмосферу карпатських легенд і суворої краси!",
		rating: 5,
		diff: "Складний",
		height: "2028 м",
		duration: "6-8 год",
		season: "Весна-осінь",
		icon: "⛰️",
		color: "#3B82F6",
	},
	{
		id: 35,
		name: "Петрос",
		cat: "mountain",
		lat: 48.17194,
		lng: 24.42111,
		region: "Карпати",
		desc: "Норовиста «Грозова гора», яка кидає виклик навіть досвідченим мандрівникам своїми крутими схилами. Гора для тих, хто шукає справжнього адреналіну!",
		rating: 5,
		diff: "Складний",
		height: "2020 м",
		duration: "6-8 год",
		season: "Весна-осінь",
		icon: "⛰️",
		color: "#3B82F6",
	},
	{
		id: 35,
		name: "Гутин Томнатик",
		cat: "mountain",
		lat: 48.10011,
		lng: 24.55621,
		region: "Карпати",
		desc: "Одна з наймальовничіших вершин, що круто обривається прямо до найвищого озера України. Насолодіться незабутнім контрастом суворих скель і синьої води!",
		rating: 5,
		diff: "Складний",
		height: "2016 м",
		duration: "6-8 год",
		season: "Весна-осінь",
		icon: "⛰️",
		color: "#3B82F6",
	},
	{
		id: 36,
		name: "Прип'ять",
		cat: "abandoned",
		lat: 51.40578,
		lng: 30.05436,
		region: "Київська",
		desc: "Найвідоміше у світі місто-привид, де час назавжди зупинився навесні 1986 року. Моторошний та заворожуючий пам'ятник радянської епохи, поглинутий природою!",
		rating: 5,
		diff: "Середній",
		height: "115 м",
		duration: "2-3 год",
		season: "Круглий рік",
		icon: "🏚️",
		color: "#6B7280",
	},
	{
		id: 37,
		name: "Орбіта",
		cat: "abandoned",
		lat: 49.20121,
		lng: 32.61864,
		region: "Черкаська",
		desc: "Покинуте радянське містечко енергетиків, яке так і не дочекалося побудови Чигиринської АЕС. Пройдіться пустими багатоповерхівками посеред дикого лісу!",
		rating: 4,
		diff: "Середній",
		height: "85 м",
		duration: "2-3 год",
		season: "Круглий рік",
		icon: "🏚️",
		color: "#6B7280",
	},
	{
		id: 38,
		name: "Любеч-1",
		cat: "abandoned",
		lat: 51.71389,
		lng: 30.68114,
		region: "Чернігівська",
		desc: "Секретне закинуте військове містечко, що обслуговувало радарну станцію «Дуга-2». Справжній рай для сталкерів та дослідників таємниць Холодної війни!",
		rating: 4,
		diff: "Середній",
		height: "140 м",
		duration: "2-3 год",
		season: "Круглий рік",
		icon: "🏚️",
		color: "#6B7280",
	},
	{
		id: 39,
		name: "Цукроваров",
		cat: "abandoned",
		lat: 48.59972,
		lng: 30.69722,
		region: "Кіроваградська",
		desc: "Колись квітуче супутникове селище великого цукрового заводу, що зникло з карти після банкрутства виробництва. Мовчазні занедбані п’ятиповерхівки серед степу!",
		rating: 3,
		diff: "Середній",
		height: "165 м",
		duration: "2-3 год",
		season: "Круглий рік",
		icon: "🏚️",
		color: "#6B7280",
	},
	{
		id: 40,
		name: "Гнаденталь",
		cat: "abandoned",
		lat: 46.12831,
		lng: 30.04861,
		region: "Одеська",
		desc: "Закинуте німецьке колоніальне селище (Гнаденталь) з величними руїнами лютеранської кірхи XIX століття. Відчуйте готичну та загадкову атмосферу степового минулого!",
		rating: 3,
		diff: "Легкий",
		height: "30 м",
		duration: "1-2 год",
		season: "Круглий рік",
		icon: "🏚️",
		color: "#6B7280",
	},
	{
		id: 41,
		name: "Долинська",
		cat: "abandoned",
		lat: 48.11306,
		lng: 32.76611,
		region: "Кіровоградська",
		desc: "Постапокаліптичний недобудований євро-мікрорайон посеред степу, зведений іноземцями для робітників гігантського комбінату КГЗКОР. Відчуйте дух справжнього сталкерського урбексу серед десятків порожніх радянських багатоповерхівок!",
		rating: 4,
		diff: "Легкий",
		height: "175 м",
		duration: "1-2 год",
		season: "Круглий рік",
		icon: "🏚️",
		color: "#6B7280",
	},
	{
		id: 42,
		name: "Роман-Кош",
		cat: "mountain",
		lat: 44.61111,
		lng: 34.24139,
		region: "Крим",
		desc: "Найвища точка Кримських гір, розташована на заповідному плато Бабуган-яйла. Підкоріть головну вершину півострова та відчуйте себе над хмарами!",
		rating: 5,
		diff: "Складний",
		height: "1545 м",
		duration: "4-6 год",
		season: "Весна-осінь",
		icon: "⛰️",
		color: "#3B82F6",
	},
	{
		id: 43,
		name: "Ай-Петрі",
		cat: "mountain",
		lat: 44.45166,
		lng: 34.06001,
		region: "Крим",
		desc: "Легендарна гора з фірмовими кам'яними зубцями та екстремальними підвісними мостами над прірвою. Підніміться сюди канатною дорогою по незабутні панорами!",
		rating: 5,
		diff: "Складний",
		height: "1234 м",
		duration: "4-6 год",
		season: "Весна-осінь",
		icon: "⛰️",
		color: "#3B82F6",
	},
	{
		id: 44,
		name: "Демерджі (Південна)",
		cat: "mountain",
		lat: 44.75527,
		lng: 34.39416,
		region: "Крим",
		desc: "Містична гора, відома своєю химерною Долиною привидів, де скелі змінюють форму на заході сонця. Справжнє кінематографічне диво Криму!",
		rating: 5,
		diff: "Складний",
		height: "1239 м",
		duration: "4-6 год",
		season: "Весна-осінь",
		icon: "⛰️",
		color: "#3B82F6",
	},
	{
		id: 45,
		name: "Аю-Даг (Ведмідь-гора)",
		cat: "mountain",
		lat: 44.55833,
		lng: 34.33194,
		region: "Крим",
		desc: "Унікальний згаслий вулкан-лаколіт, що формою нагадує велетенського ведмедя, який п'є воду з Чорного моря. Пройдіться заповідними стежками серед прадавніх дубів!",
		rating: 5,
		diff: "Середній",
		height: "577 м",
		duration: "4-6 год",
		season: "Весна-осінь",
		icon: "⛰️",
		color: "#3B82F6",
	},
	{
		id: 46,
		name: "Кримська АЕС",
		cat: "abandoned",
		lat: 45.39167,
		lng: 35.80389,
		region: "Крим",
		desc: "Найделікатніший і найдорожчий недобудований ядерний об'єкт світу, внесений до Книги рекордів Гіннеса. Грандіозна мекка для індустріальних туристів та рейверів!",
		rating: 4,
		diff: "Середній",
		height: "5 м",
		duration: "2-3 год",
		season: "Круглий рік",
		icon: "🏚️",
		color: "#6B7280",
	},
	{
		id: 47,
		name: "Об'єкт 825 ГТС",
		cat: "abandoned",
		lat: 44.49694,
		lng: 33.59583,
		region: "Крим",
		desc: "Колишній надсекретний підземний завод для ремонту підводних човнів, здатний витримати прямий ядерний удар. Справжній шедевр підземної інженерії Холодної війни!	",
		rating: 4,
		diff: "Середній",
		height: "2 м",
		duration: "1-2 год",
		season: "Круглий рік",
		icon: "🏚️",
		color: "#6B7280",
	},
	{
		id: 48,
		name: "Об'єкт 221",
		cat: "abandoned",
		lat: 44.51611,
		lng: 33.70278,
		region: "Крим",
		desc: "Величезний закинутий чотириповерховий бункер у товщі гори Алсу, який мав стати головним штабом Чорноморського флоту. Найбільша підземна споруда Криму!",
		rating: 5,
		diff: "Середній",
		height: "350 м",
		duration: "2-3 год",
		season: "Круглий рік",
		icon: "🏚️",
		color: "#6B7280",
	},
	{
		id: 49,
		name: "Об'єкт 100 («Сотка»)",
		cat: "abandoned",
		lat: 44.4925,
		lng: 33.63972,
		region: "Крим",
		desc: "Покинутий підземний береговий ракетний комплекс біля Севастополя, що запускав крилаті ракети з-під землі. Монументальна пам'ятка мілітарної історії в скелях!",
		rating: 4,
		diff: "Середній",
		height: "220 м",
		duration: "1-2 год",
		season: "Круглий рік",
		icon: "🏚️",
		color: "#6B7280",
	},
	{
		id: 50,
		name: "Олександрія",
		cat: "park",
		lat: 49.81305,
		lng: 30.06694,
		region: "Біла Церква",
		desc: "Найбільший і найстаріший дендропарк України з унікальною колекцією рослин та витонченою європейською архітектурою.",
		rating: 4,
		diff: "Різний",
		height: "145 м",
		duration: "1-7 днів",
		season: "Травень-жовтень",
		icon: "🌲",
		color: "#10B981",
	},
	{
		id: 51,
		name: "Тростянець",
		cat: "park",
		lat: 50.79333,
		lng: 32.81389,
		region: "Чернігівська",
		desc: "Унікальний рукотворний куточок Швейцарії посеред українського Полісся з високими горами, штучними озерами та віковими деревами.",
		rating: 4,
		diff: "Різний",
		height: "160 м",
		duration: "1-7 днів",
		season: "Травень-жовтень",
		icon: "🌲",
		color: "#10B981",
	},
	{
		id: 52,
		name: "Краснокутський дендропарк",
		cat: "park",
		lat: 50.79333,
		lng: 32.81389,
		region: "Харківська",
		desc: "Один із найстаріших парків країни, що приховує підземні печери стародавнього монастиря та унікальне «острівце кохання».",
		rating: 3,
		diff: "Різний",
		height: "150 м",
		duration: "1-7 днів",
		season: "Травень-жовтень",
		icon: "🌲",
		color: "#10B981",
	},
	{
		id: 53,
		name: "Ландшафтний парк «Буки» ",
		cat: "park",
		lat: 49.83944,
		lng: 29.66389,
		region: "Київська",
		desc: "Сучасне ландшафтне диво на берегах річки Рось із казковими фонтанами, величним храмовим комплексом та хранителем-жабою.",
		rating: 3,
		diff: "Різний",
		height: "140 м",
		duration: "1-7 днів",
		season: "Травень-жовтень",
		icon: "🌲",
		color: "#10B981",
	},
	{
		id: 54,
		name: "Межигір'я",
		cat: "park",
		lat: 50.61527,
		lng: 30.47444,
		region: "Київська",
		desc: "Грандіозний природний парк на схилах Київського моря з ідеальними набережними, каскадними озерами та розкішними садами",
		rating: 4,
		diff: "Різний",
		height: "140 м",
		duration: "1-7 днів",
		season: "Травень-жовтень",
		icon: "🌲",
		color: "#10B981",
	},
	{
		id: 55,
		name: "Феофанія",
		cat: "park",
		lat: 50.33917,
		lng: 30.48917,
		region: "Київ",
		desc: "Особливе святе місце, де затишні дзеркальні озера гармонійно поєднуються з величними панорамами Пантелеймонівського собору.",
		rating: 4,
		diff: "Різний",
		height: "140 м",
		duration: "1-7 днів",
		season: "Травень-жовтень",
		icon: "🌲",
		color: "#10B981",
	},
	{
		id: 56,
		name: "Печера Оптимістична",
		cat: "cave",
		lat: 48.73473,
		lng: 25.97433,
		region: "Тернопільська",
		desc: "Найдовша гіпсова печера у світі (понад 260 км лабіринтів) із фантастичним підземним арт-музеєм. Відкрийте для себе величний підземний Космос із кристалів!",
		rating: 5,
		diff: "Середній",
		height: "278 м",
		duration: "5-6 год",
		season: "Круглий рік",
		icon: "🕳️",
		color: "#EC4899",
	},
	{
		id: 57,
		name: "Печера Атлантида",
		cat: "cave",
		lat: 48.59924,
		lng: 26.34515,
		region: "Хмельницька",
		desc: "Єдина на Поділлі чітко виражена триповерхова печера, повністю вкрита різнокольоровими кристалами вторинного гіпсу.	",
		rating: 4,
		diff: "Середній",
		height: "190 м",
		duration: "4-5 год",
		season: "Круглий рік",
		icon: "🕳️",
		color: "#EC4899",
	},
	{
		id: 58,
		name: "Печера Млинки",
		cat: "cave",
		lat: 48.95111,
		lng: 25.86472,
		region: "Тернопільська",
		desc: "Екстремальна лабіринтова печера з культовим лазом «Чортове горло» та блискучими стінами. Киньте собі виклик у справжньому підземному спортзалі!",
		rating: 4,
		diff: "Середній",
		height: "270 м",
		duration: "4-5 год",
		season: "Круглий рік",
		icon: "🕳️",
		color: "#EC4899",
	},
	{
		id: 59,
		name: "Печера Вертеба",
		cat: "cave",
		lat: 48.78889,
		lng: 25.87139,
		region: "Тернопільська",
		desc: "Унікальна печера-музей, всередині якої розташована єдина в світі підземна експозиція трипільської культури.",
		rating: 4,
		diff: "Середній",
		height: "274 м",
		duration: "3-4 год",
		season: "Круглий рік",
		icon: "🕳️",
		color: "#EC4899",
	},
	{
		id: 60,
		name: "Печера Попелюшка",
		cat: "cave",
		lat: 48.29392,
		lng: 26.63412,
		region: "Чернівецька",
		desc: "Величезна прикордонна печера з гігантськими підземними залами та загадковими озерами неземної краси.",
		rating: 4,
		diff: "Середній",
		height: "140 м",
		duration: "3-4 год",
		season: "Круглий рік",
		icon: "🕳️",
		color: "#EC4899",
	},
];

let allMarkers = [];
let activeFilter = "all";

const map = L.map("ukraine-map", {
	center: [48.5, 31.0],
	zoom: 6,
	zoomControl: true,
	attributionControl: false,
});

L.tileLayer("https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png", {
	maxZoom: 19,
	subdomains: "abcd",
}).addTo(map);

function createIcon(loc) {
	return L.divIcon({
		className: "",
		html: `<div class="custom-marker" style="background:rgba(8,10,15,0.85);border-color:${loc.color};color:${loc.color};box-shadow:0 0 15px ${loc.color}40">${loc.icon}</div>`,
		iconSize: [36, 36],
		iconAnchor: [18, 18],
		popupAnchor: [0, -20],
	});
}

function starsHTML(r) {
	return "★".repeat(r) + "☆".repeat(5 - r);
}

function createPopup(loc) {
	return `<div class="popup-inner">
    <div class="popup-img" style="background:linear-gradient(135deg,${loc.color}33,${loc.color}11);display:flex;align-items:center;justify-content:center;font-size:4rem">${loc.icon}</div>
    <div class="popup-body">
        <div class="popup-cat">${loc.cat === "mountain" ? "Гора" : loc.cat === "lake" ? "Озеро" : loc.cat === "waterfall" ? "Водоспад" : loc.cat === "castle" ? "Замок/Фортеця" : loc.cat === "cave" ? "Печера" : loc.cat === "park" ? "Нац. парк" : "Об'єкт"} · ${loc.region}</div>
        <div class="popup-name">${loc.name}</div>
        <div class="popup-desc">${loc.desc}</div>
        <div class="popup-meta">
            <div class="popup-meta-item"><div class="popup-meta-label">Рейтинг</div><div class="popup-stars popup-meta-val">${starsHTML(loc.rating)}</div></div>
            <div class="popup-meta-item"><div class="popup-meta-label">Складність</div><div class="popup-meta-val">${loc.diff}</div></div>
            <div class="popup-meta-item"><div class="popup-meta-label">Висота</div><div class="popup-meta-val">${loc.height}</div></div>
            <div class="popup-meta-item"><div class="popup-meta-label">Тривалість</div><div class="popup-meta-val">${loc.duration}</div></div>
            <div class="popup-meta-item"><div class="popup-meta-label">Сезон</div><div class="popup-meta-val">${loc.season}</div></div>
            <div class="popup-meta-item"><div class="popup-meta-label">Координати</div><div class="popup-meta-val" style="font-size:0.7rem">${loc.lat.toFixed(4)}, ${loc.lng.toFixed(4)}</div></div>
        </div>
        <div class="popup-actions">
            <button class="popup-btn popup-btn-primary" onclick="addFav('${loc.name}')">❤️ Обране</button>
            <button class="popup-btn popup-btn-ghost" onclick="addRoute('${loc.name}')">🗺️ Маршрут</button>
            <button class="popup-btn popup-btn-ghost" onclick="markVisited('${loc.name}')">✅ Відвідано</button>
        </div>
    </div>
</div>`;
}

locations.forEach((loc) => {
	const marker = L.marker([loc.lat, loc.lng], { icon: createIcon(loc) })
		.bindPopup(createPopup(loc), { maxWidth: 300, minWidth: 260 })
		.addTo(map);
	marker._locData = loc;
	allMarkers.push(marker);
});

function filterMarkers(cat) {
	activeFilter = cat;
	allMarkers.forEach((m) => {
		if (cat === "all" || m._locData.cat === cat) {
			if (!map.hasLayer(m)) m.addTo(map);
		} else {
			if (map.hasLayer(m)) map.removeLayer(m);
		}
	});
}

document
	.getElementById("map-search-input")
	.addEventListener("input", function () {
		const q = this.value.toLowerCase().trim();
		allMarkers.forEach((m) => {
			const l = m._locData;
			const match =
				l.name.toLowerCase().includes(q) ||
				l.region.toLowerCase().includes(q) ||
				l.cat.includes(q);
			if (match && (activeFilter === "all" || l.cat === activeFilter)) {
				if (!map.hasLayer(m)) m.addTo(map);
			} else if (q) {
				if (map.hasLayer(m)) map.removeLayer(m);
			}
		});
		if (!q) filterMarkers(activeFilter);
	});

function addFav(name) {
	showToast(`❤️ ${name} додано до Обраного! +50 XP`);
}
function addRoute(name) {
	showToast(`🗺️ ${name} додано до маршруту!`);
}
function markVisited(name) {
	showToast(`✅ ${name} позначено як відвідане! +100 XP`);
}
