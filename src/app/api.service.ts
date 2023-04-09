import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class APIService {

  constructor(private _http: HttpClient) { }

  private makeUrl(api: string) {
    let baseUrl = this.baseUrl();
    return baseUrl + api;
  }

  private baseUrl() {
    return 'http://127.0.0.1:8000/api/';
  }

  getPersonalInformation() {
    return this._http.get(this.makeUrl('personal-information/index'));
  }
  getEducationalInfo() {
    return this._http.get(this.makeUrl('education/index'));
  }
  getExperienceInfo() {
    return this._http.get(this.makeUrl('experience/index'));
  }
  getSkillInfo() {
    return this._http.get(this.makeUrl('skill/index'));
  }
  getProjectInfo() {
    return this._http.get(this.makeUrl('project/index'));
  }
  getContactInfo() {
    return this._http.get(this.makeUrl('contact/index'));
  }
}
