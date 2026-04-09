import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SecondaryButton } from '../../_components/secondary-button/secondary-button';
import { PrimaryButton } from '../../_components/primary-button/primary-button';
import { CertificateService } from '../../services/certificate.service';

@Component({
  selector: 'app-certificate-form',
  imports: [FormsModule, SecondaryButton, PrimaryButton],
  templateUrl: './certificate-form.html',
  styleUrl: './certificate-form.css',
})
export class CertificateForm {
  private service = inject(CertificateService);

  studentName = '';
  currentActivity = '';
  activities: string[] = [];

  nameTouched = false;
  activityTouched = false;
  activitiesError = false;

  get nameInvalid() {
    return this.nameTouched && !this.studentName.trim();
  }

  get activityInvalid() {
    return this.activityTouched && !this.currentActivity.trim();
  }

  addActivity() {
    this.activityTouched = true;
    const trimmed = this.currentActivity.trim();
    if (!trimmed) return;
    if (!this.activities.includes(trimmed)) {
      this.activities.push(trimmed);
    }
    this.currentActivity = '';
    this.activityTouched = false;
    this.activitiesError = false;
  }

  removeActivity(index: number) {
    this.activities.splice(index, 1);
  }

  generate() {
    this.nameTouched = true;
    this.activitiesError = this.activities.length === 0;

    if (!this.studentName.trim() || this.activities.length === 0) return;

    this.service.add(this.studentName.trim(), [...this.activities]);
    this.studentName = '';
    this.activities = [];
    this.nameTouched = false;
    this.activitiesError = false;
  }
}
