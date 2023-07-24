function switchOff() {
  document.getElementById("bulbImage").src =
    "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png";
  document.getElementById("catImage").src =
    "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png";
  // 6. ask them to get element of switch status and change it's text content
  _______________________________________________________________________________;
  // document.getElementById("switchStatus").textContent = "Switched Off";
  document.getElementById("onSwitch").style.backgroundColor = "#22c55e";
  document.getElementById("offSwitch").style.backgroundColor = "#cbd2d9";
}

function switchOn() {
  document.getElementById("bulbImage").src =
    "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png";
  document.getElementById("catImage").src =
    "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-img.png";
  // 7. ask them to write test content when it is switchedOn
  document.getElementById("switchStatus").textContent = "_________________";
  document.getElementById("offSwitch").style.backgroundColor = "#e12d39";
  document.getElementById("onSwitch").style.backgroundColor = "#cbd2d9";
}
