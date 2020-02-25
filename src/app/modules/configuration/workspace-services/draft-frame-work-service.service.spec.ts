/**
 * Name : draftframe-work-service.spec.ts
 * Author : Srikanth
 * Created-date : 12-Dec-2019
 * Description : To Maintain all the spec for the following.
 */

import { TestBed, async, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { DraftFrameWorkServiceService } from './draft-frame-work-service.service';
import { JwtHelperService, JwtModule } from '@auth0/angular-jwt';
import { environment } from 'src/environments/environment';
import { configOfFrameWorkAPIs } from 'src/app/modules/configuration/workspace-config';
import { AuthHttp } from 'angular2-jwt';

let jwtHelper: JwtHelperService;

describe('DraftFrameWorkServiceService', () => {
  // providers: [DraftFrameWorkServiceService]
  let draftservice: DraftFrameWorkServiceService;
  let httpMock: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, JwtModule.forRoot({
        config: {
          tokenGetter: () => {
            return '';
          }
        }
      })],
      providers: [DraftFrameWorkServiceService, JwtHelperService]
    });
    // jwtHelper = TestBed.get(JwtHelperService);
    draftservice = TestBed.get(DraftFrameWorkServiceService);
    httpMock = TestBed.get(HttpTestingController);
  });

  // spec to get the list of drafts
  it('listOfDraftFrameWork() should http GET Drafts', inject([HttpTestingController, DraftFrameWorkServiceService],

    (httpMock: HttpTestingController, service: DraftFrameWorkServiceService) => {
      const mockDrafts = [
        {
          _id: "5e2fbc23f0972a484a09c299",
          externalId: "SAMPLE-EXTERNAL-ID",
          name: "DRAFT FRAMEWORK",
          description: "SAMPLE DESCRIPTION"
        },
      ];
      service.listOfDraftFrameWork(10, 1, 'draft').subscribe((res) => {
        expect(res).toEqual(mockDrafts);
      });
      const req = httpMock.expectOne(environment.frameWorkbaseurl + configOfFrameWorkAPIs.draftFrameWorkList + '?page=1&limit=10&listType=draft');
      expect(req.request.method).toEqual("GET");
      req.flush(mockDrafts);

      httpMock.verify();

    }));

  // spec to deleteDraftFrameWork
  it('deleteDraftFrameWork', inject([HttpTestingController, DraftFrameWorkServiceService],
    (httpMock: HttpTestingController, service: DraftFrameWorkServiceService) => {
      const mockDrafts = [
        {
          _id: "5e2fbc23f0972a484a09c299",

        },
      ];
      service.deleteDraftFrameWork('5e2fbc23f0972a484a09c299').subscribe((res) => {
        expect(res).toEqual(mockDrafts);
      });
      let id = '5e2fbc23f0972a484a09c299'
      const req = httpMock.expectOne(environment.frameWorkbaseurl + configOfFrameWorkAPIs.deleteDraftFrameWork + id);
      expect(req.request.method).toEqual("GET");
      req.flush(mockDrafts);

      httpMock.verify();

    }));

  // spec to draftCriteriaCreate
  it('draftCriteriaCreate', inject([HttpTestingController, DraftFrameWorkServiceService],

    (httpMock: HttpTestingController, service: DraftFrameWorkServiceService) => {
      const mockDrafts = [
        {
          _id: "5e2fbc23f0972a484a09c299",

        },
      ];
      service.draftCriteriaCreate('5e2fbc23f0972a484a09c299').subscribe((res) => {
        expect(res).toEqual(mockDrafts);
      });
      const obj = {
        draftFrameworkId: "5e2fbc23f0972a484a09c299",
      }
      const req = httpMock.expectOne(environment.frameWorkbaseurl + configOfFrameWorkAPIs.draftCriteriaCreate);
      expect(req.request.method).toEqual("POST");
      req.flush(mockDrafts);
      httpMock.verify();
    }));


  // spec to updateDraftCriteria
  it('updateDraftCriteria', inject([HttpTestingController, DraftFrameWorkServiceService],
    (httpMock: HttpTestingController, service: DraftFrameWorkServiceService) => {
      const mockDrafts = [
        {
          _id: "5e2fbc23f0972a484a09c299",

        },
      ];
      service.updateDraftCriteria('', '').subscribe((res) => {
        expect(res).toEqual(mockDrafts);
      });
      const obj = {
        draftFrameworkId: "5e2fbc23f0972a484a09c299",
      }
      const req = httpMock.expectOne(environment.frameWorkbaseurl + configOfFrameWorkAPIs.updateDraftCriteria);
      expect(req.request.method).toEqual("POST");
      req.flush(mockDrafts);

      httpMock.verify();

    }));


  // spec to draftCriteriaDelete
  it('draftCriteriaDelete', inject([HttpTestingController, DraftFrameWorkServiceService],

    (httpMock: HttpTestingController, service: DraftFrameWorkServiceService) => {
      const mockDrafts = [
        {
          _id: "5e2fbc23f0972a484a09c299",
        },
      ];
      service.draftCriteriaDelete('').subscribe((res) => {
        expect(res).toEqual(mockDrafts);
      });
      let id = "5e2fbc23f0972a484a09c299";
      const req = httpMock.expectOne(environment.frameWorkbaseurl + configOfFrameWorkAPIs.draftCriteriaDelete);
      expect(req.request.method).toEqual("GET");
      req.flush(mockDrafts);
      httpMock.verify();
    }));

  // spec to updateDraftFrameWork
  it('updateDraftFrameWork', inject([HttpTestingController, DraftFrameWorkServiceService],

    (httpMock: HttpTestingController, service: DraftFrameWorkServiceService) => {
      const mockDrafts = [
        {
          _id: "5e2fbc23f0972a484a09c299",
          externalId: "SAMPLE-EXTERNAL-ID",
          name: "DRAFT FRAMEWORK",
          description: "SAMPLE DESCRIPTION"
        },
      ];
      let obj = {
        status: "review"
      }
      service.updateDraftFrameWork(obj, '').subscribe((res) => {
        expect(res).toEqual(mockDrafts);
        // expect(res).toEqual('json');
      });
      const req = httpMock.expectOne(environment.frameWorkbaseurl + configOfFrameWorkAPIs.updateDraftFrameWork);
      expect(req.request.method).toEqual("POST");
      req.flush(mockDrafts);
      httpMock.verify();
    }));


  // spec to get the criteria list
  it('draftCriteriaList', inject([HttpTestingController, DraftFrameWorkServiceService],
    (httpMock: HttpTestingController, service: DraftFrameWorkServiceService) => {
      const criterialist = [{
        _id: "5e43a7c8ea70866de21b6868",
        name: "sdadada",
        description: "adadada"
      }]
      // We call the service
      service.draftCriteriaList('', 10, 0).subscribe(data => {
        expect(data).toEqual(criterialist);
        expect(req.request.body).toEqual({});
      }, err => {
        console.log('error', err);
      });
      let results = { param: 'results', value: '50' };
      const url = `${environment.frameWorkbaseurl}${configOfFrameWorkAPIs.listDraftCriteria}?${results.param}=${results.value}`;
      // We set the expectations for the HttpClient mock
      const req = httpMock.expectOne(environment.frameWorkbaseurl + configOfFrameWorkAPIs.listDraftCriteria);
      // expect(req.request.method).toEqual('GET');
      expect(req.request.url).toBe('https://devhome.shikshalokam.org/assessment-designer-service/api/v1/draftCriteria/list/');
      expect(req.request.body).toEqual({});
      // Then we set the fake data to be returned by the mock
      req.flush({ criterialist });
      httpMock.verify();
    })
  );


  // spec to createDraftFrameWork
  describe('#createDraftFrameWork()', () => {
    it('returned Observable should match the right data', inject([HttpTestingController, DraftFrameWorkServiceService],

      (httpMock: HttpTestingController, service: DraftFrameWorkServiceService) => {
        const createDraft = {
          id: '47547656',
        };
        service.createDraftFrameWork()
          .subscribe(data => {
            expect(data).toEqual(createDraft);
          });
        const req = httpMock.expectOne(environment.frameWorkbaseurl + configOfFrameWorkAPIs.createDraftFrameWork);
        expect(req.request.method).toEqual('POST');
        req.flush(createDraft);
      }));
  });


  // spec to getDraftFrameworksdetails
  describe('#getDraftFrameworksdetails()', () => {
    it('returned Observable should match the right data', inject([HttpTestingController, DraftFrameWorkServiceService],

      (httpMock: HttpTestingController, service: DraftFrameWorkServiceService) => {
        const createDraft = {
          id: '47547656',
        };
        service.getDraftFrameworksdetails('')
          .subscribe(data => {
            expect(data).toEqual(createDraft);
          });
        const req = httpMock.expectOne(environment.frameWorkbaseurl + configOfFrameWorkAPIs.getDraftFrameWorkDetails);
        expect(req.request.method).toEqual('GET');
        req.flush(createDraft);
      }));
  });


  // spec to getEntityTypeList
  describe('#getEntityTypeList()', () => {
    it('returned Observable should match the right data', inject([HttpTestingController, DraftFrameWorkServiceService],

      (httpMock: HttpTestingController, service: DraftFrameWorkServiceService) => {
        const createDraft = {
          id: '47547656',
        };
        service.getEntityTypeList()
          .subscribe(data => {
            expect(data).toEqual(createDraft);
          });
        const req = httpMock.expectOne(environment.frameWorkbaseurl + configOfFrameWorkAPIs.getEntityTypeList);
        expect(req.request.method).toEqual('GET');
        req.flush(createDraft);
      }));
  });


  // spec to draftEcmCreate
  describe('#draftEcmCreate()', () => {
    it('returned Observable should match the right data', inject([HttpTestingController, DraftFrameWorkServiceService],

      (httpMock: HttpTestingController, service: DraftFrameWorkServiceService) => {
        const createDraft = {
          id: '47547656',
        };
        service.draftEcmCreate('')
          .subscribe(data => {
            expect(data).toEqual(createDraft);
          });
        const req = httpMock.expectOne(environment.frameWorkbaseurl + configOfFrameWorkAPIs.draftEcmCreate);
        expect(req.request.method).toEqual('POST');
        req.flush(createDraft);
      }));
  });

  // spec to draftSectionCreate
  describe('#draftSectionCreate()', () => {
    it('returned Observable should match the right data', inject([HttpTestingController, DraftFrameWorkServiceService],

      (httpMock: HttpTestingController, service: DraftFrameWorkServiceService) => {
        const createDraft = {
          id: '47547656',
        };
        service.draftSectionCreate('')
          .subscribe(data => {
            expect(data).toEqual(createDraft);
          });
        const req = httpMock.expectOne(environment.frameWorkbaseurl + configOfFrameWorkAPIs.draftSectionCreate);
        expect(req.request.method).toEqual('POST');
        req.flush(createDraft);
      }));
  });

  // spec to listDraftSection
  describe('#listDraftSection()', () => {
    it('returned Observable should match the right data', inject([HttpTestingController, DraftFrameWorkServiceService],

      (httpMock: HttpTestingController, service: DraftFrameWorkServiceService) => {
        const createDraft = {
          id: '47547656',
        };
        service.listDraftSection('')
          .subscribe(data => {
            expect(data).toEqual(createDraft);
          });
        const req = httpMock.expectOne(environment.frameWorkbaseurl + configOfFrameWorkAPIs.listDraftSection + '/');
        expect(req.request.method).toEqual('GET');
        req.flush(createDraft);
      }));
  });

  // spec to listDraftEcm
  describe('#listDraftEcm()', () => {
    it('returned Observable should match the right data', inject([HttpTestingController, DraftFrameWorkServiceService],

      (httpMock: HttpTestingController, service: DraftFrameWorkServiceService) => {
        const createDraft = {
          id: '47547656',
        };
        service.listDraftEcm('')
          .subscribe(data => {
            expect(data).toEqual(createDraft);
          });
        const req = httpMock.expectOne(environment.frameWorkbaseurl + configOfFrameWorkAPIs.listDraftEcm + '/');
        expect(req.request.method).toEqual('GET');
        req.flush(createDraft);
      }));
  });

  // spec to draftQuestionCreate
  describe('#draftQuestionCreate()', () => {
    it('returned Observable should match the right data', inject([HttpTestingController, DraftFrameWorkServiceService],

      (httpMock: HttpTestingController, service: DraftFrameWorkServiceService) => {
        const createDraft = {
          id: '47547656',
        };
        service.draftQuestionCreate('')
          .subscribe(data => {
            expect(data).toEqual(createDraft);
          });
        const req = httpMock.expectOne(environment.frameWorkbaseurl + configOfFrameWorkAPIs.draftCreateQuestion);
        expect(req.request.method).toEqual('POST');
        req.flush(createDraft);
      }));
  });


  // spec to updateDraftQuestion
  describe('#updateDraftQuestion()', () => {
    it('returned Observable should match the right data', inject([HttpTestingController, DraftFrameWorkServiceService],

      (httpMock: HttpTestingController, service: DraftFrameWorkServiceService) => {
        const createDraft = {
          id: '47547656',
        };
        service.updateDraftQuestion('', '')
          .subscribe(data => {
            expect(data).toEqual(createDraft);
          });
        const req = httpMock.expectOne(environment.frameWorkbaseurl + configOfFrameWorkAPIs.updateDraftQuestion);
        expect(req.request.method).toEqual('POST');
        req.flush(createDraft);
      }));
  });


  // spec to draftQuestionList
  describe('#draftQuestionList()', () => {
    it('returned Observable should match the right data', inject([HttpTestingController, DraftFrameWorkServiceService],

      (httpMock: HttpTestingController, service: DraftFrameWorkServiceService) => {
        const createDraft = {
          id: '47547656',
        };
        service.draftQuestionList('')
          .subscribe(data => {
            expect(data).toEqual(createDraft);
          });
        const req = httpMock.expectOne(environment.frameWorkbaseurl + configOfFrameWorkAPIs.draftQuestionList);
        expect(req.request.method).toEqual('GET');
        req.flush(createDraft);
      }));
  });

  // spec to deleteDraftQuestion
  describe('#deleteDraftQuestion()', () => {
    it('returned Observable should match the right data', inject([HttpTestingController, DraftFrameWorkServiceService],

      (httpMock: HttpTestingController, service: DraftFrameWorkServiceService) => {
        const createDraft = {
          id: '47547656',
        };
        service.deleteDraftQuestion('')
          .subscribe(data => {
            expect(data).toEqual(createDraft);
          });
        const req = httpMock.expectOne(environment.frameWorkbaseurl + configOfFrameWorkAPIs.deleteDraftQuestion);
        expect(req.request.method).toEqual('GET');
        req.flush(createDraft);
      }));
  });

  // spec to detailsDraftQuestion
  describe('#detailsDraftQuestion()', () => {
    it('returned Observable should match the right data', inject([HttpTestingController, DraftFrameWorkServiceService],

      (httpMock: HttpTestingController, service: DraftFrameWorkServiceService) => {
        const createDraft = {
          id: '47547656',
        };
        service.detailsDraftQuestion('')
          .subscribe(data => {
            expect(data).toEqual(createDraft);
          });
        const req = httpMock.expectOne(environment.frameWorkbaseurl + configOfFrameWorkAPIs.detailsDraftQuestion);
        expect(req.request.method).toEqual('GET');
        req.flush(createDraft);
      }));
  });

  // spec to publishDraftFrameWork
  describe('#publishDraftFrameWork()', () => {
    it('returned Observable should match the right data', inject([HttpTestingController, DraftFrameWorkServiceService],

      (httpMock: HttpTestingController, service: DraftFrameWorkServiceService) => {
        const createDraft = {
          id: '47547656',
        };
        service.publishDraftFrameWork('', '')
          .subscribe(data => {
            expect(data).toEqual(createDraft);
          });
        const req = httpMock.expectOne(environment.frameWorkbaseurl + configOfFrameWorkAPIs.publishDraftFrameWork);
        expect(req.request.method).toEqual('POST');
        req.flush(createDraft);
      }));
  });


  // spec to updateDraftECM
  describe('#updateDraftECM()', () => {
    it('returned Observable should match the right data', inject([HttpTestingController, DraftFrameWorkServiceService],

      (httpMock: HttpTestingController, service: DraftFrameWorkServiceService) => {
        const createDraft = {
          id: '47547656',
        };
        service.updateDraftECM('', '')
          .subscribe(data => {
            expect(data).toEqual(createDraft);
          });
        const req = httpMock.expectOne(environment.frameWorkbaseurl + configOfFrameWorkAPIs.draftEcmUpdate);
        expect(req.request.method).toEqual('POST');
        req.flush(createDraft);
      }));
  });

  // spec to updateDraftSection
  describe('#updateDraftSection()', () => {
    it('returned Observable should match the right data', inject([HttpTestingController, DraftFrameWorkServiceService],

      (httpMock: HttpTestingController, service: DraftFrameWorkServiceService) => {
        const createDraft = {
          id: '47547656',
        };
        service.updateDraftSection('', '')
          .subscribe(data => {
            expect(data).toEqual(createDraft);
          });
        const req = httpMock.expectOne(environment.frameWorkbaseurl + configOfFrameWorkAPIs.draftSectionUpdate);
        expect(req.request.method).toEqual('POST');
        req.flush(createDraft);
      }));
  });
});



