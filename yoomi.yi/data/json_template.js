// https://json-generator.com/
// https://konbert.com/convert/json/to/mysql



// USER TEMPLATE

[
  '{{repeat(10)}}',
  {
    id: '{{index(1)}}',
    name: '{{firstName()}} {{surname()}}',
    username: function () {
     return 'user' + this.id;
    },
    email: function() {
     return this.username + '@gmail.com';
    },
    password: 'md5(pass)',
    img: function(tags) {
     return 'https://via.placeholder.com/400/' + 
     tags.integer(700,999) + '/fff/?text=' + this.username;
    
   },
    date_create: '{{date(new Date(2022, 0, 1), new Date(), "YYYY-MM-dd hh:mm:ss")}}'
  }
]


// FLOWER TEMPLATE

[
  '{{repeat(50)}}',
  {
    id: '{{index(1)}}',
    user_id: '{{integer(1,10)}}',
    
    name: '{{company()}}',
    
    type: '{{random("tulip","rose","peony")}}',
    color: function(tags) {
    var colors = {
      tulip:["pink","orange","yellow"],
      rose: ["red","blue","white"],
      peony:["purple","light pink","black"]
    };
    var chosen_type = colors[this.type];
  var chosen_index = tags.integer(0,chosen_type.length-1);
    return chosen_type[chosen_index];
   },
    
    description: '{{lorem(3,"sentences")}}',
    img: function(tags) {
     return 'http://via.placeholder.com/400/' + 
     tags.integer(700,999) + '/fff/?text=' + this.name;
    
   },
    date_create: '{{date(new Date(2022, 0, 1), new Date(), "YYYY-MM-dd hh:mm:ss")}}'
  }
]

// LOCATIONS TEMPLATE

[
  '{{repeat(250)}}',
  {
    id: '{{index(1)}}',
    flower_id: '{{integer(1,50)}}',
    
    lat: '{{floating(37.774049, 37.774771)}}',
    lng: '{{floating(-122.417840, -122.410982)}}',
    
    description: '{{lorem(3,"sentences")}}',
    img: 'https://via.placeholder.com/400/', 
    icon: 'https://via.placeholder.com/400/?text=ICON',
    
    date_create: '{{date(new Date(2022, 0, 1), new Date(), "YYYY-MM-dd hh:mm:ss")}}'
  }
]


// ORIGINAL TEMPLATE

[
  '{{repeat(5, 7)}}',
  {
    _id: '{{objectId()}}',
    index: '{{index()}}',
    guid: '{{guid()}}',
    isActive: '{{bool()}}',
    balance: '{{floating(1000, 4000, 2, "$0,0.00")}}',
    picture: 'http://placehold.it/32x32',
    age: '{{integer(20, 40)}}',
    eyeColor: '{{random("blue", "brown", "green")}}',
    name: '{{firstName()}} {{surname()}}',
    gender: '{{gender()}}',
    company: '{{company().toUpperCase()}}',
    email: '{{email()}}',
    phone: '+1 {{phone()}}',
    address: '{{integer(100, 999)}} {{street()}}, {{city()}}, {{state()}}, {{integer(100, 10000)}}',
    about: '{{lorem(1, "paragraphs")}}',
    registered: '{{date(new Date(2014, 0, 1), new Date(), "YYYY-MM-ddThh:mm:ss Z")}}',
    latitude: '{{floating(-90.000001, 90)}}',
    longitude: '{{floating(-180.000001, 180)}}',
    tags: [
      '{{repeat(7)}}',
      '{{lorem(1, "words")}}'
    ],
    friends: [
      '{{repeat(3)}}',
      {
        id: '{{index()}}',
        name: '{{firstName()}} {{surname()}}'
      }
    ],
    greeting: function (tags) {
      return 'Hello, ' + this.name + '! You have ' + tags.integer(1, 10) + ' unread messages.';
    },
    favoriteFruit: function (tags) {
      var fruits = ['apple', 'banana', 'strawberry'];
      return fruits[tags.integer(0, fruits.length - 1)];
    }
  }
]