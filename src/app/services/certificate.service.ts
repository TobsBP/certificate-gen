import { Injectable, signal } from '@angular/core';
import { Certificate } from '../models/certificate.model';

@Injectable({ providedIn: 'root' })
export class CertificateService {
  private _certificates = signal<Certificate[]>([]);
  certificates = this._certificates.asReadonly();

  add(studentName: string, activities: string[]): void {
    const cert: Certificate = {
      id: crypto.randomUUID(),
      studentName,
      activities,
      generatedAt: new Date(),
    };
    this._certificates.update((list) => [...list, cert]);
  }

  remove(id: string): void {
    this._certificates.update((list) => list.filter((c) => c.id !== id));
  }
}
