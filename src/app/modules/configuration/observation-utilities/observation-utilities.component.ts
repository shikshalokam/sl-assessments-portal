import { Component, ElementRef, ViewChild, NgModule, Inject, AfterContentChecked, PLATFORM_ID, OnInit, ChangeDetectorRef, AfterViewInit } from '@angular/core';

import { DragAndDropModule } from 'angular-draggable-droppable';
// import { FormGroup, FormControl } from '@angular/forms';
import { FormControl, FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import {
  MatTabChangeEvent, MatPaginator, MatTableDataSource, MatSort,
  MatTabHeader, MatTab, MatSnackBar, MatTabGroup, MatDialog
} from '@angular/material';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { DraftFrameWorkServiceService } from '../../configuration/workspace-services/draft-frame-work-service.service';
import { DeleteConfirmComponent, ConfirmDialogModel } from '../designer-worspace/components/delete-confirm/delete-confirm.component';
import { NgxSpinnerService } from "ngx-spinner";

declare var $: any;

import { TagInputModule } from 'ngx-chips';
import { from, Subject } from 'rxjs';
import { error, debug } from 'util';
import { IfStmt } from '@angular/compiler';
import { element } from '@angular/core/src/render3';
import { Item } from 'angular2-multiselect-dropdown';

import { DynamicFormBuilderService } from "dynamic-form-builder";
import { isPlatformBrowser } from '@angular/common';

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
export class ObservationUtilitiesComponent implements OnInit, AfterContentChecked {
  constructor(private elRef: ElementRef,
    private frameWorkServ: DraftFrameWorkServiceService,
    private route: Router,
    private activatedRoute: ActivatedRoute,
    private _snackBar: MatSnackBar,
    private cdr: ChangeDetectorRef,
    private DynamicFomServe: DynamicFormBuilderService,
    public dialog: MatDialog,
    private spinner: NgxSpinnerService,
    @Inject(PLATFORM_ID) private platformId: Object) {

  }
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild('json') jsonElement?: ElementRef;
  @ViewChild('nameit') private elementRef: ElementRef;
  @ViewChild('tabs') tabs: MatTabGroup;


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
  Data: any;
  dopElement = "";
  selectedIndex: number = 0;
  maxNumberOfTabs = 3;
  showAddCriteria = false;
  saveBtn = true;
  criteriaList: any = new MatTableDataSource<Element>();
  ArrayOfCriteria = [];
  displayedColumns: string[] = ['no', 'name', 'description', 'action'];
  showCreate = false;
  criteriaListPageSize = 5;
  nextCriteriaPage = 0;
  criteriaNameupdate: any;
  criteriaDescriptionUpdate: any;
  criteriaAddorUpdate: string = "Add";
  currentCriteriaId: any;
  criteriaListCount: number;
  solFormSubmitted = false;
  localQuestionList: any;
  showQuestions = false;
  html = "";
  criteriaForm: FormGroup;
  solutionForm: FormGroup;
  addEntityForm: FormGroup;
  selectCriteriaForm: FormGroup;
  solutions: any;
  criteria: any;
  solutionString: string;
  criteriaString: string;
  selectedCriteriaOfqtn = {};
  previousCriteria = {};
  isDilogOpened = false;
  frameWorkId: any;
  addEntityBlock = false;
  draftSolutionLanguage: any;
  draftsolutionDescription: any;
  draftSolutionName: any;
  draftSolutionEntityType = "";
  criteriaSubmitted: boolean = false;
  languageArr = ["Kannada", "English", "Hindi", "Tamil"];
  eventsSubject: Subject<any> = new Subject<any>();
  questionList: any;
  draftEvidenceMethodId: any;
  draftSectionId: any;
  allFields: any;
  updateArray: any;
  questionSubmit: boolean = false;
  allQuestionWithDetails: any = [];
  allCriteriaList: any;
  unSavedQuestionList: any;
  totalpages: any;
  selectedpageNumber: any;
  enableadd = false;
  confirm: boolean = false;
  beforCriteriaChange: any = [];
  isUpdate = 1;
  confirmationValue: any;
  lastIndex: any;
  spin = false;
  tableData: any;
  clickedIndex: any;
  criteriaEmpty: any = false;
  childArray: any;
  clikOk: any = false;
  dialogRef: any;
  onChange(event) {
    this.Data = event.form;



  }
  ngAfterViewInit() {
    this.criteriaList.paginator = this.paginator;
    this.criteriaList.sort = this.sort;
    // this.elementRef.nativeElement.focus();
    // this.spinner.show();
  }

  ngAfterContentChecked() {

  }

  ngOnInit() {
    // this.spinner.show();

    this.unSavedQuestionList = [];
    this.allCriteriaList = [];
    this.allQuestionWithDetails = [];
    this.allFields = [];
    this.updateArray = [];
    this.localQuestionList = [];
    this.showCreate = false;
    this.activatedRoute.params.subscribe(params => {
      this.frameWorkId = params['id'];
      console.log("this.frameWorkId ", this.frameWorkId);
      if (this.frameWorkId) {
        this.showCreate = true;
        this.getEntityTypeList();
        this.getFrameWorkDetails();
        this.listDraftSection(this.frameWorkId);
        this.listDraftEcm(this.frameWorkId);
        this.draftCriteriaList(this.frameWorkId);
        this.draftQuestionList();
      }
    });
    this.criteria = [];

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
      criteriaName: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      // l1: new FormControl(''),
      // l2: new FormControl(''),
      // l3: new FormControl(''),
      // l4: new FormControl('')
    });

    this.solutionForm = new FormGroup({
      solutionName: new FormControl('', Validators.required),
      // selectEntity:new FormControl(),
      solutionDescription: new FormControl(''),
      // status: new FormControl(''),
      // concepts: new FormControl(''),
      solutionKeywords: new FormControl(''),
      isReusable: new FormControl(''),
      voiceOver: new FormControl('false'),
      solutionLanguage: new FormControl('', Validators.required),
      solutionEntityType: new FormControl('', Validators.required)

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

    this.selectCriteriaForm = new FormGroup({
      selectedCriteriaOfqtn: new FormControl('', Validators.required),
      selectedpagenumber: new FormControl(''),
    });

    // this.tabs._handleClick = this.interceptTabChange.bind(this);
  }

  interceptTabChange(tab: MatTab, tabHeader: MatTabHeader, idx: number) {
    const result = confirm(`Do you really want to leave the tab ${idx}?`);

    return result && MatTabGroup.prototype._handleClick.apply(this.tabs, arguments);
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
    if (name == 'criteria') {
      this.html = this.html + "<div id='criteria' class='col-sm-4 card card-header'>" + name + " <span style='color:blue'>Add Criteria</span></div> ";
    } else {
      this.html = this.html + "<div class='col-sm-4 card card-header' >" + name + "</div> ";
    }
    this.elRef.nativeElement.querySelector('my-element')
      .addEventListener('click', this.callCriteria.bind(this));
    this.elRef.nativeElement.querySelector('criteria').addEventListener('click', function () {
    });
  }
  drop(event) {
  }
  callCriteria() {
  }
  /**
   * 
   * Submitting the Criteria for 
   */
  onSubmit(form) {
    this.spinner.show();
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
          this.spinner.hide();
          if (data['result']._id) {
            this.frameWorkServ.updateDraftCriteria(data['result']._id, criteriaObj).subscribe(data => {
              this.openSnackBar("Criteria Added Succesfully", "Done");
              this.draftCriteriaList(this.frameWorkId);
              this.criteriaList.paginator = this.paginator;
              this.criteriaList.sort = this.sort;
              this.spinner.hide();
              // this.criteriaForm.reset();
              // this.criteriaNameupdate = "";
              // this.criteriaDescriptionUpdate = "";
              this.criteriaSubmitted = false;
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
          this.spinner.hide();
          this.criteriaForm.reset();
          this.criteriaSubmitted = false;
        });
      }
    } else {

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
      voiceOver: form.value.voiceOver,
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
  AddEntity() {
    this.viewBlock = "";
    this.addEntityBlock = true;
    this.showQuestions = false;
    this.showMapping = false;
  }

  addFormSubmit(InputForm) {
    this.entitys.push(InputForm.value.entityName);
  }

  viewData(input) {
    this.addEntityBlock = false;
    this.showQuestions = false;
    this.showMapping = false;
    this.viewBlock = input;
  }


  /**
   * Tab changes events will be handled here
   */

  public tabChanged(tabChangeEvent: MatTabChangeEvent): void {
    // this.getGeneratedQuestion();
    // this.spinner.show();
    this.spinner.hide();
    this.clickedIndex = tabChangeEvent.index;
    this.selectedIndex = tabChangeEvent.index;

    this.saveBtn = false;
    if (this.selectedIndex == 0) {
      if (this.confirm) {
        // this.clickedIndex = tabChangeEvent.index;
        this.confirmToSaveData();
        this.dialogRef.afterClosed().subscribe(result => {
          if (result) {
            this.confirm = false;
            this.clikOk = true;
            this.draftQuestionList();
            this.selectedIndex = this.clickedIndex; // this.clickedIndex
          } else {
            this.clikOk = false;
            this.confirm = true;
            this.lastIndex = this.selectedIndex;
            this.selectedIndex = 2;
          }
        });
      }
      if (this.criteriaEmpty) {
        this.selectedIndex = 1
        this.openSnackBar("Initial Criteria Cannot be Empty", "Failed");
      }
      // this.confirm = false;
      this.saveBtn = true;
      this.previous = false;
    } else {

      this.previous = true;
    }


    // tab changed to criteria 
    if (this.selectedIndex == 1) {
      if (this.confirm) {
        // this.selectedIndex = 2;
        this.confirmToSaveData();
        this.dialogRef.afterClosed().subscribe(result => {
          if (result) {
            this.confirm = false;
            this.clikOk = true;
            let all = this.DynamicFomServe.getALl();
            this.selectedIndex = this.clickedIndex; // this.clickedIndex
          } else {
            this.clikOk = false;
            this.confirm = true;
            this.lastIndex = this.selectedIndex;
            this.selectedIndex = 2;
          }
        });
      }

      // this.confirm = false;
    }
    if (this.selectedIndex == 2) {
      if (!this.confirm) {
        this.unSavedQuestionList = [];
      }
      if (this.criteriaEmpty) {
        this.selectedIndex = 1
        this.openSnackBar("Initial Criteria Cannot be Empty", "Failed");
      }
      this.totalpages = this.DynamicFomServe.getPageNumbers();
      this.nextBtn = "Save"
      this.next = true;
    } else {
      this.nextBtn = "Next";
    }
    if (this.selectedIndex == 3) {
      if (this.confirm) {
        this.confirmToSaveData();
        this.dialogRef.afterClosed().subscribe(result => {
          if (result) {
            this.confirm = false;
            this.clikOk = true;
            let all = this.DynamicFomServe.getALl();
            console.log('unsaved', all);
            this.selectedIndex = this.clickedIndex; // this.clickedIndex
          } else {
            this.clikOk = false;
            this.confirm = true;
            this.lastIndex = this.selectedIndex;
            this.selectedIndex = 2;
          }
        });
      }
      this.nextBtn = "Previous";
      this.saveBtn = false;
      this.next = false;
      // this.confirm = false;
    }
  }

  nextStep() {
    console.log('next step', this.selectedIndex)
    if (this.selectedIndex == 2) {

      // this.confirm = true;
      // if (this.confirm) {
      //   this.confirmToSaveData();
      // }
      // this.eventsSubject.next('validate');

      if (this.selectedCriteriaOfqtn && this.selectedCriteriaOfqtn['_id']) {
        this.questionSubmit = false;

        /** 
      * call event to get the data from library if data present it update the json 
      * otherwise library trigger an event to return the data
      *  **/
        this.eventsSubject.next('all');

        if (this.selectedIndex != this.maxNumberOfTabs) {
          this.selectedIndex = this.selectedIndex + 1;
        }
      } else {
        this.questionSubmit = true;
      }
    } else if (this.selectedIndex == 1) {
      if ((!this.criteriaList.length) || (this.criteriaList[this.allCriteriaList.length - 1].name && this.selectedIndex != this.maxNumberOfTabs)) {
        this.selectedIndex = this.selectedIndex + 1;
      } else {
        this.openSnackBar("Criteria Cannot be Empty", "Failed");
      }
    } else {
      if (this.selectedIndex != this.maxNumberOfTabs) {
        this.selectedIndex = this.selectedIndex + 1;
      }
    }
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
    console.log("criteriaForm.controls", this.criteriaForm.controls);
  }

  create() {

    console.log("create called");
    // creatingg Draft frameWork using below API
    this.frameWorkServ.createDraftFrameWork().subscribe(
      data => {
        console.log("frameWorkServ data", data);
        let frameWorkId = data['result']._id
        this.createDraftEcm(frameWorkId);
        this.createDraftSection(frameWorkId);
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
      if (this.solutionForm.valid) {
        let selectedEntity = this.entitys[0].filter(data => {
          if (data._id == this.solutionForm.value.solutionEntityType) {
            return data;
          };
        })
        // console.log("selectedEntity",selectedEntity);
        let id = this.generateExternalId();
        let obj = {
          name: this.solutionForm.value.solutionName,
          keywords: this.solutionForm.value.solutionKeywords,
          language: this.solutionForm.value.solutionLanguage,
          description: this.solutionForm.value.solutionDescription,
          entityType: selectedEntity[0].name,
          entityTypeId: selectedEntity[0]._id,
          externalId:id
        }
        this.frameWorkServ.updateDraftFrameWork(obj, this.frameWorkId).subscribe(data => {
          console.log("data", data);
          this.openSnackBar("data updated Succesfully", "Updated");
        },
          error => {
            console.log("data", error);
          });
      } else {
        return false;
      }
    } else {
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
        // deep cloning the object
        console.log('============', data);
        this.allCriteriaList = JSON.parse(JSON.stringify(data['result'].data));
        this.criteriaList = data['result'].data;

        this.DynamicFomServe.setCriteria(this.criteriaList);

        console.log("ArrayOfCriteria", this.criteriaList);
        this.selectedCriteriaOfqtn = this.criteriaList[0];
        this.ArrayOfCriteria = data['result'].data;
        this.cdr.detectChanges();
        this.criteriaListCount = data['result'].count;
      }
    },
      error => {
        console.log("data", error);
      });
  }

  onPaginateChange(event) {
    console.log("event", event);
    // console.log("this.criteriaListCount 1",this.criteriaListCount); 
    this.nextCriteriaPage = event.pageIndex;
    this.criteriaListPageSize = event.pageSize;
    this.draftCriteriaList(this.frameWorkId);
  }

  // edit criteria form with selected criteria 
  editCriteria(element) {
    window.scroll(0, 0);
    this.showAddCriteria = true;
    this.criteriaDescriptionUpdate = element.description;
    this.criteriaNameupdate = element.name;
    this.criteriaAddorUpdate = "Update";
    this.currentCriteriaId = element._id;
  }

  // method to delete the existing criteria 
  deleteDraftCriteria(element) {
    let message = `Are you sure you delete criteria?`;
    let dialogData = new ConfirmDialogModel("Confirm Action", message);
    const dialogRef = this.dialog.open(DeleteConfirmComponent, {
      width: '350px',
      data: dialogData
    })
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.frameWorkServ.draftCriteriaDelete(element._id).subscribe(data => {
          if (data['status']) {
            this.openSnackBar("Criteria Deleted Succesfully", "Deleted");
            this.criteriaEmpty = false;
            this.draftCriteriaList(this.frameWorkId);
          }
        }, error => {
          console.log("error while callng api", error);
        })
      }
    });
  }

  // confirmation Method to delete the existing criteria 
  confirmToSaveData() {
    let message = `Data get loss without save`;
    let dialogData = new ConfirmDialogModel("Confirm Action", message);
    this.dialogRef = this.dialog.open(DeleteConfirmComponent, {
      width: '350px',
      data: dialogData
    })
    // this.dialogRef.afterClosed().subscribe(result => {
    //   if (result) {
    //     this.confirm = false;

    //     alert('OK'+this.clickedIndex);
    //     this.clikOk = true;
    //     this.selectedIndex = this.clickedIndex; // this.clickedIndex
    //     // const x :MatTabChangeEvent = '1';
    //     // this.tabChanged(x);
    //   } else {
    //     this.clikOk = false;
    //     this.confirm = true;
    //     this.lastIndex = this.selectedIndex;
    //   }
    // });
  }


  // method allows to get FrameWork Details
  getFrameWorkDetails() {
    this.frameWorkServ.getDraftFrameworksdetails(this.frameWorkId).subscribe(data => {
      if (data['status']) {
        console.log("framework Details", data['result']);
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
  get questionSubmitForm() { return this.selectCriteriaForm.controls; }

  closeAddOrUpdate() {
    this.showAddCriteria = false;
  }

  // method is used to get the All the Available entityTypes
  getEntityTypeList() {
    this.frameWorkServ.getEntityTypeList().subscribe(data => {
      this.entitys.push(data['result']);
      console.log("data this.getEntityTypeList();  ", data['result']);
    });
  }

  // triiger event from child for drop Question or Save All Question
  eventFromChild($event) {

    this.totalpages = this.DynamicFomServe.getPageNumbers();
    this.confirm = false;
    this.clikOk = false;
    this.totalpages = $event.pages
    let _this = this;
    if ($event.action == 'all') {
      this.questionList = $event;
      console.log('this.questionList', this.questionList['data']);
      for (let i = 0; i < this.questionList['data'].length; i++) {
        if (!this.questionList['data'][i].draftCriteriaId) {

          // alert('criteria cannot blanlk for' + this.questionList['data'][i].position + 'Question');

        }
        // console.log('=========', i)

      }
      if ($event.data) {
        _this.allFields = $event.data;
        _this.allFields.forEach(function (element, index) {
          
          // to update the existing question object and update to server
          if (element._id && _this.updateArray.includes(element._id)) {
            // console.log("updated  ---", element);
            // let obj = {
            //   question: [],
            //   responseType: element.type,
            //   options: [],
            //   validation: {
            //     required: element.validations.required
            //   }
            // }
            // if (element.type == "date") {
            //   obj.validation['max'] = element.validations.maxDate;
            //   obj.validation['min'] = element.validations.minDate;
            // } else if (element.type == "slider") {
            //   obj.validation['max'] = element.validations.max;
            //   obj.validation['min'] = element.validations.min;
            // }

            // if (element.draftCriteriaId) {
            //   obj['draftCriteriaId'] = element.draftCriteriaId;
            // }

            // obj.question.push(element.label);
            // obj.question.push(element.options);


           
            console.log("element.type && element.type ",element.type )

            
            if (element.type && element.type =="matrix" ) {
              _this.createQuestionAndUpdateMatrixQuestion(element);
             
            }else{
              let updateQuestionObj = _this.dbQuestionObjGeneration(element);
              
              _this.updateDraftQuestion(updateQuestionObj, element._id);
            }
          } else {
            // add question to server if only newly add question
            // checking by _id

            // console.log("---id",element._id)
            if (element._id) {
              console.log("existing question", element);
            } else {

              console.log("new question");
              // if(_this.selectedCriteriaOfqtn && _this.selectedCriteriaOfqtn['_id']){
              let el = _this.selectedCriteriaOfqtn['_id'];
              // } else 
              if (element.draftCriteriaId) {
                el = element.draftCriteriaId;
              }
              let obj = {
                "draftFrameworkId": _this.frameWorkId,
                "draftCriteriaId": el,
                "draftEvidenceMethodId": _this.draftEvidenceMethodId,
                "draftSectionId": _this.draftSectionId
              }


              let childernArray = [];
              if (element.child) {
                childernArray = element.child;
              }

              // let updateQuestionObj = {
              //   question: [],
              //   responseType: element.type,
              //   instanceQuestions: childernArray,
              //   validation: {
              //     required: element.validations.required
              //   },
              //   visibleIf: element.visibleIf ? element.visibleIf : [],
              //   children: element.parentChildren ? element.parentChildren : [],
              // }

              // if (element.child) {
              //   element.child.forEach(element => {
              //     let updateObj = _this.dbQuestionObjGeneration(element);
              //     console.log("updateObj========", updateObj);
              //     let questionIds = _this.createDraftQuestion(obj, updateObj, index);
              //     console.log("questionIds=============", questionIds);
              //   });
              // }


              // updateQuestionObj.question.push(element.label);

              let updateQuestionObj = _this.dbQuestionObjGeneration(element);

              _this.childArray = []
              if (element.child) {

                console.log("child loop");
                element.child.forEach(item => {
                  let dataOfChildOBj = _this.dbQuestionObjGeneration(item);
                  _this.childArray.push(dataOfChildOBj);


                  console.log(element.child.length, "childObj", _this.childArray.length);
                  if (_this.childArray.length == element.child.length) {
                    let questionId = _this.createDraftQuestion(obj, updateQuestionObj, index, _this.childArray);
                    if (index == _this.allFields.length) {
                      let obj = {
                        questionArray: _this.allFields,
                        criteriaList: this.criteriaList
                      }
                      this.eventsSubject.next(obj);
                    }
                  }
                });
              } else {

                debugger;
                console.log("creating new question");
                let questionId = _this.createDraftQuestion(obj, updateQuestionObj, index);
                if (index == _this.allFields.length) {
                  let obj = {
                    questionArray: _this.allFields,
                    criteriaList: this.criteriaList
                  }
                  console.log("--------------obj------", obj);
                  this.eventsSubject.next(obj);
                }

              }
              // console.log("updateQuestionObj", updateQuestionObj);

            }
          }
        });
      }
      // const message = 'Data Saved Succesfully';
      // this.openSnackBar(message, "Save");
    } else if ($event.action == 'add') {
      console.log('addd', $event);
      this.confirm = true;
      if (this.selectedCriteriaOfqtn) {
        $event.data.draftCriteriaId = this.selectedCriteriaOfqtn['_id'];
      }
      _this.isDilogOpened = false;
      _this.unSavedQuestionList.push($event.data);

      if ($event.data.copied) {
        const message = $event.data.type.charAt(0).toUpperCase() + $event.data.type.substring(1) + ' ' + 'Question Copied Succesfully';
        this.openSnackBar(message, "Copied");

      } else {
        const message = $event.data.type.charAt(0).toUpperCase() + $event.data.type.substring(1) + ' ' + 'Question Added Succesfully';
        this.openSnackBar(message, "Added");
      }

    } else if ($event.action == 'update') {
      this.confirm = true
      debugger;
      console.log("------update------",$event);
      // update arry contains only existing data which is available in server
      if ($event.data._id) {
        _this.updateArray.push($event.data._id);
      }
      if($event.data.data && $event.data.data._id){
        _this.updateArray.push($event.data.data._id);
      }
      console.log('update---------', _this.updateArray)
      // $event.data.data.type.charAt(0).toUpperCase() + $event.data.type.substring(1) + 
      const message = $event.data.data.field.position + ' ' + 'Question Updated Succesfully';
      this.openSnackBar(message, "Updated");


    } else if ($event.action == 'delete') {

      let message = `Are you sure you want to delete this question?`;
      let dialogData = new ConfirmDialogModel("Confirm Action", message);
      const dialogRef = this.dialog.open(DeleteConfirmComponent, {
        width: '350px',
        data: dialogData
      })
      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          debugger;
          this.openSnackBar("Question Deleted Succesfully", "Deleted");
          if (_this.allQuestionWithDetails.length == 0) {
            let data = this.DynamicFomServe.getQuestions();


            _this.allQuestionWithDetails = data['questionList'];
          }
          _this.allQuestionWithDetails = _this.allQuestionWithDetails.filter(function (el, index) {
            // return $event.data._id;
            if(el._id && el._id != $event.data._id){
              return el;
            }else if(el.field && el.field != $event.data.field){
              return el;
            }
            // if(el._id && el._id ==$event.data._id ){
            //   el.isDeleted = true;
            //   return el;
            // }else{
            //   return el.isDeleted = false;
            // }
          })
          console.log(" after _this.allQuestionWithDetails", _this.allQuestionWithDetails);
          if($event.data._id){
            this.deleteDraftQuestion($event.data._id);
          }else{
            let obj = {
              questionArray: this.allQuestionWithDetails,
              criteriaList: this.criteriaList
            }
            this.eventsSubject.next(obj);
          }
          
          
         
        }
      });
    } else if ($event.action == 'childDroped') {
      if ($event.data.copied) {
        let message = $event.data.data.responseType.charAt(0).toUpperCase() + $event.data.data.responseType.substring(1) + ' ' + 'Question Copied Succesfully in Matrix';
        this.openSnackBar(message, "Copied");
        if ($event.data.data.mutiSelect && $event.data.data.mutiSelect._id) {
          _this.updateArray.push($event.data.data.mutiSelect._id);
        }
      } else {
        let message = $event.data.data.responseType.charAt(0).toUpperCase() + $event.data.data.responseType.substring(1) + ' ' + 'Question Added Succesfully in Matrix';
        this.openSnackBar(message, "Added");

        
        if ($event.data.data.mutiSelect && $event.data.data.mutiSelect._id) {
          _this.updateArray.push($event.data.data.mutiSelect._id);
        }
      }

    } else if ($event.action == 'childDelete') {
      console.log('childDelete', _this.allFields);
      let message = `Are you sure you want to delete this question?`;
      let dialogData = new ConfirmDialogModel("Confirm Action", message);
      const dialogRef = this.dialog.open(DeleteConfirmComponent, {
        width: '350px',
        data: dialogData
      })
      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          // this.frameWorkServ.draftCriteriaDelete(element._id).subscribe(data => {
          //   if (data['status']) {
          $event.data.child.splice($event.deleteindex, 1);
          // _this.allFields
          this.openSnackBar("Question Deleted Succesfully", "Deleted");
          //     this.draftCriteriaList(this.frameWorkId);
          //   }
          // }, error => {
          //   console.log("error while callng api", error);
          // })
          console.log('child delete', _this.allFields);
          // _this.allFields = _this.allFields[0].child.filter(function (el, index) {
          //   return !el.isDelete;
          // })

          // this.deleteDraftQuestion($event.data._id);
          let obj = {
            questionArray: _this.allFields,
            criteriaList: this.criteriaList
          }
          this.eventsSubject.next(obj);
        }
      });
    }
  }

  // publish an event for eventsSubject 
  getGeneratedQuestion() {
    this.eventsSubject.next();
  }

  /**
   * Service call for creating Draft ECM
   */
  createDraftEcm(frameWorkId) {

    this.frameWorkServ.draftEcmCreate(frameWorkId).subscribe(data => {
      console.log("ecm created ", data['result']);
    });

  }
  /**
   * Service call for creating Draft Section 
   */
  createDraftSection(frameWorkId) {

    this.frameWorkServ.draftSectionCreate(frameWorkId).subscribe(data => {
      console.log("draft section created ", data['result']);
    });

  }
  /**
   * Service call for get All Draft Section for framework
   */
  listDraftSection(frameWorkId) {

    this.frameWorkServ.draftSectionCreate(frameWorkId).subscribe(data => {
      console.log("section length ", data['result']);
      if (data['result']) {

        this.draftSectionId = data['result']._id;
      }
    });
  }
  /**
 * Service call for get All Draft Ecm for framework 
 */
  listDraftEcm(frameWorkId) {
    this.frameWorkServ.listDraftEcm(frameWorkId).subscribe(data => {
      if (data['result'] && data['result'].data) {
        console.log("Ecm List;  ", data['result']);

        this.draftEvidenceMethodId = data['result'].data[0]._id;
        // console.log("Ecm List;  ",data['result'].data[0]._id);
      }

    });
  }

  /**
   * Service call for to create Draft Ecm for framework 
   */
  createDraftQuestion(obj, updateObj = {}, index, child = []) {
    this.frameWorkServ.draftQuestionCreate(obj).subscribe(data => {
      if (data['result']) {
        console.log(data['result']._id, "create question");
        debugger;
        if (updateObj) {
          if (child && child.length > 0) {

            // child.forEach()
            let i = 0;
            let childIds = [];
            child.forEach(element => {
              this.frameWorkServ.draftQuestionCreate(obj).subscribe(childData => {
                if (childData['result']) {


                  console.log("child qnt created", childData['result']._id);
                  childIds.push(childData['result']._id);
                  this.updateDraftQuestion(element, childData['result']._id);

                  console.log(child.length, "child llllll", childIds.length)
                  if (child.length == childIds.length) {
                    console.log("child ids", childIds);
                    this.updateDraftQuestion({ instanceQuestions: childIds }, data['result']._id);
                  }
                }
              });
            });
          }
          this.updateDraftQuestion(updateObj, data['result']._id);
          this.allFields[index]._id = data['result']._id;
        
          return data['result']._id;
        } else {
          return data['result'];
        }

      } else {
        console.log("Error", data);
      }
    });
  }

  updateDraftQuestion(obj, questionId) {
    let updateQuestionObj = { };
    if(obj.question && obj.question.length > 0  ){
       updateQuestionObj = obj;
    }else{
       updateQuestionObj = this.dbQuestionObjGeneration(obj);
    }
    
    this.frameWorkServ.updateDraftQuestion(updateQuestionObj, questionId).subscribe(data => {
      if (data['result']) {
      } else {
        console.log("Error", data);
      }
    });
  }

  createQuestionAndUpdateMatrixQuestion(obj) {
   debugger;
    let _this = this; 
    if( obj.child &&  obj.child.length > 0){
    obj.child.forEach(element => {
      if(!element._id){


        let updateQuestionObj = _this.dbQuestionObjGeneration(element);
        
        let frameWorkData = {
          "draftFrameworkId": _this.frameWorkId,
          "draftCriteriaId":  element.draftCriteriaId,
          "draftEvidenceMethodId": _this.draftEvidenceMethodId,
          "draftSectionId": _this.draftSectionId
        }

        _this.frameWorkServ.draftQuestionCreate(frameWorkData).subscribe(childData => {
          console.log("childDatachildData ",childData);
          if (childData['result']) {
            _this.updateDraftQuestion(updateQuestionObj,childData['result']._id);

            _this.frameWorkServ.detailsDraftQuestion(obj._id).subscribe(matrixData => {
              // matrixData['result'].instanceQuestions.push(childData['result']._id);
              let updateOb = {
                instanceQuestions:[]
              }
              updateOb.instanceQuestions = matrixData['result'].instanceQuestions;
              updateOb.instanceQuestions.push(childData['result']._id);
              console.log(updateOb,"instanceQuestions",updateOb.instanceQuestions.length)
             _this.updateDraftQuestion(updateOb,obj._id);
            });
          }
      });
      }else{
        _this.updateDraftQuestion(element,element._id);
      }
    });
  }
  _this.updateDraftQuestion(obj,obj._id);
}


  criteriaChange() {

    // if (this.unSavedQuestionList.length > 0 && !this.isDilogOpened) {
    //   const message = `It looks like you have been editing something.If you leave before saving, your changes will be lost?`;
    //   const dialogData = new ConfirmDialogModel("Confirm Action", message);
    //   setTimeout(() => {

    //     const dialogRef = this.dialog.open(DeleteConfirmComponent, {
    //       width: '350px',
    //       data: dialogData
    //     })
    //     dialogRef.afterClosed().subscribe(result => {
    //       if (!result) {

    //         this.isDilogOpened = true;
    //         this.selectedCriteriaOfqtn = this.previousCriteria;
    //         this.previousCriteria = this.selectedCriteriaOfqtn;
    //       }
    //     });
    //   })
    // } else {

    // let data=

    console.log("get all", this.isUpdate);

    //   let allQnt = this.DynamicFomServe.getALl();
    //   let qntLen  = allQnt['questionList']['questionList']

    //   console.log("qntLen",qntLen);
    //   if( this.beforCriteriaChange && qntLen && this.beforCriteriaChange.length < qntLen.length ){
    //     this.beforCriteriaChange = qntLen;
    //   }else{
    //   if( this.beforCriteriaChange){
    //     console.log("data present")
    //     if( this.beforCriteriaChange.length==0){
    //       let allQnt = this.DynamicFomServe.getALl();
    //       console.log("get all", allQnt['questionList']['questionList']);
    //       this.beforCriteriaChange = allQnt['questionList']['questionList'];
    //     }
    //   }
    //   else{
    //     let allQnt = this.DynamicFomServe.getALl();
    //     console.log("get all", allQnt['questionList']['questionList']);
    //     this.beforCriteriaChange = allQnt['questionList']['questionList'];
    //   }
    // }


    this.isUpdate = this.isUpdate + 1;

    // console.log("chnage", this.allQuestionWithDetails.length);
    // console.log('criteriaChange', this.allQuestionWithDetails);
    // console.log('this.selectedCriteriaOfqtn', this.selectedCriteriaOfqtn);

    // console.log('_this.allFields', this.allFields);

    // srikanth
    // const filtereddata =  this.allFields.filter(item => item.draftCriteriaId === this.selectedCriteriaOfqtn['_id']);

    // console.log('after filter', filtereddata);

    this.previousCriteria = this.selectedCriteriaOfqtn;

    // if (this.allQuestionWithDetails.length > 0) {

    //  console.log("get all",this.DynamicFomServe.getALl());

    //  this.DynamicFomServe.getALl()

    //  let allQnt = this.DynamicFomServe.getALl();/

    //  console.log("get all", allQnt['questionList']['questionList']);

    console.log("this.beforCriteriaChange", this.beforCriteriaChange);
    //  if(this.beforCriteriaChange && this.beforCriteriaChange.length > 0){

    //     let qntDat = this.beforCriteriaChange.filter(item => {
    //       return item.draftCriteriaId == this.selectedCriteriaOfqtn['_id'];

    //     })
    //     console.log(this.selectedCriteriaOfqtn['_id'], "qntDat", qntDat,"legnth",qntDat.length);
    //     if (qntDat && qntDat.length > 0) {
    //       qntDat.forEach(element => {
    //            let questionObj = this.reGenerateQuestionObject(element, qntDat.length);
    //       });
    //     } else {
    //       let array: any = [];

    //       let obj = {
    //         questionArray: array,
    //         criteriaList: this.criteriaList
    //       }
    //       this.eventsSubject.next(obj);
    //     }
    //   }


    console.log(this.allQuestionWithDetails, "this.allQuestionWithDetails", this.allQuestionWithDetails.length);

    // if(this.allQuestionWithDetails){


    // let allQnt = this.DynamicFomServe.getQuestions();

    if (!this.allQuestionWithDetails) {
      console.log("no data");
      this.allQuestionWithDetails = [];
    }

    if (!this.allQuestionWithDetails || this.allQuestionWithDetails.length == 0) {

      // let allQnt = this.DynamicFomServe.getQuestions();
      // console.log("get from service",allQnt);

      // this.allQuestionWithDetails = allQnt['questionList'];  


      let _this = this;


      let allQnt = this.DynamicFomServe.getQuestions();

      // let qntLen  = allQnt['questionList']['questionList'];

      console.log("there is no data", allQnt);

      if (allQnt['questionList'] && allQnt['questionList'].length > 0) {
        this.allQuestionWithDetails = allQnt['questionList'];
      } else {
        this.allQuestionWithDetails = [];
      }



      console.log("this.allQuestionWithDetails", this.allQuestionWithDetails);
      let qntDat = this.allQuestionWithDetails.filter(item => {
        return item.draftCriteriaId == this.selectedCriteriaOfqtn['_id'];

      })
      // console.log(this.selectedCriteriaOfqtn['_id'], "qntDat", qntDat, "legnth", qntDat.length);
      if (qntDat && qntDat.length > 0) {
        qntDat.forEach(element => {
          //  let questionObj = this.reGenerateQuestionObject(element, qntDat.length);
        });
      } else {
        let array: any = [];

        let obj = {
          questionArray: array,
          criteriaList: this.criteriaList
        }
        this.eventsSubject.next(obj);
      }
    }

    if (this.allQuestionWithDetails.length > 0) {
      let qntDat = this.allQuestionWithDetails.filter(item => {
        return item.draftCriteriaId == this.selectedCriteriaOfqtn['_id'];

      })
      console.log(this.selectedCriteriaOfqtn['_id'], "qntDat", qntDat, "legnth", qntDat.length);
      if (qntDat && qntDat.length > 0) {
        qntDat.forEach(element => {
          // let questionObj = this.reGenerateQuestionObject(element, qntDat.length);
        });
      } else {
        let array: any = [];

        let obj = {
          questionArray: array,
          criteriaList: this.criteriaList
        }
        this.eventsSubject.next(obj);
      }


    }
    // }


    // } else {
    // }
    // }
  }

  pageChange() {

    // const filtereddata =  this.allFields.filter(item => item.draftCriteriaId === this.selectedCriteriaOfqtn['_id']);


    // let qntDat = this.allQuestionWithDetails.filter(item => {
    //   return (item.draftCriteriaId == this.selectedCriteriaOfqtn['_id']) && (item.pageNumber == this.selectedpageNumber);
    // })

  }

  draftQuestionList() {
    // this.localQuestionList = "asdasd";
    let questionList = this.localQuestionList;
    let _this = this;
    this.frameWorkServ.draftQuestionList(this.frameWorkId).subscribe(data => {
      if (data['result'] && data['result'].data) {
        console.log("before data==", data['result'].data);
        let currentThis = _this;
        let allRecords = [];
        data['result'].data.forEach(el => {
          _this.frameWorkServ.detailsDraftQuestion(el._id).subscribe(qnt => {
            console.log("qnt", qnt);
            allRecords.push(qnt['result']);
            if (data['result'].data.length == allRecords.length) {
              _this.generateQuestion(allRecords, _this);
            }
          });
        });
        console.log("after data==", data['result'].data);
      } else {
        console.log("Error while featching question list", data);
      }
    });
  }


  generateQuestion(allRecords, _this) {
    console.log("_this.localQuestionList.length == allRecords.length", _this.localQuestionList.length, "==", allRecords.length)
    console.log("-----matrix-------", _this.localQuestionList);
    let completeObject = [];
    _this.localQuestionList = [];
    allRecords.filter(function (item, index) {
      if (item.instanceQuestions && item.instanceQuestions.length > 0) {
        let matrixChild = allRecords.filter(qnt => {
          // find in array of instanceQuestions  if found remove from array and to matrix child array
          if (item.instanceQuestions.includes(qnt._id)) {
            allRecords = allRecords.filter(function (value, index, arr) {
              return value._id != qnt._id;
            });
            return qnt;
          }
        });
        return item.childArray = matrixChild;
      } else {
        return item;
      }
    });
   _this.localQuestionList.length = 0
    console.log("_this.localQuestionList    ----- BEFORE",_this.localQuestionList.length);
    allRecords.forEach(function (element, index) {
      
      let questionObj = _this.reGenerateQuestionObject(element, index);
      console.log(index," index _this.localQuestionList    -----",_this.localQuestionList);
      if (_this.localQuestionList == allRecords.length - 1) {
        let obj = {
          questionArray: _this.localQuestionList,
          criteriaList: _this.criteriaList
        }
        // this.eventsSubject.next(obj);

        console.log("_this.localQuestionList",_this.localQuestionList);
        if(!_this.allQuestionWithDetails){
          _this.allQuestionWithDetails = [];
          _this.allQuestionWithDetails = _this.localQuestionList;
        }else{
          _this.allQuestionWithDetails = _this.localQuestionList;
        }
        
      }
      });
   }

  reGenerateQuestionObject(element, legnth) {

    console.log("reGenerateQuestionObject ---",element);
    if (element._id) {

      // console.log("===============element========",element);
      let ele = element.responseType;
      let label = element.label ? element.label : element.question;
      let len = legnth + 1;

      var results = this.allQuestionWithDetails.filter(li => {
        return li._id === element._id;
      });
      if (results.length == 0) {
        this.allQuestionWithDetails.push(element);
      }

      // var obj = {};
      // this.getObjectOfField()
      var obj = this.getObjectOfField(ele, element, len, label);
      if (results.length == 0) {
        this.localQuestionList.push(obj);
      }
      let list = this.localQuestionList.filter(item => {
        if (item.draftCriteriaId == this.selectedCriteriaOfqtn['_id']) {
          return true;
        }
      })
      if (list.length > 0) {
        let obj = {
          questionArray: list,
          criteriaList: this.criteriaList
        }
        this.eventsSubject.next(obj);
      } else {
        let array: any = [];

        let obj = {
          questionArray: array,
          criteriaList: this.criteriaList
        }
         this.eventsSubject.next(obj);
      }
      return obj;



    } else {

      let ele = element.type;
      let label = element.label ? element.label : element.question;
      let len = legnth + 1;

      var results = this.allQuestionWithDetails.filter(li => {
        return li.field === element.field;
      });

      if (results.length == 0) {
        this.allQuestionWithDetails.push(element);
      }


      var obj = this.getObjectOfField(ele, element, len, label);

      if (results.length == 0) {
        this.localQuestionList.push(obj);
      }
      let list = this.localQuestionList.filter(item => {
        if (item.draftCriteriaId == this.selectedCriteriaOfqtn['_id']) {
          return true;
        }
      })
      if (list.length > 0) {

        let obj = {
          questionArray: list,
          criteriaList: this.criteriaList
        }
        this.eventsSubject.next(obj);
      } else {
        let array: any = [];

        let obj = {
          questionArray: array,
          criteriaList: this.criteriaList
        }
        this.eventsSubject.next(obj);
      }
      return obj;
    }

  }


  getObjectOfField(ele, element, len, label) {

    let options = [];
    let responseType = ele;
    if (element.options) {
      for (var key in element.options) {
        let object = {
          label: element.options[key]['label'],
          key: element.options[key]['value']
        }
        options.push(object);
      }
    }
    let isRequired = false;
    if (element.validation && element.validation.required) {
      isRequired = element.validation.required;
    }
    var obj = {}
    if (ele == 'text') {
      obj = {
        position: len,
        field: len + "question",
        type: responseType,
        label: label,
        placeholder: "Please enter your question here",
        formValidation: {
          validate: false,
          fields: ['label']
        },
        validations: {
          requiredFields: ['label', 'draftCriteriaId'],
          required: isRequired,
          minLenght: "",
          maxLength: ""
        },
        _id: element._id,
        description: "",
        draftCriteriaId: element.draftCriteriaId,
        isDeleted:element.isDeleted?element.isDeleted:false
       
        
      }
    }
    if (ele == 'number') {
      obj = {
        field: len + "question",
        type: responseType,
        label: label,
        placeholder: "Please enter your question here",
        validations: {
          required: isRequired,
          minLenght: "",
          maxLength: ""
        },
        _id: element._id,
        description: "",
        draftCriteriaId: element.draftCriteriaId
      }
    } else if (ele == 'date') {
      obj = {
        field: len + "question",
        type: responseType,
        label: label,
        placeholder: "Please enter your question here",
        validations: {
          required: isRequired,
          minLenght: "",
          maxLength: "",
          autoCollect: false,
          maxDate: element.validation.max,
          minDate: element.validation.min,
        },
        _id: element._id,
        description: "",
        draftCriteriaId: element.draftCriteriaId

      }
    } else if (ele == 'slider') {
      obj = {
        field: len + "question",
        type: responseType,
        label: label,
        placeholder: "Please enter your question here",
        validations: {
          required: isRequired,
          minLenght: "",
          maxLength: "",
          max: element.validation.max,
          min: element.validation.min,
        },
        _id: element._id,
        description: "",
        draftCriteriaId: element.draftCriteriaId

      }
    } else if (ele == 'radio') {
      obj = {
        field: len + "question",
        name: len + "question",
        type: responseType,
        label: label,
        value: '',
        validations: {
          required: isRequired,
          minLenght: "",
          maxLength: ""
        },
        options: options,
        _id: element._id,
        description: "",
        draftCriteriaId: element.draftCriteriaId
      }
    }
    else if (ele == "checkbox") {
      obj = {
        field: len + "question",
        name: len + "question",
        type: responseType,
        label: label,
        validations: {
          required: isRequired,
          minLenght: "",
          maxLength: ""
        },
        options: options,
        _id: element._id,
        description: "",
        draftCriteriaId: element.draftCriteriaId
      }
    }
    else if (ele == "dropdown") {
      obj = {
        field: len + "question",
        name: len + ". question",
        type: responseType,
        label: label,
        validations: {
          required: isRequired,
          minLenght: "",
          maxLength: ""
        },
        value: 'option1',
        options: options,
        _id: element._id,
        description: "",
        draftCriteriaId: element.draftCriteriaId
      }
    } else if (ele == "matrix") {

      console.log("ele.children", element)
      obj = {
        position: len,
        field: len + "question",
        name: len + ". question",
        type: responseType,
        label: label,
         validations: {
          required: isRequired,
          minLenght: "",
          maxLength: ""
        },
        value: 'option1',
        options: options,
        _id: element._id,
        description: "",
        draftCriteriaId: element.draftCriteriaId,
        instanceQuestions: element.instanceQuestions ? element.instanceQuestions : [],
        child:element.childArray,
      }
    }

    obj['prefix'] =element.prefix?element.prefix:"";
    obj['applicable'] =element.applicable?element.applicable:false;
    obj['audiorecording'] = element.audiorecording?element.audiorecording:false;
    obj['filecount'] = element.filecount?element.filecount:0;
    obj['fileType'] = element.fileType?element.fileType:"";
    obj['caption'] = element.caption?element.caption:false;
    obj['remarks'] =element.remarks?element.remarks:false;
    obj['filerequired'] = element.filerequired?element.filerequired:false;

    // obj['']=
    

    if(obj['type']=="matrix"){
      obj['sectionHeader'] = element.sectionHeader?element.sectionHeader:"";
      let allChilds = []
      obj['child'] =  obj['child'].filter((childObj,i) => {
        let latestChildObj = this.getObjectOfField(childObj.responseType, childObj, i, childObj.question[0]);
        allChilds.push(latestChildObj);
        return latestChildObj;
      });
      obj['child'] = allChilds;
      return obj;
      
    }else{

      return obj
    }
    
  }
  deleteDraftQuestion(questionId) {


    if (questionId) {
      this.frameWorkServ.deleteDraftQuestion(questionId).subscribe(data => {
        if (data) {

          let obj = {
            questionArray: this.allQuestionWithDetails,
            criteriaList: this.criteriaList
          }
          this.eventsSubject.next(obj);

          console.log("Deleted", data);
        } else {
          console.log("failed to delete");
        }
      });
    }
    //   }
    // })

  }

  detailsDraftQuestion(questionId) {
    this.frameWorkServ.detailsDraftQuestion(questionId).subscribe(data => {
      if (data) {
        // this.reGenerateQuestionObject(data['result'], 2);
      } else {

      }
    });
  }

  /**
   * 
   * @param element  is contain the update date of criteria
   */
  criteriaUpdate(element) {
    let _this = this;
    _this.allCriteriaList.filter(function (item, index) {
      if (item._id == element._id) {
        if (item.name != element.name || item.description != element.description) {

          let id = _this.generateExternalId();

          element.externalId = id;

          _this.frameWorkServ.updateDraftCriteria(element._id, element).subscribe(data => {
            _this.criteriaEmpty = false;
            _this.openSnackBar("Criteria Updated Succesfully", "Done");
            _this.draftCriteriaList(_this.frameWorkId);
            _this.criteriaList.paginator = _this.paginator;
            _this.criteriaList.sort = _this.sort;
            _this.criteriaSubmitted = false;
          });
        }
      }
    })
  }

  /**
   * 
   * @param id 
   */

  setFocus(id: string) {
    if (isPlatformBrowser(this.platformId)) {
      this[id].nativeElement.focus();
    }
  }
  /**
   * Adding Auto Genrated Critera 
   */

  autoAddCriteria() {
    let obj = {
      draftFrameworkId: this.frameWorkId,
    }
    if (this.criteriaList.length < 1 || (this.criteriaList[this.allCriteriaList.length - 1].name && this.criteriaList[this.allCriteriaList.length - 1].description)) {
      this.frameWorkServ.draftCriteriaCreate(obj).subscribe(data => {
        let criteriaObj = {
          name: '',
          description: ''
        }
        if (data['result']._id) {
          this.frameWorkServ.updateDraftCriteria(data['result']._id, criteriaObj).subscribe(data => {
            this.openSnackBar("Criteria Added Succesfully", "Done");
            this.criteriaEmpty = true;
            this.draftCriteriaList(this.frameWorkId);
            this.criteriaList.paginator = this.paginator;
            this.criteriaList.sort = this.sort;
            // this.criteriaForm.reset();
            // this.criteriaNameupdate = "";
            // this.criteriaDescriptionUpdate = "";
            this.criteriaSubmitted = false;
          });
        }
      });
    } else {
      this.openSnackBar("Previous Added Criteria Cannot be blank", "Failed");
    }
  }


  dbQuestionObjGeneration(element) {

    let options = [];
    if (element.options) {
      for (var key in element.options) {
        let object = {
          label: element.options[key]['label'],
          value: element.options[key]['key']
        }
        options.push(object);
      }
    }
    let updateQuestionObj = {
      question: [],
      responseType: element.type,
      options: options,
      isDeleted:element.isDeleted?element.isDeleted:false,
      validation: {
        required: element.validations.required ? element.validations.required : false
      },
      visibleIf: element.visibleIf ? element.visibleIf : [],
      children: element.parentChildren ? element.parentChildren : [],
    }

    updateQuestionObj['prefix'] =element.prefix?element.prefix:"";
    updateQuestionObj['applicable'] =element.applicable?element.applicable:false;
    updateQuestionObj['audiorecording'] = element.audiorecording?element.audiorecording:false;
    updateQuestionObj['filecount'] = element.filecount?element.filecount:0;
    updateQuestionObj['fileType'] = element.fileType?element.fileType:"";
    updateQuestionObj['caption'] = element.caption?element.caption:false;
    updateQuestionObj['remarks'] =element.remarks?element.remarks:"";
    updateQuestionObj['filerequired'] = element.filerequired?element.filerequired:false;

    if (element.type == "date") {
      updateQuestionObj.validation['max'] = element.validations.maxDate;
      updateQuestionObj.validation['min'] = element.validations.minDate;
      updateQuestionObj['autoCollect'] = element.autoCollect?element.autoCollect:false;
      updateQuestionObj['dateformat'] = element.dateformat?element.dateformat:"";
    }else if (element.type == "matrix") {
      
      updateQuestionObj['instanceIdentifier'] = element.instanceIdentifier?element.instanceIdentifier:false; 
      updateQuestionObj['sectionHeader'] = element.sectionHeader?element.sectionHeader:false;
    }else if(element.type== "Number"){
      updateQuestionObj['weightage'] = element.weightage?element.weightage:false;
      
    }else if(element == 'slider'){
      updateQuestionObj['max'] =  element.max?element.max:false;
      updateQuestionObj['min'] = element.min?element.min:false;
    }
    updateQuestionObj.question.push(element.label);
    updateQuestionObj['externalId'] = this.generateExternalId();
    return updateQuestionObj;

  }

   generateExternalId() {
    // Math.random should be unique because of its seeding algorithm.
    // Convert it to base 36 (numbers + letters), and grab the first 9 characters
    // after the decimal.
    return '_' + Math.random().toString(36).substr(2, 9);
  };
}
