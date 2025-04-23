import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { ToolData, ToolDataService } from '../../../services/tool-data.service';
import { ToolPanelComponent } from '../../../shared/components/tool-panel/tool-panel.component';

@Component({
  selector: 'app-tool-list',
  imports: [
    CommonModule,
    MatExpansionModule,
    ToolPanelComponent
  ],
  standalone: true,
  templateUrl: './tool-list.component.html',
  styleUrl: './tool-list.component.scss'
})
export class ToolListComponent implements OnInit {
  tools: ToolData[] = [];

  constructor(private toolDataService: ToolDataService) { }

  ngOnInit(): void {
    this.tools = this.toolDataService.getTools();
  }
}
