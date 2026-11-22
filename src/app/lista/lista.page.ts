import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import {
  IonHeader, IonToolbar, IonTitle, IonContent, IonList,
  IonItem, IonLabel, IonButtons, IonBackButton,
} from '@ionic/angular/standalone';
import { Tarefa } from '../models/tarefa';
import { DestaqueDirective } from '../directives/destaque.directive';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.page.html',
  standalone: true,
  imports: [
    NgFor, NgIf, DestaqueDirective,
    IonHeader, IonToolbar, IonTitle, IonContent, IonList,
    IonItem, IonLabel, IonButtons, IonBackButton,
  ],
})
export class ListaPage {
  tarefas: Tarefa[] = [
    { id: 1, titulo: 'Estudar TypeScript', concluida: false },
    { id: 2, titulo: 'Fazer mockup', concluida: false },
    { id: 3, titulo: 'Praticar Ionic', concluida: true },
  ];
}