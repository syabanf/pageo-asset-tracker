// handwritten — Asset create / edit
(function () {
  const KIND = { 'Available': 'ok', 'Deployed': 'info', 'In Transit': 'transit', 'Maintenance': 'warn', 'Missing': 'crit', 'Alert': 'crit', 'Unassigned': 'unknown' };
  const projects = () => PN.store.all('projects').map(p => [p.name.replace('Project ', '').replace('Base — Jakarta', 'Base'), p.name]);
  const people = () => PN.store.all('people').map(p => p.name);
  const f = PN.form({
    coll: 'assets', noun: 'asset', eyebrow: 'Assets · Registry', backHref: 'assets.html', backLabel: 'registry',
    newSub: 'Register equipment with its RFID tag so readers can track custody and movement.',
    editTitle: r => r.id, editSub: r => r.desc + ' · ' + r.cat,
    label: r => r.id,
    tips: ['Asset ID is the printed label on the equipment (e.g. MBES-04).', 'RFID EPC is read from the tag with the mobile app or a desk reader.', 'Calibration due dates drive P4 “calibration expiring” alerts 14 days ahead.'],
    summary: r => [['RFID', '<span class="mono">' + C.esc(r.rfid) + '</span>'], ['Status', C.chip(r.kind, r.status, { sm: true })], ['Last seen', r.last + ' · ' + r.reader], ['Custodian', r.custodian], ['Calibration', r.cal]],
    side: r => r ? C.card({ title: 'Journey', link: { label: 'Movement', href: 'asset-movement.html' }, body: C.timeline([{ time: 'Sep 01', kind: 'unknown', text: 'Warehouse · RD-01' }, { time: 'Sep 03', kind: 'transit', text: 'Loading Area · RD-04' }, { time: 'Sep 03', kind: 'info', text: 'Vessel PAGEO-02 · RD-11' }, { time: 'Sep 04', kind: 'ok', text: r.location + ' · ' + r.reader.split(' ')[0] }]) }) : '',
    sections: [
      { title: 'Identification', fields: [
        { name: 'id', label: 'Asset ID', required: true, placeholder: 'MBES-04', icon: 'diamond' },
        { name: 'rfid', label: 'RFID EPC', required: true, placeholder: 'E280-11-0000000', icon: 'nfc', help: 'Scan with the mobile app or type the EPC' },
        { name: 'desc', label: 'Description', required: true, placeholder: 'Multibeam Echo Sounder', span2: true },
        { name: 'cat', label: 'Category', type: 'select', options: ['Survey', 'Positioning', 'ROV', 'Comms', 'IT', 'Power'], placeholder: 'Choose category', icon: 'tag' },
        { name: 'model', label: 'Manufacturer · model', placeholder: 'Kongsberg EM 2040C' },
        { name: 'serial', label: 'Serial number', placeholder: '20401183' },
        { name: 'purchase', label: 'Purchase date', type: 'date' }
      ] },
      { title: 'Custody & status', fields: [
        { name: 'project', label: 'Assigned project', type: 'select', options: projects(), placeholder: 'Unassigned', icon: 'clipboard' },
        { name: 'custodian', label: 'Custodian', type: 'select', options: people(), placeholder: 'Warehouse', icon: 'user' },
        { name: 'location', label: 'Current location', placeholder: 'Warehouse · Rack B3', icon: 'pin' },
        { name: 'status', label: 'Status', type: 'select', options: Object.keys(KIND), placeholder: 'Choose status' }
      ] },
      { title: 'Calibration & maintenance', fields: [
        { name: 'cal', label: 'Calibration valid to', placeholder: '18 Dec 2026', icon: 'calendar' },
        { name: 'maint', label: 'Next maintenance', placeholder: '02 Nov 2026', icon: 'wrench' },
        { name: 'notes', label: 'Notes', type: 'textarea', span2: true, placeholder: 'Known issues, accessories included, handling instructions…' }
      ] }
    ],
    toRecord: (v, ex) => Object.assign({}, ex || { last: '15:42', reader: 'RD-01 Warehouse Gate A' }, {
      id: v.id, rfid: v.rfid.toUpperCase(), desc: v.desc, cat: v.cat || (ex && ex.cat) || 'Survey', project: v.project || '—', custodian: v.custodian || 'Warehouse', location: v.location || (ex && ex.location) || 'Warehouse',
      status: v.status || (ex && ex.status) || 'Available', kind: KIND[v.status || (ex && ex.status) || 'Available'] || 'ok', cal: v.cal || (ex && ex.cal) || '—', model: v.model, serial: v.serial, purchase: v.purchase, maint: v.maint, notes: v.notes
    })
  });
  PN.page('asset-form', { title: 'Asset form', icon: 'diamond', nav: 'assets', crumb: 'Global / Assets / Registry / Form', render: f.render, after: f.after, note: 'CRUD' });
})();
