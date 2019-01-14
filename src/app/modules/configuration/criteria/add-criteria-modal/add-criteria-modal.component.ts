import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { UtilityService, ConfigurationService } from 'src/app/core';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';
import {ViewChild, ElementRef} from '@angular/core';
import { environment } from '../../../../../environments/environment'
import { ResourceService } from 'src/app/shared/services';
@Component({
  selector: 'app-add-criteria-modal',
  templateUrl: './add-criteria-modal.component.html',
  styleUrls: ['./add-criteria-modal.component.scss']
})
export class AddCriteriaBoxComponent implements OnInit {
  criteriaGroup :FormGroup;
  @ViewChild('stepper') nameInputRef: ElementRef;
  updateData;
  updateCriteria = {
    externalId: "",
    owner: "",
    timesUsed: 12,
    weightage: 20,
    remarks: "",
    name: "",
    description: "",
    criteriaType: "auto",
    score: "",
    resourceType: [
      "Program",
      "Framework",
      "Criteria"
    ],
    language: [
      "English"
    ],
    keywords: [
      "Keyword 1",
      "Keyword 2"
    ],
    concepts: [],
    flag: "",
    createdFor: [
      "0125747659358699520",
      "0125748495625912324"
    ],
    rubric: {
      levels: [
        {
          level: "L1",
          label: "Level 1",
          description: "",
          expression: "",
          expressionVariables: []
        },
        {
          level: "L2",
          label: "Level 2",
          description: "",
          expression: "",
          expressionVariables: []
        },
        {
          level: "L3",
          label: "Level 3",
          description: "",
          expression: "",
          expressionVariables: []
        },
        {
          level: "L4",
          label: "Level 4",
          description: "",
          expression: "",
          expressionVariables: []
        }
      ]
    },
    evidences: []
  }
  levelCount= 4;
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  language;


  constructor( private sharedResource :ResourceService,private snackBar : MatSnackBar,private utility :UtilityService,private _formBuilder: FormBuilder , private configurationService : ConfigurationService) {
  }

  ngOnInit() {
    this.language = this.sharedResource.language;

    this.firstFormGroup = this._formBuilder.group({
      criteriaId: ['', Validators.required],
      criteriaName: ['', Validators.required],
      description: ['', Validators.required],
      language : this.setLanguage(),
      remarks : ['']

    });
    // this.secondFormGroup = this._formBuilder.group({
    //   level1: ['', Validators.required],
    //   level2: ['', Validators.required],
    //   level3: ['', Validators.required],
    //   level4: ['', Validators.required],
    // });
    this.secondFormGroup = this._formBuilder.group({
    levels: this.setLevels()
    })
    console.log(this.secondFormGroup);
    console.log(
    this.firstFormGroup
    )
  }
  setLevels(){
    let arr = new FormArray([])
    this.updateCriteria.rubric.levels.forEach(level => {
      arr.push(this._formBuilder.group({ 
        // label : "level" ,
        // description : y .description
        level :['',Validators.required]
      }))
    })
    return arr;
  }
  setLanguage(){
    let arr = new FormArray([])
      this.language.forEach( language =>{
        arr.push(this._formBuilder.group({ 
          // label : "level" ,
          // description : y .description
          language :['',Validators.required]
        }))
      })
  }
  addNewLevel(control) {
    control.push(
      this._formBuilder.group({
        level: ['',Validators.required]
      }))
      this.levelCount++;
  }
  showObject(obj){
    console.log(obj)
  }

  deleteLevel(control, index) {
    console.log(control)
    control.removeAt(index)
    this.levelCount--;
  }

  removeAll(){
    this.secondFormGroup = this._formBuilder.group({
      levels: this.setLevels()
      })
      this.levelCount =4;
  }


  submitNewCriteria(){
    this.utility.loaderShow();
    const firstStepperData = this.firstFormGroup.getRawValue();
    const secondStepperData= this.secondFormGroup.getRawValue();
    this.updateCriteria.externalId = firstStepperData.externalId;
    this.updateCriteria.description = firstStepperData.description;
    this.updateCriteria.name = firstStepperData.criteriaName;
    this.updateCriteria.rubric.levels[0] = secondStepperData.level1;
    this.updateCriteria.rubric.levels[0] = secondStepperData.level2;
    this.updateCriteria.rubric.levels[0] = secondStepperData.level3;
    this.updateCriteria.rubric.levels[0] = secondStepperData.level4;
    this.configurationService.addNewCriteria(this.updateCriteria).subscribe(
      data => {
      this.utility.loaderHide();
      this.snackBar.open(data['message'], "Ok", { duration: 9000 });
      },
      error => {
      this.utility.loaderHide();
      this.snackBar.open(error['message'], "Ok", { duration: 9000 });
      }
    )
    this.utility.onBack();

  }
  next(){
    console.log("called")
    console.log(this.nameInputRef);
    console.log(this.nameInputRef['_keyManager']._items.length)
    if(this.nameInputRef['selectedIndex'] < this.nameInputRef['_keyManager']._items.length  - 1)
    {
    this.nameInputRef['selectedIndex'] +=1 ;

    }
    // this.nameInputRef.reset();
  }
  back(){
  if(this.nameInputRef['selectedIndex'] > 0)
  {
  this.nameInputRef['selectedIndex'] -= 1 ;

  }
}

}
