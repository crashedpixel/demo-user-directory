import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { HttpClient, HttpRequest } from '@angular/common/http';

import { UserService } from './user.service';
import mockUserService from './mock.user.service';
import { UserData } from '../../userdata';

describe('UserService', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });

    httpClient = TestBed.get(HttpClient);
    httpTestingController = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  })

  it('service is created', () => {
    const service: UserService = TestBed.get(UserService);
    expect(service).toBeTruthy();
  });

  it('check username does not exist', () => {
    const username = 'michaelturner';

    const service: UserService = TestBed.get(UserService);
    service.checkUsername(username).subscribe(res => {
        expect(res.available).toBeTruthy();
    })

    const req = httpTestingController.expectOne(`https://demo.iofficeconnect.com/external/api/rest/v2/users/username/${username}`);
    expect(req.request.method).toEqual('GET');

    req.flush(mockUserService.checkUsername);
  })

  it('delete user with id', () => {
    const userId = 12;

    const service: UserService = TestBed.get(UserService);
    service.deleteUser(userId).subscribe(res => {
        expect(res.response).toEqual('Successfully removed');
    })

    const req = httpTestingController.expectOne(`https://demo.iofficeconnect.com/external/api/rest/v2/users/${userId}`);
    expect(req.request.method).toEqual('DELETE');

    req.flush(mockUserService.deleteUser);
  })

  it('create new user with firstname, lastname, and email', () => {
    const firstName = 'Michael';
    const lastName = 'Turner';
    const email = 'turnernm@gmail.com';

    const service: UserService = TestBed.get(UserService);
    service.createUser(firstName, lastName, email).subscribe(res => {
        expect(res.firstName).toEqual('Michael');
    })

    const req = httpTestingController.expectOne((req: HttpRequest<any>) => req.url == `https://demo.iofficeconnect.com/external/api/rest/v2/users/`);
    expect(req.request.method).toEqual('POST');
    expect(req.request.params.get('lastName')).toEqual('Turner');

    req.flush(mockUserService.createdUser);
  });

  it('get user details from userID', () => {
    const userId = 236571;

    const service: UserService = TestBed.get(UserService);
    service.getUserDetails(userId).subscribe(res => {
      expect(res.id).toBe(userId);
    });

    const req = httpTestingController.expectOne('https://demo.iofficeconnect.com/external/api/rest/v2/users/236571');
    expect(req.request.method).toEqual('GET');
    req.flush(mockUserService.getUserDetails);
  });

  it('update user details', () => {
    const userDetails = {
      ...mockUserService.getUserDetails,
      lastUpdatedBy: {
        name: 'Michael',
        id: 12
      },
      dateUpdated: new Date().getTime(),
      firstName: 'Peter'
    };

    const service: UserService = TestBed.get(UserService);
    service.updateUserDetails(userDetails).subscribe(res => {
      expect(res.firstName).toEqual('Peter');
    });

    const req = httpTestingController.expectOne((req: HttpRequest<any>) => req.url == `https://demo.iofficeconnect.com/external/api/rest/v2/users/${userDetails.id}`);
    expect(req.request.method).toEqual('PUT');
    expect((req.request.params.get('lastUpdatedBy') as any).id).toBe(12);

    req.flush(userDetails);
  });

  it('search for users', () => {
    const service: UserService = TestBed.get(UserService);
    service.searchByQuery('Michael').subscribe(res => {
      expect(res.length).toEqual(19);
    });

    const req = httpTestingController.expectOne(`https://demo.iofficeconnect.com/external/api/rest/v2/users?limit=50&orderBy=firstName&orderByType=asc&search=Michael&selector=firstName,lastName,jobTitle,extension,image`);
    expect(req.request.method).toEqual('GET');
    console.log(req.request.params);
    expect(req.request.params.get('orderBy')).toEqual('firstName');
    expect(req.request.params.get('orderByType')).toEqual('asc');

    req.flush(mockUserService.searchQuery);
  });

  it('get user count', () => {
    const service: UserService = TestBed.get(UserService);
    service.getUserCount().subscribe(res => {
      expect(res.count).toEqual(50);
    });

    const req = httpTestingController.expectOne(`https://demo.iofficeconnect.com/external/api/rest/v2/users/count`);
    expect(req.request.method).toEqual('GET');

    req.flush(mockUserService.getUserCount);
  })
});
