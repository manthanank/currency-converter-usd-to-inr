import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ConvertorService } from 'src/app/services/convertor.service';

@Component({
  selector: 'app-convertor',
  templateUrl: './convertor.component.html',
  styleUrls: ['./convertor.component.css'],
})
export class ConvertorComponent implements OnInit {
  title = 'Converter USD Dollar to Rupees';
  converterForm: any;
  convert: any;
  value: any;
  constructor(private convertorService: ConvertorService) {}

  ngOnInit(): void {
    this.value = false;
    this.converterForm = new FormGroup({
      value: new FormControl(null, [Validators.min(0)]),
    });
  }

  Converter(): void {
    const value = this.converterForm.value.value;
    this.value = true;
    this.convertorService.convert().subscribe(({ USD_INR }) => {
      this.convert = Number((value * USD_INR).toFixed(2));
    });
  }
}
