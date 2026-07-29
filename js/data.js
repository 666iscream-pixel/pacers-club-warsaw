/* =============================================================================
   Real club data.
   Runs: Strava club "Pacersclub Warsaw" (id 2102616), recent activity feed,
   read 2026-07-28. Only runs of 3 km or more are kept; athletes are listed
   by first name only.
   Events: Strava club events + the weekly flyers on @pacersclub_warsaw.
   Nothing here is invented — if a field is unknown it is left out.
   ============================================================================= */

const CLUB = {
  instagram: 'https://www.instagram.com/pacersclub_warsaw/',
  strava: 'https://www.strava.com/clubs/2102616',
  stravaFeed: 'https://www.strava.com/clubs/2102616/recent_activity',
  members: 27,
  followers: 260,
  // Jeff's, Żwirki i Wigury 32 — the regular meeting point (confirmed on Google Maps)
  meetPoint: [52.2109634, 20.9891289]
};

/* Logged runs, 3 km and up. km / pace per km / elapsed time. */
const RUNS = [
  { who: 'Jaelmir',            km: 14.50, pace: '5:02', time: '1h 12m'  },
  { who: 'Kacper',             km: 10.00, pace: '7:26', time: '1h 14m'  },
  { who: 'Jean Kelsy',         km: 5.39,  pace: '5:41', time: '30m 41s' },
  { who: 'Prabhu',             km: 10.16, pace: '6:10', time: '1h 02m'  },
  { who: 'Jaelmir',            km: 5.47,  pace: '5:17', time: '28m 54s' },
  { who: 'Michalina',          km: 3.01,  pace: '7:38', time: '22m 59s' },
  { who: 'Jaelmir',            km: 19.00, pace: '5:10', time: '1h 38m'  },
  { who: 'Tadiwa + Gugulethu', km: 5.01,  pace: '6:48', time: '34m 08s' },
  { who: 'Jaelmir',            km: 16.11, pace: '4:56', time: '1h 19m'  },
  { who: 'Tapiwa',             km: 5.53,  pace: '8:00', time: '44m 15s' },
  { who: 'Gugulethu',          km: 10.55, pace: '6:32', time: '1h 08m'  },
  { who: 'Leo + Daniel',       km: 5.22,  pace: '5:38', time: '29m 26s' },
  { who: 'Kacper',             km: 5.00,  pace: '5:34', time: '27m 50s' }
];

/* Saturdays. `confirmed` = announced by the club; `recurring` = the standing
   9:00 Saturday slot, with the location posted weekly on Instagram. */
const EVENTS = [
  { d: '2026-08-01', day: '01', mo: 'AUG', place: "Jeff's, Warsaw", km: '5.0 km',
    kind: 'confirmed', src: 'strava' },
  { d: '2026-08-08', day: '08', mo: 'AUG', place: null, km: null, kind: 'recurring' },
  { d: '2026-08-15', day: '15', mo: 'AUG', place: null, km: null, kind: 'recurring' },
  { d: '2026-08-22', day: '22', mo: 'AUG', place: null, km: null, kind: 'recurring' },
  { d: '2026-08-29', day: '29', mo: 'AUG', place: null, km: null, kind: 'recurring' }
];

/* Past runs, taken from the weekly flyers posted on Instagram. */
const PAST = [
  { day: '25', mo: 'JUL', place: "Jeff's, Pole Mokotowskie" },
  { day: '18', mo: 'JUL', place: "Jeff's, Pole Mokotowskie" },
  { day: '11', mo: 'JUL', place: "Jeff's, Pole Mokotowskie" },
  { day: '04', mo: 'JUL', place: "Jeff's Heart, Warsaw" },
  { day: '27', mo: 'JUN', place: "Jeff's Heart, Warsaw", note: 'volley' },
  { day: '20', mo: 'JUN', place: "Jeff's Heart, Warsaw" }
];
