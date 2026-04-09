import { Component, ElementRef, ViewChild, inject, input } from '@angular/core';
import { DatePipe } from '@angular/common';
import html2canvas from 'html2canvas';
import { Certificate } from '../../models/certificate.model';
import { CertificateService } from '../../services/certificate.service';
import { CertificateTemplate } from '../certificate-template/certificate-template';

@Component({
  selector: 'app-certificate-item',
  imports: [DatePipe, CertificateTemplate],
  templateUrl: './certificate-item.html',
  styleUrl: './certificate-item.css',
})
export class CertificateItem {
  certificate = input.required<Certificate>();

  @ViewChild('certEl') certEl!: ElementRef<HTMLElement>;

  private service = inject(CertificateService);

  async download() {
    const el = this.certEl.nativeElement;
    const canvas = await html2canvas(el, { scale: 2, useCORS: true });
    const link = document.createElement('a');
    link.download = `certificate-${this.certificate().studentName}.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();
  }

  remove() {
    this.service.remove(this.certificate().id);
  }
}
