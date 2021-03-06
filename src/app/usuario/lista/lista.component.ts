import { Component, OnInit } from '@angular/core';
import {UsuarioService} from '../../services/usuario.service';
import {UsuarioModel} from '../../../../models/usuario.model';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styles: [
  ]
})
export class ListaComponent implements OnInit {
  listaUsers: UsuarioModel[] = [];
  constructor(private usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.usuarioService.getUsers().subscribe((data) => {
      this.listaUsers = data;
    });
  }

}
