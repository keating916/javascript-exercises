const ftoc = function(temp) {
  let celc = (temp-32)*(5/9)
  celc = Math.ceil(celc *10)/10
  return celc
}

const ctof = function(temp) {
  let far = temp*(9/5) + 32
  far = Math.ceil(far *10)/10
  return far;
}

module.exports = {
  ftoc,
  ctof
}
