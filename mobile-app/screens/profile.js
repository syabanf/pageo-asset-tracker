// handwritten — Profile & privacy
(function () {
  const D = window.DATA, me = D.me;
  const body = (inner, cls) => '<div class="m-body ' + (cls || '') + '">' + inner + '</div>';
  PN.page('profile', { title: 'Profile', icon: 'user', nav: 'profile', time: '15:42', render() {
    return M.top({ title: 'Profile' }) + body(
      M.hero({ top: '<div class="row s12">' + C.avatar('FS', 'lg') + '<div><div class="m-hero-title">' + me.name + '</div><div class="m-hero-sub">' + me.role + ' · ' + me.id + '</div></div></div>', stats: [['Project', 'Alpha'], ['Vessel', 'Pageo 02'], ['Status', 'Active']] }) +
      M.card('<div class="row between">' + C.eyebrow('Tracking & privacy') + M.tracking(true, 'Location sharing active') + '</div><div class="m-body-text">Location sharing is active while you are assigned to this operation.</div>' + M.kv([['Started', '04 Sep · 08:03'], ['Shared with', 'Project Alpha ops team'], ['Retention', '90 days']]) + M.btn('Learn how tracking works', 'tertiary', 'book', 'profile-how-tracking-works.html'), 'ok') +
      M.section('Device') +
      M.list([{ icon: 'locate', iconCls: 'green', title: 'GPS', right: 'Good · ± 7 m' }, { icon: 'battery', iconCls: 'ocean', title: 'Battery', right: '82%' }, { icon: 'smartphone', iconCls: 'violet', title: 'App version', right: '1.4.2' }, { icon: 'refresh', iconCls: 'teal', title: 'Offline buffer', right: '0 events' }, { icon: 'shieldcheck', iconCls: 'green', title: 'Permissions', right: 'Location · Notifications' }]) +
      M.section('Account') +
      M.list([{ icon: 'phone', iconCls: 'ocean', title: 'Emergency contact', sub: 'Rina Syaban · +62 812 ··· 4471', chev: true, href: '#' }, { icon: 'clipboard', iconCls: 'amber', title: 'Certifications', sub: 'BOSIET · valid to 14 Mar 2027', chev: true, href: '#' }, { icon: 'book', iconCls: 'slate', title: 'Language', right: 'English' }, { icon: 'logout', iconCls: 'red', title: '<span class="crit">Sign out</span>', href: 'login.html' }])
    );
  } });
  PN.page('profile-how-tracking-works', { title: 'Profile — How tracking works', icon: 'book', nav: 'profile', time: '15:42', render() {
    const cards = [['pin', 'ocean', 'Only during operations', 'Your position is shared only from the moment you start an assigned operation until it ends. Outside an operation the app does not record or send your location.'], ['eye', 'violet', 'Always visible to you', 'Everything the operations team can see about your movements is shown to you in Activity and Location history. There is no hidden view.'], ['shield', 'green', 'Used for safety and accountability', 'Location is used for muster, emergency response, and confirming who was on site and on board. It is not used to measure individual performance.'], ['clock', 'amber', 'Retained 90 days', 'Position history is kept for 90 days and then deleted. Muster and incident records are kept longer under the QHSE policy.']];
    return M.top({ back: 'profile.html', title: 'How tracking works', sos: false }) + body(
      '<div class="m-caption" style="padding:0 4px">What PAGEO Navigator records from your phone, who sees it, and for how long.</div>' +
      cards.map(function (c) { return M.card('<div class="row top s12"><span class="ai sm ' + c[1] + '">' + C.icon(c[0]) + '</span><div><div class="m-label" style="font-size:16px">' + c[2] + '</div><div class="m-caption" style="margin-top:4px">' + c[3] + '</div></div></div>'); }).join('') +
      M.btn('Done', 'secondary', 'check', 'profile.html')
    );
  } });
})();
