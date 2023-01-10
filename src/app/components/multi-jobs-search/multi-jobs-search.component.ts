import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {map, switchMap} from 'rxjs/operators';
import {JobPostsService} from '../../services/job-posts.service';
import {JobPostModel} from "../../models/job-post.model";

@Component({
  selector: 'app-multi-jobs-search',
  templateUrl: './multi-jobs-search.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MultiJobsSearchComponent {
  readonly searchForm: FormGroup = new FormGroup({
    searchTerm: new FormControl()
  });
  readonly searchParam$: Observable<string> = this._activatedRoute.queryParams.pipe(
    map((params) => params['search'])
  );
  readonly jobList$: Observable<JobPostModel[]> = this.searchParam$.pipe(
    switchMap((data) => this._jobPostsService.getAll().pipe(
      map(jobs =>
        jobs.filter(job =>
          //This will show a table  with jobs that contain a word corporate (case-insensitive) in any of the properties
          //So for example 'corporate' should match to the title and the description?
          job.description.toLowerCase().includes(data?.toLowerCase()) ||
          job.title.toLowerCase().includes(data?.toLowerCase()) ||
          job.id.includes(data)
        )
      )
    )
    )
  );

  constructor(private _activatedRoute: ActivatedRoute, private _jobPostsService: JobPostsService, private _router: Router) {
  }

  onSearchFormSubmitted(searchForm: FormGroup): void {
    this._router.navigate([], {
      queryParams: {
        search: searchForm.value.searchTerm
      }
    });
  }
}

