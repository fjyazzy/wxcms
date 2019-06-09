Page({

  data: {
    Principal: null,
    Interest: null,
    loanPeriod: null,
    inputValue: 0,
    returnList: ""
  },
  PrincipalInput: function (e) {
    this.setData({
      Principal: e.detail.value
    })
  },
  InterestInput: function (e) {
    this.setData({
      Interest: e.detail.value
    })
  },
  loanPeriodInput: function (e) {
    this.setData({
      loanPeriod: e.detail.value
    })
  },
  calculateInterest: function (e) {
    var value = this.data.Principal;
    var Interest = this.data.Interest;
    var loanPeriod = this.data.loanPeriod;
    var returnStr = "";

    for (var i = 0; i < loanPeriod; i++) {
      value = value * (1 + (Interest / 100));
      returnStr = returnStr + "\n第" + (i + 1) + "月："+ value.toFixed(2) + "元"
    }
    this.setData({
      inputValue: value.toFixed(2),
      returnList: returnStr
    })
  },
})