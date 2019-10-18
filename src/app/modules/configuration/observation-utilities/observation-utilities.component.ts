import { Component, ElementRef, ViewChild, NgModule, OnInit } from '@angular/core';
import { FormioModule } from 'ng2-formio';
import { DragAndDropModule } from 'angular-draggable-droppable';
// import { FormGroup, FormControl } from '@angular/forms';
import { FormControl, FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { MatTabChangeEvent,MatPaginator, MatTableDataSource, MatSort } from '@angular/material';

// import * as $ from 'jquery';
declare var $: any;

import { TagInputModule } from 'ngx-chips';
 
TagInputModule.withDefaults({
    tagInput: {
        placeholder: 'Add a Keyword',
        // add here other default values for tag-input
    },
    dropdown: {
        displayBy: 'my-display-value',
        // add here other default values for tag-input-dropdown
    }
});


@Component({
  selector: 'app-observation-utilities',
  templateUrl: './observation-utilities.component.html',
  styleUrls: ['./observation-utilities.component.scss']
})



// var ELEMENT_DATA: Element[] = [];

export class ObservationUtilitiesComponent implements OnInit {
  title = 'form-build';
  closeResult: string;
  display = 'none'; //default Variable
  showJsonInfo: boolean = false;
  solutionObj = {};
  showMapping: boolean = false;

  questions: any;

  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};
  keyWordItems = [];

  entitys = [];

  previous =false;
  next = true;
  nextBtn = "Next";

  viewBlock = "";

  formioOptions = { builder: {
    basic: false,
    advanced: false,
    data: false,
    customBasic: {
      title: 'Basic Components',
      default: true,
      weight: 0,
      components: {
        textfield: true,
        textarea: true,
        email: true,
        phoneNumber: true
      }
    }
  }
};

  constructor(private elRef: ElementRef) { }


  Data: any;
  dopElement = "";
  selectedIndex: number = 0;
  maxNumberOfTabs =3;
  showAddCriteria=false;
  saveBtn =true;

  displayedColumns: string[] = ['no','criteriaName','description'];
  dataSource;  
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  @ViewChild('json') jsonElement?: ElementRef;
  showCreate=false;



  // @ViewChild('dropArea') this.dopElement?: ElementRef;
  public form: Object = {
    "title": "My Test Form",
    builder:{
      basic: false,
      advanced: false,
      data: false,
      customBasic: {
        title: 'Basic Components',
        default: true,
        weight: 0,
        components: {
          textfield: true,
          textarea: true,
          email: true,
          phoneNumber: true
        }
      }
    },
    components: [],
    "components11": [
      {
        "input": true,
        "label": "Submit",
        "tableView": false,
        "key": "submit",
        "size": "md",
        "leftIcon": "",
        "rightIcon": "",
        "block": false,
        "action": "submit",
        "disableOnInvalid": true,
        "theme": "primary",
        "type": "button",
        "hidden": true
    }
     
    ],
    "components1": [
      // {
      //   "type": "textfield",
      //   "input": true,
      //   "tableView": true,
      //   "inputType": "hidden",
      //   "inputMask": "",
      //   "label": "text",
      //   "key": "firstName",
      //   "placeholder": "name",
      //   "prefix": "",
      //   "suffix": "",
      //   "multiple": false,
      //   "defaultValue": "",
      //   "protected": false,
      //   "unique": false,
      //   "persistent": true,
      //   "validate": {
      //     "required": true,
      //     "minLength": 2,
      //     "maxLength": 10,
      //     "pattern": "",
      //     "custom": "",
      //     "customPrivate": false
      //   },
      //   "conditional": {
      //     "show": "",
      //     "when": null,
      //     "eq": ""
      //   }
      // },
      // {
      //   "type": "textfield",
      //   "input": true,
      //   "tableView": true,
      //   "inputType": "text",
      //   "inputMask": "",
      //   "label": "Last Name",
      //   "key": "lastName",
      //   "placeholder": "Enter your last name",
      //   "prefix": "",
      //   "suffix": "",
      //   "multiple": false,
      //   "defaultValue": "",
      //   "protected": false,
      //   "unique": false,
      //   "persistent": true,
      //   "validate": {
      //     "required": true,
      //     "minLength": 2,
      //     "maxLength": 10,
      //     "pattern": "",
      //     "custom": "",
      //     "customPrivate": false
      //   },
      //   "conditional": {
      //     "show": "",
      //     "when": null,
      //     "eq": ""
      //   }
      // },

    ],
    readOnly: false,
    group: {
      advanced: false,
      data: false,
      layout: true,

    },
  };

  onChange(event) {



    this.Data = event.form;
    console.log(event.form);
  }


  showQuestions = false;
  html = "";
  myForm: FormGroup;
  solutionForm: FormGroup;
  addEntityForm: FormGroup;

  solutions: any;
  criteria: any;
  solutionString: string;
  criteriaString: string;
  selectedCriteriaOfqtn: string;
  // dropdownList:any;

  addEntityBlock = false;

  formData:any =[
    {
      type: "header",
      subtype: "h1",
      label: "formBuilder in Angular"
    },
    {
      type: "paragraph",
      label:
        "This is a demonstration of formBuilder running in an AngularJS project."
    }
  ];
  

  ngOnInit() {


    this.showCreate =false;

   
   

    this.criteria = [];


    this.dataSource = new MatTableDataSource<Element>(this.criteria);
    // this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort; 

    var formD  =this.form;
    // $(  document.getElementById("fb-editor")).formBuilder({ formD });

    this.solutions = [];

    this.entitys = ['school', 'parent', 'teacher', 'student']

    this.criteria = [
      // {"id":1,"itemName":"India"}
    ];
    this.selectedItems = [

    ];
    this.dropdownSettings = {
      singleSelection: false,
      text: "Select Criteria",
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      enableSearchFilter: true,
      classes: "myclass custom-class"
    };

    this.myForm = new FormGroup({
      criteriaName: new FormControl(''),
      description:new FormControl(''),
      // l1: new FormControl(''),
      // l2: new FormControl(''),
      // l3: new FormControl(''),
      // l4: new FormControl('')
    });

    this.solutionForm = new FormGroup({
      name: new FormControl(''),
      selectEntity:new FormControl(),
      description: new FormControl(''),
      status: new FormControl(''),
      concepts: new FormControl(''),
      keywords: new FormControl(''),
      isReusable: new FormControl('')
    });

    this.addEntityForm = new FormGroup({
      entityName: new FormControl(''),
      districtId: new FormControl(''),
      districtName: new FormControl(''),
      zoneId: new FormControl(''),
      name: new FormControl(''),
      types: new FormControl(''),
      addressLine1: new FormControl(''),
      city: new FormControl(''),
      pincode: new FormControl(''),
      state: new FormControl('')
    });
  }


  onItemSelect(item: any) {
    console.log(item);
    console.log(this.selectedItems);
  }
  OnItemDeSelect(item: any) {
    console.log(item);
    console.log(this.selectedItems);
  }
  onSelectAll(items: any) {
    console.log(items);
  }
  onDeSelectAll(items: any) {
    console.log(items);
  }


  AddQuestions() {


    this.viewBlock = "";
    this.addEntityBlock = false;


    this.showQuestions = this.showQuestions == true ? false : true;

    this.showMapping = false;
    // if(this.showQuestions ){

    // }else{

    // }


  }
  // onAnyDrop(e: DropEvent) {

  //   console.log(e.dragData);
  //   // this.droppedItems.push(e.dragData);

  //   // if (e.dragData.type === 'vegetable') {
  //   //   this.removeItem(e.dragData, this.vegetables);
  //   // } else {
  //   //   this.removeItem(e.dragData, this.fruits);
  //   // }
  // }

  dragEnd(event, name) {
    console.log('Element was dragged', event);


    if (name == 'criteria') {
      this.html = this.html + "<div id='criteria' class='col-sm-4 card card-header'>" + name + " <span style='color:blue'>Add Criteria</span></div> ";
      // this.dopElement = this.html;
    } else {
      this.html = this.html + "<div class='col-sm-4 card card-header' >" + name + "</div> ";
    }

    // console.log(this.elRef.nativeElement.querySelector('criteria'));
    this.elRef.nativeElement.querySelector('my-element')
      .addEventListener('click', this.callCriteria.bind(this));

    this.elRef.nativeElement.querySelector('criteria').addEventListener('click', function () {
      console.log("ddd");
    });


  }
  drop(event) {

  }
  callCriteria() {
    // alert("called");
    console.log("called");
  }


  //   openModalDialog(){
  //     this.display='block'; //Set block css
  //  }

  //  closeModalDialog(){
  //   this.display='none'; //set none css after close dialog
  //  }

  onSubmit(form) {
    console.log('Valid?', form.valid); // true or false

    if (form.valid) {

      var criteriaObj = {
        id: this.criteria.length + 1,
        itemName: form.value.criteriaName,
        criteriaName: form.value.criteriaName,
        description:form.value.description
        // l1: form.value.l1,
        // l2: form.value.l2,
        // l3: form.value.l3,
        // l4: form.value.l4
      }
      this.criteria.push(criteriaObj);
      // this.solutionObj =criteriaObj;
      this.criteriaString = JSON.stringify(this.criteria);


      this.myForm.reset();

      // $("#myModal").modal('hide');
      // console.log("this.criteria", this.criteria);
    }


    // console.log('Name', form.value.criteriaName);
    // console.log('Email', form.value.email);
    // console.log('Message', form.value.message);
  }
  solutionSubmit(form) {
    // console.log("form",form.value); 

    var solObj = {
      name: form.value.name,
      description: form.value.description,
      status: form.value.status,
      concepts: form.value.concepts,
      keywords: form.value.keywords,
      isReusable: form.value.isReusable,
      type: "observation",
      subType: "school",
      isDeleted: false,
      isRubricDriven: true
    }
    this.solutions.push(solObj);

    this.solutionString = JSON.stringify(this.solutions);


    $("#solutionModel").modal('hide');

  }
  showJson() {

    this.showJsonInfo = this.showJsonInfo == true ? false : true;
    // this.showMapping =false;
  }

  mapData() {

    this.viewBlock = "";
    this.addEntityBlock = false;
    this.showMapping = true;
    this.showQuestions = false;

  }

  saveQuestions() {

    this.questions = {

      criteria: this.selectedCriteriaOfqtn,
      questions: this.Data
    }

    console.log("ss", this.questions);

  }

  AddEntity() {
    this.viewBlock = "";
    this.addEntityBlock = true;
    this.showQuestions = false;
    this.showMapping = false;
  }

  addFormSubmit(InputForm) {

    console.log("input form", InputForm.value.entityName);

    this.entitys.push(InputForm.value.entityName);
  }

  viewData(input) {

    console.log("input", input);

    this.addEntityBlock = false;
    this.showQuestions = false;
    this.showMapping = false;


    // if (input == 'entitys') {
      this.viewBlock = input;
    // }else

  }

  public tabChanged(tabChangeEvent: MatTabChangeEvent): void {

    console.log("tabChangeEvent.index",tabChangeEvent.index);
    this.selectedIndex = tabChangeEvent.index;

    this.saveBtn = false;

    if(this.selectedIndex==0){
      this.saveBtn = true;
      this.previous =false;
    }else{
      
      this.previous =true;
    }

    if(this.selectedIndex==2){
      this.nextBtn = "Save"
    }else{
      this.nextBtn = "Next";
    }
    if(this.selectedIndex==3){
      this.nextBtn = "Previous";
      this.saveBtn = false;
      this.next = false;

    }

    

    // if(this.selectedIndex==3){
    //   this.previous =false;
    // }
   
}

 nextStep() {
    if (this.selectedIndex != this.maxNumberOfTabs) {
      this.selectedIndex = this.selectedIndex + 1;
    }
    console.log(this.selectedIndex);
  }

  previousStep() {
    if (this.selectedIndex != 0) {
      this.selectedIndex = this.selectedIndex - 1;
    }
    console.log(this.selectedIndex);
  }

  AddCriteria(){
    this.showAddCriteria = this.showAddCriteria==true ?false:true;
  }

  create(){
    this.showCreate =true;
  }


}


