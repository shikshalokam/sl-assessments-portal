import { Component, ElementRef, ViewChild, NgModule, OnInit, ChangeDetectorRef, AfterViewInit } from '@angular/core';
import { FormioModule } from 'ng2-formio';
import { DragAndDropModule } from 'angular-draggable-droppable';
// import { FormGroup, FormControl } from '@angular/forms';
import { FormControl, FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { MatTabChangeEvent, MatPaginator, MatTableDataSource, MatSort, MatSnackBar,MatDialog } from '@angular/material';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { DraftFrameWorkServiceService } from '../../configuration/workspace-services/draft-frame-work-service.service';
import { DeleteConfirmComponent } from '../designer-worspace/components/delete-confirm/delete-confirm.component';
declare var $: any;

import { TagInputModule } from 'ngx-chips';
import { from } from 'rxjs';
import { error } from 'util';
import { IfStmt } from '@angular/compiler';

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

  previous = false;
  next = true;
  nextBtn = "Next";

  viewBlock = "";

  formioOptions = {
    builder: {
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
  Data: any;
  dopElement = "";
  selectedIndex: number = 0;
  maxNumberOfTabs = 3;
  showAddCriteria = false;
  saveBtn = true;
  criteriaList = new MatTableDataSource<Element>();
  displayedColumns: string[] = ['no','name', 'description', 'action'];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  @ViewChild('json') jsonElement?: ElementRef;
  showCreate = false;
  criteriaListPageSize = 5;

  nextCriteriaPage = 0;

  criteriaNameupdate: any;
  criteriaDescriptionUpdate: any;
  criteriaAddorUpdate: string = "Add";
  currentCriteriaId: any;

  criteriaListCount:number;
  tcriteriaList = new MatTableDataSource<Element>();

  solFormSubmitted = false;



  constructor(private elRef: ElementRef, private frameWorkServ: DraftFrameWorkServiceService, private route: Router, private activatedRoute: ActivatedRoute, private _snackBar: MatSnackBar, private cdr: ChangeDetectorRef,public dialog: MatDialog) { }

  // @ViewChild('dropArea') this.dopElement?: ElementRef;
  public form: Object = {
    "title": "My Test Form",
    builder: {
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
  }
  showQuestions = false;
  html = "";
  criteriaForm: FormGroup;
  solutionForm: FormGroup;
  addEntityForm: FormGroup;

  solutions: any;
  criteria: any;
  solutionString: string;
  criteriaString: string;
  selectedCriteriaOfqtn: string;
  // dropdownList:any;

  frameWorkId: any;

  addEntityBlock = false;

  formData: any = [
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

  draftSolutionLanguage:any;
  draftsolutionDescription:any;
  draftSolutionName:any;
  draftSolutionEntityType = "";
  criteriaSubmitted:boolean = false;
  languageArr = ["Kannada","English","Hindi","Tamil"];
  ngAfterViewInit() {
    this.criteriaList.paginator = this.paginator;
    this.criteriaList.sort = this.sort;
  }

  ngOnInit() {
    this.showCreate = false;
    this.activatedRoute.params.subscribe(params => {
      this.frameWorkId = params['id'];
      console.log("this.frameWorkId ", this.frameWorkId);
      if (this.frameWorkId) {
        this.showCreate = true;
        this.getEntityTypeList();
        this.getFrameWorkDetails();
       
      }
    });
    this.criteria = [];
    var formD = this.form;
    this.solutions = [];
   
    this.criteria = [
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

    this.criteriaForm = new FormGroup({
      criteriaName: new FormControl('',Validators.required),
      description: new FormControl('',Validators.required),
      // l1: new FormControl(''),
      // l2: new FormControl(''),
      // l3: new FormControl(''),
      // l4: new FormControl('')
    });

    this.solutionForm = new FormGroup({
      solutionName: new FormControl('',Validators.required),
      // selectEntity:new FormControl(),
      solutionDescription: new FormControl(''),
      // status: new FormControl(''),
      // concepts: new FormControl(''),
      solutionKeywords: new FormControl(''),
      // isReusable: new FormControl('')
      solutionLanguage: new FormControl('',Validators.required),
      solutionEntityType: new FormControl('',Validators.required)

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
  }


  dragEnd(event, name) {
    console.log('Element was dragged', event);
    if (name == 'criteria') {
      this.html = this.html + "<div id='criteria' class='col-sm-4 card card-header'>" + name + " <span style='color:blue'>Add Criteria</span></div> ";
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
  /**
   * 
   * Submitting the Criteria for 
   */
  onSubmit(form) {

    
     this.criteriaSubmitted = true;
    if (form.valid) {
      var criteriaObj = {
        id: this.criteria.length + 1,
        itemName: form.value.criteriaName,
        criteriaName: form.value.criteriaName,
        description: form.value.description
      }
      this.criteria.push(criteriaObj);
      this.criteriaString = JSON.stringify(this.criteria);
      if (this.criteriaAddorUpdate === "Add") {
        let obj = {
          draftFrameworkId: this.frameWorkId,
        }
        this.frameWorkServ.draftCriteriaCreate(obj).subscribe(data => {
          let criteriaObj = {
            name: form.value.criteriaName,
            description: form.value.description
          }
          if (data['result']._id) {
            this.frameWorkServ.updateDraftCriteria(data['result']._id, criteriaObj).subscribe(data => {
              this.openSnackBar("Criteria Added Succesfully", "Done");
              this.draftCriteriaList(this.frameWorkId);
              this.criteriaList.paginator = this.paginator;
              this.criteriaList.sort = this.sort;
              // this.criteriaForm.reset();
              // this.criteriaNameupdate = "";
              // this.criteriaDescriptionUpdate = "";
              this.criteriaSubmitted =false;
            });
          }
        });
      } else {

        let criteriaObj = {
          name: form.value.criteriaName,
          description: form.value.description
        }
        this.frameWorkServ.updateDraftCriteria(this.currentCriteriaId, criteriaObj).subscribe(data => {
          // if(data.r)
          this.openSnackBar("Criteria Updated Succesfully", "Done");
          this.draftCriteriaList(this.frameWorkId);
          this.criteriaList.paginator = this.paginator;
          this.criteriaList.sort = this.sort;
          this.criteriaForm.reset();
          this.criteriaSubmitted =false;
        });
      }
    }
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
    this.viewBlock = input;
  }


  /**
   * Tab changes events will be handled here
   */

  public tabChanged(tabChangeEvent: MatTabChangeEvent): void {

    console.log("tabChangeEvent.index", tabChangeEvent.index);
    this.selectedIndex = tabChangeEvent.index;

    this.saveBtn = false;

    if (this.selectedIndex == 0) {
      this.saveBtn = true;
      this.previous = false;
    } else {

      this.previous = true;
    }

    // tab changed to criteria 
    if (this.selectedIndex == 1) {


      this.draftCriteriaList(this.frameWorkId);
    }
    if (this.selectedIndex == 2) {
      this.nextBtn = "Save"
    } else {
      this.nextBtn = "Next";
    }
    if (this.selectedIndex == 3) {
      this.nextBtn = "Previous";
      this.saveBtn = false;
      this.next = false;
    }
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

  AddCriteria() {
    this.showAddCriteria = this.showAddCriteria == true ? false : true;
    this.criteriaAddorUpdate = "Add";
    console.log("criteriaForm.controls",this.criteriaForm.controls);
  }

  create() {
    // creatingg Draft frameWork using below API
    this.frameWorkServ.createDraftFrameWork().subscribe(
      data => {
        // console.log("data",data['result']._id);
        this.route.navigateByUrl("/workspace/edit/" + data['result']._id);
      },
      error => {
        console.log("data", error);
      }
    );
  }
  saveData() {
    // save frame work data 
    if (this.selectedIndex == 0) {
      this.solFormSubmitted = true;
      if(this.solutionForm.valid){
        let selectedEntity = this.entitys[0].filter( data=>{ if(data._id==this.solutionForm.value.solutionEntityType){
          return data;
        }; })
        // console.log("selectedEntity",selectedEntity);
      let obj = {
        name: this.solutionForm.value.solutionName,
        keywords: this.solutionForm.value.solutionKeywords,
        language: this.solutionForm.value.solutionLanguage,
        description: this.solutionForm.value.solutionDescription,
        entityType:selectedEntity[0].name,
        entityTypeId:selectedEntity[0]._id
      }
      this.frameWorkServ.updateDraftFrameWork(obj, this.frameWorkId).subscribe(data => {
        console.log("data", data);
        this.openSnackBar("data updated Succesfully", "Updated");
      },
        error => {
          console.log("data", error);
        });
    }else{
      return false;
    }
  }else{
    return false;
  }
  }


  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }

  draftCriteriaList(frameWorkId) {
    this.frameWorkServ.draftCriteriaList(frameWorkId, this.criteriaListPageSize, this.nextCriteriaPage + 1).subscribe(data => {
      if (data && data['status'] == 200) {
          this.criteriaList = data['result'].data;
        this.cdr.detectChanges();
        this.criteriaListCount = data['result'].count;
      }
    },
      error => {
        console.log("data", error);
      });
  }

  onPaginateChange(event) {
    console.log("event" ,event);
    // console.log("this.criteriaListCount 1",this.criteriaListCount); 
    this.nextCriteriaPage = event.pageIndex;
    this.criteriaListPageSize = event.pageSize;
    this.draftCriteriaList(this.frameWorkId);
  }

  // edit criteria form with selected criteria 
  editCriteria(element) {
    window.scroll(0,0);
    this.showAddCriteria = true;
    this.criteriaDescriptionUpdate = element.description;
    this.criteriaNameupdate = element.name;
    this.criteriaAddorUpdate = "Update";
    this.currentCriteriaId = element._id;
  }

  // method to delete the existing criteria 
  deleteDraftCriteria(element) {
    const dialogRef = this.dialog.open(DeleteConfirmComponent, {
      width: '350px',
    })
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.frameWorkServ.draftCriteriaDelete(element._id).subscribe(data => {
          if(data['status']){
            this.openSnackBar("Criteria Deleted Succesfully", "Deleted");
            this.draftCriteriaList(this.frameWorkId);
          }
        }, error => {
          console.log("error while callng api", error);
        })
      }
    });
  }

  getFrameWorkDetails(){
    this.frameWorkServ.getDraftFrameworksdetails(this.frameWorkId).subscribe(data => {
      if(data['status']){
        // console.log("data",data['result']);
        let res = data['result'];
        this.draftSolutionName = res.name;
        this.draftsolutionDescription = res.description;
        this.draftSolutionLanguage = res.language[0];
        // console.log("this.draftSolutionLanguage",this.draftSolutionLanguage);
        this.draftSolutionEntityType = res.entityTypeId;
        this.keyWordItems = res.keywords;
      }
    }, error => {
      console.log("error while callng api service", error);
    })
  }

  get critForm() { return this.criteriaForm.controls; }

  get solValid() { return this.solutionForm.controls; }

  closeAddOrUpdate(){
    this.showAddCriteria =false;
  }

  // method is used to get the All the Available entityTypes
  getEntityTypeList(){
    this.frameWorkServ.getEntityTypeList().subscribe(data => {
      this.entitys.push(data['result']);
      console.log("data this.getEntityTypeList();  ",data['result']);
    });
  }
  
}
