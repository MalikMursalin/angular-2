// files.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FilesService {
  private apiUrl = 'https://api.escuelajs.co/api/v1/files';

  constructor(private http: HttpClient) { }

  uploadFile(fileData: FormData) {
    return this.http.post(`${this.apiUrl}/upload`, fileData);
  }

  getFile(fileName: string) {
    return this.http.get(`${this.apiUrl}/${fileName}`);
  }

  // Implement other file-related API methods
}
