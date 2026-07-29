/* =============================================================================
   Bilingual copy. English is the primary language, Polish is the second.
   Values may contain markup; they are ours, never user input.
   ============================================================================= */

const I18N = {

en: {
  /* ---- chrome ---- */
  nav_home: 'Home',
  nav_about: 'About',
  nav_schedule: 'Schedule',
  nav_gallery: 'Gallery',
  nav_activity: 'Activity',
  nav_join: 'FAQ',

  tick_1: 'All paces. All people. One community.',
  tick_2: 'Run · Walk · Socialize · Connect',
  tick_3: 'Every Saturday · 09:00',
  tick_4: 'Free · No sign-up',

  foot_tag: 'A free Saturday run club in Warsaw. Meet, run or walk, stay for coffee.',
  foot_explore: 'Pages',
  foot_follow: 'Follow',
  foot_practical: 'Practical',
  foot_p1: 'Every Saturday, 09:00',
  foot_p2: 'Meeting point posted weekly on Instagram',
  foot_p3: 'Free — no membership, no registration',
  foot_rights: 'Made by members of the club.',
  foot_credit: 'Runs, paces and route maps: Strava club feed. Photographs: club members.',

  /* ---- home ---- */
  h_kicker: 'Warsaw · Every Saturday · 09:00 · Free',
  h_title: 'All paces.<br>All people.<br><em>One community.</em>',
  h_btn_next: 'Next run',
  h_btn_join: 'New here? Start here',
  h_btn_ig: 'Instagram',

  bib_label: 'Next run',
  bib_day: 'Sat',
  bib_month: 'August 2026',
  bib_map_cap: 'A recent 5.39 km loop around Pole Mokotowskie',
  bib_meet: 'Meet',
  bib_time: 'Time',
  bib_dist: 'Distance',
  bib_type: 'Type',
  bib_cost: 'Cost',
  bib_type_v: 'Run · Social · Trail',
  bib_cost_v: 'Free',

  cap_hero: 'Saturday warm-up before the run — Pole Mokotowskie, Warsaw',

  /* the club's own Instagram bio, five lines, emoji removed */
  bio_1: 'All levels are welcome',
  bio_2: 'Warsaw run club',
  bio_3: 'Details posted weekly',
  bio_4: 'Running + social games',
  bio_5: 'Free — no sign-up',

  /* fact strip, straight under the hero */
  f_day: 'Meeting day',
  f_time: 'Start time',
  f_cost: 'To join',
  f_cost_v: 'Free',

  /* where the club lives between Saturdays */
  so_no: 'Stay in touch',
  so_h: 'Join us everywhere else',
  so_p: 'Everything between Saturdays happens in these three places. All of them are open — no approval, no waiting list.',
  so_ig_p: 'Where the meeting point goes up every week, plus photos and video from the runs.',
  so_st_p: 'The club feed — every route, distance and pace the crew logs.',
  so_wa_p: 'The group chat. Ask anything, or just say you are coming on Saturday.',
  so_go: 'Open',

  gal_no: 'Last few Saturdays',
  gal_h: 'What it looks like',
  gal_btn: 'Open the gallery',

  cta_h: 'Saturday.<br>09:00.<br>Just turn up.',
  cta_p: 'No form to fill in, no fee, no minimum pace. Bring water. If it is your first time, say so when you arrive — somebody will run with you.',
  cta_btn_place: 'Where we meet',
  cta_btn_join: 'New here? Start here',
  cta_btn_ig: 'Instagram',

  /* ---- about ---- */
  ab_kicker: 'About',
  ab_title: 'Who this is',
  ab_lead: 'Pacers Community is a free run club in Warsaw. There is no membership, no coach and no fee.',
  ab_p2: 'The crowd is mixed and international — people from Warsaw, and a lot of people who moved here and wanted a reason to be outside on a Saturday morning with other humans. That is most of what the club is for. The running is the excuse; the standing around afterwards is the point.',
  ab_how_h: 'How a Saturday goes',
  ab_s1_h: 'Meet at nine',
  ab_s1_p: 'Everyone gathers at the spot posted that week. Come five minutes early if you want to work out who is who.',
  ab_s2_h: 'Warm up together',
  ab_s2_p: 'Ten minutes of drills as one group, before anybody runs anywhere. This is also when you find someone to run with.',
  ab_s3_h: 'Run',
  ab_s3_p: 'The group breaks into paces. Everybody runs at whatever pace feels comfortable to them — nobody is chasing anybody.',
  ab_s4_h: 'Walk it out and stretch',
  ab_s4_p: 'The run ends in a walk and a cool-down together. Some weeks there is more on top of it — coffee, board games, volleyball when it is warm enough.',
  ab_quote: '“All paces. All people. One community.”',
  ab_join_no: 'New here?',
  ab_join_h: 'Coming for the first time',
  ab_join_p: 'Wear whatever you run or walk in and bring water. Check Instagram on Friday for the meeting point, because it moves. When you get there, tell somebody it is your first time — that is the whole procedure.',

  /* ---- schedule ---- */
  sc_kicker: 'Schedule',
  sc_title: 'Saturdays',
  sc_lead: 'The club meets every Saturday at 09:00. The meeting point moves around Warsaw and is announced on Instagram during the week, so the dates below are fixed but some of the locations are not yet.',
  sc_next_date: 'AUG · SAT',
  sc_next_no: 'Confirmed',
  sc_next_h: 'The next one',
  sc_next_aside: 'From the Strava club event',
  sc_up_no: 'Standing slot',
  sc_up_h: 'After that',
  sc_up_aside: 'Location posted weekly',
  sc_tbd: 'Location announced on Instagram',
  sc_past_no: 'Archive',
  sc_past_h: 'Already run',
  sc_past_aside: 'From the weekly flyers',
  sc_volley: 'Beach volleyball after',
  sc_btn_ig: 'Announcements on Instagram',
  sc_btn_strava: 'Events on Strava',
  sc_note: 'Dates for 08–29 August are the club’s standing Saturday slot rather than individually announced events. Always check Instagram on Friday before travelling.',

  /* ---- gallery ---- */
  ga_kicker: 'Gallery',
  ga_title: 'Saturdays, as they were',
  ga_lead: 'Photographs taken by club members and posted to the club feed. No stock, no staging.',
  ga_note: 'More goes up every week on Instagram, including video from the runs.',
  ga_btn: 'See the feed',

  /* ---- activity ---- */
  ac_kicker: 'Recent activity',
  ac_title: 'What the club actually ran',
  ac_lead: 'Pulled from the club’s Strava feed. Every line is a real run by a real member, three kilometres and up. Athletes are listed by first name.',
  ac_kind: 'Run',
  ac_col_km: 'Distance',
  ac_col_pace: 'Pace',
  ac_col_time: 'Time',
  ac_total: 'Km logged, these runs',
  ac_runs: 'Runs listed',
  ac_range: 'Pace range /km',
  ac_members: 'Club members',
  ac_note: 'This is a snapshot of the club feed, not a live connection. Numbers were read on 28 July 2026.',
  ac_btn: 'Live feed on Strava',

  /* ---- join: faq + contact ---- */
  jn_kicker: 'FAQ',
  jn_title: 'New here? Start here',
  jn_lead: 'Everything a first-timer asks, answered plainly. If your question is not here, send a message on Instagram — somebody answers.',

  jn_q1: 'What pace do we run?',
  jn_a1: 'Whatever you bring. The group splits by pace on the spot. Runs logged by the club sit anywhere between 4:56 and 8:00 per kilometre, and both ends turn up on the same morning.',
  jn_q2: 'How far do we go?',
  jn_a2: 'Usually around 5 km.',
  jn_q4: 'What should I bring?',
  jn_a4: 'Whatever you run or walk in, and water. That is the entire kit list.',
  jn_q5: 'Is it free?',
  jn_a5: 'Yes. No membership, no fee, nothing to pay on the day.',
  jn_q6: 'Do I need to sign up?',
  jn_a6: 'No. There is no form and no list. Check Instagram on Friday for the meeting point and turn up on Saturday at 09:00.',
  jn_q7: 'Where do we meet?',
  jn_a7: 'It moves around Warsaw and is posted on Instagram during the week. Most Saturdays start at Jeff’s by Pole Mokotowskie.',
  jn_q8: 'I do not know anybody there.',
  jn_a8: 'Say it is your first time when you arrive. There are ten minutes of warm-up as one group before anyone runs anywhere — that is when you find someone to run with.',
  jn_q9: 'What happens after the run?',
  jn_a9: 'Coffee, conversation, board games, and beach volleyball when it is warm enough. Most people stay longer than they ran.',

  ct_no: 'Find us',
  ct_h: 'Come say hi before the next run',
  ct_where: 'Meeting point',
  ct_where_p: 'The exact spot is confirmed on Instagram each week. This is the corner of the city to aim for.',
  ct_when: 'When',
  ct_when_p: 'Every Saturday, 09:00. Come five minutes early if you want to work out who is who.',
  ct_talk: 'Questions',
  ct_talk_p: 'Send a message on Instagram. That is the fastest way to reach somebody in the club.',

  ro_meet_pin: 'Jeff’s · Pole Mokotowskie · Saturdays 09:00',
  ro_note: 'Map tiles © OpenStreetMap contributors.'
},

pl: {
  /* ---- chrome ---- */
  nav_home: 'Start',
  nav_about: 'O nas',
  nav_schedule: 'Terminarz',
  nav_gallery: 'Galeria',
  nav_activity: 'Aktywność',
  nav_join: 'FAQ',

  tick_1: 'Każde tempo. Wszyscy ludzie. Jedna społeczność.',
  tick_2: 'Bieg · Marsz · Integracja · Kontakt',
  tick_3: 'W każdą sobotę · 09:00',
  tick_4: 'Za darmo · Bez zapisów',

  foot_tag: 'Darmowy sobotni klub biegowy w Warszawie. Spotykamy się, biegniemy albo idziemy, zostajemy na kawę.',
  foot_explore: 'Strony',
  foot_follow: 'Obserwuj',
  foot_practical: 'Praktycznie',
  foot_p1: 'W każdą sobotę, 09:00',
  foot_p2: 'Miejsce zbiórki ogłaszamy co tydzień na Instagramie',
  foot_p3: 'Za darmo — bez członkostwa i bez zapisów',
  foot_rights: 'Zrobione przez członków klubu.',
  foot_credit: 'Biegi, tempa i mapy tras: feed klubu na Stravie. Zdjęcia: członkowie klubu.',

  /* ---- home ---- */
  h_kicker: 'Warszawa · W każdą sobotę · 09:00 · Za darmo',
  h_title: 'Każde tempo.<br>Wszyscy ludzie.<br><em>Jedna społeczność.</em>',
  h_stand: 'Spotykamy się w sobotę o dziewiątej, biegniemy gdzieś po Warszawie, a potem siadamy na kawę. Najwolniejszy bieg zapisany w klubie w tym miesiącu to 8:00 na kilometr. Najszybszy — 4:56. Oba liczyły się tak samo.',
  h_btn_next: 'Najbliższy bieg',
  h_btn_join: 'Pierwszy raz? Zacznij tutaj',
  h_btn_ig: 'Instagram',

  bib_label: 'Najbliższy bieg',
  bib_day: 'Sob',
  bib_month: 'Sierpień 2026',
  bib_map_cap: 'Niedawna pętla 5,39 km wokół Pola Mokotowskiego',
  bib_meet: 'Zbiórka',
  bib_time: 'Godzina',
  bib_dist: 'Dystans',
  bib_type: 'Rodzaj',
  bib_cost: 'Koszt',
  bib_type_v: 'Bieg · Integracja · Trail',
  bib_cost_v: 'Za darmo',

  cap_hero: 'Sobotnia rozgrzewka przed biegiem — Pole Mokotowskie, Warszawa',

  /* the club's own Instagram bio, five lines, emoji removed */
  bio_1: 'Każdy poziom mile widziany',
  bio_2: 'Klub biegowy w Warszawie',
  bio_3: 'Szczegóły co tydzień',
  bio_4: 'Bieganie i gry towarzyskie',
  bio_5: 'Za darmo — bez zapisów',

  /* fact strip, straight under the hero */
  f_day: 'Dzień zbiórki',
  f_time: 'Start',
  f_cost: 'Wejście',
  f_cost_v: 'Za darmo',

  /* where the club lives between Saturdays */
  so_no: 'Bądźmy w kontakcie',
  so_h: 'Dołącz do nas wszędzie indziej',
  so_p: 'Wszystko pomiędzy sobotami dzieje się w tych trzech miejscach. Wszystkie są otwarte — bez zatwierdzania i bez listy oczekujących.',
  so_ig_p: 'Tu co tydzień pojawia się miejsce zbiórki, a do tego zdjęcia i wideo z biegów.',
  so_st_p: 'Feed klubu — każda trasa, dystans i tempo, które ekipa zapisuje.',
  so_wa_p: 'Czat grupowy. Zapytaj o cokolwiek albo po prostu napisz, że przyjdziesz w sobotę.',
  so_go: 'Otwórz',

  gal_no: 'Ostatnie soboty',
  gal_h: 'Jak to wygląda',
  gal_btn: 'Otwórz galerię',

  cta_h: 'Sobota.<br>09:00.<br>Po prostu przyjdź.',
  cta_p: 'Bez formularza, bez opłaty, bez minimalnego tempa. Weź wodę. Jeśli jesteś pierwszy raz — powiedz to na miejscu, ktoś pobiegnie z tobą.',
  cta_btn_place: 'Gdzie się spotykamy',
  cta_btn_join: 'Pierwszy raz? Zacznij tutaj',
  cta_btn_ig: 'Instagram',

  /* ---- about ---- */
  ab_kicker: 'O nas',
  ab_title: 'Kim jesteśmy',
  ab_lead: 'Pacers Community to darmowy klub biegowy w Warszawie. Nie ma członkostwa, nie ma trenera, nie ma opłat.',
  ab_p2: 'Ekipa jest mieszana i międzynarodowa — ludzie z Warszawy i sporo osób, które się tu przeprowadziły i potrzebowały powodu, żeby w sobotę rano być na dworze wśród ludzi. I o to w tym klubie głównie chodzi. Bieganie to pretekst; sedno jest w tym, co dzieje się potem.',
  ab_how_h: 'Jak wygląda sobota',
  ab_s1_h: 'Zbiórka o dziewiątej',
  ab_s1_p: 'Wszyscy schodzą się w miejscu ogłoszonym w danym tygodniu. Przyjdź pięć minut wcześniej, jeśli chcesz się rozeznać, kto jest kto.',
  ab_s2_h: 'Wspólna rozgrzewka',
  ab_s2_p: 'Dziesięć minut ćwiczeń całą grupą, zanim ktokolwiek gdziekolwiek pobiegnie. To też moment, w którym znajdujesz kogoś do biegania.',
  ab_s3_h: 'Biegnij',
  ab_s3_p: 'Grupa rozdziela się na tempa. Każdy biegnie w tempie, które jest dla niego komfortowe — nikt nikogo nie goni.',
  ab_s4_h: 'Marsz i rozciąganie',
  ab_s4_p: 'Bieg kończy się wspólnym marszem i schłodzeniem. W niektóre tygodnie dochodzi coś jeszcze — kawa, planszówki albo siatkówka, jak jest dość ciepło.',
  ab_quote: '„Każde tempo. Wszyscy ludzie. Jedna społeczność.”',
  ab_join_no: 'Pierwszy raz?',
  ab_join_h: 'Przychodzisz pierwszy raz',
  ab_join_p: 'Ubierz to, w czym biegasz albo chodzisz, i weź wodę. W piątek sprawdź Instagram, bo miejsce zbiórki się zmienia. Na miejscu powiedz komuś, że jesteś pierwszy raz — to cała procedura.',

  /* ---- schedule ---- */
  sc_kicker: 'Terminarz',
  sc_title: 'Soboty',
  sc_lead: 'Klub spotyka się w każdą sobotę o 09:00. Miejsce zbiórki krąży po Warszawie i jest ogłaszane na Instagramie w ciągu tygodnia — dlatego daty poniżej są pewne, a część lokalizacji jeszcze nie.',
  sc_next_date: 'SIE · SOB',
  sc_next_no: 'Potwierdzone',
  sc_next_h: 'Najbliższy',
  sc_next_aside: 'Z wydarzenia klubowego na Stravie',
  sc_up_no: 'Stały termin',
  sc_up_h: 'A potem',
  sc_up_aside: 'Miejsce ogłaszane co tydzień',
  sc_tbd: 'Miejsce ogłoszone na Instagramie',
  sc_past_no: 'Archiwum',
  sc_past_h: 'Już przebiegnięte',
  sc_past_aside: 'Z cotygodniowych plakatów',
  sc_volley: 'Po biegu siatkówka plażowa',
  sc_btn_ig: 'Ogłoszenia na Instagramie',
  sc_btn_strava: 'Wydarzenia na Stravie',
  sc_note: 'Terminy 08–29 sierpnia to stały sobotni slot klubu, a nie osobno ogłoszone wydarzenia. Zawsze sprawdź Instagram w piątek, zanim gdziekolwiek pojedziesz.',

  /* ---- gallery ---- */
  ga_kicker: 'Galeria',
  ga_title: 'Soboty, tak jak było',
  ga_lead: 'Zdjęcia zrobione przez członków klubu i wrzucone na klubowy feed. Żadnych stocków, żadnej ustawki.',
  ga_note: 'Co tydzień dochodzi więcej — na Instagramie, razem z wideo z biegów.',
  ga_btn: 'Zobacz feed',

  /* ---- activity ---- */
  ac_kicker: 'Ostatnia aktywność',
  ac_title: 'Co klub naprawdę przebiegł',
  ac_lead: 'Zaciągnięte z klubowego feedu na Stravie. Każda linijka to prawdziwy bieg prawdziwego członka klubu, od trzech kilometrów w górę. Zawodnicy podpisani samym imieniem.',
  ac_kind: 'Bieg',
  ac_col_km: 'Dystans',
  ac_col_pace: 'Tempo',
  ac_col_time: 'Czas',
  ac_total: 'Km w tych biegach',
  ac_runs: 'Biegów na liście',
  ac_range: 'Zakres tempa /km',
  ac_members: 'Członków klubu',
  ac_note: 'To zrzut klubowego feedu, a nie połączenie na żywo. Dane odczytane 28 lipca 2026.',
  ac_btn: 'Feed na żywo na Stravie',

  /* ---- join: faq + contact ---- */
  jn_kicker: 'FAQ',
  jn_title: 'Pierwszy raz? Zacznij tutaj',
  jn_lead: 'Wszystko, o co pyta ktoś, kto przychodzi pierwszy raz — bez owijania. Jeśli twojego pytania tu nie ma, napisz na Instagramie, ktoś odpowie.',

  jn_q1: 'W jakim tempie biegamy?',
  jn_a1: 'W takim, w jakim przyjdziesz. Grupa dzieli się na tempa na miejscu. Biegi zapisane przez klub mieszczą się między 4:56 a 8:00 na kilometr i obie skrajności pojawiają się tego samego ranka.',
  jn_q2: 'Jak daleko biegniemy?',
  jn_a2: 'Zwykle około 5 km.',
  jn_q4: 'Co zabrać?',
  jn_a4: 'To, w czym biegasz albo chodzisz, i wodę. Na tym kończy się lista.',
  jn_q5: 'Czy to za darmo?',
  jn_a5: 'Tak. Bez członkostwa, bez opłat, nic się nie płaci na miejscu.',
  jn_q6: 'Czy trzeba się zapisać?',
  jn_a6: 'Nie. Nie ma formularza ani listy. Sprawdź Instagram w piątek, gdzie zbiórka, i przyjdź w sobotę o 09:00.',
  jn_q7: 'Gdzie się spotykamy?',
  jn_a7: 'Miejsce krąży po Warszawie i pojawia się na Instagramie w ciągu tygodnia. Większość sobót zaczyna się u Jeffa przy Polu Mokotowskim.',
  jn_q8: 'Nikogo tam nie znam.',
  jn_a8: 'Powiedz na miejscu, że jesteś pierwszy raz. Zanim ktokolwiek gdziekolwiek pobiegnie, jest dziesięć minut wspólnej rozgrzewki — wtedy właśnie znajdujesz kogoś do biegania.',
  jn_q9: 'Co się dzieje po biegu?',
  jn_a9: 'Kawa, rozmowy, planszówki, a jak dość ciepło — siatkówka plażowa. Większość osób zostaje dłużej, niż biegła.',

  ct_no: 'Znajdź nas',
  ct_h: 'Zagadaj przed najbliższym biegiem',
  ct_where: 'Miejsce zbiórki',
  ct_where_p: 'Dokładne miejsce potwierdzamy co tydzień na Instagramie. To jest ten róg miasta, w który należy celować.',
  ct_when: 'Kiedy',
  ct_when_p: 'W każdą sobotę o 09:00. Przyjdź pięć minut wcześniej, jeśli chcesz się rozeznać, kto jest kto.',
  ct_talk: 'Pytania',
  ct_talk_p: 'Napisz na Instagramie. To najszybszy sposób, żeby złapać kogoś z klubu.',

  ro_meet_pin: 'Jeff’s · Pole Mokotowskie · soboty 09:00',
  ro_note: 'Kafelki map © autorzy OpenStreetMap.'
}

};

/* --------------------------------------------------------------------------- */

const LANGS = ['en', 'pl'];

function currentLang() {
  const saved = localStorage.getItem('pacers-lang');
  if (LANGS.includes(saved)) return saved;
  return (navigator.language || '').toLowerCase().startsWith('pl') ? 'pl' : 'en';
}

function applyLang(lang) {
  if (!LANGS.includes(lang)) lang = 'en';
  const dict = I18N[lang];

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const v = dict[el.dataset.i18n];
    if (v !== undefined) el.innerHTML = v;
  });

  document.documentElement.lang = lang;
  localStorage.setItem('pacers-lang', lang);
  document.querySelectorAll('.lang button').forEach(b => {
    b.setAttribute('aria-pressed', String(b.dataset.lang === lang));
  });
  document.dispatchEvent(new CustomEvent('langchange', { detail: { lang, dict } }));
}

function t(key) {
  const d = I18N[currentLang()];
  return (d && d[key]) || I18N.en[key] || key;
}
