import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable, of} from 'rxjs';
import { JobPostModel } from '../models/job-post.model';

@Injectable()
export class JobPostsService {
  constructor(private _httpClient: HttpClient) {
  }

  getAll(): Observable<JobPostModel[]> {
    return this._httpClient.get<JobPostModel[]>('https://636ce2d8ab4814f2b2712854.mockapi.io/job-posts');
    // {
    //   return of([
    //     { id: '1', title: 'zxc', jobTagIds: [1,2,3,4], description: 'asdasdas' },
    //     { id: '2', title: 'asasda', jobTagIds: [1,2,3,4], description: 'asdasdas' }
    //   ])
    // }
  }
}
//  readonly title: string;
//   readonly description: string;
//   readonly jobTagIds: number[];
//   readonly id: string;
