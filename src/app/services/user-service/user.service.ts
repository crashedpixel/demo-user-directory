import { Injectable } from '@angular/core';
import { UserData } from '../../userdata';

import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

interface SearchOptions {
  order?: String;
  orderBy?: String;
  page?: number;
}

interface Availability {
  available: Boolean;
}

interface Response {
  response: String;
}

@Injectable({
  providedIn: 'root'
})

export class UserService {
  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'x-auth-username': '',
      'x-auth-password': ''
    })
  };

  checkUsername(name: String): Observable<Availability> {
    return this.http.get(`https://demo.iofficeconnect.com/external/api/rest/v2/users/username/${name}`) as Observable<Availability>;
  }

  deleteUser(id: number): Observable<Response> {
    return this.http.delete(`https://demo.iofficeconnect.com/external/api/rest/v2/users/${id}`) as Observable<Response>;
  }

  createUser(firstName: string, lastName: string, email: string): Observable<any> {
    let httpParams = new HttpParams({
      fromObject: {
        'firstName': firstName,
        'lastName': lastName,
        'email': email
      }
    });

    return this.http.post(`https://demo.iofficeconnect.com/external/api/rest/v2/users/`, '', { params: httpParams });
    // {"firstName":"Michael","userType":{"name":"Employee","active":true,"id":8,"$route":"users/types","reqParams":null,"restangularized":true,"fromServer":true,"parentResource":null,"restangularCollection":false},"custom05":false,"floorWarden":false,"specialNeeds":false,"lastName":"Turner","email":"turnerm@gmail.coms","userName":"turner","company":"ioffice","address":null,"buildingid":null,"floor":null,"mailcenterid":null,"custom07":null,"password":null,"permissions":[]};
  }

  getUserDetails(id: number): Observable<UserData> {
    return this.http.get(`https://demo.iofficeconnect.com/external/api/rest/v2/users/${id}`) as Observable<UserData>;
  }

  // need to fix this.........
  updateUserDetails(details: any): Observable<UserData> {
    let httpParams = new HttpParams({
      fromObject: { ...details }
    });

    return this.http.put(`https://demo.iofficeconnect.com/external/api/rest/v2/users/${details.id}`, '', { params: httpParams }) as Observable<UserData>;
  }

  searchByQuery(query?: String, options: SearchOptions = { order: 'asc', orderBy: 'firstName' }): Observable<UserData[]> {
    let pagination = '';

    if (options.page) {
      pagination = `startAt=${options.page * 50}&`;
    }

    let httpParams = new HttpParams({
      fromString: `limit=50&${pagination}orderBy=${options.orderBy}&orderByType=${options.order}&search=${query}&selector=firstName,lastName,jobTitle,extension,image`
    });

    return this.http.get('https://demo.iofficeconnect.com/external/api/rest/v2/users', { params: httpParams }) as Observable<UserData[]>;
  }

  // fix type
  getUserCount(): Observable<any> {
    return this.http.get('https://demo.iofficeconnect.com/external/api/rest/v2/users/count') as Observable<number>;
  }

  // https://demo.iofficeconnect.com/external/api/rest/v2/users/237800?selector=custom01,custom02,custom03,custom04,custom05,custom06,custom07,custom08,custom09,custom10,custom11,custom12,custom13,custom14,custom15,custom16,custom17,custom18,custom19,custom20,custom21,custom22,custom23,custom24,custom25,custom26,custom27,custom28,custom29,custom30,employeeId,phone,department,state,city,dateUpdated,id,postalCode,name,userName,firstName,jobTitle,middleName,lastName,fax,costCenter2,knownAs,costCenter(code,depth(code),costCenterParent(code,depth(code))),costCenters(code,category,depth(code)),extension,email,address,company,dateCreated,costCenter1,comments,mobile,room(name,floor(name,drawingAvailable,building(name,centers(name,module,pendingQueue))),mailStop(name)),siteAdmin,userType(fields(required,options,sortOrder,displayType,dataType),active),image(smallSquare),mailStop(name),alternateDelivery,parkingSpace,specialNeeds,floorWarden,assistantName,country,postalcode,lastUpdatedBy
  // put
  // selector=
  // employeeId
  // phone
  // department
  // state
  // city
  // dateUpdated
  // id
  // postalCode
  // name
  // userName
  // firstName
  // jobTitle
  // middleName
  // lastName
  // fax
  // costCenter2
  // knownAs
  // costCenter(code
  // depth(code)
  // costCenterParent(code
  // depth(code)))
  // costCenters(code
  // category
  // depth(code))
  // extension
  // email
  // address
  // company
  // dateCreated
  // costCenter1
  // comments
  // mobile
  // room(name,active,floor(name,building(name,centers(name,module,pendingQueue)))
  // mailStop(name))
  // siteAdmin
  // userType(fields(required
  // options
  // sortOrder
  // displayType
  // dataType)
  // active)
  // image(smallSquare)
  // mailStop(name)
  // alternateDelivery
  // parkingSpace
  // specialNeeds
  // floorWarden
  // assistantName
  // country
  // postalcode
  // lastUpdatedBy
}
