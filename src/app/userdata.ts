export class UserData {
    floorWarden: boolean;
    siteAdmin: boolean;
    costCenter1: string;
    country: string;
    image: {
        smallSquare: string;
        name: string;
    };
    lastUpdatedBy: {
        name: string;
        id: number;
    }
    lastName: string;
    city: string;
    costCenter: any;
    jobTitle: string;
    userName: string;
    specialNeeds: boolean;
    room: any;
    // "room": {
    //   "name": "1708A",
    //   "active": true,
    //   "mailStop": {
    //     "name": "Mail Center",
    //     "id": 192
    //   },
    //   "id": 47267,
    //   "floor": {
    //     "name": "17",
    //     "drawingAvailable": true,
    //     "id": 223,
    //     "building": {
    //       "code": "IHQ",
    //       "name": "Houston HQ1",
    //       "centers": [
    //         {
    //           "module": "asset",
    //           "name": "Asset",
    //           "id": 100
    //         },
    //         {
    //           "module": "space",
    //           "name": "Space Center - Corp HDQ",
    //           "id": 70
    //         },
    //         {
    //           "module": "maintenance",
    //           "name": "Service Test",
    //           "id": 116
    //         },
    //         {
    //           "module": "asset",
    //           "name": "Virtual",
    //           "id": 112
    //         },
    //         {
    //           "module": "maintenance",
    //           "name": "Service Request Center",
    //           "id": 73
    //         },
    //         {
    //           "module": "copy",
    //           "name": "Copy Center",
    //           "id": 67
    //         },
    //         {
    //           "module": "move",
    //           "name": "Move Center",
    //           "id": 71
    //         },
    //         {
    //           "module": "mail",
    //           "name": "Mail Center",
    //           "id": 68,
    //           "pendingQueue": false
    //         },
    //         {
    //           "module": "copy",
    //           "name": "Virtual",
    //           "id": 106
    //         },
    //         {
    //           "module": "mail",
    //           "name": "NICOLE TEST CENTER",
    //           "id": 154,
    //           "pendingQueue": false
    //         },
    //         {
    //           "module": "maintenance",
    //           "name": "Service Request - Trial Center",
    //           "id": 103
    //         },
    //         {
    //           "module": "reservation",
    //           "name": "Reservation Center",
    //           "id": 113
    //         },
    //         {
    //           "module": "move",
    //           "name": "China Move Center",
    //           "id": 114
    //         },
    //         {
    //           "module": "move",
    //           "name": "Move Test1",
    //           "id": 123
    //         },
    //         {
    //           "module": "inventory",
    //           "name": "Inventory Center - Bayport",
    //           "id": 74
    //         },
    //         {
    //           "module": "move",
    //           "name": "Move Trial Center",
    //           "id": 108
    //         },
    //         {
    //           "module": "move",
    //           "name": "Move Test2",
    //           "id": 124
    //         },
    //         {
    //           "module": "move",
    //           "name": "Move Test3",
    //           "id": 125
    //         }
    //       ],
    //       "id": 83
    //     }
    //   }
    // },
    dateUpdated: number;
    firstName: string;
    dateCreated: number;
    custom05: any;
    custom08: any;
    name: string;
    id: number;
    mailStop: any;
    userType: any;
    // "userType": {
    //   "name": "Accountant",
    //   "active": true,
    //   "id": 19,
    //   "fields": [
    //     {
    //       "displayType": "Checkbox",
    //       "code": "custom05",
    //       "sortOrder": 1,
    //       "dataType": "bOOLEAN",
    //       "options": "{}",
    //       "name": "Checkbox",
    //       "id": 109,
    //       "required": false
    //     },
    //     {
    //       "displayType": "Select",
    //       "code": "city",
    //       "sortOrder": 2,
    //       "dataType": "TEXT",
    //       "options": "{\"dataProvider\":[\"hello\"]}",
    //       "name": "City",
    //       "id": 94,
    //       "required": false
    //     },
    //     {
    //       "displayType": "Input",
    //       "code": "jobTitle",
    //       "sortOrder": 3,
    //       "dataType": "TEXT",
    //       "options": "{\"password\":false,\"multiline\":false}",
    //       "name": "Job Title",
    //       "id": 116,
    //       "required": false
    //     },
    //     {
    //       "displayType": "Input",
    //       "code": "custom04",
    //       "sortOrder": 4,
    //       "dataType": "TEXT",
    //       "options": "{\"password\":false,\"multiline\":false}",
    //       "name": "Client Matter #3",
    //       "id": 110,
    //       "required": false
    //     },
    //     {
    //       "displayType": "Input",
    //       "code": "country",
    //       "sortOrder": 5,
    //       "dataType": "TEXT",
    //       "options": "{\"password\":false,\"multiline\":false}",
    //       "name": "Country",
    //       "id": 112,
    //       "required": false
    //     },
    //     {
    //       "displayType": "LiveSearch",
    //       "code": "alternateDelivery",
    //       "sortOrder": 6,
    //       "dataType": "ID",
    //       "options": "{\"searchPage\":\"/include/liveSearch/UserSearch.cfm\",\"labelProperty\":\"name\",\"locked\":true,\"type\":\"user\",\"valueProperty\":\"name\"}",
    //       "name": "Alternate Delivery",
    //       "id": 73,
    //       "required": false
    //     },
    //     {
    //       "displayType": "DateTime",
    //       "code": "custom08",
    //       "sortOrder": 7,
    //       "dataType": "DATE",
    //       "options": "{\"showTimeField\":false,\"showDateField\":true}",
    //       "name": "Date",
    //       "id": 114,
    //       "required": false
    //     },
    //     {
    //       "displayType": "Input",
    //       "code": "knownAs",
    //       "sortOrder": 9,
    //       "dataType": "TEXT",
    //       "options": "{\"password\":false,\"multiline\":false}",
    //       "name": "Known As Test",
    //       "id": 118,
    //       "required": false
    //     }
    //   ]
    // },
    email: string;
    costCenters: any;
}