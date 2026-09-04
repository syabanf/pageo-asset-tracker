// handwritten — Personnel create / edit
(function () {
  const KIND = { 'Active': 'ok', 'On Site': 'info', 'Offshore': 'info', 'In Transit': 'transit', 'Idle': 'warn', 'Offline': 'off', 'Alert': 'crit' };
  const projects = () => PN.store.all('projects').map(p => [p.name.replace('Project ', '').replace('Base — Jakarta', 'Base'), p.name]);
  const f = PN.form({
    coll: 'people', noun: 'personnel', eyebrow: 'People · Personnel', backHref: 'personnel.html', backLabel: 'personnel',
    newSub: 'Register an employee and assign them to a project. They sign in to the mobile app with the employee ID.',
    editTitle: r => r.name, editSub: r => r.role + ' · ' + r.id,
    label: r => r.name,
    tips: ['Employee ID must match the HR system (format PG-0000).', 'Assigning a project makes the person visible on the project dashboard and muster list.', 'Status is normally updated by the mobile app — set it here only for manual corrections.'],
    summary: r => [['Employee ID', r.id], ['Status', C.chip(r.kind, r.status, { sm: true })], ['Freshness', C.fresh(r.fresh[0], r.fresh[1])], ['Last update', r.last], ['Battery', (r.batt == null ? '—' : r.batt + '%')]],
    side: r => r ? C.card({ title: 'Assigned assets', link: { label: 'Assignment', href: 'assignment.html' }, body: '<div class="stack s4">' + PN.store.all('assets').filter(a => a.custodian === r.name).map(a => C.entity({ icon: 'diamond', symCls: 'dark', title: a.id, sub: a.desc, right: C.chip(a.kind, a.status, { sm: true }) })).join('') + '</div>' || C.empty({ icon: 'diamond', title: 'No assets in custody', text: '' }) }) : '',
    sections: [
      { title: 'Identity', fields: [
        { name: 'name', label: 'Full name', required: true, icon: 'user', placeholder: 'e.g. Andi Pratama' },
        { name: 'id', label: 'Employee ID', required: true, placeholder: 'PG-0000', help: 'Used to sign in to the mobile app' },
        { name: 'role', label: 'Job role', required: true, placeholder: 'Survey Engineer' },
        { name: 'dept', label: 'Department', type: 'select', options: ['Survey', 'Subsea', 'Equipment', 'Operations', 'QHSE', 'Logistics', 'Engineering', 'Maintenance'], placeholder: 'Choose department' },
        { name: 'contact', label: 'Contact', placeholder: '+62 812 ···', icon: 'phone' },
        { name: 'emergency', label: 'Emergency contact', placeholder: 'Name · +62 ···', icon: 'lifebuoy' }
      ] },
      { title: 'Assignment', fields: [
        { name: 'project', label: 'Project', type: 'select', options: projects(), placeholder: 'Unassigned', icon: 'clipboard' },
        { name: 'supervisor', label: 'Supervisor', placeholder: 'Andi Pratama' },
        { name: 'location', label: 'Current location', placeholder: 'PAGEO Base', icon: 'pin' },
        { name: 'muster', label: 'Muster point', placeholder: 'B · Deck 2', icon: 'flag' },
        { name: 'status', label: 'Status', type: 'select', options: Object.keys(KIND), placeholder: 'Choose status' },
        { name: 'cert', label: 'Certifications', placeholder: 'BOSIET · valid to 2027', span2: false }
      ] },
      { title: 'Notes', fields: [{ name: 'notes', label: 'Notes', type: 'textarea', span2: true, placeholder: 'Medical restrictions, shift pattern, cabin allocation…' }] }
    ],
    toRecord: (v, ex) => Object.assign({}, ex || { fresh: ['live', 'just now'], last: '15:42:00', batt: 100, acc: 8 }, {
      name: v.name, id: v.id.toUpperCase(), role: v.role, dept: v.dept || (ex && ex.dept) || 'Survey', project: v.project || '—', location: v.location || (ex && ex.location) || 'PAGEO Base',
      status: v.status || (ex && ex.status) || 'Active', kind: KIND[v.status || (ex && ex.status) || 'Active'] || 'ok', supervisor: v.supervisor, contact: v.contact, emergency: v.emergency, muster: v.muster, cert: v.cert, notes: v.notes
    })
  });
  PN.page('personnel-form', { title: 'Personnel form', icon: 'user', nav: 'personnel', crumb: 'Global / People / Personnel / Form', render: f.render, after: f.after, note: 'CRUD' });
})();
