const HU = {
  date(now) {
    return new Intl.DateTimeFormat("hu-HU").format(now);
  },
  curreny(currency) {
    const currencyFormat = new Intl.NumberFormat("hu-HU", {
      style: "currency",
      currency: "HUF",
    });
    return currencyFormat.format(currency);
  },
  list() {},
};

export default HU;
