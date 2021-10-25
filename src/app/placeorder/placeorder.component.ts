import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BooksdataService } from '../booksdata.service';

@Component({
  selector: 'app-placeorder',
  templateUrl: './placeorder.component.html',
  styleUrls: ['./placeorder.component.css'],
})
export class PlaceorderComponent implements OnInit {
  /**
   * 
   * @param _service service is imported to call methods
   * @param snap 
   */
  constructor(
    private _service: BooksdataService,
    private snap: ActivatedRoute,
    private fb:FormBuilder
  ) {}

  /**
   * variables
   */
  panelOpenState = false;
  public detailsSection: number = 1;
  public summery: number = 1;
  public editDetails: boolean = false;
  public displayForm: boolean = false;
  public getId: string;
  public order: any;

  /**
   * form variable is declare
   */
  data = this.fb.group({
    name: [''],
    phoneNumber: [''],
    cityName: [''],
    landmark: [''],
    address: [''],
    locality: [''],
    pinCode: [''],
    place: ['']
  });

  /**
   * getCartItemById service is used to get cart item to purchase page using snapshot
   */
  ngOnInit(): void {
    this.getId = this.snap.snapshot.paramMap.get('id');
    this._service.getCartItemById(this.getId).subscribe((getData: any) => {
      this.order = getData.data;
    });
  }

  /**
   * continueWithDetails function is used to processed data
   */
  continueWithDetails() {
    this.detailsSection = 0;
    this.displayForm = true;
  }

  /**
   * continueWithSummery function is used to display order details
   */
  continueWithSummery() {
    this.summery = 0;
    this.editDetails = true;
    console.log(this.data.value);
  }

  /**
   * editDetailsButton to edit details
   */
  editDetailsButton() {
    this.summery = 1;
  }
}
