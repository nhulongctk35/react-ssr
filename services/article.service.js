import axios from 'axios';

class ArticleService {
  constructor(data) {
    this.rawData = data;
  }
  fetchArticle = async () => {
    const { data } = await axios.get(`http://localhost:3000/api/articles`);
    this.rawData = data.data;
    return this.rawData;
  };

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
