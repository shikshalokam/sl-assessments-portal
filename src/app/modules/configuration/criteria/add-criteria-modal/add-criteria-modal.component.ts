import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { UtilityService, ConfigurationService } from 'src/app/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-add-criteria-modal',
  templateUrl: './add-criteria-modal.component.html',
  styleUrls: ['./add-criteria-modal.component.scss']
})
export class AddCriteriaBoxComponent implements OnInit {
  criteriaGroup :FormGroup;
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

  
  // criteriaArray = [

  //   {
  //     editable: true,
  //     field: "criteriaId",
  //     input: "text",
  //     label: "Criteria Id",
  //     validation: { required: true },
  //     value: "",
  //     visible: true
  //   },
  //   {
  //     editable: true,
  //     field: "criteriaName",
  //     input: "text",
  //     label: "Criteria Name",
  //     validation: { required: true },
  //     value: "",
  //     visible: true
  //   },
  //   {
  //     editable: true,
  //     field: "description",
  //     input: "textarea",
  //     label: "Desciption",
  //     validation: { required: true },
  //     value: "",
  //     visible: true
  //   },
  //   {
  //     editable: true,
  //     field: "level1",
  //     input: "textarea",
  //     label: "level-1",
  //     validation: { required: true },
  //     value: "",
  //     visible: true
  //   },
  //   {
  //     editable: true,
  //     field: "level2",
  //     input: "textarea",
  //     label: "level-2",
  //     validation: { required: true },
  //     value: "",
  //     visible: true
  //   },
  //   {
  //     editable: true,
  //     field: "level3",
  //     input: "textarea",
  //     label: "level-3",
  //     validation: { required: true },
  //     value: "",
  //     visible: true
  //   }, {
  //     editable: true,
  //     field: "level4",
  //     input: "textarea",
  //     label: "level-4",
  //     validation: { required: true },
  //     value: "",
  //     visible: true
  //   }
  // ];

  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  constructor( private snackBar : MatSnackBar,private utility :UtilityService,private _formBuilder: FormBuilder , private configurationService : ConfigurationService) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      criteriaId: ['', Validators.required],
      criteriaName: ['', Validators.required],
      description: ['', Validators.required],

    });
    this.secondFormGroup = this._formBuilder.group({
      level1: ['', Validators.required],
      level2: ['', Validators.required],
      level3: ['', Validators.required],
      level4: ['', Validators.required],
    });
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

}
