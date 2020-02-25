import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AuthService } from './auth.service';
import { JwtHelperService, JwtModule } from '@auth0/angular-jwt';
import { environment } from 'src/environments/environment';
import { authConfig } from '../auth-config';


describe('AuthService:', () => {
  let jwtHelper: JwtHelperService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthService],
      imports: [HttpClientTestingModule, JwtModule.forRoot({
        config: {
          tokenGetter: () => {
            return '';
          }
        }
      })]
    });

    // HttpClientTestingModule - Extended interactions between a data service and the HttpClient can be complex
    // and difficult to mock with spies.
    //  The HttpClientTestingModule can make these testing scenarios more manageable.
  });
  describe('Auth Serivce:', () => {
    function setup() {
      const authService = TestBed.get(AuthService);
      jwtHelper = TestBed.get(JwtHelperService);
      const httpTestingController = TestBed.get(HttpTestingController);
      return { authService, httpTestingController };
    }

    // it('should call the getUserRoles', () => {
    //   const { authService, httpTestingController } = setup();
    //   const mockData = { id: 1, user: 'sathyam', zipcode: '56743' };
    //   authService.getUserRoles().subscribe(data => {
    //     expect(data.mapData).toEqual(mockData);
    //   });
    //   const req = httpTestingController.expectOne(environment.kendra_base_url + authConfig.getProfileDetails);

    //   expect(req.request.method).toBe('GET');

    //   req.flush({
    //     mapData: mockData
    //   });
    // });


    it('should call the getLogout', () => {
      const { authService, httpTestingController } = setup();
      // authService.getLogout();
      expect(authService.getLogout() instanceof Promise).toBe(true);
      // const req = httpTestingController.expectOne(environment.kendra_base_url + authConfig.getProfileDetails);
      // expect(req.request.method).toBe('GET');
    });

    it('#getUserRoles', () => {
      const { authService, httpTestingController } = setup();
      expect(authService.getUserRoles() instanceof Promise).toBe(true);
    });

    it('should call the getCurrentUserDetails', () => {
      const { authService, httpTestingController } = setup();
      authService.getCurrentUserDetails();
      // const req = httpTestingController.expectOne(environment.kendra_base_url + authConfig.getProfileDetails);
      // expect(req.request.method).toBe('GET');
    });

    it('should call the init', () => {
      const { authService, httpTestingController } = setup();
      authService.init();
      // const req = httpTestingController.expectOne(environment.kendra_base_url + authConfig.getProfileDetails);
      // expect(req.request.method).toBe('GET');
    });

    it('should call the getAllowedUrls', () => {
      const { authService, httpTestingController } = setup();
      authService.getAllowedUrls();
      // const req = httpTestingController.expectOne(environment.kendra_base_url + authConfig.getProfileDetails);
      // expect(req.request.method).toBe('GET');
    });



    afterEach(() => {
      const { httpTestingController } = setup();
      httpTestingController.verify();
    });
  });
});