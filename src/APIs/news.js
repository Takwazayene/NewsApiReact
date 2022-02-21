import axios from 'axios';
import { auth } from './auth';
const config = require('../config.json');

const endPointApiUrl = 'https://newsapi.org/v2/everything?q=actualités';
const qInTitle = 'sport';
const language = 'en';
const apiKey = config.api_key; 

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
