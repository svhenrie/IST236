class Destination {
  constructor(id, countryId, name, avgCost, foundedYear, rating, imageUrl) {
    this.id = id;
    this.countryId = countryId;
    this.name = name;
    this.avgCost = avgCost;
    this.foundedYear = foundedYear;
    this.rating = rating;
    this.imageUrl = imageUrl;
  }

  toString() {
    return `${this.name} was founded in ${this.foundedYear} - Average Cost for a One Week Visit: ${this.avgCost}, Rating: ${this.rating}`;
  }
}

export default Destination;
