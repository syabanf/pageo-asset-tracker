/* Converted from mobile/map.html (state: Your position) */
// converted
PN.page("map", {
  title: "Map",
  icon: "map",
  nav: "map",
  time: "15:42",
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

              <a href="map-asset-selected.html" class="mk asset" style="left:50%;top:50%"><span class="sym"><i data-icon="diamond"></i></span><span class="lbl">MBES-03</span></a>
              <div class="mk asset" style="left:24%;top:34%"><span class="sym"><i data-icon="diamond"></i></span><span class="lbl">GPS-14</span></div>

              <div class="mk me" style="left:46%;top:40%;z-index:3"><span class="accuracy" style="width:70px;height:70px;left:50%;top:50%;transform:translate(-50%,-50%)"></span><span class="sym"></span></div>

              <div class="map-ui tr">
                <div class="map-ctl">
                  <button aria-label="Zoom in"><i data-icon="plus"></i></button>
                  <button aria-label="Zoom out"><i data-icon="minus"></i></button>
                  <button aria-label="My location" style="color:var(--accent)"><i data-icon="locate"></i></button>
                </div>
              </div>
              <div class="map-ui tl"><span class="map-coords">-6.18746, 106.82721</span></div>
            </div>

            <div class="m-sheet">
              <div class="grab"></div>
              <div class="row between">
                <span class="eyebrow">Your position</span>
                <span class="m-caption"><span class="dot ok pulse" style="margin-right:6px;vertical-align:1px"></span>Updated now</span>
              </div>
              <div class="m-h2 tnum">-6.18746, 106.82721</div>
              <div class="m-caption" style="margin-top:-6px">Accuracy ± 7 m · Updated now · GPS good</div>
              <div class="row s8 wrap">
                <span class="m-chip"><i data-icon="clipboard" class="ic-16"></i>Project Alpha</span>
                <span class="m-chip"><i data-icon="ship" class="ic-16"></i>MV Pageo 02</span>
                <span class="m-chip info"><i data-icon="pin" class="ic-16"></i>Work area</span>
              </div>
              <a class="m-btn secondary" href="map.html"><i data-icon="navigation"></i>Share position with supervisor</a>
            </div>
          </div>
        </div>`;
  }
});
