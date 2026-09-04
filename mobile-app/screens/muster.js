/* Converted from mobile/muster.html (state: Muster requested) */
// converted
PN.page("muster", {
  title: "Muster",
  icon: "flag",
  nav: "none",
  time: "15:38",
  render() {
    return `<div class="m-banner crit"><i data-icon="siren"></i>Emergency muster · MV Pageo 02<span class="right">15:38</span></div>
        <div class="m-body center" style="padding-top:20px">
          <div class="grow" style="flex:0 1 12px"></div>
          <div class="m-icon-ring crit" style="width:112px;height:112px"><i data-icon="flag" style="width:52px;height:52px"></i></div>
          <div>
            <div class="eyebrow" style="color:var(--s-crit)">Muster requested</div>
            <div class="m-h1" style="margin-top:6px;font-size:30px">Proceed to<br>Muster Point B</div>
          </div>
          <div class="m-card" style="width:100%;text-align:left">
            <dl class="m-kv">
              <dt>Location</dt><dd>Deck 2 · Starboard</dd>
              <dt>Distance</dt><dd>180 m</dd>
              <dt>Requested</dt><dd>15:38 by QHSE</dd>
            </dl>
          </div>
          <div class="grow"></div>
          <a class="m-btn success lg" href="muster-confirmed.html" style="font-size:19px;letter-spacing:.04em"><i data-icon="check" class="ic-24"></i>I'M SAFE</a>
          <a class="m-btn tertiary" href="sos.html" style="color:var(--s-crit)"><i data-icon="lifebuoy"></i>I need help</a>
        </div>`;
  }
});
