import { Component, Input } from '@angular/core';
import { ITariff } from "../../../../models/tariffs.interface";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
@Input() tickets : ITariff
}
