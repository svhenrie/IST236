// Report class divides dummy data infomation into
// fields that can be rendered based on screen
class Report {
    constructor(
      id,
      type,
      imageUrl,
      headline,
      date,
      author,
      agency,
      description
    ) {
      this.id = id;
      this.type = type;
      this.imageUrl = imageUrl;
      this.headline = headline,
      this.date = date,
      this.author = author,
      this.agency = agency,
      this.description = description;
    }
  
    toString() {
      return `${this.type} at Image URL: ${this.imageUrl} - Headline ${this.headline} - Date ${this.date} -Author ${this.author} - Agency ${this.agency} - Description: ${this.description}`;
    }
  }
  
  export default Report;
  