import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Observable, startWith, map } from 'rxjs';


@Component({
  selector: 'app-lot',
  standalone: true,
  imports: [ReactiveFormsModule, MatAutocompleteModule, MatFormFieldModule, MatInputModule, MatCardModule, MatTabsModule, MatButtonModule, MatIconModule, CommonModule],
  templateUrl: './lot.component.html',
  styleUrl: './lot.component.scss'
})
export class LotComponent {
  // カード種別ごとにアイコン名・色を指定できるように
  cardIcon = 'category'; // 例: 立方体
  cardIconColor = '#ff9800'; // ポップなオレンジ色
  myControl = new FormControl('');
  myControl2 = new FormControl('');
  form = new FormGroup({
    myControl: this.myControl,
    myControl2: this.myControl2
  });

  options: string[] = ['One', 'Two', 'Three', 'Four', 'Five'];
  options2: string[] = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry'];
  filteredOptions: Observable<string[]>;
  filteredOptions2: Observable<string[]>;

  // 各タブごとに2カラム分のDLリストを持つ構造に
  dlPages = [
    [
      [
        { term: '項目A', desc: '値A' },
        { term: '項目B', desc: '値B' },
        { term: '項目C', desc: '値C' }
      ],
      [
        { term: '項目D', desc: '値D' },
        { term: '項目E', desc: '値E' },
        { term: '項目F', desc: '値F' }
      ]
    ],
    [
      [
        { term: '項目G', desc: '値G' },
        { term: '項目H', desc: '値H' },
        { term: '項目I', desc: '値I' }
      ],
      [
        { term: '項目J', desc: '値J' },
        { term: '項目K', desc: '値K' },
        { term: '項目L', desc: '値L' }
      ]
    ],
    [
      [
        { term: '項目M', desc: '値M' },
        { term: '項目N', desc: '値N' },
        { term: '項目O', desc: '値O' }
      ],
      [
        { term: '項目P', desc: '値P' },
        { term: '項目Q', desc: '値Q' },
        { term: '項目R', desc: '値R' }
      ]
    ]
  ];

  constructor() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '', this.options))
    );
    this.filteredOptions2 = this.myControl2.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '', this.options2))
    );
  }

  private _filter(value: string, options: string[]): string[] {
    const filterValue = value.toLowerCase();
    return options.filter(option => option.toLowerCase().includes(filterValue));
  }
}
