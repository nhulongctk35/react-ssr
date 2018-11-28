class ArticleService {
  constructor(rawData) {
    this.rawData = rawData;
  }

  mapArrayToObject(dataArr = []) {
    return dataArr.reduce((acc, current) => {
      acc[current.id] = current;
      return acc;
    }, {});
  }

  getArticles() {
    return this.mapArrayToObject(this.rawData.articles);
  }

  getAuthors() {
    return this.mapArrayToObject(this.rawData.authors);
  }
}

export default ArticleService;
