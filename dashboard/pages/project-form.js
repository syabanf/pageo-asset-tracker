// handwritten — Project create / edit
(function () {
  const KIND = { 'Planned': 'unknown', 'Mobilizing': 'warn', 'Offshore': 'info', 'Onshore': 'ok', 'Demobilizing': 'transit', 'Closed': 'off' };
  const pms = () => PN.store.all('people').filter(p => /Manager|Chief|Supervisor/.test(p.role)).map(p => p.name).concat(['Dimas Prasetyo', 'Rina Kartika', 'Sari Dewi', 'Yoga Hartono']).filter((v, i, a) => a.indexOf(v) === i);
  const f = PN.form({
    coll: 'projects', noun: 'project', eyebrow: 'Operations · Projects', backHref: 'projects.html', backLabel: 'projects',
    newSub: 'Create the project first — personnel, assets, vessel and geofences are then assigned to it.',
    editTitle: r => r.name, editSub: r => r.type + ' · ' + r.status,
    label: r => r.name,
    tips: ['A project needs a site or a vessel before mobilization can start.', 'Expected personnel is used for muster accountability (expected vs. safe).', 'Changing status to Offshore starts offshore-hours accounting for assigned personnel.'],
    summary: r => [['Status', C.chip(r.kind, r.status, { sm: true })], ['Personnel', r.people[0] + ' / ' + r.people[1]], ['Assets', r.assets], ['Open alerts', r.alerts], ['Schedule', r.start + ' – ' + r.end]],
    side: r => r ? C.card({ title: 'Stage', body: C.flow([{ label: 'Prepare', state: 'done' }, { label: 'Mobilize', state: r.status === 'Planned' ? '' : 'done' }, { label: 'Operate', state: r.status === 'Offshore' || r.status === 'Onshore' ? 'current' : '' }, { label: 'Demob', state: r.status === 'Demobilizing' ? 'current' : '' }, { label: 'Close', state: r.status === 'Closed' ? 'done' : '' }]) }) : '',
    sections: [
      { title: 'Project', fields: [
        { name: 'name', label: 'Project name', required: true, placeholder: 'Project Hotel', icon: 'clipboard' },
        { name: 'type', label: 'Type of work', required: true, type: 'select', options: ['Offshore Construction Survey', 'Pipeline Inspection ROV', 'Port Bathymetry', 'Geotechnical Site Investigation', 'Cable Route Survey', 'Jetty Positioning', 'Subsea Inspection'], placeholder: 'Choose type' },
        { name: 'client', label: 'Client', placeholder: 'PT …', icon: 'building' },
        { name: 'pm', label: 'Project manager', type: 'select', options: pms(), placeholder: 'Assign later', icon: 'user' },
        { name: 'status', label: 'Status', type: 'select', options: Object.keys(KIND), placeholder: 'Planned' },
        { name: 'expected', label: 'Expected personnel', type: 'number', placeholder: '12', icon: 'users' }
      ] },
      { title: 'Location & schedule', fields: [
        { name: 'vessel', label: 'Vessel', type: 'select', options: ['MV PAGEO 01', 'MV PAGEO 02', 'MV PAGEO 03', 'Client vessel', '—'], placeholder: 'No vessel', icon: 'ship' },
        { name: 'site', label: 'Site / work area', placeholder: 'Natuna Block B', icon: 'pin' },
        { name: 'start', label: 'Start', placeholder: '08 Sep', icon: 'calendar' },
        { name: 'end', label: 'End', placeholder: '30 Sep', icon: 'calendar' },
        { name: 'notes', label: 'Scope notes', type: 'textarea', span2: true, placeholder: 'Survey lines, ROV dives, deliverables…' }
      ] }
    ],
    toRecord: (v, ex) => {
      const status = v.status || (ex && ex.status) || 'Planned';
      return Object.assign({}, ex || { people: [0, 0], assets: 0, alerts: 0, last: '15:42' }, {
        id: ex ? ex.id : v.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^project-/, '').replace(/^-|-$/g, ''),
        name: v.name, type: v.type || (ex && ex.type) || 'Offshore Construction Survey', client: v.client, pm: v.pm || (ex && ex.pm) || '—', status: status, kind: KIND[status] || 'unknown',
        vessel: v.vessel || '—', site: v.site || (ex && ex.site) || '—', start: v.start || (ex && ex.start) || '—', end: v.end || (ex && ex.end) || '—',
        people: [ex ? ex.people[0] : 0, v.expected ? +v.expected : (ex ? ex.people[1] : 0)], notes: v.notes
      });
    }
  });
  PN.page('project-form', { title: 'Project form', icon: 'clipboard', nav: 'projects', crumb: 'Global / Operations / Projects / Form', render: f.render, after: f.after, note: 'CRUD' });
})();
