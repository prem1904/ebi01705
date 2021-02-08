# ebi01705
A Simple RESTful API which provides a service for storing, updating,
retrieving and deleting Person entities

###Clone this repository locally

git clone https://github.com/prem1904/ebi01705.git

cd parent folder 

Use command  ### **npm install**
install the dependencies 

**Development server**

Start debug mode
via the below command to start the server.

###***npm start***  

it will start the local host in the port 3000 

###Open the postman api 

CREATE RESOURCES USING ***POST COMMAND***

use the below URL  with POST Command  as body Json Data

http://localhost:3000/api/v1/users  Generates Unique ID for Data


 {
 "first_name": "John",
 "last_name": "Keynes",
 "age": "29",
 "favourite_colour": "red"
 }


![image](https://user-images.githubusercontent.com/13142257/107215780-c66e6f00-6a31-11eb-8136-39d145aa946a.png)

***UPDATE RESOURCES USING PUT COMMAND***

use the below URL  with PUT Command  as body Json Data

http://localhost:3000/api/v1/users/:Id

id -uniqueId generated through insertion
body:
 {
 "first_name": "John",
 "last_name": "Keynes",
 "age": "28",
 "favourite_colour": "blue"
 }
 ![image](https://user-images.githubusercontent.com/13142257/107217368-151d0880-6a34-11eb-8934-b213a6756e7c.png)
 
 Modified List after update using Get All resources
 ![image](https://user-images.githubusercontent.com/13142257/107217582-5f05ee80-6a34-11eb-968f-f905d51cc848.png)
 
***Delete RESOURCES USING DELETE COMMAND***

use the below URL  with delete Command  
http://localhost:3000/api/v1/users/:Id

id -uniqueId generated through insertion

![image](https://user-images.githubusercontent.com/13142257/107217694-8a88d900-6a34-11eb-89dd-d974506cfd8e.png)

 Modified List after update using Get All resources
 ![image](https://user-images.githubusercontent.com/13142257/107217807-b906b400-6a34-11eb-8ca6-6aefd468da29.png)

***Get Specific RESOURCES USING GET COMMAND***

use the below URL  with delete Command  
http://localhost:3000/api/v1/users/:Id

id -uniqueId generated through insertion
![image](https://user-images.githubusercontent.com/13142257/107217134-c0798d80-6a33-11eb-8790-23deea4ed8f0.png)

***Get All Resources using GET COMMAND***

http://localhost:3000/api/v1/users

![image](https://user-images.githubusercontent.com/13142257/107217012-945e0c80-6a33-11eb-8dde-ae2fb4afb655.png)

 
 
