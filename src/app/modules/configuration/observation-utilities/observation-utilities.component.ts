/**
 * name : observation-utilities.component.ts
 * author : Rakesh
 * created-date : 10-Dec-2019
 * Description : To create the obsevation.
 */

// Dependencies
import { Component, ElementRef, ViewChild, Inject, PLATFORM_ID, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {
  MatTabChangeEvent, MatPaginator, MatTableDataSource, MatSort,
  MatSnackBar, MatTabGroup, MatDialog
} from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';
import { DraftFrameWorkServiceService } from '../../configuration/workspace-services/draft-frame-work-service.service';
import { DeleteConfirmComponent, ConfirmDialogModel } from '../designer-worspace/components/delete-confirm/delete-confirm.component';
import { NgxSpinnerService } from "ngx-spinner";
declare var $: any;
import { TagInputModule } from 'ngx-chips';
import { Subject } from 'rxjs';
import { DynamicFormBuilderService } from "dynamic-form-builder";

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

/**
 * To Create the observation
 */
export class ObservationUtilitiesComponent implements OnInit {
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
  response: any;
  detailschanged: boolean = false;
  detailsdialogRef: any;
  onChange(event) {
    this.Data = event.form;
  }
  /**
   * Respond after Angular initializes the component's views and child views / the view that a directive is in.
      Called once after the first ngAfterContentChecked().
   */
  ngAfterViewInit() {
    this.criteriaList.paginator = this.paginator;
    this.criteriaList.sort = this.sort;
  }


  /**
   * Angular first displays the data-bound properties and sets the directive/component's input properties.
   *  Called once, after the first ngOnChanges().
   */
  ngOnInit() {
    this.unSavedQuestionList = [];
    this.allCriteriaList = [];
    this.allQuestionWithDetails = [];
    this.allFields = [];
    this.updateArray = [];
    this.localQuestionList = [];
    this.showCreate = false;
    this.activatedRoute.params.subscribe(params => {
      this.frameWorkId = params['id'];
      if (this.frameWorkId) {
        this.showCreate = true;
        this.getEntityTypeList();
        this.getFrameWorkDetails();
        this.listDraftSection(this.frameWorkId);
        this.listDraftEcm(this.frameWorkId);
        this.draftCriteriaList(this.frameWorkId);
        this.draftQuestionList();
      } else {
        this.showCreate = false;
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
    /**
     * Initial loading values set  empty and for validations fro criteriaForm
     */
    this.criteriaForm = new FormGroup({
      criteriaName: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
    });
    /**
     * 
     * Initial loading values set and for validations for solutionForm
     */
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

    /**
     * Initial loading values set and for validations for addEntityForm
     */
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
  }


  /**
   * To know whether the data changed or not
   */
  modelChanged() {
    if (this.solutionForm.get('solutionName').dirty || this.solutionForm.get('solutionDescription').dirty
      || this.solutionForm.get('solutionKeywords').dirty || this.solutionForm.get('solutionLanguage').dirty ||
      this.solutionForm.get('solutionEntityType').dirty || this.solutionForm.get('voiceOver').dirty) {
      this.detailschanged = true;
    } else {
      this.detailschanged = false;
    }
  }

  /**
   * 
   * Submitting the Criteria form
   * @param form: passing criteriaForm form object
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


  /**
   * To push the data in to the solutiona
   * @param form : passing whole solution form object
   */
  solutionSubmit(form) {
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


  /**
   * Maintaining flags to show and hide
   */
  viewData(input) {
    this.addEntityBlock = false;
    this.showQuestions = false;
    this.showMapping = false;
    this.viewBlock = input;
  }

  /**
   * Tab changes events will be handled here
   * @param MatTabChangeEvent: event carried from the html selectedTabChange
   */

  public tabChanged(tabChangeEvent: MatTabChangeEvent): void {
    this.spinner.hide();
    this.clickedIndex = tabChangeEvent.index;
    this.selectedIndex = tabChangeEvent.index;
    this.saveBtn = false;
    if (this.detailschanged && this.selectedIndex != 0) {
      this.confirmpopup();
    }
    if (this.selectedIndex == 0) {
      this.nextBtn = "Next";
      this.next = true;
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
      } else {

      }
      if (this.criteriaEmpty) {
        this.selectedIndex = 1
        this.openSnackBar("Initial Criteria Cannot be Empty", "Failed");
      } else {

      }
      // this.confirm = false;
      this.saveBtn = true;
      this.previous = false;
    } else {
      this.previous = true;
    }
    // tab changed to criteria 
    if (this.selectedIndex == 1) {
      this.nextBtn = "Next";
      this.next = true;
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
      } else if (this.detailschanged) {
        this.detailsdialogRef.afterClosed().subscribe(result => {
          if (result) {
            this.getFrameWorkDetails();
            this.detailschanged = false;
          } else {
            this.selectedIndex = 0;
          }
        });
      }
      // this.confirm = false;
    }
    if (this.selectedIndex == 2) {
      this.draftCriteriaList(this.frameWorkId)
      if (!this.confirm) {
        this.unSavedQuestionList = [];
      }
      if (this.criteriaEmpty) {
        this.selectedIndex = 1
        this.openSnackBar("Initial Criteria Cannot be Empty", "Failed");
      } else if (this.detailschanged) {
        this.detailsdialogRef.afterClosed().subscribe(result => {
          if (result) {
            this.detailschanged = false;
            this.getFrameWorkDetails();

          } else {
            this.selectedIndex = 0;
          }
        });
      }
      this.totalpages = this.DynamicFomServe.getPageNumbers();
      this.nextBtn = "Save"
      this.next = true;
    } else {
      this.nextBtn = "Next";
    }
    if (this.selectedIndex == 3) {
      if (this.criteriaEmpty) {
        this.selectedIndex = 1
        this.openSnackBar("Initial Criteria Cannot be Empty", "Failed");
      } else {
        this.nextBtn = "Previous";
        this.saveBtn = false;
        this.next = false;
      }
      if (this.confirm) {
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
      } else if (this.detailschanged) {
        this.detailsdialogRef.afterClosed().subscribe(result => {
          if (result) {
            this.getFrameWorkDetails();
            this.detailschanged = false;
          } else {
            this.selectedIndex = 0;
          }
        });
      }
    }
  }

  /**
   * To catching the next button event
   */
  nextStep() {
    if (this.selectedIndex == 2) {
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
        this.openSnackBar("Data saved sucessfully", "Success");
      } else {
        this.questionSubmit = true;
      }
      if ((!this.criteriaList.length) || (this.criteriaList[this.allCriteriaList.length - 1].name && this.selectedIndex != this.maxNumberOfTabs)) {
        this.selectedIndex = this.selectedIndex + 1;
      } else {
        this.openSnackBar("Criteria Cannot be Empty", "Failed");
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

  /**
   * To catch the previous button action
   */
  previousStep() {
    if (this.selectedIndex != 0) {
      if ((!this.criteriaList.length) || (this.criteriaList[this.allCriteriaList.length - 1].name && this.selectedIndex != this.maxNumberOfTabs)) {
        this.selectedIndex = this.selectedIndex - 1;
      } else {
        this.openSnackBar("Criteria Cannot be Empty", "Failed");
      }
    }
  }

  /**
   * To handle the criteria on adding and updating
   */
  AddCriteria() {
    this.showAddCriteria = this.showAddCriteria == true ? false : true;
    this.criteriaAddorUpdate = "Add";
  }

  /**
   * creating Draft frameWork using below API
   * @returns {JSON} - Response data.
   * */
  create() {
    this.frameWorkServ.createDraftFrameWork().subscribe(
      data => {
        let frameWorkId = data['result']._id
        // this.createDraftEcm(frameWorkId);
        // this.createDraftSection(frameWorkId);
        this.route.navigateByUrl("/workspace/edit/" + data['result']._id);
      },
      error => {
      }
    );
  }

  /**
   * To save all the entered framework data 
   */
  saveData() {
    if (this.selectedIndex == 0) {
      this.solFormSubmitted = true;
      if (this.solutionForm.valid) {
        let selectedEntity = this.entitys[0].filter(data => {
          if (data._id == this.solutionForm.value.solutionEntityType) {
            return data;
          };
        })
        let id = this.generateExternalId();
        let obj = {
          name: this.solutionForm.value.solutionName,
          keywords: this.solutionForm.value.solutionKeywords,
          language: this.solutionForm.value.solutionLanguage,
          description: this.solutionForm.value.solutionDescription,
          entityType: selectedEntity[0].name,
          entityTypeId: selectedEntity[0]._id,
          externalId: id
        }
        this.frameWorkServ.updateDraftFrameWork(obj, this.frameWorkId).subscribe(data => {
          this.openSnackBar("data updated Succesfully", "Updated");
          this.detailschanged = false;
          this.getFrameWorkDetails();
          this.selectedIndex = this.selectedIndex + 1;
        },
          error => {
          });
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

  /**
   * To show the toaster message at the top
   * @param message : toaster message
   * @param action : Type of action
   */
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }

  /**
   * To get the criteria list
   * @param frameWorkId: Passing the framworkId
   * @returns {JSON} - Response Data
   */
  draftCriteriaList(frameWorkId) {
    this.frameWorkServ.draftCriteriaList(frameWorkId, this.criteriaListPageSize, this.nextCriteriaPage + 1).subscribe(data => {
      if (data && data['status'] == 200) {
        // deep cloning the object
        this.allCriteriaList = JSON.parse(JSON.stringify(data['result'].data));
        this.criteriaList = data['result'].data;
        this.DynamicFomServe.setCriteria(this.criteriaList);
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
  /**
   * 
   * On changing the pagination 
   * @param event: catching the event from the html
   */
  onPaginateChange(event) {
    this.nextCriteriaPage = event.pageIndex;
    this.criteriaListPageSize = event.pageSize;
    this.draftCriteriaList(this.frameWorkId);
  }

  /**
   * edit criteria form with selected criteria 
   * @param element : object of criteria to be edited
   */
  editCriteria(element) {
    window.scroll(0, 0);
    this.showAddCriteria = true;
    this.criteriaDescriptionUpdate = element.description;
    this.criteriaNameupdate = element.name;
    this.criteriaAddorUpdate = "Update";
    this.currentCriteriaId = element._id;
  }

  /**
   * method to delete the existing criteria 
   * @param element : object of criteria to be deleted
   * @returns {JSON} - Response data.
   */
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

  /**
   * Confirmation before leaving the page, that to save the data 
   */
  confirmToSaveData() {
    let message = `Your changes will be lost if you don't save them.`;
    let dialogData = new ConfirmDialogModel("Confirm Action", message);
    this.dialogRef = this.dialog.open(DeleteConfirmComponent, {
      width: '350px',
      data: dialogData
    })
  }


  /**
   * Method allows to get FrameWork Details
   * @returns {JSON} - Response data.
   */
  getFrameWorkDetails() {
    this.frameWorkServ.getDraftFrameworksdetails(this.frameWorkId).subscribe(data => {
      if (data['status']) {
        let res = data['result'];
        this.draftSolutionName = res.name;
        this.draftsolutionDescription = res.description;
        this.draftSolutionLanguage = res.language[0];
        this.detailschanged = false;
        this.draftSolutionEntityType = res.entityTypeId;
        this.keyWordItems = res.keywords;
      }
    }, error => {
      console.log("error while callng api service", error);
    })
  }

  /** 
   * To handle the criteriaForm Validations
   */
  get critForm() { return this.criteriaForm.controls; }
  /** 
     * To handle the solutionForm Validations
     */
  get solValid() { return this.solutionForm.controls; }
  /** 
    * To handle the selectCriteriaForm Validations
    */
  get questionSubmitForm() { return this.selectCriteriaForm.controls; }

  /**
   * To close the criteria 
   */
  closeAddOrUpdate() {
    this.showAddCriteria = false;
  }

  //
  /**
   *  method is used to get the All the Available entityTypes
   *  @returns {JSON} - Response data.
   */
  getEntityTypeList() {
    this.frameWorkServ.getEntityTypeList().subscribe(data => {
      this.entitys.push(data['result']);
    });
  }

  // To open the confirmation popup
  confirmpopup() {
    let message = `Your changes will be lost if you don't save them.?`;
    let dialogData = new ConfirmDialogModel("Confirm Action", message);
    this.detailsdialogRef = this.dialog.open(DeleteConfirmComponent, {
      width: '350px',
      data: dialogData
    })
  }

  /**
   * Triger event from child for drop Question or Save All Question
   * @param event: catch the event if any change in the library
   */
  eventFromChild($event) {
    this.totalpages = this.DynamicFomServe.getPageNumbers();
    this.confirm = false;
    this.clikOk = false;
    this.totalpages = $event.pages;
    let _this = this;
    if ($event.action == 'all') {
      this.questionList = $event;
      for (let i = 0; i < this.questionList['data'].length; i++) {
        if (!this.questionList['data'][i].draftCriteriaId) {
        } else {

        }
      }
      if ($event.data) {
        _this.allFields = $event.data;
        _this.allFields.forEach(function (element, index) {
          // to update the existing question object and update to server
          if (element._id && _this.updateArray.includes(element._id)) {

            if (element.type && element.type == "matrix") {
              _this.createQuestionAndUpdateMatrixQuestion(element);

            } else {
              let updateQuestionObj = _this.dbQuestionObjGeneration(element);

              _this.updateDraftQuestion(updateQuestionObj, element._id);
            }
          } else {
            if (element._id) {
            } else {
              let el = _this.selectedCriteriaOfqtn['_id'];
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
              let updateQuestionObj = _this.dbQuestionObjGeneration(element);
              _this.childArray = []
              if (element.child) {

                element.child.forEach(item => {
                  let dataOfChildOBj = _this.dbQuestionObjGeneration(item);
                  _this.childArray.push(dataOfChildOBj);
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
                if (index == _this.allFields.length) {
                  let obj = {
                    questionArray: _this.allFields,
                    criteriaList: this.criteriaList
                  }
                  this.eventsSubject.next(obj);
                }

              }
            }
          }
        });
      }
    } else if ($event.action == 'add') {
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
      // update arry contains only existing data which is available in server
      if ($event.data._id) {
        _this.updateArray.push($event.data._id);
      }
      if ($event.data.data && $event.data.data._id) {
        _this.updateArray.push($event.data.data._id);
      }
      const message = $event.data.position + ' ' + 'Question Updated Succesfully';
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
          this.openSnackBar("Question Deleted Succesfully", "Deleted");
          if (_this.allQuestionWithDetails.length == 0) {
            let data = this.DynamicFomServe.getQuestions();
            _this.allQuestionWithDetails = data['questionList'];
          }
          _this.allQuestionWithDetails = _this.allQuestionWithDetails.filter(function (el, index) {
            if (el._id && el._id != $event.data._id) {
              return el;
            } else if (el.field && el.field != $event.data.field) {
              return el;
            }
          })
          if ($event.data._id) {
            this.deleteDraftQuestion($event.data._id);
          } else {
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
        } else {

        }
      }

    } else if ($event.action == 'childDelete') {
      let message = `Are you sure you want to delete this question?`;
      let dialogData = new ConfirmDialogModel("Confirm Action", message);
      const dialogRef = this.dialog.open(DeleteConfirmComponent, {
        width: '350px',
        data: dialogData
      })
      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          $event.data.child.splice($event.deleteindex, 1);
          this.openSnackBar("Question Deleted Succesfully", "Deleted");
          let obj = {
            questionArray: _this.allFields,
            criteriaList: this.criteriaList
          }
          this.eventsSubject.next(obj);
        }
      });
    }
  }


  /**
   * Service call for creating Draft ECM
   * @param frameWorkId: passing the id
   */
  // createDraftEcm(frameWorkId) {
  //   this.frameWorkServ.draftEcmCreate(frameWorkId).subscribe(data => {

  //   });
  // }
  /**
   * Service call for creating Draft Section 
    * @param frameWorkId: passing the id 
   */
  // createDraftSection(frameWorkId) {
  //   this.frameWorkServ.draftSectionCreate(frameWorkId).subscribe(data => {
  //   });

  // }
  /**
   * Service call for get All Draft Section for framework
   * @param frameWorkId: passing the id
   *  @returns {JSON} - Response data.
   */
  listDraftSection(frameWorkId) {
    this.frameWorkServ.draftSectionCreate(frameWorkId).subscribe(data => {
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
        this.draftEvidenceMethodId = data['result'].data[0]._id;
      }
    });
  }

  /**
   * Service call for to create Draft Ecm for framework 
   */
  createDraftQuestion(obj, updateObj = {}, index, child = []) {
    this.frameWorkServ.draftQuestionCreate(obj).subscribe(data => {
      if (data['result']) {
        if (updateObj) {
          if (child && child.length > 0) {
            let i = 0;
            let childIds = [];
            child.forEach(element => {
              this.frameWorkServ.draftQuestionCreate(obj).subscribe(childData => {
                if (childData['result']) {
                  childIds.push(childData['result']._id);
                  this.updateDraftQuestion(element, childData['result']._id);
                  if (child.length == childIds.length) {
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

  /**
   * To update the draft question
   * @param obj: Object that need to update 
   * @param questionId: It is the id of the question to update
   */
  updateDraftQuestion(obj, questionId) {
    let updateQuestionObj = {};
    if (obj.question && obj.question.length > 0) {
      updateQuestionObj = obj;
    } else {
      updateQuestionObj = this.dbQuestionObjGeneration(obj);
    }
    this.frameWorkServ.updateDraftQuestion(updateQuestionObj, questionId).subscribe(data => {
      if (data['result']) {
      } else {
        console.log("Error", data);
      }
    });
  }

  /**
   * 
   * Creating the matrix questions and updating 
   * @param obj: object from the child component, when the question type is matrix
   */
  createQuestionAndUpdateMatrixQuestion(obj) {
    let _this = this;
    if (obj.child && obj.child.length > 0) {
      obj.child.forEach(element => {
        if (!element._id) {
          let updateQuestionObj = _this.dbQuestionObjGeneration(element);
          let frameWorkData = {
            "draftFrameworkId": _this.frameWorkId,
            "draftCriteriaId": element.draftCriteriaId,
            "draftEvidenceMethodId": _this.draftEvidenceMethodId,
            "draftSectionId": _this.draftSectionId
          }
          _this.frameWorkServ.draftQuestionCreate(frameWorkData).subscribe(childData => {
            if (childData['result']) {
              _this.updateDraftQuestion(updateQuestionObj, childData['result']._id);
              _this.frameWorkServ.detailsDraftQuestion(obj._id).subscribe(matrixData => {
                // matrixData['result'].instanceQuestions.push(childData['result']._id);
                let updateOb = {
                  instanceQuestions: []
                }
                updateOb.instanceQuestions = matrixData['result'].instanceQuestions;
                updateOb.instanceQuestions.push(childData['result']._id);
                _this.updateDraftQuestion(updateOb, obj._id);
              });
            }
          });
        } else {
          _this.updateDraftQuestion(element, element._id);
        }
      });
    }
    _this.updateDraftQuestion(obj, obj._id);
  }

  /** While changing the criteria the questions get filtered */
  criteriaChange() {
    this.isUpdate = this.isUpdate + 1;
    this.previousCriteria = this.selectedCriteriaOfqtn;
    if (!this.allQuestionWithDetails) {
      this.allQuestionWithDetails = [];
    }
    if (!this.allQuestionWithDetails || this.allQuestionWithDetails.length == 0) {
      let _this = this;
      let allQnt = this.DynamicFomServe.getQuestions();
      if (allQnt['questionList'] && allQnt['questionList'].length > 0) {
        this.allQuestionWithDetails = allQnt['questionList'];
      } else {
        this.allQuestionWithDetails = [];
      }
      let qntDat = this.allQuestionWithDetails.filter(item => {
        return item.draftCriteriaId == this.selectedCriteriaOfqtn['_id'];
      })
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
    } else {
    }
  }

  /**
   * To get the draft questioin list
   * @returns {JSON} - Response data.
   */
  draftQuestionList() {
    let questionList = this.localQuestionList;
    let _this = this;
    this.frameWorkServ.draftQuestionList(this.frameWorkId).subscribe(data => {
      if (data['result'] && data['result'].data) {
        let currentThis = _this;
        let allRecords = [];
        data['result'].data.forEach(el => {
          _this.frameWorkServ.detailsDraftQuestion(el._id).subscribe(qnt => {
            allRecords.push(qnt['result']);
            if (data['result'].data.length == allRecords.length) {
              _this.generateQuestion(allRecords, _this);
            }
          });
        });
      } else {
        console.log("Error while featching question list", data);
      }
    });
  }

  /** generating the questions in the format
   * @returns {JSON} - Response data.
   */
  generateQuestion(allRecords, _this) {
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
    allRecords.forEach(function (element, index) {

      let questionObj = _this.reGenerateQuestionObject(element, index);
      if (_this.localQuestionList == allRecords.length - 1) {
        let obj = {
          questionArray: _this.localQuestionList,
          criteriaList: _this.criteriaList
        }
        // this.eventsSubject.next(obj);
        if (!_this.allQuestionWithDetails) {
          _this.allQuestionWithDetails = [];
          _this.allQuestionWithDetails = _this.localQuestionList;
        } else {
          _this.allQuestionWithDetails = _this.localQuestionList;
        }

      }
    });
  }

  /** Based on the type of the question , structure has to be generated
   * @param element: question object
   * @param legnth: passing the length of the questions
   *  @returns obj: returning the object with all questions.
   */
  reGenerateQuestionObject(element, legnth) {
    if (element._id) {
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

  /** Basic structure of different questions
   * @param element: passing the child object
   * @param len: passing the length of the questions
   * @param label: passing label of the question
   * @returns : return question object
   */
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
        isDeleted: element.isDeleted ? element.isDeleted : false
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
        child: element.childArray,
      }
    }
    obj['prefix'] = element.prefix ? element.prefix : "";
    obj['applicable'] = element.applicable ? element.applicable : false;
    obj['audiorecording'] = element.audiorecording ? element.audiorecording : false;
    obj['filecount'] = element.filecount ? element.filecount : 0;
    obj['fileType'] = element.fileType ? element.fileType : "";
    obj['caption'] = element.caption ? element.caption : false;
    obj['remarks'] = element.remarks ? element.remarks : false;
    obj['filerequired'] = element.filerequired ? element.filerequired : false;
    if (obj['type'] == "matrix") {
      obj['sectionHeader'] = element.sectionHeader ? element.sectionHeader : "";
      let allChilds = []
      obj['child'] = obj['child'].filter((childObj, i) => {
        let latestChildObj = this.getObjectOfField(childObj.responseType, childObj, i, childObj.question[0]);
        allChilds.push(latestChildObj);
        return latestChildObj;
      });
      obj['child'] = allChilds;
      return obj;

    } else {
      return obj
    }
  }

  /**
   * Delete the question from the object based on the question id
   * @param questionId : passing the question id
   */
  deleteDraftQuestion(questionId) {
    if (questionId) {
      this.frameWorkServ.deleteDraftQuestion(questionId).subscribe(data => {
        if (data) {
          let obj = {
            questionArray: this.allQuestionWithDetails,
            criteriaList: this.criteriaList
          }
          this.eventsSubject.next(obj);
        } else {
          console.log("failed to delete");
        }
      });
    }
  }

  /**
   * This method is used to add and update the criteria list
   * @param element: passing the object of criteria form
   * @returns {JSON} - Response data.
   */
  criteriaUpdate(element) {
    let _this = this;
    if (element.name !== '' && element.description !== '') {
      this.criteriaEmpty = false;
    } else {
      this.criteriaEmpty = true;
    }
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
   * Adding Auto Genrated Critera
   * @returns {JSON} - Response data.
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
            this.criteriaSubmitted = false;
          });
        }
      });
    } else {
      this.openSnackBar("Previous Added Criteria Cannot be blank", "Failed");
    }
  }


  /** Question generating and updating fields added based on the type of the question
   * @returns questions object
   */
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
      isDeleted: element.isDeleted ? element.isDeleted : false,
      // validation: {
      //   required: element.validations.required ? element.validations.required : false
      // },
      visibleIf: element.visibleIf ? element.visibleIf : [],
      children: element.parentChildren ? element.parentChildren : [],
    }

    updateQuestionObj['prefix'] = element.prefix ? element.prefix : "";
    updateQuestionObj['applicable'] = element.applicable ? element.applicable : false;
    updateQuestionObj['audiorecording'] = element.audiorecording ? element.audiorecording : false;
    updateQuestionObj['filecount'] = element.filecount ? element.filecount : 0;
    updateQuestionObj['fileType'] = element.fileType ? element.fileType : "";
    updateQuestionObj['caption'] = element.caption ? element.caption : false;
    updateQuestionObj['remarks'] = element.remarks ? element.remarks : "";
    updateQuestionObj['filerequired'] = element.filerequired ? element.filerequired : false;

    if (element.type == "date") {
      // updateQuestionObj.validation['max'] = element.validations.maxDate;
      // updateQuestionObj.validation['min'] = element.validations.minDate;
      updateQuestionObj['autoCollect'] = element.autoCollect ? element.autoCollect : false;
      updateQuestionObj['dateformat'] = element.dateformat ? element.dateformat : "";
    } else if (element.type == "matrix") {

      updateQuestionObj['instanceIdentifier'] = element.instanceIdentifier ? element.instanceIdentifier : false;
      updateQuestionObj['sectionHeader'] = element.sectionHeader ? element.sectionHeader : false;
    } else if (element.type == "Number") {
      updateQuestionObj['weightage'] = element.weightage ? element.weightage : false;

    } else if (element == 'slider') {
      updateQuestionObj['max'] = element.max ? element.max : false;
      updateQuestionObj['min'] = element.min ? element.min : false;
    }
    updateQuestionObj.question.push(element.label);
    updateQuestionObj['externalId'] = this.generateExternalId();
    return updateQuestionObj;

  }

  /** Randon External id generation */
  generateExternalId() {
    // Math.random should be unique because of its seeding algorithm.
    // Convert it to base 36 (numbers + letters), and grab the first 9 characters
    // after the decimal.
    return '_' + Math.random().toString(36).substr(2, 9);
  };
}
