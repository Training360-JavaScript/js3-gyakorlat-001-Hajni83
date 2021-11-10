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
  list(list) {
    let lastElement=list.pop();
    let joined = list.join(', ');
    return `${joined} és ${lastElement}`;
  }
}

export default HU;

