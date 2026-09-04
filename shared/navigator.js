/* ============================================================
   PAGEO Navigator — shared shell, icons, map painter, behaviors
   Works on document.body or any root element passed to PN.init()
   ============================================================ */
(function () {
  const PN = (window.PN = window.PN || {});

  /* ---------- Icons (Lucide, 24 grid, 1.75 stroke) ---------- */
  const I = {
    user: '<circle cx="12" cy="8" r="5"/><path d="M20 21a8 8 0 0 0-16 0"/>',
    users: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
    diamond: '<path d="M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41l-7.59-7.59a2.41 2.41 0 0 0-3.41 0Z"/>',
    ship: '<path d="M12 10.189V14"/><path d="M12 2v3"/><path d="M19 13V7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v6"/><path d="M19.38 20A11.6 11.6 0 0 0 21 14l-8.188-3.639a2 2 0 0 0-1.624 0L3 14a11.6 11.6 0 0 0 2.81 7.76"/><path d="M2 21c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1s1.2 1 2.5 1c2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/>',
    pin: '<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/>',
    scan: '<path d="M3 7V5a2 2 0 0 1 2-2h2"/><path d="M17 3h2a2 2 0 0 1 2 2v2"/><path d="M21 17v2a2 2 0 0 1-2 2h-2"/><path d="M7 21H5a2 2 0 0 1-2-2v-2"/>',
    scanline: '<path d="M3 7V5a2 2 0 0 1 2-2h2"/><path d="M17 3h2a2 2 0 0 1 2 2v2"/><path d="M21 17v2a2 2 0 0 1-2 2h-2"/><path d="M7 21H5a2 2 0 0 1-2-2v-2"/><path d="M7 12h10"/>',
    radio: '<path d="M4.9 19.1C1 15.2 1 8.8 4.9 4.9"/><path d="M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5"/><circle cx="12" cy="12" r="2"/><path d="M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5"/><path d="M19.1 4.9C23 8.8 23 15.1 19.1 19"/>',
    nfc: '<path d="M6 8.32a7.43 7.43 0 0 1 0 7.36"/><path d="M9.46 6.21a11.76 11.76 0 0 1 0 11.58"/><path d="M12.91 4.1a15.91 15.91 0 0 1 .01 15.8"/><path d="M16.37 2a20.16 20.16 0 0 1 0 20"/>',
    shield: '<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/>',
    shieldcheck: '<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/>',
    bell: '<path d="M10.268 21a2 2 0 0 0 3.464 0"/><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"/>',
    box: '<path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/>',
    file: '<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/>',
    chart: '<path d="M3 3v16a2 2 0 0 0 2 2h16"/><path d="m19 9-5 5-4-4-3 3"/>',
    barchart: '<path d="M3 3v16a2 2 0 0 0 2 2h16"/><path d="M7 16v-5"/><path d="M12 16V8"/><path d="M17 16v-3"/>',
    settings: '<path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/>',
    search: '<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',
    layers: '<path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"/><path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"/><path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"/>',
    check: '<path d="M20 6 9 17l-5-5"/>',
    checkcircle: '<circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/>',
    xcircle: '<circle cx="12" cy="12" r="10"/><path d="m15 9-6 6"/><path d="m9 9 6 6"/>',
    warning: '<path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/><path d="M12 9v4"/><path d="M12 17h.01"/>',
    alert: '<circle cx="12" cy="12" r="10"/><path d="M12 8v4"/><path d="M12 16h.01"/>',
    info: '<circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/>',
    battery: '<rect width="16" height="10" x="2" y="7" rx="2" ry="2"/><line x1="22" x2="22" y1="11" y2="13"/><line x1="6" x2="6" y1="11" y2="13"/><line x1="10" x2="10" y1="11" y2="13"/>',
    wifi: '<path d="M12 20h.01"/><path d="M2 8.82a15 15 0 0 1 20 0"/><path d="M5 12.859a10 10 0 0 1 14 0"/><path d="M8.5 16.429a5 5 0 0 1 7 0"/>',
    wifioff: '<path d="M12 20h.01"/><path d="M8.5 16.429a5 5 0 0 1 7 0"/><path d="M5 12.859a10 10 0 0 1 5.17-2.69"/><path d="M19 12.859a10 10 0 0 0-2.007-1.523"/><path d="M2 8.82a15 15 0 0 1 4.177-2.643"/><path d="M22 8.82a15 15 0 0 0-11.288-3.764"/><path d="m2 2 20 20"/>',
    signal: '<path d="M2 20h.01"/><path d="M7 20v-4"/><path d="M12 20v-8"/><path d="M17 20V8"/><path d="M22 4v16"/>',
    refresh: '<path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/><path d="M8 16H3v5"/>',
    home: '<path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"/><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>',
    map: '<path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z"/><path d="M15 5.764v15"/><path d="M9 3.236v15"/>',
    activity: '<path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"/>',
    clock: '<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',
    history: '<path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/><path d="M12 7v5l4 2"/>',
    chevronright: '<path d="m9 18 6-6-6-6"/>',
    chevronleft: '<path d="m15 18-6-6 6-6"/>',
    chevrondown: '<path d="m6 9 6 6 6-6"/>',
    chevronsupdown: '<path d="m7 15 5 5 5-5"/><path d="m7 9 5-5 5 5"/>',
    arrowright: '<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>',
    arrowleft: '<path d="m12 19-7-7 7-7"/><path d="M19 12H5"/>',
    arrowup: '<path d="m5 12 7-7 7 7"/><path d="M12 19V5"/>',
    arrowdown: '<path d="M12 5v14"/><path d="m19 12-7 7-7-7"/>',
    arrowupright: '<path d="M7 7h10v10"/><path d="M7 17 17 7"/>',
    swap: '<path d="m16 3 4 4-4 4"/><path d="M20 7H4"/><path d="m8 21-4-4 4-4"/><path d="M4 17h16"/>',
    x: '<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',
    plus: '<path d="M5 12h14"/><path d="M12 5v14"/>',
    minus: '<path d="M5 12h14"/>',
    filter: '<polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/>',
    download: '<path d="M12 15V3"/><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m7 10 5 5 5-5"/>',
    upload: '<path d="M12 3v12"/><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m17 8-5-5-5 5"/>',
    more: '<circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/>',
    morev: '<circle cx="12" cy="12" r="1"/><circle cx="12" cy="5" r="1"/><circle cx="12" cy="19" r="1"/>',
    logout: '<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" x2="9" y1="12" y2="12"/>',
    login: '<path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/><polyline points="10 17 15 12 10 7"/><line x1="15" x2="3" y1="12" y2="12"/>',
    anchor: '<path d="M12 22V8"/><path d="M5 12H2a10 10 0 0 0 20 0h-3"/><circle cx="12" cy="5" r="3"/>',
    warehouse: '<path d="M22 8.35V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8.35A2 2 0 0 1 3.26 6.5l8-3.2a2 2 0 0 1 1.48 0l8 3.2A2 2 0 0 1 22 8.35Z"/><path d="M6 18h12"/><path d="M6 14h12"/><rect width="12" height="12" x="6" y="10"/>',
    navigation: '<polygon points="3 11 22 2 13 21 11 13 3 11"/>',
    compass: '<circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/>',
    crosshair: '<circle cx="12" cy="12" r="10"/><line x1="22" x2="18" y1="12" y2="12"/><line x1="6" x2="2" y1="12" y2="12"/><line x1="12" x2="12" y1="6" y2="2"/><line x1="12" x2="12" y1="22" y2="18"/>',
    locate: '<line x1="2" x2="5" y1="12" y2="12"/><line x1="19" x2="22" y1="12" y2="12"/><line x1="12" x2="12" y1="2" y2="5"/><line x1="12" x2="12" y1="19" y2="22"/><circle cx="12" cy="12" r="7"/><circle cx="12" cy="12" r="3"/>',
    phone: '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>',
    zap: '<path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/>',
    lifebuoy: '<circle cx="12" cy="12" r="10"/><path d="m4.93 4.93 4.24 4.24"/><path d="m14.83 9.17 4.24-4.24"/><path d="m14.83 14.83 4.24 4.24"/><path d="m9.17 14.83-4.24 4.24"/><circle cx="12" cy="12" r="4"/>',
    truck: '<path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"/><path d="M15 18H9"/><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"/><circle cx="17" cy="18" r="2"/><circle cx="7" cy="18" r="2"/>',
    calendar: '<path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/>',
    grid: '<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18"/><path d="M3 15h18"/><path d="M9 3v18"/><path d="M15 3v18"/>',
    list: '<path d="M3 12h.01"/><path d="M3 18h.01"/><path d="M3 6h.01"/><path d="M8 12h13"/><path d="M8 18h13"/><path d="M8 6h13"/>',
    columns: '<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M9 3v18"/><path d="M15 3v18"/>',
    eye: '<path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"/><circle cx="12" cy="12" r="3"/>',
    pencil: '<path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"/><path d="m15 5 4 4"/>',
    trash: '<path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/>',
    route: '<circle cx="6" cy="19" r="3"/><path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15"/><circle cx="18" cy="5" r="3"/>',
    link: '<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>',
    flag: '<path d="M4 22V4a1 1 0 0 1 .4-.8A6 6 0 0 1 8 2c3 0 5 2 7.333 2q2 0 3.067-.8A1 1 0 0 1 20 4v10a1 1 0 0 1-.4.8A6 6 0 0 1 16 16c-3 0-5-2-8-2a6 6 0 0 0-4 1.528"/>',
    siren: '<path d="M7 18v-6a5 5 0 1 1 10 0v6"/><path d="M5 21a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-1a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2z"/><path d="M21 12h1"/><path d="M18.5 4.5 18 5"/><path d="M2 12h1"/><path d="M12 2v1"/><path d="m4.929 4.929.707.707"/><path d="M12 12v6"/>',
    building: '<rect width="16" height="20" x="4" y="2" rx="2" ry="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M12 6h.01"/><path d="M12 10h.01"/><path d="M12 14h.01"/><path d="M16 10h.01"/><path d="M16 14h.01"/><path d="M8 10h.01"/><path d="M8 14h.01"/>',
    lock: '<rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',
    key: '<path d="m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4"/><path d="m21 2-9.6 9.6"/><circle cx="7.5" cy="15.5" r="5.5"/>',
    mail: '<rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>',
    menu: '<path d="M4 12h16"/><path d="M4 6h16"/><path d="M4 18h16"/>',
    smartphone: '<rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/>',
    tablet: '<rect width="16" height="20" x="4" y="2" rx="2" ry="2"/><path d="M12 18h.01"/>',
    monitor: '<rect width="20" height="14" x="2" y="3" rx="2"/><path d="M8 21h8"/><path d="M12 17v4"/>',
    server: '<rect width="20" height="8" x="2" y="2" rx="2" ry="2"/><rect width="20" height="8" x="2" y="14" rx="2" ry="2"/><line x1="6" x2="6.01" y1="6" y2="6"/><line x1="6" x2="6.01" y1="18" y2="18"/>',
    play: '<polygon points="6 3 20 12 6 21 6 3"/>',
    square: '<rect width="18" height="18" x="3" y="3" rx="2"/>',
    pause: '<rect x="14" y="4" width="4" height="16" rx="1"/><rect x="6" y="4" width="4" height="16" rx="1"/>',
    tag: '<path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"/><circle cx="7.5" cy="7.5" r=".5" fill="currentColor"/>',
    wrench: '<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>',
    gauge: '<path d="m12 14 4-4"/><path d="M3.34 19a10 10 0 1 1 17.32 0"/>',
    waves: '<path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/><path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/><path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/>',
    book: '<path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/>',
    externallink: '<path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>',
    hand: '<path d="M18 11V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2"/><path d="M14 10V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2"/><path d="M10 10.5V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2v8"/><path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15"/>',
    circledot: '<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="1" fill="currentColor"/>',
    circle: '<circle cx="12" cy="12" r="10"/>',
    sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/>',
    usercheck: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><polyline points="16 11 18 13 22 9"/>',
    bookmark: '<path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"/>',
    bluetooth: '<path d="m7 7 10 10-5 5V2l5 5L7 17"/>',
    clipboard: '<rect width="8" height="4" x="8" y="2" rx="1" ry="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="m9 14 2 2 4-4"/>',
    hardhat: '<path d="M2 18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v2z"/><path d="M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5"/><path d="M4 15v-3a6 6 0 0 1 6-6"/><path d="M14 6a6 6 0 0 1 6 6v3"/>',
    fingerprint: '<path d="M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4"/><path d="M14 13.12c0 2.38 0 6.38-1 8.88"/><path d="M17.29 21.02c.12-.6.43-2.3.5-3.02"/><path d="M2 12a10 10 0 0 1 18-6"/><path d="M2 16h.01"/><path d="M21.8 16c.2-2 .131-5.354 0-6"/><path d="M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 .34-2"/><path d="M8.65 22c.21-.66.45-1.32.57-2"/><path d="M9 6.8a6 6 0 0 1 9 5.2v2"/>'
  };
  PN.icons = I;
  PN.icon = function (name, cls) {
    const d = I[name] || I.circle;
    return '<i class="ic ' + (cls || '') + '" data-icon-rendered="' + name + '"><svg viewBox="0 0 24 24" aria-hidden="true">' + d + '</svg></i>';
  };
  function renderIcons(root) {
    root.querySelectorAll('[data-logo]').forEach(function (el) { el.innerHTML = PN.logoSvg(); el.removeAttribute('data-logo'); });
    root.querySelectorAll('i[data-icon]').forEach(function (el) {
      const name = el.getAttribute('data-icon');
      const d = I[name] || I.circle;
      el.classList.add('ic');
      el.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true">' + d + '</svg>';
      el.removeAttribute('data-icon');
      el.setAttribute('data-icon-rendered', name);
    });
  }

  /* ---------- Navigation model ---------- */
  PN.webNav = [
    { group: 'Operations', items: [
      { id: 'overview', label: 'Overview', icon: 'grid', href: 'overview.html' },
      { id: 'live-map', label: 'Live Map', icon: 'map', href: 'live-map.html' },
      { id: 'projects', label: 'Projects', icon: 'clipboard', href: 'projects.html' }
    ]},
    { group: 'People', items: [
      { id: 'personnel', label: 'Personnel', icon: 'users', href: 'personnel.html' },
      { id: 'mobilization', label: 'Mobilization', icon: 'truck', href: 'mobilization.html' },
      { id: 'muster', label: 'Muster', icon: 'flag', href: 'muster.html' }
    ]},
    { group: 'Assets', items: [
      { id: 'assets', label: 'Asset Registry', icon: 'diamond', href: 'assets.html' },
      { id: 'movement', label: 'Movement', icon: 'route', href: 'asset-movement.html' },
      { id: 'assignment', label: 'Assignment', icon: 'link', href: 'assignment.html' }
    ]},
    { group: 'Operations', items: [
      { id: 'locations', label: 'Locations', icon: 'pin', href: 'locations.html' },
      { id: 'vessels', label: 'Vessels', icon: 'ship', href: 'vessels.html' },
      { id: 'alerts', label: 'Alerts', icon: 'bell', href: 'alerts.html', badge: 3 }
    ]},
    { group: 'Reporting', items: [
      { id: 'reports', label: 'Reports', icon: 'file', href: 'reports.html' }
    ]},
    { group: 'System', items: [
      { id: 'admin', label: 'Administration', icon: 'settings', href: 'admin.html' }
    ]}
  ];
  PN.mobileNav = [
    { id: 'home', label: 'Home', icon: 'home', href: 'home.html' },
    { id: 'project', label: 'Project', icon: 'clipboard', href: 'project.html' },
    { id: 'map', label: 'Map', icon: 'map', href: 'map.html' },
    { id: 'activity', label: 'Activity', icon: 'activity', href: 'activity.html' },
    { id: 'profile', label: 'Profile', icon: 'user', href: 'profile.html' }
  ];

  /* ---------- Logo: the PAGEO wordmark image (shared/logo.png) ---------- */
  PN.logoUrl = window.PN_LOGO_URL || '../shared/logo.png';
  PN.logoSvg = function () { return '<img class="pageo-logo" src="' + PN.logoUrl + '" alt="PAGEO">'; };
  function logo(dark) {
    return '<div class="logo' + (dark ? ' dark' : '') + '"><span class="logo-mark">' + PN.logoSvg() + '</span><span class="logo-sub">Navigator</span></div>';
  }

  /* ---------- Web shell ---------- */
  function buildWebShell(root) {
    if (root.querySelector(':scope > .sidebar')) return;
    const active = root.getAttribute('data-nav') || '';
    const crumb = (root.getAttribute('data-crumb') || 'Global / Overview').split('/').map(function (s) { return s.trim(); });
    const page = root.querySelector('#page') || root.firstElementChild;

    let sb = '<aside class="sidebar">' + logo(false);
    PN.webNav.forEach(function (g) {
      sb += '<div class="sb-group"><div class="eyebrow">' + g.group + '</div>';
      g.items.forEach(function (it) {
        sb += '<a class="sb-item' + (it.id === active ? ' active' : '') + '" href="' + it.href + '" data-route="' + it.id + '">' + PN.icon(it.icon) + '<span>' + it.label + '</span>' + (it.badge ? '<span class="badge">' + it.badge + '</span>' : '') + '</a>';
      });
      sb += '</div>';
    });
    sb += '<div class="sb-foot"><div class="user"><span class="avatar">OM</span><div><div class="name">Operations Manager</div><div class="role">PT Pageo Utama · Jakarta</div></div></div><div class="sb-version">Navigator v1.0 · 2026</div></div></aside>';

    let cr = '<div class="crumb">';
    crumb.forEach(function (c, i) {
      cr += (i ? '<span class="sep">/</span>' : '') + '<span class="' + (i === crumb.length - 1 ? 'cur' : '') + '">' + c + '</span>';
    });
    cr += '</div>';
    const tb = '<header class="topbar">' + cr +
      '<div class="input search"><i data-icon="search"></i><input type="search" placeholder="Search people, assets, projects…" aria-label="Search"></div>' +
      '<div class="tb-actions"><span class="tb-clock" data-clock>04 Sep 2026 · 16:21 WIB</span>' +
      '<button class="icon-btn" aria-label="Notifications"><i data-icon="bell"></i><span class="pip"></span></button>' +
      '<button class="icon-btn" aria-label="Help"><i data-icon="info"></i></button>' +
      '<span class="avatar">OM</span></div></header>';

    const main = document.createElement('div');
    main.className = 'main';
    main.innerHTML = tb;
    root.insertAdjacentHTML('afterbegin', sb);
    root.appendChild(main);
    main.appendChild(page);
  }

  /* ---------- Mobile shell ---------- */
  function buildPhoneChrome(phone) {
    if (phone.hasAttribute('data-chromed')) return;
    phone.setAttribute('data-chromed', '1');
    const screen = phone.querySelector('.screen');
    if (!screen) return;
    const nav = phone.getAttribute('data-mnav');
    const time = phone.getAttribute('data-time') || '15:42';
    const offline = phone.hasAttribute('data-offline');
    const low = phone.hasAttribute('data-lowbatt');
    const status = '<div class="m-status"><span>' + time + '</span><span class="right">' +
      (offline ? PN.icon('wifioff') : PN.icon('signal')) + '<span class="batt' + (low ? ' low' : '') + '"><i></i></span></span></div>';
    screen.insertAdjacentHTML('afterbegin', '<div class="notch"></div>' + status);
    if (nav && nav !== 'none') {
      let n = '<nav class="m-nav">';
      PN.mobileNav.forEach(function (it) {
        n += '<a href="' + it.href + '" class="' + (it.id === nav ? 'active' : '') + '" data-route="' + it.id + '">' + PN.icon(it.icon) + it.label + '</a>';
      });
      n += '</nav>';
      screen.insertAdjacentHTML('beforeend', n);
    }
    screen.insertAdjacentHTML('beforeend', '<div class="home-bar"></div>');
  }

  /* ---------- Design System shell ---------- */
  PN.dsNav = [
    { group: 'Design System', items: [
      { id: 'overview', label: 'Overview', icon: 'book', href: 'overview.html' },
      { id: 'foundations', label: 'Foundations', icon: 'layers', href: 'foundations.html' },
      { id: 'components', label: 'Core Components', icon: 'grid', href: 'components.html' },
      { id: 'operational', label: 'Operational Components', icon: 'compass', href: 'operational.html' },
      { id: 'mobile', label: 'Mobile Components', icon: 'smartphone', href: 'mobile.html' },
      { id: 'patterns', label: 'Patterns & Templates', icon: 'columns', href: 'patterns.html' }
    ]}
  ];
  function buildDsShell(root) {
    if (root.querySelector(':scope > .ds-nav')) return;
    const active = root.getAttribute('data-nav') || '';
    const page = root.querySelector('#page') || root.firstElementChild;
    let nav = '<aside class="ds-nav">' + logo(true);
    PN.dsNav.forEach(function (g) {
      nav += '<div class="eyebrow">' + g.group + '</div>';
      g.items.forEach(function (it) { nav += '<a class="' + (it.id === active ? 'active' : '') + '" href="' + it.href + '" data-route="' + it.id + '">' + PN.icon(it.icon) + '<span>' + it.label + '</span></a>'; });
    });
    nav += '<div class="eyebrow" style="margin-top:auto">Demos</div><a href="../dashboard/index.html">' + PN.icon('monitor') + '<span>Web command center</span></a><a href="../mobile-app/index.html">' + PN.icon('smartphone') + '<span>Mobile field app</span></a></aside>';
    root.insertAdjacentHTML('afterbegin', nav);
    const main = document.createElement('div'); main.className = 'ds-main';
    root.appendChild(main); main.appendChild(page);
  }

  /* ---------- Map painter (procedural) ---------- */
  function smoothPath(pts, close) {
    // Catmull-Rom → cubic Bézier
    const n = pts.length;
    if (n < 2) return '';
    let d = 'M' + pts[0][0] + ',' + pts[0][1];
    for (let i = 0; i < (close ? n : n - 1); i++) {
      const p0 = pts[(i - 1 + n) % n], p1 = pts[i], p2 = pts[(i + 1) % n], p3 = pts[(i + 2) % n];
      const c1x = p1[0] + (p2[0] - p0[0]) / 6, c1y = p1[1] + (p2[1] - p0[1]) / 6;
      const c2x = p2[0] - (p3[0] - p1[0]) / 6, c2y = p2[1] - (p3[1] - p1[1]) / 6;
      d += ' C' + c1x.toFixed(1) + ',' + c1y.toFixed(1) + ' ' + c2x.toFixed(1) + ',' + c2y.toFixed(1) + ' ' + p2[0] + ',' + p2[1];
    }
    return close ? d + ' Z' : d;
  }
  function scalePts(pts, w, h) { return pts.map(function (p) { return [Math.round(p[0] * w), Math.round(p[1] * h)]; }); }
  function offsetPts(pts, dx, dy, s) {
    // crude "outer contour": scale around centroid
    let cx = 0, cy = 0; pts.forEach(function (p) { cx += p[0]; cy += p[1]; }); cx /= pts.length; cy /= pts.length;
    return pts.map(function (p) { return [cx + (p[0] - cx) * s + dx, cy + (p[1] - cy) * s + dy]; });
  }
  const SCENES = {
    // Coast with a bay on the left, island on the right (default operational area)
    coast: {
      land: [
        [[-0.05, -0.05], [0.42, -0.05], [0.36, 0.12], [0.30, 0.24], [0.33, 0.38], [0.26, 0.50], [0.18, 0.58], [0.20, 0.72], [0.12, 0.86], [0.10, 1.05], [-0.05, 1.05]],
        [[0.70, 0.62], [0.80, 0.58], [0.90, 0.64], [0.94, 0.76], [0.86, 0.86], [0.74, 0.82], [0.68, 0.72]]
      ],
      depth: [[-0.05, 1.1], [0.30, 0.92], [0.45, 0.70], [0.52, 0.40], [0.58, 0.10], [0.62, -0.1]]
    },
    // Harbor / base view: land at bottom, jetty
    harbor: {
      land: [
        [[-0.05, 0.62], [0.18, 0.60], [0.34, 0.66], [0.52, 0.64], [0.66, 0.70], [0.84, 0.66], [1.05, 0.70], [1.05, 1.05], [-0.05, 1.05]]
      ],
      depth: [[-0.05, 0.42], [0.25, 0.36], [0.5, 0.40], [0.75, 0.30], [1.05, 0.34]]
    },
    // Open sea survey area, small islets
    offshore: {
      land: [
        [[0.06, 0.70], [0.14, 0.66], [0.20, 0.72], [0.16, 0.80], [0.08, 0.78]],
        [[0.82, 0.14], [0.90, 0.10], [0.96, 0.18], [0.92, 0.26], [0.84, 0.24]]
      ],
      depth: [[-0.05, 0.25], [0.25, 0.32], [0.5, 0.20], [0.75, 0.30], [1.05, 0.22]]
    },
    // Island / site
    island: {
      land: [
        [[0.30, 0.30], [0.48, 0.24], [0.66, 0.30], [0.76, 0.46], [0.70, 0.66], [0.52, 0.76], [0.34, 0.68], [0.24, 0.50]]
      ],
      depth: []
    }
  };
  function paintSvg(el) {
    if (el.querySelector(':scope > svg.map-base')) return;
    const scene = SCENES[el.getAttribute('data-map') || 'coast'] || SCENES.coast;
    const W = 1000, H = Math.round(1000 * (el.clientHeight || 400) / (el.clientWidth || 800)) || 600;
    const ns = 'http://www.w3.org/2000/svg';
    const svg = document.createElementNS(ns, 'svg');
    svg.setAttribute('class', 'map-base');
    svg.setAttribute('viewBox', '0 0 ' + W + ' ' + H);
    svg.setAttribute('preserveAspectRatio', 'none');
    let s = '';
    // sea + depth shading
    s += '<rect width="' + W + '" height="' + H + '" fill="#DFF3FA"/>';
    if (scene.depth.length) {
      const dp = scalePts(scene.depth, W, H);
      s += '<path d="' + smoothPath(dp, false) + '" fill="none" stroke="#B6E0EF" stroke-width="80" stroke-linecap="round" opacity=".55"/>';
      s += '<path d="' + smoothPath(dp, false) + '" fill="none" stroke="#B6E0EF" stroke-width="2" stroke-dasharray="6 6" opacity=".9"/>';
      s += '<path d="' + smoothPath(offsetPts(dp, 0, 60, 1), false) + '" fill="none" stroke="#B6E0EF" stroke-width="1.5" stroke-dasharray="6 6" opacity=".6"/>';
    }
    // graticule
    s += '<g stroke="#168FBF" stroke-opacity=".08" stroke-width="1">';
    for (let x = 0; x <= W; x += 125) s += '<line x1="' + x + '" y1="0" x2="' + x + '" y2="' + H + '"/>';
    for (let y = 0; y <= H; y += 125) s += '<line x1="0" y1="' + y + '" x2="' + W + '" y2="' + y + '"/>';
    s += '</g>';
    // land
    scene.land.forEach(function (poly) {
      const p = scalePts(poly, W, H);
      s += '<path d="' + smoothPath(offsetPts(p, 0, 0, 1.03), true) + '" fill="#C4D5DD" opacity=".7"/>';
      s += '<path d="' + smoothPath(p, true) + '" fill="#E6ECEF" stroke="#C4D5DD" stroke-width="1.5"/>';
    });
    // graticule labels
    s += '<g font-family="Inter, sans-serif" font-size="11" fill="#667078" opacity=".7">';
    s += '<text x="8" y="14">106.80°E</text><text x="' + (W - 60) + '" y="14">106.90°E</text><text x="8" y="' + (H - 6) + '">-6.20°S</text>';
    s += '</g>';
    svg.innerHTML = s;
    el.insertBefore(svg, el.firstChild);
    // Geofence polygons declared via data-fence="x,y x,y ..." (percent)
    el.querySelectorAll('[data-fence]').forEach(function (f) {
      const pts = f.getAttribute('data-fence').trim().split(/\s+/).map(function (p) { const a = p.split(','); return [a[0] * W / 100, a[1] * H / 100]; });
      const layer = document.createElementNS(ns, 'svg');
      layer.setAttribute('class', 'map-layer fence-layer');
      layer.setAttribute('viewBox', '0 0 ' + W + ' ' + H);
      layer.setAttribute('preserveAspectRatio', 'none');
      layer.style.position = 'absolute'; layer.style.inset = '0'; layer.style.width = '100%'; layer.style.height = '100%'; layer.style.zIndex = '1'; layer.style.pointerEvents = 'none';
      const kind = f.getAttribute('data-kind') || 'zone';
      const col = kind === 'restricted' ? '#C43D3D' : kind === 'muster' ? '#17875D' : '#168FBF';
      let d = 'M' + pts.map(function (p) { return p[0] + ',' + p[1]; }).join(' L') + ' Z';
      layer.innerHTML = '<path d="' + d + '" fill="' + col + '" fill-opacity=".08" stroke="' + col + '" stroke-width="2" stroke-dasharray="8 6" vector-effect="non-scaling-stroke"/>' +
        (f.getAttribute('data-label') ? '<text x="' + pts[0][0] + '" y="' + (pts[0][1] - 10) + '" font-family="Inter, sans-serif" font-size="12" font-weight="600" fill="' + col + '">' + f.getAttribute('data-label') + '</text>' : '');
      el.insertBefore(layer, svg.nextSibling);
    });
    // Routes / tracks via data-track
    el.querySelectorAll('[data-track]').forEach(function (t) {
      const pts = t.getAttribute('data-track').trim().split(/\s+/).map(function (p) { const a = p.split(','); return [a[0] * W / 100, a[1] * H / 100]; });
      const layer = document.createElementNS(ns, 'svg');
      layer.setAttribute('viewBox', '0 0 ' + W + ' ' + H); layer.setAttribute('preserveAspectRatio', 'none');
      layer.style.position = 'absolute'; layer.style.inset = '0'; layer.style.width = '100%'; layer.style.height = '100%'; layer.style.zIndex = '1'; layer.style.pointerEvents = 'none';
      const col = t.getAttribute('data-color') || '#08698F';
      layer.innerHTML = '<path d="' + smoothPath(pts, false) + '" fill="none" stroke="' + col + '" stroke-width="2.5" stroke-linecap="round" vector-effect="non-scaling-stroke" opacity=".85"/>' +
        pts.map(function (p) { return '<circle cx="' + p[0] + '" cy="' + p[1] + '" r="4" fill="#fff" stroke="' + col + '" stroke-width="2" vector-effect="non-scaling-stroke"/>'; }).join('');
      el.insertBefore(layer, svg.nextSibling);
    });
  }


  /* ---------- OpenLayers engine (real basemap) with SVG fallback ---------- */
  // Each scene maps the page's percent-based marker coordinates onto a real extent in Jakarta Bay / Java Sea.
  // [minLon, minLat, maxLon, maxLat]
  const SCENE_EXT = {
    coast:    [106.62, -6.14, 107.02, -5.90],
    harbor:   [106.84, -6.125, 106.94, -6.065],
    offshore: [106.70, -5.96, 107.10, -5.72],
    island:   [106.58, -5.885, 106.66, -5.835]
  };
  PN.tilesOK = undefined;
  PN.tileUrl = 'https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}';
  PN.tileAttr = 'Esri · HERE · Garmin · © OpenStreetMap contributors';
  (function probeTiles() {
    if (!window.ol) { PN.tilesOK = false; return; }
    const img = new Image();
    img.onload = function () { PN.tilesOK = true; };
    img.onerror = function () { PN.tilesOK = false; document.querySelectorAll('.map[data-ol]').forEach(fallbackToSvg); };
    img.src = 'https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/10/537/823';
  })();
  function pctToLonLat(ext, x, y) { return [ext[0] + (x / 100) * (ext[2] - ext[0]), ext[3] - (y / 100) * (ext[3] - ext[1])]; }
  function fallbackToSvg(el) {
    if (el.__ol) { try { el.__ol.setTarget(null); } catch (e) {} el.__ol = null; }
    if (el.__orig != null) { el.innerHTML = el.__orig; el.removeAttribute('data-ol'); renderIcons(el); paintSvg(el); bindBehaviors(el); }
  }
  function buildOl(el) {
    const scene = el.getAttribute('data-map') || 'coast';
    const ext = SCENE_EXT[scene] || SCENE_EXT.coast;
    el.__orig = el.innerHTML;
    el.setAttribute('data-ol', '1');
    const base = document.createElement('div'); base.className = 'ol-base'; el.insertBefore(base, el.firstChild);
    const source = new ol.source.XYZ({ url: PN.tileUrl, maxZoom: 16, crossOrigin: 'anonymous', attributions: '' });
    const map = new ol.Map({ target: base, controls: [], layers: [new ol.layer.Tile({ source: source })], view: new ol.View({ center: [0, 0], zoom: 2, maxZoom: 16 }) });
    el.__ol = map;
    const ext3857 = ol.proj.transformExtent(ext, 'EPSG:4326', 'EPSG:3857');
    const size = [el.clientWidth || 800, el.clientHeight || 400];
    const small = size[1] < 240; if (small) el.setAttribute('data-small', '1');
    const pad = small ? 14 : 36;
    map.getView().fit(ext3857, { size: size, padding: [pad, pad, pad, pad] });
    const seen = { ok: false };
    source.on('tileloadend', function () { seen.ok = true; PN.tilesOK = true; });
    source.on('tileloaderror', function () { if (!seen.ok && PN.tilesOK !== true) { PN.tilesOK = false; fallbackToSvg(el); } });

    // Vector layer: geofences + tracks
    const feats = [];
    const col = { zone: '#168FBF', restricted: '#C43D3D', muster: '#17875D' };
    const rgba = { zone: 'rgba(22,143,191,.08)', restricted: 'rgba(196,61,61,.08)', muster: 'rgba(23,135,93,.08)' };
    el.querySelectorAll('[data-fence]').forEach(function (f) {
      const ring = f.getAttribute('data-fence').trim().split(/\s+/).map(function (p) { const a = p.split(',').map(Number); return ol.proj.fromLonLat(pctToLonLat(ext, a[0], a[1])); });
      ring.push(ring[0]);
      const kind = f.getAttribute('data-kind') || 'zone';
      const ft = new ol.Feature(new ol.geom.Polygon([ring]));
      ft.setStyle(new ol.style.Style({ stroke: new ol.style.Stroke({ color: col[kind], width: 2, lineDash: [8, 6] }), fill: new ol.style.Fill({ color: rgba[kind] }),
        text: f.getAttribute('data-label') && !small ? new ol.style.Text({ text: f.getAttribute('data-label'), font: '600 12px Inter, sans-serif', fill: new ol.style.Fill({ color: col[kind] }), stroke: new ol.style.Stroke({ color: 'rgba(255,255,255,.9)', width: 3 }), overflow: true }) : undefined }));
      feats.push(ft);
    });
    el.querySelectorAll('[data-track]').forEach(function (t) {
      const pts = t.getAttribute('data-track').trim().split(/\s+/).map(function (p) { const a = p.split(',').map(Number); return ol.proj.fromLonLat(pctToLonLat(ext, a[0], a[1])); });
      const c = t.getAttribute('data-color') || '#08698F';
      const line = new ol.Feature(new ol.geom.LineString(pts));
      line.setStyle(new ol.style.Style({ stroke: new ol.style.Stroke({ color: c, width: 2.5, lineCap: 'round' }) }));
      const dots = new ol.Feature(new ol.geom.MultiPoint(pts));
      dots.setStyle(new ol.style.Style({ image: new ol.style.Circle({ radius: 4, fill: new ol.style.Fill({ color: '#fff' }), stroke: new ol.style.Stroke({ color: c, width: 2 }) }) }));
      feats.push(line, dots);
    });
    if (feats.length) map.addLayer(new ol.layer.Vector({ source: new ol.source.Vector({ features: feats }) }));

    // Overlays: markers and popups keep their DOM, anchored to coordinates
    Array.prototype.slice.call(el.children).forEach(function (m) {
      if (!(m.classList.contains('mk') || m.classList.contains('popup'))) return;
      const x = parseFloat(m.style.left), y = parseFloat(m.style.top);
      if (isNaN(x) || isNaN(y)) return;
      const ll = m.getAttribute('data-ll') ? m.getAttribute('data-ll').split(',').map(Number) : pctToLonLat(ext, x, y);
      const isPopup = m.classList.contains('popup');
      const symH = isPopup ? 0 : ((m.querySelector('.sym') || m).offsetHeight || 24);
      m.style.left = ''; m.style.top = '';
      map.addOverlay(new ol.Overlay({ element: m, position: ol.proj.fromLonLat(ll), positioning: isPopup ? 'bottom-center' : 'top-center', offset: isPopup ? [0, -22] : [0, -Math.round(symH / 2)], stopEvent: false, autoPan: isPopup && !m.classList.contains('hide') ? { animation: { duration: 250 }, margin: 16 } : false }));
    });
    // Controls
    el.querySelectorAll('.map-ctl button').forEach(function (b) {
      const l = (b.getAttribute('aria-label') || '').toLowerCase();
      b.addEventListener('click', function (e) {
        e.stopPropagation();
        const v = map.getView();
        if (l.indexOf('in') === 0 || l.indexOf('zoom in') >= 0) v.animate({ zoom: v.getZoom() + 1, duration: 200 });
        else if (l.indexOf('out') >= 0) v.animate({ zoom: v.getZoom() - 1, duration: 200 });
        else v.fit(ext3857, { duration: 300, size: [el.clientWidth, el.clientHeight], padding: [pad, pad, pad, pad] });
      });
      b.setAttribute('data-bound', '1');
    });
    el.insertAdjacentHTML('beforeend', '<div class="map-attr">' + PN.tileAttr + '</div>');
    setTimeout(function () {
      map.updateSize();
      map.getOverlays().forEach(function (o) { const e = o.getElement(); if (e && e.classList.contains('popup') && !e.classList.contains('hide') && o.panIntoView) o.panIntoView({ margin: 20, animation: { duration: 250 } }); });
    }, 160);
  }
  function paintMap(el) {
    if (el.getAttribute('data-ol') || el.querySelector(':scope > svg.map-base')) return;
    if (window.ol && PN.tilesOK !== false) { try { buildOl(el); return; } catch (e) { console.warn('OpenLayers failed, using SVG map', e); } }
    paintSvg(el);
  }
  PN.refreshMaps = function (root) { (root || document).querySelectorAll('.map[data-ol]').forEach(function (m) { if (m.__ol) m.__ol.updateSize(); }); };


  /* ---------- Toast ---------- */
  PN.toast = function (msg, icon) {
    let box = document.getElementById('pn-toasts');
    if (!box) { box = document.createElement('div'); box.id = 'pn-toasts'; document.body.appendChild(box); }
    const t = document.createElement('div'); t.className = 'toast pn-toast'; t.innerHTML = PN.icon(icon || 'checkcircle', 'ic-16') + '<span>' + msg + '</span>';
    box.appendChild(t);
    requestAnimationFrame(function () { t.classList.add('show'); });
    setTimeout(function () { t.classList.remove('show'); setTimeout(function () { t.remove(); }, 250); }, 2600);
  };

  /* ---------- Demo behaviors ---------- */
  // Every control does something in the demo: real toggles where possible, navigation where the label implies a destination,
  // otherwise a specific confirmation toast. Keyword → destination page id (web and mobile registries).
  const ROUTES = [
    [/view location|live map|open live map|locate|show on map|view project map|open map/i, ['live-map', 'map']],
    [/open profile|view profile|message/i, ['employee-detail', 'profile']],
    [/open asset|journey|asset detail/i, ['asset-detail', 'asset-detail']],
    [/open vessel/i, ['vessels', 'project']],
    [/alert center|notifications|open alert/i, ['alerts', 'activity']],
    [/assign personnel|assign asset|reassign|add asset|^assign/i, ['assignment', 'my-assets']],
    [/start muster|open muster/i, ['muster', 'muster']],
    [/open checklist|new mobilization|checklist/i, ['mobilization', 'mobilization']],
    [/register asset|registry/i, ['assets', 'scan']],
    [/schedule report|open report|full report/i, ['reports', 'activity']],
    [/invite user|manage users|administration/i, ['admin', 'profile']],
    [/new project|all projects/i, ['projects', 'project']],
    [/new geofence|geofence editor/i, ['locations', 'map']],
    [/scan/i, [null, 'scan']],
    [/view history|history|movement log/i, ['asset-movement', 'activity-location-history']],
    [/view project$/i, ['project-detail', 'project']]
  ];
  const VERBS = [
    [/^export|^download/i, 'Export started · CSV will download in a moment', 'download'],
    [/^save/i, 'Saved', 'checkcircle'], [/^confirm/i, 'Confirmed', 'checkcircle'], [/^submit/i, 'Submitted', 'checkcircle'],
    [/^send|^broadcast/i, 'Sent to 84 devices', 'bell'], [/^remove|^delete/i, 'Removed', 'trash'], [/^cancel/i, 'Cancelled', 'x'],
    [/^call/i, 'Calling emergency contact +62 21 2900 1100…', 'phone'], [/^retry|^refresh/i, 'Reconnected · data refreshed', 'refresh'],
    [/^run/i, 'Report generated · 31 days · 684 assets', 'file'], [/^invite/i, 'Invitation sent', 'mail'], [/^register/i, 'Registered', 'checkcircle'],
    [/^schedule/i, 'Scheduled · weekly, Monday 07:00 WIB', 'calendar'], [/^end/i, 'Ended · report filed to QHSE', 'flag'],
    [/^acknowledge/i, 'Acknowledged', 'checkcircle'], [/^resolve/i, 'Resolved · note required in production', 'checkcircle'],
    [/^notify/i, 'Vessel master notified', 'ship'], [/^attach|^upload/i, 'Photo attached · IMG_2041.jpg', 'upload'],
    [/^share/i, 'Position shared with Andi Pratama', 'navigation'], [/^report/i, 'Report sent to Asset Manager and QHSE', 'file'],
    [/^columns/i, 'Column picker · 9 of 11 columns visible', 'columns'], [/^filter/i, 'Filters · 2 active', 'filter'],
    [/^add/i, 'Added', 'plus'], [/^apply/i, 'Applied', 'checkcircle'], [/^sign in|^log in/i, 'Signed in', 'login'], [/^sign out/i, 'Signed out', 'logout']
  ];
  function demoAction(b, root) {
    const label = (b.textContent || '').trim() || b.getAttribute('aria-label') || 'Action';
    const kind = root.classList.contains('mobile') ? 1 : 0;
    for (let i = 0; i < ROUTES.length; i++) { if (ROUTES[i][0].test(label)) { const id = ROUTES[i][1][kind]; if (id && PN.pages && PN.pages[id] && PN.route) { PN.route(id); return; } } }
    for (let i = 0; i < VERBS.length; i++) { if (VERBS[i][0].test(label)) { flash(b); PN.toast(VERBS[i][1], VERBS[i][2]); return; } }
    flash(b); PN.toast(label + ' — done', 'checkcircle');
  }
  function flash(b) { b.classList.add('flash'); setTimeout(function () { b.classList.remove('flash'); }, 700); }

  function bindBehaviors(root) {
    // Tabs / segmented: [data-tabs] container with buttons [data-tab=x], panels [data-panel=x]
    root.querySelectorAll('[data-tabs]').forEach(function (group) {
      const scope = group.getAttribute('data-tabs');
      group.querySelectorAll('[data-tab]').forEach(function (btn) {
        btn.addEventListener('click', function () {
          group.querySelectorAll('[data-tab]').forEach(function (b) { b.classList.remove('active'); });
          btn.classList.add('active');
          const key = btn.getAttribute('data-tab');
          root.querySelectorAll('[data-panel-group="' + scope + '"]').forEach(function (p) { p.classList.toggle('hide', p.getAttribute('data-panel') !== key); });
          PN.refreshMaps(root);
        });
      });
    });
    // Plain segmented controls and tabs without panels: toggle active state
    root.querySelectorAll('.seg, .tabs').forEach(function (group) {
      if (group.hasAttribute('data-tabs')) return;
      group.querySelectorAll('button, .seg-item, .tab').forEach(function (btn) {
        if (btn.hasAttribute('data-layer')) return;
        btn.addEventListener('click', function () { group.querySelectorAll('button, .seg-item, .tab').forEach(function (b) { b.classList.remove('active'); }); btn.classList.add('active'); });
      });
    });
    // Map layer toggles
    root.querySelectorAll('[data-layer]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        const map = btn.closest('.map') || root.querySelector('.map');
        const layer = btn.getAttribute('data-layer');
        btn.parentElement.querySelectorAll('[data-layer]').forEach(function (b) { b.classList.remove('active'); });
        btn.classList.add('active');
        if (!map) return;
        map.querySelectorAll('.mk').forEach(function (m) {
          const kind = m.classList.contains('person') ? 'people' : m.classList.contains('asset') ? 'assets' : m.classList.contains('vessel') ? 'vessels' : 'other';
          m.classList.toggle('hide', !(layer === 'all' || kind === layer || kind === 'other'));
        });
      });
    });
    // Switches, checkboxes, radios
    root.querySelectorAll('.switch').forEach(function (sw) { sw.addEventListener('click', function (e) { e.preventDefault(); if (sw.classList.contains('disabled')) return; sw.classList.toggle('on'); }); });
    root.querySelectorAll('.checkbox').forEach(function (cb) { cb.addEventListener('click', function (e) { e.preventDefault(); cb.classList.toggle('on'); cb.innerHTML = cb.classList.contains('on') ? PN.icon('check') : ''; }); });
    root.querySelectorAll('.radio').forEach(function (r) { r.addEventListener('click', function (e) { e.preventDefault(); const grp = r.closest('.stack, .m-list, .card, .m-card') || root; grp.querySelectorAll('.radio').forEach(function (o) { o.classList.remove('on'); }); r.classList.add('on'); }); });
    // Acknowledge
    root.querySelectorAll('[data-ack]').forEach(function (b) {
      b.addEventListener('click', function () { const card = b.closest('.alert-card'); if (card) { card.style.opacity = '.55'; } b.textContent = 'Acknowledged'; b.classList.add('disabled'); PN.toast('Acknowledged · 15:42:31 by Operations Manager'); });
    });
    // Marker popups
    root.querySelectorAll('.mk[data-popup]').forEach(function (m) {
      m.addEventListener('click', function (e) {
        e.stopPropagation();
        const map = m.closest('.map'); const id = m.getAttribute('data-popup');
        map.querySelectorAll('.popup[data-for]').forEach(function (p) { p.classList.toggle('hide', p.getAttribute('data-for') !== id || !p.classList.contains('hide')); });
      });
    });
    root.querySelectorAll('.mk:not([data-popup]):not(.me)').forEach(function (m) {
      m.addEventListener('click', function (e) { e.stopPropagation(); const l = m.querySelector('.lbl'); PN.toast((l ? l.childNodes[0].textContent : m.classList.contains('cluster') ? m.querySelector('.sym').textContent + ' objects in cluster' : 'Marker') + ' · selected', 'pin'); });
    });
    // SOS press-and-hold (2 s)
    root.querySelectorAll('.sos-hold').forEach(function (btn) {
      let t0 = 0, raf = 0;
      const target = btn.getAttribute('data-target');
      function tick() { const p = Math.min(100, ((performance.now() - t0) / 2000) * 100); btn.style.setProperty('--p', p); if (p >= 100) { fire(); return; } raf = requestAnimationFrame(tick); }
      function start(e) { e.preventDefault(); if (btn.classList.contains('sent')) return; t0 = performance.now(); btn.classList.add('holding'); raf = requestAnimationFrame(tick); }
      function stop() { if (btn.classList.contains('sent')) return; cancelAnimationFrame(raf); btn.classList.remove('holding'); btn.style.setProperty('--p', 0); }
      function fire() {
        btn.classList.remove('holding'); btn.classList.add('sent');
        btn.querySelector('.inner').innerHTML = PN.icon('check', 'ic-32') + '<span>Sent</span>';
        if (target) { const t = root.querySelector(target); if (t) t.classList.remove('hide'); const h = btn.closest('[data-hide-on-send]'); if (h) h.classList.add('hide'); }
        const go = btn.getAttribute('data-route'); if (go && PN.route) setTimeout(function () { PN.route(go); }, 600);
      }
      btn.addEventListener('pointerdown', start);
      btn.addEventListener('pointerup', stop); btn.addEventListener('pointerleave', stop); btn.addEventListener('pointercancel', stop);
    });
    // Live clock (WIB = UTC+7)
    root.querySelectorAll('[data-clock]').forEach(function (c) {
      function upd() {
        const d = new Date(Date.now() + (7 * 60 + new Date().getTimezoneOffset()) * 60000);
        const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
        const pad = function (n) { return (n < 10 ? '0' : '') + n; };
        c.textContent = pad(d.getDate()) + ' ' + months[d.getMonth()] + ' ' + d.getFullYear() + ' · ' + pad(d.getHours()) + ':' + pad(d.getMinutes()) + ' WIB';
      }
      upd(); setInterval(upd, 30000);
    });
    root.querySelectorAll('[data-collapse]').forEach(function (b) { b.addEventListener('click', function () { root.classList.toggle('is-collapsed'); }); });
    root.querySelectorAll('[data-show]').forEach(function (b) {
      b.addEventListener('click', function () { const t = root.querySelector(b.getAttribute('data-show')); if (t) t.classList.remove('hide'); const h = b.getAttribute('data-hide'); if (h) { const hh = root.querySelector(h); if (hh) hh.classList.add('hide'); } });
    });
    // Table: sortable headers (real sort), row click → first link, pagination
    root.querySelectorAll('.table th').forEach(function (th) {
      if (!th.textContent.trim()) return;
      th.classList.add('sortable');
      th.addEventListener('click', function () {
        const table = th.closest('table'); const idx = Array.prototype.indexOf.call(th.parentElement.children, th);
        const dir = th.getAttribute('aria-sort') === 'ascending' ? -1 : 1;
        table.querySelectorAll('th').forEach(function (o) { o.removeAttribute('aria-sort'); });
        th.setAttribute('aria-sort', dir === 1 ? 'ascending' : 'descending');
        const tb = table.tBodies[0]; if (!tb) return;
        const rows = Array.prototype.slice.call(tb.rows);
        rows.sort(function (a, b) { const x = (a.cells[idx] || {}).textContent || '', y = (b.cells[idx] || {}).textContent || ''; const nx = parseFloat(x.replace(/[^0-9.\-]/g, '')), ny = parseFloat(y.replace(/[^0-9.\-]/g, '')); return (!isNaN(nx) && !isNaN(ny) && /\d/.test(x) && /\d/.test(y) ? nx - ny : x.localeCompare(y)) * dir; });
        rows.forEach(function (r) { tb.appendChild(r); });
      });
    });
    root.querySelectorAll('.table tbody tr').forEach(function (tr) {
      const link = tr.querySelector('a[href]'); if (!link) return;
      tr.style.cursor = 'pointer';
      tr.addEventListener('click', function (e) { if (e.target.closest('a, button, .checkbox, .switch, .chip')) return; link.click(); });
    });
    root.querySelectorAll('.pager button').forEach(function (b) {
      b.addEventListener('click', function () { const n = b.textContent.trim(); if (!/^\d+$/.test(n)) { PN.toast('Loading next page…', 'chevronright'); return; } b.parentElement.querySelectorAll('button').forEach(function (o) { o.classList.remove('active'); }); b.classList.add('active'); PN.toast('Page ' + n, 'list'); });
    });
    // Search inputs filter the first table on the page
    root.querySelectorAll('.input input[type="search"]:not([data-custom]), .filters .input input:not([data-custom]), .search input:not([data-custom])').forEach(function (inp) {
      inp.addEventListener('input', function () {
        const q = inp.value.trim().toLowerCase();
        const table = (inp.closest('.page, .screen') || root).querySelector('.table tbody'); if (!table) return;
        let shown = 0;
        Array.prototype.forEach.call(table.rows, function (r) { const hit = !q || r.textContent.toLowerCase().indexOf(q) >= 0; r.classList.toggle('hide', !hit); if (hit) shown++; });
        const foot = (inp.closest('.page, .screen') || root).querySelector('.table-foot > span'); if (foot && q) foot.textContent = shown + ' matching “' + inp.value.trim() + '”';
      });
      inp.addEventListener('keydown', function (e) { if (e.key === 'Enter') PN.toast('Searching “' + inp.value + '”…', 'search'); });
    });
    // Mobile list rows without a link → toast; select-style inputs → toast
    root.querySelectorAll('.input.select').forEach(function (s) { s.addEventListener('click', function () { PN.toast('Options: ' + (s.textContent.trim() || 'select') + ' · demo list', 'chevrondown'); }); });
    // Every remaining button / icon button gets a demo action
    root.querySelectorAll('button, .btn, .m-btn, .icon-btn, .m-sos-btn').forEach(function (b) {
      if (b.hasAttribute('data-bound')) return;
      b.setAttribute('data-bound', '1');
      if (b.tagName === 'A' && b.getAttribute('href') && b.getAttribute('href') !== '#') return;
      if (b.closest('.seg, .tabs, .pager, .map-ctl, .sos-hold, .m-nav, .sidebar, .ds-nav, .demo-menu, .switch, .checkbox')) return;
      if (b.hasAttribute('data-ack') || b.hasAttribute('data-layer') || b.hasAttribute('data-tab') || b.hasAttribute('data-show') || b.hasAttribute('data-go') || b.hasAttribute('data-collapse')) return;
      b.addEventListener('click', function (e) {
        if (b.getAttribute('href') === '#') e.preventDefault();
        const l = (b.getAttribute('aria-label') || '').toLowerCase();
        if (l === 'notifications') { if (PN.pages && PN.pages.alerts) PN.route('alerts'); else PN.toast('3 open alerts', 'bell'); return; }
        if (l === 'help') { PN.toast('Help · PAGEO Navigator v2.0 · shortcuts: / search, G then M live map', 'info'); return; }
        if (b.classList.contains('icon-btn') || b.classList.contains('icon-only')) { PN.toast((b.getAttribute('aria-label') || 'More actions') + ' · demo menu', 'more'); return; }
        demoAction(b, root);
      });
    });
    // Avatar in the top bar → profile / account toast
    root.querySelectorAll('.topbar .avatar').forEach(function (a) { a.style.cursor = 'pointer'; a.addEventListener('click', function () { PN.toast('Operations Manager · PT Pageo Utama · Sign out', 'user'); }); });
  }


  /* ---------- Init ---------- */
  PN.init = function (root) {
    root = root || document.body;
    if (root.classList.contains('web')) buildWebShell(root);
    if (root.classList.contains('mobile')) root.querySelectorAll('.phone').forEach(buildPhoneChrome);
    if (root.classList.contains('ds')) buildDsShell(root);
    renderIcons(root);
    root.querySelectorAll('.map[data-map]').forEach(paintMap);
    bindBehaviors(root);
  };
  PN.paintMap = paintMap;
  PN.renderIcons = renderIcons;
  PN.bind = bindBehaviors;

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', function () { if (!window.PN_MANUAL_INIT) PN.init(document.body); });
  else if (!window.PN_MANUAL_INIT) PN.init(document.body);
})();
