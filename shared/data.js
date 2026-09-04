/* ============================================================
   PAGEO Navigator — mock operational data (04 Sep 2026, WIB)
   Shared by web + mobile pages. Example data, not real records.
   ============================================================ */
window.DATA = {
  now: '04 Sep 2026 · 15:42 WIB',
  kpis: {
    people: { onOperation: 128, accounted: 121, offline: 7, onSite: 96, offshore: 41, transit: 12, alert: 2 },
    assets: { total: 684, available: 481, deployed: 142, transit: 27, maintenance: 18, missing: 3, unassigned: 13, mobilizedToday: 12 },
    alerts: { open: 3, p1: 1, p2: 0, p3: 2, p4: 0, ackToday: 11, mtta: '4 min 12 s' },
    devices: { mobile: 135, mobileReporting: 128, mobileOffline: 7, readers: 12, readersOnline: 11, readersOffline: 1 },
    projects: { active: 7, offshore: 3, onshore: 4 }
  },
  projects: [
    { id: 'alpha', name: 'Project Alpha', type: 'Offshore Construction Survey', status: 'Offshore', kind: 'info', vessel: 'MV PAGEO 02', site: 'Offshore Work Area A', people: [24, 26], assets: 47, alerts: 1, start: '04 Sep', end: '18 Sep', last: '15:42', pm: 'Andi Pratama', client: 'PT Pertamina Hulu Energi' },
    { id: 'bravo', name: 'Project Bravo', type: 'Pipeline Inspection ROV', status: 'Offshore', kind: 'info', vessel: 'MV PAGEO 01', site: 'KP 12–38', people: [18, 18], assets: 31, alerts: 0, start: '28 Aug', end: '12 Sep', last: '15:41', pm: 'Rina Kartika' },
    { id: 'charlie', name: 'Project Charlie', type: 'Port Bathymetry', status: 'Mobilizing', kind: 'warn', vessel: '—', site: 'Tanjung Priok', people: [9, 12], assets: 22, alerts: 2, start: '05 Sep', end: '09 Sep', last: '15:22', pm: 'Dimas Prasetyo' },
    { id: 'delta', name: 'Project Delta', type: 'Geotechnical Site Investigation', status: 'Planned', kind: 'unknown', vessel: 'MV PAGEO 03', site: 'Natuna Block B', people: [0, 14], assets: 6, alerts: 0, start: '08 Sep', end: '30 Sep', last: '12:10', pm: 'Sari Dewi' },
    { id: 'echo', name: 'Project Echo', type: 'Cable Route Survey', status: 'Demobilizing', kind: 'transit', vessel: 'MV PAGEO 03', site: 'Karimun–Batam', people: [6, 6], assets: 19, alerts: 0, start: '20 Aug', end: '03 Sep', last: '14:55', pm: 'Yoga Hartono' },
    { id: 'foxtrot', name: 'Project Foxtrot', type: 'Jetty Positioning', status: 'Onshore', kind: 'ok', vessel: '—', site: 'Cilegon Jetty 2', people: [4, 4], assets: 9, alerts: 0, start: '01 Sep', end: '06 Sep', last: '15:30', pm: 'Rina Kartika' },
    { id: 'golf', name: 'Project Golf', type: 'Subsea Inspection', status: 'Offshore', kind: 'info', vessel: 'Client vessel', site: 'Madura Strait', people: [5, 5], assets: 12, alerts: 0, start: '30 Aug', end: '10 Sep', last: '15:38', pm: 'Dimas Prasetyo' },
    { id: 'base', name: 'Base — Jakarta', type: 'Warehouse & workshop', status: 'Onshore', kind: 'ok', vessel: '—', site: 'PAGEO Base', people: [38, 38], assets: 481, alerts: 0, start: '—', end: '—', last: '15:42', pm: 'Warehouse' }
  ],
  people: [
    { id: 'PG-0142', name: 'Fahmi Syaban', role: 'Survey Engineer', dept: 'Survey', project: 'Alpha', location: 'MV PAGEO 02', status: 'Active', kind: 'ok', fresh: ['live', '12 sec ago'], last: '15:42:16', batt: 76, acc: 7 },
    { id: 'PG-0087', name: 'Andi Pratama', role: 'Surveyor', dept: 'Survey', project: 'Alpha', location: 'MV PAGEO 02', status: 'Active', kind: 'ok', fresh: ['live', '20 sec ago'], last: '15:42:01', batt: 64, acc: 9 },
    { id: 'PG-0113', name: 'Rizky Hakim', role: 'ROV Pilot', dept: 'Subsea', project: 'Alpha', location: 'Restricted Zone', status: 'Alert', kind: 'crit', fresh: ['live', '24 sec ago'], last: '15:41:52', batt: 41, acc: 11 },
    { id: 'PG-0154', name: 'Agus Setiawan', role: 'Engineer', dept: 'Equipment', project: 'Alpha', location: 'Warehouse', status: 'Idle', kind: 'warn', fresh: ['recent', '3 min ago'], last: '15:39:10', batt: 88, acc: 6 },
    { id: 'PG-0201', name: 'Budi Santoso', role: 'Technician', dept: 'Equipment', project: 'Charlie', location: '—', status: 'Offline', kind: 'off', fresh: ['offline', '1 h 22 m'], last: '14:20:44', batt: 12, acc: null },
    { id: 'PG-0066', name: 'Rina Kartika', role: 'Party Chief', dept: 'Survey', project: 'Bravo', location: 'MV PAGEO 01', status: 'Offshore', kind: 'info', fresh: ['live', '8 sec ago'], last: '15:42:20', batt: 71, acc: 8 },
    { id: 'PG-0178', name: 'Dimas Prasetyo', role: 'Project Manager', dept: 'Operations', project: 'Charlie', location: 'Port Tanjung Priok', status: 'On Site', kind: 'info', fresh: ['live', '40 sec ago'], last: '15:41:38', batt: 55, acc: 14 },
    { id: 'PG-0190', name: 'Sari Dewi', role: 'QHSE Officer', dept: 'QHSE', project: 'Base', location: 'PAGEO Base', status: 'Active', kind: 'ok', fresh: ['live', '15 sec ago'], last: '15:42:05', batt: 92, acc: 5 },
    { id: 'PG-0212', name: 'Yoga Hartono', role: 'ROV Supervisor', dept: 'Subsea', project: 'Bravo', location: 'MV PAGEO 01', status: 'Offshore', kind: 'info', fresh: ['recent', '2 min ago'], last: '15:40:11', batt: 48, acc: 10 },
    { id: 'PG-0233', name: 'Putri Anggraini', role: 'Data Processor', dept: 'Survey', project: 'Alpha', location: 'MV PAGEO 02', status: 'Active', kind: 'ok', fresh: ['live', '30 sec ago'], last: '15:41:48', batt: 80, acc: 7 },
    { id: 'PG-0245', name: 'Hendra Wijaya', role: 'Deck Technician', dept: 'Equipment', project: 'Charlie', location: 'Dispatch Gate', status: 'In Transit', kind: 'transit', fresh: ['recent', '4 min ago'], last: '15:38:02', batt: 35, acc: 18 },
    { id: 'PG-0259', name: 'Maya Lestari', role: 'Warehouse Lead', dept: 'Equipment', project: 'Base', location: 'Warehouse', status: 'Active', kind: 'ok', fresh: ['live', '10 sec ago'], last: '15:42:12', batt: 67, acc: 4 }
  ],
  assets: [
    { id: 'MBES-03', desc: 'Multibeam Echo Sounder', cat: 'Survey', project: 'Alpha', location: 'MV PAGEO 02', custodian: 'Fahmi Syaban', last: '15:37', reader: 'RD-11 Vessel Deck', status: 'Deployed', kind: 'info', cal: '18 Dec 2026', rfid: 'E280-11-8829184' },
    { id: 'MBES-001', desc: 'Multibeam Echo Sounder', cat: 'Survey', project: 'Alpha', location: 'MV PAGEO 02', custodian: 'Andi Pratama', last: '15:41', reader: 'RD-11 Vessel Deck', status: 'Deployed', kind: 'info', cal: '02 Nov 2026', rfid: 'E280-11-8829102' },
    { id: 'ROV-T27-04', desc: 'ROV Tooling Skid', cat: 'ROV', project: 'Bravo', location: 'Offshore', custodian: 'Yoga Hartono', last: '15:37', reader: 'RD-21 MV PAGEO 01', status: 'Deployed', kind: 'info', cal: '—', rfid: 'E280-11-8830411' },
    { id: 'GPS-042', desc: 'GNSS Receiver', cat: 'Positioning', project: '—', location: 'Warehouse', custodian: 'Maya Lestari', last: '15:22', reader: 'RD-01 Warehouse Gate A', status: 'Available', kind: 'ok', cal: '14 Jan 2027', rfid: 'E280-11-8829420' },
    { id: 'SONAR-012', desc: 'Side Scan Sonar', cat: 'Survey', project: 'Charlie', location: 'Unknown', custodian: 'Budi Santoso', last: '2 days', reader: 'RD-02 Dispatch Gate', status: 'Alert', kind: 'crit', cal: '30 Sep 2026', rfid: 'E280-11-8829377' },
    { id: 'GPS-029', desc: 'GNSS Receiver', cat: 'Positioning', project: 'Alpha', location: 'MV PAGEO 02', custodian: 'Andi Pratama', last: '15:40', reader: 'RD-11 Vessel Deck', status: 'Deployed', kind: 'info', cal: '14 Jan 2027', rfid: 'E280-11-8829290' },
    { id: 'Laptop-SV029', desc: 'Acquisition Laptop', cat: 'IT', project: 'Alpha', location: 'MV PAGEO 02', custodian: 'Andi Pratama', last: '15:41', reader: 'RD-12 Vessel Hold', status: 'Deployed', kind: 'info', cal: '—', rfid: 'E280-11-8831029' },
    { id: 'Radio-012', desc: 'VHF Handheld', cat: 'Comms', project: 'Alpha', location: 'MV PAGEO 02', custodian: 'Andi Pratama', last: '15:38', reader: 'RD-11 Vessel Deck', status: 'Deployed', kind: 'info', cal: '—', rfid: 'E280-11-8830012' },
    { id: 'Gyro-01', desc: 'Gyrocompass', cat: 'Positioning', project: 'Charlie', location: 'Loading Area', custodian: 'Hendra Wijaya', last: '15:30', reader: 'RD-04 Loading Area', status: 'In Transit', kind: 'transit', cal: '05 Mar 2027', rfid: 'E280-11-8829010' },
    { id: 'SVP-07', desc: 'Sound Velocity Probe', cat: 'Survey', project: '—', location: 'Workshop', custodian: '—', last: '14:05', reader: 'RD-03 Workshop', status: 'Maintenance', kind: 'warn', cal: '18 Sep 2026', rfid: 'E280-11-8829707' },
    { id: 'MAG-02', desc: 'Magnetometer', cat: 'Survey', project: '—', location: 'Warehouse', custodian: 'Maya Lestari', last: '15:12', reader: 'RD-01 Warehouse Gate A', status: 'Available', kind: 'ok', cal: '11 Nov 2026', rfid: 'E280-11-8829202' },
    { id: 'Cable Set-07', desc: 'Deck Cable Set 50 m', cat: 'Power', project: 'Charlie', location: 'Warehouse', custodian: 'Hendra Wijaya', last: '14:05', reader: 'RD-01 Warehouse Gate A', status: 'In Transit', kind: 'transit', cal: '—', rfid: 'E280-11-8830707' }
  ],
  vessels: [
    { id: 'pageo-01', name: 'MV PAGEO 01', project: 'Bravo', status: 'Offshore', kind: 'info', people: 8, assets: 11, pos: '-5.9123, 106.7512', heading: '214°', speed: '3.2 kn', readers: '2 / 2', ais: '15:41' },
    { id: 'pageo-02', name: 'MV PAGEO 02', project: 'Alpha', status: 'On site', kind: 'info', people: 12, assets: 18, pos: '-6.1874, 106.8272', heading: '096°', speed: '0.4 kn', readers: '2 / 2', ais: '15:42' },
    { id: 'pageo-03', name: 'MV PAGEO 03', project: 'Delta (planned)', status: 'Alongside', kind: 'ok', people: 0, assets: 6, pos: '-6.1044, 106.8836', heading: '—', speed: '0.0 kn', readers: '1 / 1', ais: '15:40' }
  ],
  alerts: [
    { id: 'a1', sev: 1, title: 'SOS signal received', when: '24 sec ago', time: '15:38:24', who: 'Rizky Hakim', role: 'ROV Pilot', project: 'Alpha', zone: 'Restricted Zone', type: 'Human', meta: ['Employee <b>Rizky Hakim</b> · ROV Pilot', 'Project Alpha · Restricted Zone · 15:38 WIB'] },
    { id: 'a2', sev: 3, title: 'Asset not seen for 2 days', when: '2 min ago', time: '15:40:02', who: 'SONAR-012', project: 'Charlie', type: 'Asset', meta: ['<b>SONAR-012</b> · Side Scan Sonar · Project Charlie', 'Last reader: Gate 02 · 02 Sep 15:22'], actions: false },
    { id: 'a3', sev: 3, title: 'No location update > 30 min', when: '11 min ago', time: '15:31:10', who: 'Budi Santoso', project: 'Charlie', type: 'Human', meta: ['<b>Budi Santoso</b> · Technician · Project Charlie', 'Last position 14:20 · Device offline'], actions: false },
    { id: 'a4', sev: 2, title: 'Unauthorized personnel entered Restricted Zone', when: '38 min ago', time: '15:04:51', who: 'Hendra Wijaya', project: 'Charlie', type: 'Human', meta: ['<b>Hendra Wijaya</b> · Deck Technician', 'Acknowledged by Sari Dewi (QHSE) · 15:07'], actions: false, acked: true },
    { id: 'a5', sev: 4, title: 'Calibration expiring — SVP-07 in 14 days', when: '2 h ago', time: '13:30:00', who: 'SVP-07', project: '—', type: 'Asset', meta: ['<b>SVP-07</b> · Sound Velocity Probe', 'Calibration valid to 18 Sep 2026'], actions: false },
    { id: 'a6', sev: 4, title: 'RFID reader RD-07 offline', when: '2 h 14 m ago', time: '13:28:12', who: 'RD-07', project: '—', type: 'Asset', meta: ['<b>RD-07</b> · Port Gate reader', 'Last heartbeat 13:28 · gateway timeout'], actions: false }
  ],
  activity: [
    { time: '15:42', icon: 'user', html: '<b>Fahmi Syaban</b> position updated on MV PAGEO 02', sub: 'accuracy ± 7 m', tag: 'Live', tagKind: 'ok', tagDot: true },
    { time: '15:42', icon: 'ship', html: '<b>Andi Pratama</b> entered geofence <b>Vessel — MV PAGEO 02</b>', tag: 'Geofence', tagKind: 'info' },
    { time: '15:39', icon: 'diamond', html: '<b>MBES-001</b> detected at <b>Loading Zone</b> reader RD-04', tag: 'RFID', tagKind: 'transit' },
    { time: '15:38', icon: 'siren', html: '<b>SOS</b> received from <b>Rizky Hakim</b> · Restricted Zone', tag: 'P1', tagKind: 'crit', tagDot: true },
    { time: '15:31', icon: 'link', html: '<b>GPS-022</b> assigned to <b>Project Alpha</b> by Ops Manager', tag: 'Assignment', tagKind: 'neutral' },
    { time: '15:22', icon: 'truck', html: 'Mobilization <b>Project Charlie</b> · 27 / 28 equipment scanned at Dispatch Gate', tag: '1 pending', tagKind: 'warn' },
    { time: '14:20', icon: 'wifioff', html: '<b>Budi Santoso</b> device offline · last seen Base Jakarta', tag: 'Offline', tagKind: 'off', tagDot: true }
  ],
  readers: [
    { id: 'RD-01', loc: 'Warehouse Gate A', online: true, last: '15:42' }, { id: 'RD-02', loc: 'Dispatch Gate', online: true, last: '15:41' }, { id: 'RD-03', loc: 'Workshop', online: true, last: '15:40' },
    { id: 'RD-04', loc: 'Loading Area', online: true, last: '15:39' }, { id: 'RD-05', loc: 'Port Jetty 3', online: true, last: '15:42' }, { id: 'RD-07', loc: 'Port Gate', online: false, last: '13:28' },
    { id: 'RD-11', loc: 'MV PAGEO 02 · Deck', online: true, last: '15:42' }, { id: 'RD-12', loc: 'MV PAGEO 02 · Hold', online: true, last: '15:41' }, { id: 'RD-21', loc: 'MV PAGEO 01 · Deck', online: true, last: '15:41' }
  ],
  zones: [
    { name: 'PAGEO Base', type: 'Base', icon: 'building', people: 38, assets: 481, kind: 'ok' }, { name: 'Warehouse', type: 'Warehouse', icon: 'warehouse', people: 6, assets: 412, kind: 'ok' },
    { name: 'Port Tanjung Priok', type: 'Port', icon: 'anchor', people: 9, assets: 22, kind: 'info' }, { name: 'Vessel — MV PAGEO 02', type: 'Vessel', icon: 'ship', people: 12, assets: 18, kind: 'info' },
    { name: 'Project Site Alpha', type: 'Project site', icon: 'pin', people: 20, assets: 42, kind: 'info' }, { name: 'Offshore Work Area', type: 'Work area', icon: 'waves', people: 41, assets: 60, kind: 'info' },
    { name: 'Restricted Area', type: 'Restricted', icon: 'warning', people: 1, assets: 0, kind: 'crit' }, { name: 'Muster Point A / B', type: 'Muster', icon: 'flag', people: 0, assets: 0, kind: 'ok' }
  ],
  me: { name: 'Fahmi Syaban', first: 'Fahmi', id: 'PG-0142', role: 'Survey Engineer', project: 'Offshore Survey Alpha', vessel: 'MV Pageo 02', supervisor: 'Andi Pratama', muster: 'Point B · Deck 2', started: '08:03', battery: 82, acc: 7, lat: '-6.18746', lng: '106.82721',
    assets: [{ id: 'MBES-03', desc: 'Multibeam Echo Sounder' }, { id: 'GPS-14', desc: 'GNSS Receiver' }, { id: 'Radio-021', desc: 'VHF Handheld' }],
    today: [{ time: '08:02', kind: 'ok', text: 'Operation started', sub: 'Jakarta Base' }, { time: '08:24', kind: 'info', text: 'Entered Base', sub: 'Geofence · PAGEO Base' }, { time: '10:18', kind: 'transit', text: 'Mobilized', sub: '3 / 3 equipment scanned' }, { time: '11:20', kind: 'info', text: 'Boarded MV Pageo 02', sub: 'Port Tanjung Priok' }, { time: '13:05', kind: 'ok', text: 'Check-in confirmed', sub: 'Project Site Alpha' }, { time: '15:42', kind: 'ok', text: 'Position updated', sub: '± 7 m · Live' }]
  }
};
