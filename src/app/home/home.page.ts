import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  formulario: FormGroup = new FormGroup({
    nome: new FormControl(''),
    email: new FormControl(''),
    senha: new FormControl("")
  });

  msgValidacao = {
    nome: [{tipo: 'minlength', msg: 'Pelo menos 3 caracteres'}],
    email: [
      {tipo: 'email', msg: 'Campo obrigatório'},
      {tipo: 'required', msg: 'Campo obrigatório'}
    ],
    senha: [
      {tipo: 'minLength', msg: 'Pelo menos 3 caracteres'},
      {tipo: 'required', msg: 'Campo obrigatório'}
    ]
  }

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      // '' é o valor inicial do campo
      // ,[] é onde colocamos as validações
      nome: ['', [Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

}
