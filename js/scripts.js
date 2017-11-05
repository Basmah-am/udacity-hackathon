// arry of locations 
var initialLocs = [
{
	name : 'Allure Hub',
	lat: 24.739864,
	lng :46.657412,
	marker:null,
	img:"imgs/alurhub.jpg"
},
{
	name : 'UpScale',
	lat: 24.761795, 
	lng :46.672980,
	marker:null,
	img:"imgs/upscale.png"
},
{
	name : 'The WorkHub',
	lat: 24.789246,
	lng : 46.658439,
	marker:null,
	img:"imgs/workhub.jpg"
},

{
	name : 'Ibusiness Break Cafe',
	lat: 24.822015,
	lng : 46.619976,
	marker:null,
	img:"imgs/ibcafe.jpeg"
},

];

// location object 
var Location = function(data){
this.name = ko.observable(data.name);
this.lat= ko.observable(data.lat);
this.lng= ko.observable(data.lng);
this.marker = data.marker;
this.img = data.img;

}


// viewModel
var ViewModel = function() {
	var self = this;
	this.search = ko.observable('');
	
	// creating locationList from an exixsting location Array
	this.locationList = ko.observableArray([]);
	initialLocs.forEach(function(locationItem){
		self.locationList.push(new Location(locationItem));
	});
	//current location object 
  	//this.currenList = ko.observable(this.filteredLocationList());
  	this.filteredLocationList = ko.computed(function() {
  		var filter = self.search().toLowerCase();
        //console.log(filter);
   
        	//console.log("second");
        	return ko.utils.arrayFilter(this.locationList(), function(item) {
             var result =(item.name().toLowerCase().indexOf(filter) !== -1) ;
             console.log(item);
              item.marker.setVisible(result);
              return result;
        });
 
    }, this);
}




