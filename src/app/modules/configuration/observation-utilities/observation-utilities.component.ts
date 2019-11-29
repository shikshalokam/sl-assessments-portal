import { Component, ElementRef, ViewChild, NgModule, OnInit, ChangeDetectorRef, AfterViewInit } from '@angular/core';
import { FormioModule } from 'ng2-formio';
import { DragAndDropModule } from 'angular-draggable-droppable';
// import { FormGroup, FormControl } from '@angular/forms';
import { FormControl, FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { MatTabChangeEvent, MatPaginator, MatTableDataSource, MatSort, MatSnackBar, MatDialog } from '@angular/material';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { DraftFrameWorkServiceService } from '../../configuration/workspace-services/draft-frame-work-service.service';
import { DeleteConfirmComponent } from '../designer-worspace/components/delete-confirm/delete-confirm.component';
declare var $: any;

import { TagInputModule } from 'ngx-chips';
import { from, Subject } from 'rxjs';
import { error } from 'util';
import { IfStmt } from '@angular/compiler';
import { element } from '@angular/core/src/render3';

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


  Data: any;
  dopElement = "";
  selectedIndex: number = 0;
  maxNumberOfTabs = 3;
  showAddCriteria = false;
  saveBtn = true;
  criteriaList = new MatTableDataSource<Element>();
  ArrayOfCriteria = [];
  displayedColumns: string[] = ['no', 'name', 'description', 'action'];


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
  criteriaListCount: number;
  solFormSubmitted = false;

  localQuestionList: any;


  constructor(private elRef: ElementRef, private frameWorkServ: DraftFrameWorkServiceService, private route: Router, private activatedRoute: ActivatedRoute, private _snackBar: MatSnackBar, private cdr: ChangeDetectorRef, public dialog: MatDialog) { }



  onChange(event) {
    this.Data = event.form;
  }
  showQuestions = false;
  html = "";
  criteriaForm: FormGroup;
  solutionForm: FormGroup;
  addEntityForm: FormGroup;
  selectCriteriaForm : FormGroup;

  solutions: any;
  criteria: any;
  solutionString: string;
  criteriaString: string;
  selectedCriteriaOfqtn = {};
  // dropdownList:any;

  frameWorkId: any;

  addEntityBlock = false;


  draftSolutionLanguage: any;
  draftsolutionDescription: any;
  draftSolutionName: any;
  draftSolutionEntityType = "";
  criteriaSubmitted: boolean = false;
  languageArr = ["Kannada", "English", "Hindi", "Tamil"];

  eventsSubject: Subject<void> = new Subject<void>();
  questionList: any;
  draftEvidenceMethodId: any;
  draftSectionId: any;
  allFields: any;
  updateArray: any;
  questionSubmit:boolean =false;

  ngAfterViewInit() {
    this.criteriaList.paginator = this.paginator;
    this.criteriaList.sort = this.sort;
  }

  ngOnInit() {
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
      // isReusable: new FormControl('')
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
      selectedCriteriaOfqtn:new FormControl('',Validators.required)
    })
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
          this.criteriaForm.reset();
          this.criteriaSubmitted = false;
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

    // this.questions = {
    //   criteria: this.selectedCriteriaOfqtn,
    //   questions: this.Data
    // }
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

    // this.getGeneratedQuestion();

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


      // this.draftCriteriaList(this.frameWorkId);
      // this.draftQuestionList();
    }
    if (this.selectedIndex == 2) {
      this.nextBtn = "Save"
      this.next = true;
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

    // console.log("this.selectedIndex",this.selectedIndex);
    if (this.selectedIndex == 2) {
      // this.selectCriteriaForm.

      console.log("this.selectedCriteriaOfqtn['_id'",this.selectedCriteriaOfqtn);

      if(this.selectedCriteriaOfqtn && this.selectedCriteriaOfqtn['_id']){
        this.questionSubmit = false;

         /** 
       * call event to get the data from library if data present it update the json 
       * otherwise library trigger an event to return the data
       *  **/
      this.eventsSubject.next();

      if (this.selectedIndex != this.maxNumberOfTabs) {
      this.selectedIndex = this.selectedIndex + 1;
    }

        
      }else{
        this.questionSubmit = true;
     

      

     

      }

    
    }else{
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
    // creatingg Draft frameWork using below API
    this.frameWorkServ.createDraftFrameWork().subscribe(
      data => {
        // console.log("data",data['result']._id);

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
        let obj = {
          name: this.solutionForm.value.solutionName,
          keywords: this.solutionForm.value.solutionKeywords,
          language: this.solutionForm.value.solutionLanguage,
          description: this.solutionForm.value.solutionDescription,
          entityType: selectedEntity[0].name,
          entityTypeId: selectedEntity[0]._id
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


        this.criteriaList = data['result'].data;
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
    const dialogRef = this.dialog.open(DeleteConfirmComponent, {
      width: '350px',
    })
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.frameWorkServ.draftCriteriaDelete(element._id).subscribe(data => {
          if (data['status']) {
            this.openSnackBar("Criteria Deleted Succesfully", "Deleted");
            this.draftCriteriaList(this.frameWorkId);
          }
        }, error => {
          console.log("error while callng api", error);
        })
      }
    });
  }

  // method allows to get FrameWork Details
  getFrameWorkDetails() {
    this.frameWorkServ.getDraftFrameworksdetails(this.frameWorkId).subscribe(data => {
      if (data['status']) {
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
    console.log("$event", this.frameWorkId);

    let _this = this;

    if ($event.action == 'all') {

      console.log("save all")
      this.questionList = $event;

      if ($event.data) {
        _this.allFields = $event.data;
        _this.allFields.forEach(function (element, index) {

          // to update the existing question object and update to server
          if (element._id && _this.updateArray.includes(element._id)) {
            console.log("updated data",element);
            let obj = {
              question: [],
              responseType:element.type,
              options:[]
            }
            obj.question.push(element.label);
            obj.question.push(element.options);
            
            // _this.updateArray.push($event.data._id);
            _this.updateDraftQuestion(obj, element._id);
          
          }else{
            // add question to server if only newly add question
            // checking by _id
            if(!element._id){

              console.log("newly added",element);
            let obj = {

            "draftFrameworkId": _this.frameWorkId,
            "draftCriteriaId": _this.selectedCriteriaOfqtn['_id'],
            "draftEvidenceMethodId": _this.draftEvidenceMethodId,
            "draftSectionId": _this.draftSectionId
            }

          
            let options = [];
            if(element.options){
              for (var key in element.options) {

                let object  = {
                  label: element.options[key]['label'],
                  value:element.options[key]['key']
  
                }
                options.push(object);
  
              }
            }
            


          console.log("options",options);

            
          let updateQuestionObj = {
            question: [],
            responseType: element.type,
            options:options
          }

          updateQuestionObj.question.push(element.label);
       
          let questionId = _this.createDraftQuestion(obj, updateQuestionObj, index);
          console.log("index==_this.allFields.length", index, "==", _this.allFields.length)
          if (index == _this.allFields.length) {
            this.eventsSubject.next(_this.allFields);
          }
        }
        }
        });
        }
    } else if ($event.action == 'add') {
      // let obj = {

      //   "draftFrameworkId": this.frameWorkId,
      //   "draftCriteriaId": this.selectedCriteriaOfqtn['_id'],
      //   "draftEvidenceMethodId": this.draftEvidenceMethodId,
      //   "draftSectionId": this.draftSectionId
      // }

      // let updateQuestionObj = {
      //   question: [],
      //   responseType: $event.data.type,

      // }

      // updateQuestionObj.question.push($event.data.label)

      // console.log("updateQuestionObj",updateQuestionObj);

      // // create question and Update The question
      // this.createDraftQuestion(obj, updateQuestionObj);

    } else if ($event.action == 'update') {
      
      // update arry contains only existing data which is available in server
      if($event.data._id){
        _this.updateArray.push($event.data._id);
      }
      // this.updateDraftQuestion(obj, $event.data._id);
    }else if($event.action == 'delete'){

      console.log("$event",$event.data);

      console.log("this.allFields 1",_this.allFields.length);

      // _this.eventsSubject.next();
      _this.allFields  = _this.allFields.filter(function(el,index){
        // if(el.isDelete){
          return !el.isDelete;
        // }else{
        //   return;
        // }
      })
      this.deleteDraftQuestion($event.data._id);


      console.log("this.allFields 2",this.allFields.length);
      this.eventsSubject.next(_this.allFields);
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
      console.log("data this;  ", data['result']);
    });

  }
  /**
   * Service call for creating Draft Section 
   */
  createDraftSection(frameWorkId) {

    this.frameWorkServ.draftSectionCreate(frameWorkId).subscribe(data => {
      console.log("data this;  ", data['result']);
    });

  }
  /**
   * Service call for get All Draft Section for framework
   */
  listDraftSection(frameWorkId) {

    this.frameWorkServ.draftSectionCreate(frameWorkId).subscribe(data => {
      console.log("data this;  ", data['result']);
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
        // console.log("Ecm List;  ", data['result']);
        this.draftEvidenceMethodId = data['result'].data[0]._id;
        // console.log("Ecm List;  ",data['result'].data[0]._id);
      }

    });
  }

  /**
   * Service call for to create Draft Ecm for framework 
   */
  createDraftQuestion(obj, updateObj = {}, index) {
    this.frameWorkServ.draftQuestionCreate(obj).subscribe(data => {
      if (data['result']) {
        // console.log("create question", data['result']);

        if (updateObj) {
          console.log("updateObj", updateObj);

          this.updateDraftQuestion(updateObj, data['result']._id);
          // 
          this.allFields[index]._id = data['result']._id;
          console.log("all -- fields", this.allFields[index]);
          return data['result']._id;
        }
        return data['result'];

      } else {
        console.log("Error", data);
      }

    });
  }

  updateDraftQuestion(obj, questionId) {

    // obj['_id']= questionId;

    console.log(" questionId", obj);
    this.frameWorkServ.updateDraftQuestion(obj, questionId).subscribe(data => {
      if (data['result']) {
        console.log("question updated", data['result']);



      } else {
        console.log("Error", data);
      }

    });
  }
  criteriaChange() {
    // console.log("this",this.selectedCriteriaOfqtn);
  }
  draftQuestionList() {
    // this.localQuestionList = "asdasd";

    let questionList = this.localQuestionList;

    let _this = this;
    console.log("werewr ", this.localQuestionList);
    this.frameWorkServ.draftQuestionList(this.frameWorkId).subscribe(data => {
      if (data['result'] && data['result'].data) {
        console.log("question list", data['result']);

        data['result'].data.forEach(function (element, index) {

          

          // let questionObj = {
          //   "position": index,
          //   "field":index+"question",
          //   "type": element.responseType,
          //   "label": element.question[0],
          //   "placeholder": "Please enter your question here",
          //   "validations": {
          //     "required": true,
          //     "minLenght": "",
          //     "maxLength": ""
          //   }
          // }
          // console.log("questionObj",questionObj);
          // console.log("questionObj",questionList);

          let currentThis = _this;
        
          // _this.frameWorkServ.detailsDraftQuestion(element._id).subscribe(qnt =>{

          //   if(qnt['result']){

          //     console.log("in--",qnt['result'],"qnt['result']",);
          // console.log(element,"data['result'].count====",data['result'].count);
          let questionObj = currentThis.reGenerateQuestionObject(element, data['result'].count)    
          // let questionObj = _this.reGenerateQuestionObject(qnt['result'], index)
              // questionList.push(questionObj);
           
          if(currentThis.localQuestionList.length== data['result'].count){
            currentThis.eventsSubject.next(currentThis.localQuestionList);
          }

          

         
        });

        // console.log("this.localQuestionList",this.localQuestionList);
        


      } else {
        console.log("Error while featching question list", data);
      }
    });
  }

  reGenerateQuestionObject(element, legnth) {

    let ele = element.responseType;
    let label = element.question[0];
    let len = legnth + 1;


    this.frameWorkServ.detailsDraftQuestion(element._id).subscribe(qnt =>{

    let options = [];

     element = qnt['result'];
     let responseType = ele;

     console.log("response type",ele);

    console.log("element.options",element.options);
      if(element.options){
              for (var key in element.options) {

                console.log("key--",key);

                let object  = {
                  label: element.options[key]['label'],
                  key:element.options[key]['value']
  
                }
                options.push(object);
  
              }
            }

            console.log("--------opt",options);



    var obj = {};
    if (ele == 'text') {
      obj = {
        "position": len,
        "field": len + "question",
        "type": responseType,
        "label": label,
        "placeholder": "Please enter your question here",
        "validations": {
          "required": true,
          "minLenght": "",
          "maxLength": ""
        },
        "_id": element._id
      }
    }
    if (ele == 'number') {
      obj = {
        "field": len + "question",
        "type": responseType,
        "label": label,
        "placeholder": "Please enter your question here",
        "validations": {
          "required": true,
          "minLenght": "",
          "maxLength": ""
        },
        "_id": element._id

      }
    }

    if (ele == 'radio') {
      obj = {
        field: len + "question",
        name: len + "question",
        type: responseType,
        label: label,
        value: 'in',
        required: true,
        options: options,
        "_id": element._id
      }
    }
    if (ele == "checkbox") {
      obj = {
        field: len + "question",
        name: len + "question",
        type: responseType,
        label: label,
        required: true,
        options: options,
        "_id": element._id
      }
    }
    if (ele == "dropdown") {
      obj = {
        field: len + "question",
        name: len + ". question",
        type: responseType,
        label: label,
        value: 'option1',
        required: true,
        options: options,
        "_id": element._id
      }
    }

    console.log("obj", obj);

    this.localQuestionList.push(obj);
    this.eventsSubject.next(this.localQuestionList);
    return obj;

  });

    // console.log("fields controls", this.form);
  }

  deleteDraftQuestion(questionId){

    console.log("questionId--",questionId);
    this.frameWorkServ.deleteDraftQuestion(questionId).subscribe(data => {
      if (data) {
        console.log("Deleted",data);
      }else{
        console.log("failed to delete");
      }
    });

  }

  detailsDraftQuestion(questionId){
    console.log("questionId--",questionId);
    this.frameWorkServ.detailsDraftQuestion(questionId).subscribe(data => {
      if (data) {
        console.log("details",data);
        // this.reGenerateQuestionObject(data['result'], 2);

      }else{
        console.log("details ");
      }
    });
  }





}
