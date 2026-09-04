// handwritten — RFID scan flow
(function () {
  const body = (inner, cls) => '<div class="m-body ' + (cls || '') + '">' + inner + '</div>';
  PN.page('scan', { title: 'RFID scan', icon: 'nfc', nav: 'none', time: '15:42', render() {
    return M.top({ close: 'my-assets.html', title: 'Scan asset', sos: false }) + body(
      '<div style="height:24px"></div>' + M.ring('info', 'nfc', true) +
      '<div class="eyebrow" style="color:var(--accent)">Scanning…</div><div class="m-h2">Bring the reader near<br>the equipment</div>' +
      '<div class="m-caption" style="max-width:26ch">The tag is read automatically. Keep the reader within 30 cm.</div>' +
      M.chip('info', 'RFID reader connected · RD-M03', 'bluetooth') +
      '<div class="grow"></div>' + M.btn('Cancel', 'tertiary', null, 'my-assets.html'),
      'center');
  } });
  PN.page('scan-detected', { title: 'RFID scan — Detected', icon: 'nfc', nav: 'none', time: '15:42', render() {
    return M.top({ close: 'my-assets.html', title: 'Scan asset', sos: false }) + body(
      M.ring('ok', 'check') + '<div class="eyebrow ok">Asset detected</div><div class="m-h1">MBES-03</div><div class="m-caption">Multibeam Echo Sounder · Project Alpha</div>' +
      M.card(M.kv([['Status', M.chip('info', 'Deployed')], ['Custody', 'You'], ['RFID', '<span class="mono">E280-11-8829184</span>'], ['Reader', 'RD-M03 · 15:42:08']]), '', 'width:100%;text-align:left') +
      '<div class="grow"></div>' + M.btn('Confirm custody', 'primary', 'check', 'my-assets.html') + M.btn('Scan another', 'tertiary', 'scanline', 'scan.html'),
      'center');
  } });
  PN.page('scan-not-recognized', { title: 'RFID scan — Not recognized', icon: 'nfc', nav: 'none', time: '15:43', render() {
    return M.top({ close: 'my-assets.html', title: 'Scan asset', sos: false }) + body(
      M.ring('warn', 'alert') + '<div class="eyebrow warn">Not recognized</div><div class="m-h1">Tag not registered</div><div class="m-caption">E280-11-1190244 is not in the registry.</div>' +
      M.card(M.kv([['Tag ID', '<span class="mono">E280-11-1190244</span>'], ['Reader', 'RD-M03 · 15:43:21'], ['Project', 'Alpha']]) + '<div class="m-caption">Registering links this tag to a new asset record that the Asset Manager will review.</div>', '', 'width:100%;text-align:left') +
      '<div class="grow"></div>' + M.btn('Register asset', 'secondary', 'plus', 'scan.html') + M.btn('Try again', 'tertiary', 'refresh', 'scan.html'),
      'center');
  } });
})();
