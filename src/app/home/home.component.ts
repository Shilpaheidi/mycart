import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
interface Item {
  text: string;
  image: string;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})


export class HomeComponent {
  searchForm: FormGroup;
  // items: string[] = ['Apple', 'Banana', 'Orange', 'Mango'];
  items: Item[] = [
    { text: 'Iphone', image: 'iphone.jfif' },
    { text: 'Lenovo', image: 'lenovo.jfif' },
    { text: 'Redmi', image: 'realme.jfif' },
    { text: 'Vivo', image: 'vivo.jfif' }
  ];
  filteredItems: any[] = [];
  constructor(private formBuilder: FormBuilder,private router: Router){
    this.searchForm = this.formBuilder.group({
    searchField:['']
    });

    this.searchForm.controls['searchField'].valueChanges.subscribe(value => {
      this.filteredItems = this.items.filter(item =>
        item.text.toLowerCase().includes(value.toLowerCase())
      );
    });
  
  }

  openImage(imageName: string) {
    this.router.navigate(['image', imageName]);
  }
 

}
