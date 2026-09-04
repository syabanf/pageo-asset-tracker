// handwritten — Map with bottom sheet
(function () {
  const D = window.DATA, me = D.me;
  function mapArea(selected) {
    return '<div class="m-body" style="padding:0;gap:0"><div class="m-map">' + C.map({ scene: 'offshore', flush: true, legend: false, style: 'height:100%;min-height:0',
      fences: [{ pts: '22,32 78,30 80,62 24,64', label: 'Offshore Work Area' }],
      markers: [{ kind: 'vessel', x: 58, y: 42, label: 'MV Pageo 02' }, { kind: 'me', x: 46, y: 50, accuracy: 70, label: 'You · ± 7 m' }, { kind: 'person', x: 34, y: 38, label: 'Andi P.' }, { kind: 'person', x: 68, y: 58, label: 'Rizky H.' }, { kind: 'person', x: 30, y: 62, label: 'Agus S.' }, { kind: 'asset', x: 22, y: 48, label: 'GPS-14' }, { kind: 'asset', x: 52, y: 66, label: 'MBES-03', cls: selected ? 'selected' : '' }, { kind: 'muster', x: 72, y: 36, label: 'Muster B' }],
      tr: C.mapCtl(), tl: '<span class="map-coords">' + me.lat + ', ' + me.lng + '</span>' }) + '</div>' +
      (selected
        ? M.sheet('<div class="row s12"><span class="ai ocean">' + C.icon('diamond') + '</span><div class="grow"><div class="m-h3">MBES-03</div><div class="m-caption">Multibeam Echo Sounder · Project Alpha</div></div>' + M.chip('info', 'Deployed') + '</div>' + M.kv([['Custody', 'You'], ['Last seen', '3 min ago · RD-11'], ['Location', 'MV Pageo 02 · Deck']]) + M.btnRow([M.btn('Close', 'secondary', 'x', 'map.html'), M.btn('Open asset', 'primary', 'arrowright', 'asset-detail.html')]))
        : M.sheet('<div class="row between">' + C.eyebrow('Your position') + M.chip('active', 'Updated now') + '</div><div class="m-h2 tnum">' + me.lat + ', ' + me.lng + '</div><div class="m-caption">Accuracy ± ' + me.acc + ' m · GPS good · inside Offshore Work Area</div><div class="row s8 wrap">' + M.chip('info', 'Project Alpha', 'clipboard') + M.chip('', 'MV Pageo 02', 'ship') + M.chip('active', 'Work area', 'pin') + '</div>' + M.btn('Share position with supervisor', 'primary', 'navigation'))) +
      '</div>';
  }
  PN.page('map', { title: 'Map', icon: 'map', nav: 'map', time: '15:42', render() { return M.top({ back: 'home.html', title: 'Map', right: M.chip('active', 'Live · 12 s') }) + mapArea(false); } });
  PN.page('map-asset-selected', { title: 'Map — Asset selected', icon: 'map', nav: 'map', time: '15:42', render() { return M.top({ back: 'home.html', title: 'Map', right: M.chip('active', 'Live · 12 s') }) + mapArea(true); } });
})();
