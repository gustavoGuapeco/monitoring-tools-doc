import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { ToolData } from '../../../services/tool-data.service';

@Component({
  selector: 'app-tool-panel',
  standalone: true,
  imports: [
    CommonModule,
    MatExpansionModule
  ],
  templateUrl: './tool-panel.component.html',
  styleUrl: './tool-panel.component.scss'
})
export class ToolPanelComponent {
  @Input() tool!: ToolData;

}
