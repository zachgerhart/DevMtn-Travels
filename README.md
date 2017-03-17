Now that our templates and controllers have been injected into each of the states, we need to add some markup to the templates to get them to work.
The templates we need to make changes to are, in order, the locations.html, packages.html, and the booked.html. Open up those files and you will see comments guiding you through the steps

Go ahead to your browser and test your content. Now that we have created templates that are linked to the state config, we should be able to see them appear when the url has an appropriate extension.
For example use the following url extension to test the packages page : http://localhost:8080/#/packages.

If everything works correctly, go through the index.html file and the template files, and add any ui-sref attributes that would be necessary to connect to the different views.



### Getting Data from service

####

Now that we have tested the controllers and know they work we can get the data we need from the service
We want to gain access to the travelInfo data that is present in our mainSrv by calling to the service through our controller.

Go ahead and delete the test variables you made and create new $scope variables that are accessible in the html view and associate them with the data that was pulled from the service files.

If you followed the steps located in the views then you should see the data from the service on the page. If you dont see anything make sure your getting the data in your controller from the service.

* Note: The information on the booked.html view  will not display until we configure the data to the specific state by id.



### Finish the booked.html view

####

Let's start by injecting $state into the bookedCtrl, if you console.log($state) you will see that we get a ton of info about our application state. What we need is the $state.params, this will give us the id being passed though the url params

Now that we have the $state.params "id" we can loop over the data we are getting from our service and check if we have a object that has the same id as the $state.params, if we find a object that has that id then set that object on a $scope variable and then attach that variable to the booked view using {{}}


### Resources

####

* Controller scopes http://jsfiddle.net/8pX7p/
* ng-repeat http://jsfiddle.net/PhCUk/1/
* Filter http://jsfiddle.net/WS8gS/1/
* http://docs.angularjs.org/guide/concepts



### Contributions

####

If you see a problem or a typo, please fork, make the necessary changes, and create a pull request so we can review your changes and merge them into the master repo and branch.


### Copyright

####

© DevMountain LLC, 2016. Unauthorized use and/or duplication of this material without express and written permission from DevMountain, LLC is strictly prohibited. Excerpts and links may be used, provided that full and clear credit is given to DevMountain with appropriate and specific direction to the original content.

<img src="https://devmounta.in/img/logowhiteblue.png" width="250">
