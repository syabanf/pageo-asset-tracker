// handwritten — My equipment, asset detail, report issue
(function () {
  const D = window.DATA, me = D.me;
  const body = (inner, cls) => '<div class="m-body ' + (cls || '') + '">' + inner + '</div>';
  const items = [{ icon: 'diamond', iconCls: 'ocean', title: 'MBES-03', sub: 'Multibeam Echo Sounder · Deployed', href: 'asset-detail.html', chev: true }, { icon: 'navigation', iconCls: 'green', title: 'GPS-14', sub: 'GNSS Receiver · Deployed', href: 'asset-detail.html', chev: true }, { icon: 'radio', iconCls: 'violet', title: 'Radio-021', sub: 'VHF Handheld · Deployed', href: 'asset-detail.html', chev: true }];

  PN.page('my-assets', { title: 'My equipment', icon: 'diamond', nav: 'project', time: '15:42', render() {
    return M.top({ back: 'project.html', title: 'My equipment' }) + body(
      M.card(M.ringStat(100, 'ok', '3 / 3 accounted', 'Project Alpha · custody Fahmi Syaban · last scan 10:18')) +
      M.list(items) +
      M.btn('Scan equipment', 'primary', 'scanline', 'scan.html') + M.btn('Report missing item', 'secondary', 'warning', 'asset-detail-report-issue.html')
    );
  } });

  PN.page('my-assets-needs-confirmation', { title: 'My equipment — Needs confirmation', icon: 'diamond', nav: 'project', time: '15:42', render() {
    const list = items.slice(0, 2).concat([{ state: 'warn', title: 'Radio-021', sub: 'Not scanned today · last seen 03 Sep 17:10', right: M.chip('warn', 'Confirm') }]);
    return M.top({ back: 'project.html', title: 'My equipment' }) + body(
      M.card(M.ringStat(67, 'warn', '2 / 3 accounted', 'Radio-021 was not detected by today’s reader pass')) +
      M.card('<div class="row s12"><span class="ai sm amber">' + C.icon('warning') + '</span><div><div class="m-label">1 item needs confirmation</div><div class="m-caption">Scan Radio-021 to confirm custody, or report it missing.</div></div></div>', 'warn') +
      M.list(list) +
      M.btn('Scan equipment', 'primary', 'scanline', 'scan.html') + M.btn('Report missing item', 'secondary', 'warning', 'asset-detail-report-issue.html')
    );
  } });

  PN.page('asset-detail', { title: 'Asset detail', icon: 'diamond', nav: 'project', time: '15:42', render() {
    return M.top({ back: 'my-assets.html', small: 'Asset', title: 'MBES-03' }) + body(
      M.hero({ kind: 'dark', top: '<div class="row s12"><span class="ai ocean">' + C.icon('diamond') + '</span><div><div class="m-hero-title">Multibeam Echo Sounder</div><div class="m-hero-sub">Kongsberg EM 2040C · SN 20401183</div></div></div>', stats: [['Status', 'Deployed'], ['Custody', 'You'], ['Last seen', '3 min']] }) +
      M.card(M.kv([['RFID', '<span class="mono">E280-11-8829184</span>'], ['Project', 'Alpha · Offshore Survey'], ['Location', 'MV Pageo 02 · Deck'], ['Last reader', 'RD-11 · 15:37'], ['Calibration', 'Valid to 18 Dec 2026']], 'left')) +
      M.section('History', 'Movement', 'activity.html') +
      M.card(M.timeline([{ time: 'Sep 01', kind: 'unknown', text: 'Warehouse', sub: 'Jakarta Base · RD-01 · 09:12' }, { time: 'Sep 02', kind: 'unknown', text: 'Workshop', sub: 'Pre-mobilization check · RD-03' }, { time: 'Sep 03', kind: 'transit', text: 'Loading Area', sub: 'Scanned 27 / 28 · RD-04' }, { time: 'Sep 03', kind: 'info', text: 'Vessel MV Pageo 02', sub: 'Received · RD-11 · custody Fahmi' }, { time: 'Sep 04', kind: 'ok', text: 'Offshore site', sub: 'Deployed · RD-11 · 15:37' }]), '', 'padding:18px 18px 12px') +
      M.btn('Confirm custody', 'secondary', 'checkcircle', 'scan.html') + M.btn('Report issue', 'destructive', 'warning', 'asset-detail-report-issue.html')
    );
  } });

  PN.page('asset-detail-report-issue', { title: 'Asset — Report issue', icon: 'diamond', nav: 'project', time: '15:43', render() {
    return M.top({ back: 'asset-detail.html', small: 'Asset', title: 'Report issue · MBES-03', sos: false }) + body(
      '<div class="m-caption" style="padding:0 4px">Multibeam Echo Sounder · Custody: Fahmi Syaban · MV Pageo 02</div>' +
      M.card(
        '<div class="m-field"><label>Issue type</label><div class="m-input">' + C.icon('warning') + '<span class="grow">Damaged</span>' + C.icon('chevrondown', 'ic-18') + '</div><div class="help">Damaged · Malfunction · Missing part · Lost</div></div>' +
        '<div class="m-field"><label>Description</label><div class="m-input" style="height:auto;min-height:120px;align-items:flex-start;padding:14px">Port-side transducer housing cracked during recovery at 14:10. Unit still powers on, but swath data quality is degraded on the outer beams.</div></div>' +
        '<div class="m-field"><label>Severity</label><div class="row s8">' + M.chip('', 'Minor') + M.chip('warn', 'Degraded', 'check') + M.chip('', 'Unusable') + '</div></div>' +
        '<div class="m-field"><label>Photo</label>' + M.btn('Attach photo', 'secondary', 'upload') + '<div class="help">Optional · up to 3 photos, stored with the report</div></div>'
      ) +
      M.btn('Submit report', 'primary', 'file', 'my-assets.html') + '<div class="m-note">Sent to Asset Manager and QHSE.</div>'
    );
  } });
})();
