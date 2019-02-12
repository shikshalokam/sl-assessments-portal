import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { UtilityService, ConfigurationService } from 'src/app/core';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';
import { ViewChild, ElementRef } from '@angular/core';
import { environment } from '../../../../../environments/environment'
import { ResourceService } from 'src/app/shared/services';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-add-criteria-modal',
  templateUrl: './add-criteria-modal.component.html',
  styleUrls: ['./add-criteria-modal.component.scss']
})
export class AddCriteriaBoxComponent implements OnInit {
  criteriaGroup: FormGroup;
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
    ],
    concepts: [],
    flag: "",
    createdFor: [
      "0125747659358699520",
      "0125748495625912324"
    ],
    rubric: {
      levels: this.setRubricLevel()
    },
    evidences: []
  }
  levelCount = 4;
  keyWordCount = 1;
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  language;
  stepperPageLength;
  currentLoadedStepper = 0;
  programId;
  assessmentId;
  constructor(private route: ActivatedRoute,private sharedResource: ResourceService, private snackBar: MatSnackBar, private utility: UtilityService, private _formBuilder: FormBuilder, private configurationService: ConfigurationService) {
  
    this.route.parent.queryParams.subscribe(params => {
      console.log(params);
      this.programId = params['programId'];
      this.assessmentId = params['assessmentId']
    });
  
  }

  ngOnInit() {
    this.language = this.sharedResource.language;
    this.stepperPageLength = 1;
    this.firstFormGroup = this._formBuilder.group({
      criteriaId: ['', Validators.required],
      criteriaName: ['', Validators.required],
      description: ['', Validators.required],
      keywords: this.setKeyWords(),
      language: ['', Validators.required],
      remarks: [''],
    });
    this.secondFormGroup = this._formBuilder.group({
      levels: this.setLevels()
    })
  }
  setLevels() {
    let arr = new FormArray([])
    this.updateCriteria.rubric.levels.forEach(level => {
      arr.push(this._formBuilder.group({
        description: ['', Validators.required],
        label: ['', Validators.required]
      }))
    })
    return arr;
  }
  setKeyWords() {
    let arr = new FormArray([])
    this.updateCriteria.keywords.forEach(key => {
      arr.push(this._formBuilder.group({
        keyword: [key, Validators.required]
      }))
    })
    return arr;
  }
  setRubricLevel(){
    return [
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
    ] ;
  }
  addNewLevel(control) {
    control.push(
      this._formBuilder.group({
        description: ['', Validators.required],
        label: ['', Validators.required]
      }))
    const level = this.levelCount + 1;
    this.updateCriteria.rubric.levels.push({
      level: "L" + level,
      label: "",
      description: "",
      expression: "",
      expressionVariables: []
    })
    this.levelCount++;
  }
  addNewKeyWord(control) {
    control.push(
      this._formBuilder.group({
        keyword: ['', Validators.required]
      }))
    this.keyWordCount += 1;
  }
  removeAllKeyWord() {

    this.firstFormGroup.controls.keywords = this.setKeyWords();
    this.keyWordCount = 1;
  }
  deleteKeyWord(control, index) {
    control.removeAt(index)
    this.keyWordCount -= 1;
  }
  showObject(obj) {
  }

  deleteLevel(control, index) {
    control.removeAt(index)
    this.updateCriteria.rubric.levels.splice(this.levelCount - 1, 1);
    this.levelCount--;
  }

  removeAll() {
    this.updateCriteria.rubric.levels = this.setRubricLevel();
    this.secondFormGroup = this._formBuilder.group({
      levels: this.setLevels()
    })
    this.levelCount = 4;
  }


  submitNewCriteria() {
    const firstStepperData = this.firstFormGroup.getRawValue();
    const secondStepperData = this.secondFormGroup.getRawValue();
    this.updateCriteria.externalId = firstStepperData.criteriaId;
    this.updateCriteria.description = firstStepperData.description;
    this.updateCriteria.name = firstStepperData.criteriaName;
    this.updateCriteria.remarks = firstStepperData.remarks;
    this.updateCriteria.keywords = [];

    firstStepperData.keywords.forEach(element => {
      this.updateCriteria.keywords.push(element.keyword);

    })
    for (var i = 0; i < this.levelCount; i++) {
      this.updateCriteria.rubric.levels[i].label = secondStepperData.levels[i].label;
      this.updateCriteria.rubric.levels[i].description = secondStepperData.levels[i].description;
    }
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
  next() {
    if (this.nameInputRef['selectedIndex'] < this.nameInputRef['_keyManager']._items.length - 1) {
      this.nameInputRef['selectedIndex'] += 1;
      this.currentLoadedStepper = this.nameInputRef['selectedIndex'];
    }
  }

  back() {
    if (this.nameInputRef['selectedIndex'] > 0) {
      this.nameInputRef['selectedIndex'] -= 1;
      this.currentLoadedStepper = this.nameInputRef['selectedIndex'];

    }
  }
 

}
