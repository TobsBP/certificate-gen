import { Component, inject } from '@angular/core';
import { CertificateService } from '../../services/certificate.service';
import { CertificateItem } from '../../_components/certificate-item/certificate-item';

@Component({
  selector: 'app-certificates',
  imports: [CertificateItem],
  templateUrl: './certificates.html',
  styleUrl: './certificates.css',
})
export class Certificates {
  service = inject(CertificateService);
  certificates = this.service.certificates;
}
