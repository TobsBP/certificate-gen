import { Component } from '@angular/core';
import { Navbar } from './_components/navbar/navbar';
import { BaseUi } from './_components/base-ui/base-ui';
import { Certificates } from './pages/certificates/certificates';
import { CertificateForm } from './pages/certificate-form/certificate-form';

@Component({
  selector: 'app-root',
  imports: [Navbar, BaseUi, CertificateForm, Certificates],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
