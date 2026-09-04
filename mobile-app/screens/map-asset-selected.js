/* Converted from mobile/map.html (state: Asset selected) */
// converted
PN.page("map-asset-selected", {
  title: "Map — Asset selected",
  icon: "map",
  nav: "map",
  time: "15:42",
  hidden: true,
  render() {
    return `<header class="m-top">
          <div class="m-title">Map</div>
          <span class="m-chip active"><span class="dot ok pulse"></span>Live · 12 s</span>
          <a class="m-sos-btn" href="sos.html" aria-label="Emergency SOS">SOS</a>
        </header>
        <div class="m-body" style="padding:0;gap:0">
          <div class="m-map">
            <div class="map flush" data-map="offshore">
              <div data-fence="16,20 80,14 88,56 30,64" data-label="Offshore Work Area" data-kind="zone"></div>

              <div class="mk vessel" style="left:56%;top:34%"><span class="sym"><i data-icon="ship"></i></span><span class="lbl">MV Pageo 02</span></div>
              <div class="mk muster" style="left:64%;top:30%"><span class="sym"><i data-icon="flag"></i></span><span class="lbl">Muster B</span></div>

              <div class="mk person" style="left:40%;top:26%"><span class="sym"><i data-icon="user"></i></span><span class="lbl">Andi P.</span></div>
              <div class="mk person" style="left:70%;top:44%"><span class="sym"><i data-icon="user"></i></span><span class="lbl">Rizky H.</span></div>
              <div class="mk person" style="left:30%;top:48%"><span class="sym"><i data-icon="user"></i></span><span class="lbl">Agus S.</span></div>

              <div class="mk asset" style="left:50%;top:50%;z-index:3"><span class="sym" style="box-shadow:0 0 0 6px rgba(22,143,191,.25),0 2px 6px rgba(20,29,34,.25)"><i data-icon="diamond"></i></span><span class="lbl" style="color:var(--pageo-deep)">MBES-03<small>Selected</small></span></div>
              <div class="mk asset" style="left:24%;top:34%"><span class="sym"><i data-icon="diamond"></i></span><span class="lbl">GPS-14</span></div>

              <div class="mk me" style="left:46%;top:40%"><span class="accuracy" style="width:70px;height:70px;left:50%;top:50%;transform:translate(-50%,-50%)"></span><span class="sym"></span></div>

              <div class="map-ui tr">
                <div class="map-ctl">
                  <button aria-label="Zoom in"><i data-icon="plus"></i></button>
                  <button aria-label="Zoom out"><i data-icon="minus"></i></button>
                  <button aria-label="My location"><i data-icon="locate"></i></button>
                </div>
              </div>
            </div>

            <div class="m-sheet">
              <div class="grab"></div>
              <div class="entity-tile" style="border:0;padding:0;background:transparent">
                <span class="sym dark"><i data-icon="diamond"></i></span>
                <div class="grow">
                  <div class="m-h3">MBES-03</div>
                  <div class="m-caption">Multibeam Echo Sounder · Project Alpha</div>
                </div>
                <span class="m-chip info">Deployed</span>
              </div>
              <dl class="m-kv" style="font-size:15px">
                <dt>Custody</dt><dd>You</dd>
                <dt>Last seen</dt><dd>3 min ago · RD-11</dd>
                <dt>Location</dt><dd>MV Pageo 02 · Deck</dd>
              </dl>
              <div class="m-btn-row">
                <a class="m-btn secondary" href="map.html"><i data-icon="x"></i>Close</a>
                <a class="m-btn primary" href="asset-detail.html">Open asset<i data-icon="arrowright"></i></a>
              </div>
            </div>
          </div>
        </div>`;
  }
});
