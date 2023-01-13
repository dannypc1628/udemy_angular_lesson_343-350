import { HighlightDirective } from './../../shared/highlight.directive';
import { Component } from '@angular/core';
import { AnalyticsService } from 'src/app/shared/analytics.service';

@Component({
  standalone: true,
  imports: [HighlightDirective],
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent {
  constructor(private analyticsService: AnalyticsService) {}

  onClick() {
    this.analyticsService.registerClick();
  }
}
