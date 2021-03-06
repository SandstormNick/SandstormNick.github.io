var TxtRotate = function(el, toRotate, period) {
    this.toRotate = toRotate,
    this.el = el,
    this.loopNum = 0,
    this.period = parseInt(period, 10) || 2e3,
    this.txt = "",
    this.tick(),
    this.isDeleting = !1
};
TxtRotate.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length
      , fullTxt = this.toRotate[i];
    this.isDeleting ? this.txt = fullTxt.substring(0, this.txt.length - 1) : this.txt = fullTxt.substring(0, this.txt.length + 1),
    this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";
    var that = this
      , delta = 300 - 100 * Math.random();
    this.isDeleting && (delta /= 2),
    this.isDeleting || this.txt !== fullTxt ? this.isDeleting && "" === this.txt && (this.isDeleting = !1,
    this.loopNum++,
    delta = 500) : (delta = this.period,
    this.isDeleting = !0),
    setTimeout((function() {
        that.tick()
    }
    ), delta)
}
,
window.onload = function() {
    for (var elements = document.getElementsByClassName("text-rotate"), i = 0; i < elements.length; i++) {
        var toRotate = elements[i].getAttribute("data-rotate")
          , period = elements[i].getAttribute("data-period");
        toRotate && new TxtRotate(elements[i],JSON.parse(toRotate),period)
    }
    
}
;
