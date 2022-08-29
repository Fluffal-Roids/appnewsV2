import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NewsResponse } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private Http:HttpClient) { }

 getTopHeadLines(){
  return this.Http.get<NewsResponse>('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=c7f709dda4404eba9ae5cfb7453634e0')
 }
}
