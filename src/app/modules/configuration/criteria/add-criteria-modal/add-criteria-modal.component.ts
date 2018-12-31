import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { UtilityService, ConfigurationService } from 'src/app/core';
import { FormGroup } from '@angular/forms';
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
    name: "Dummy Name",
    description: "Dummy Description",
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
          description: "adadadasd",
          expression: "",
          expressionVariables: []
        }
      ]
    },
    evidences: []
  }

  
  criteriaArray = [

    {
      editable: true,
      field: "criteriaId",
      input: "text",
      label: "Criteria Id",
      validation: { required: true },
      value: "",
      visible: true
    },
    {
      editable: true,
      field: "criteriaName",
      input: "text",
      label: "Criteria Name",
      validation: { required: true },
      value: "",
      visible: true
    },
    {
      editable: true,
      field: "description",
      input: "textarea",
      label: "Desciption",
      validation: { required: true },
      value: "",
      visible: true
    },
    {
      editable: true,
      field: "level1",
      input: "textarea",
      label: "level-1",
      validation: { required: true },
      value: "",
      visible: true
    },
    {
      editable: true,
      field: "level2",
      input: "textarea",
      label: "level-2",
      validation: { required: true },
      value: "",
      visible: true
    },
    {
      editable: true,
      field: "level3",
      input: "textarea",
      label: "level-3",
      validation: { required: true },
      value: "",
      visible: true
    }, {
      editable: true,
      field: "level4",
      input: "textarea",
      label: "level-4",
      validation: { required: true },
      value: "",
      visible: true
    }
  ];

  constructor(private utility : UtilityService , private configurationService : ConfigurationService,
    public dialogRef: MatDialogRef<AddCriteriaBoxComponent>,
    @Inject(MAT_DIALOG_DATA) public data) { 
      this.criteriaGroup = utility.toGroup(this.criteriaArray);
    }

  ngOnInit() {
  }
  onCancel(): void {
    this.dialogRef.close();
  }
  onSubmit(){
    this.updateData = this.criteriaGroup.getRawValue(); 
    console.log(this.updateData);
    this.updateCriteria.externalId = this.updateData.criteriaId;
    this.updateCriteria.name = this.updateData.criteriaName ;
    this.updateCriteria.description = this.updateData.description ;
    this.updateCriteria.rubric.levels[0].description= this.updateData.level1;
    this.updateCriteria.rubric.levels[1].description= this.updateData.level2;
    this.updateCriteria.rubric.levels[2].description= this.updateData.level3;
    this.updateCriteria.rubric.levels[3].description= this.updateData.level4;
    this.configurationService.addNewCriteria(this.updateCriteria).subscribe(data => {
      console.log(data);
   });
    this.dialogRef.close();
  }

}
