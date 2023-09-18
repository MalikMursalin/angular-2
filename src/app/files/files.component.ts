import { Component, OnInit } from '@angular/core';
import { FilesService } from './files.service';

@Component({
  selector: 'app-files',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.css']
})

export class FilesComponent implements OnInit {

  htmlContent: string = '';

  constructor(private filesService: FilesService) { }

  ngOnInit() {
    // You can now use filesService methods here to upload and retrieve files.
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      const formData = new FormData();
      formData.append('file', file);

      // Upload the selected file using filesService
      this.filesService.uploadFile(formData).subscribe((response: any) => {
        // Handle the API response here (e.g., display a success message)
        console.log('File uploaded successfully:', response);
      });
    }
  }


  retrieveHtmlFile() {
    const filename = 'example.html'; // Replace with the actual filename

    // Fetch the HTML file content using filesService
    this.filesService.getFile(filename).subscribe((fileData: any) => {
      // Handle the API response here
      console.log('HTML File retrieved:', fileData);

      // Update the htmlContent variable with the retrieved HTML content
      this.htmlContent = fileData;

      // If the HTML file contains JavaScript or CSS, you may need to use the Angular Sanitizer for security.
    });
  }
}
