import axios from 'axios';
import { auth } from './auth';
const endPointApiUrl = 'https://newsapi.org/v2/everything?q=actualités';
const qInTitle = 'sport';
const language = 'en';
const apiKey = 'd04b4b00bc314bef8ed54f05c0ffc01b';

export function getNews(pageSize, page, searchKeyword) {
  return axios.get(`${endPointApiUrl}&qInTitle=${searchKeyword}&apiKey=${apiKey}`);
}

export const newsService = {
  saveNews,
  deleteNews,
  getMyNews,
};

function saveNews(news) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(news),
  };

  return fetch('/news/save', requestOptions);
}

function getMyNews() {
  const requestOptions = {
    method: 'GET',
    headers: auth(),
  };

  return fetch('/myNews', requestOptions);
}

function deleteNews(news) {
  const requestOptions = {
    method: 'DELETE',
    headers: auth(),
    body: JSON.stringify(news),
  };

  return fetch('/news/delete', requestOptions);
}
