var sampleData = [
  {
    "firstname": "Cleo",
    "lastname": "Jorden",
    "address": "P.O. Box 489, 1110 In, St.",
    "email": "a@dui.org",
    "value": "Cleo Jorden"
  },
  {
    "firstname": "Irma",
    "lastname": "Allegra",
    "address": "Ap #176-9203 Libero Street",
    "email": "Lorem@sociisnatoquepenatibus.ca",
    "value": "Irma Allegra"
  },
  {
    "firstname": "Reagan",
    "lastname": "Philip",
    "address": "8727 Molestie Avenue",
    "email": "ut.mi.Duis@nequeMorbi.edu",
    "value": "Reagan Philip"
  },
  {
    "firstname": "Keaton",
    "lastname": "Cailin",
    "address": "235-632 Fringilla. Rd.",
    "email": "ligula.eu.enim@mollis.co.uk",
    "value": "Keaton Cailin"
  },
  {
    "firstname": "Roary",
    "lastname": "Stuart",
    "address": "Ap #775-5360 Pharetra, St.",
    "email": "Nullam@Nullam.org",
    "value": "Roary Stuart"
  },
  {
    "firstname": "Amethyst",
    "lastname": "Jasper",
    "address": "9310 Nec St.",
    "email": "viverra@eu.co.uk",
    "value": "Amethyst Jasper"
  },
  {
    "firstname": "Grant",
    "lastname": "Faith",
    "address": "726 Nec, St.",
    "email": "ornare.elit.elit@Phasellusfermentumconvallis.ca",
    "value": "Grant Faith"
  },
  {
    "firstname": "Tad",
    "lastname": "Imogene",
    "address": "Ap #927-7050 Egestas Road",
    "email": "massa.Suspendisse@fermentumrisusat.ca",
    "value": "Tad Imogene"
  },
  {
    "firstname": "Quinn",
    "lastname": "Marsden",
    "address": "P.O. Box 671, 9716 Et Av.",
    "email": "accumsan.interdum.libero@vulputate.edu",
    "value": "Quinn Marsden"
  },
  {
    "firstname": "Charlotte",
    "lastname": "Xandra",
    "address": "7680 Enim Avenue",
    "email": "arcu.Vestibulum@Integer.edu",
    "value": "Charlotte Xandra"
  }
];
$(function() {
  $("input").tableautocomplete({
    minLength : 3,
  
    source : sampleData,
      
    select : function(event, ui) {
      alert("You selected: " + JSON.stringify(ui.item));
    },
        
    columns : [
      {
        header : "First Name",
        width : 100,
        getValue : function(item) {
          return item.firstname;
        }
      }, {
        header : "Last Name",
        width : 100,
        getValue : function(item) {
          return item.lastname;
        }
      }, {
        header : "Address",
        width : 150,
        getValue : function(item) {
          return item.address;
        }
      }, {
        header : "E-mail",
        width : 150,
        getValue : function(item) {
          return item.email;
        }
      }]
  });
});
