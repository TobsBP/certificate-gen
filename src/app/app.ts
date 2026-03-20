import { Component, signal } from '@angular/core';
import { Navbar } from './_components/navbar/navbar';
import { PrimaryButton } from './_components/primary-button/primary-button';
import { SecondaryButton } from './_components/secondary-button/secondary-button';
import { CertificateItem } from './_components/certificate-item/certificate-item';
import { BaseUi } from './_components/base-ui/base-ui';
import { Certificates } from './pages/certificates/certificates';
import { CertificateForm } from './pages/certificate-form/certificate-form';

@Component({
  selector: 'app-root',
  imports: [Certificates, BaseUi, Navbar, PrimaryButton, SecondaryButton, CertificateItem, CertificateForm],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
  
export class App {
  protected readonly title = signal('certificate-gen');
  showNavbar: boolean = false;
}
