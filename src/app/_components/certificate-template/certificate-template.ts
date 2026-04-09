import { Component, input } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Certificate } from '../../models/certificate.model';

@Component({
  selector: 'app-certificate-template',
  imports: [DatePipe],
  templateUrl: './certificate-template.html',
  styleUrl: './certificate-template.css',
})
export class CertificateTemplate {
  certificate = input.required<Certificate>();
}
