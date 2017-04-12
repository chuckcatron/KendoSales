var states = [
        { abbrev: "OH", state: "Ohio" }, { abbrev: "AL", state: "Alabama" }, { abbrev: "AK", state: "Alaska" }, { abbrev: "AZ", state: "Arizona" }, { abbrev: "AR", state: "Arkansas" },
        { abbrev: "CA", state: "California" }, { abbrev: "CO", state: "Colorado" }, { abbrev: "CT", state: "Connecticut" }, { abbrev: "DE", state: "Delaware" },
        { abbrev: "DC", state: "District of Columbia" }, { abbrev: "FL", state: "Florida" }, { abbrev: "GA", state: "Georgia" }, { abbrev: "HI", state: "Hawaii" },
        { abbrev: "ID", state: "Idaho" }, { abbrev: "IL", state: "Illinois" }, { abbrev: "IN", state: "Indiana" }, { abbrev: "IA", state: "Iowa" },
        { abbrev: "KS", state: "Kansas" }, { abbrev: "KY", state: "Kentucky" }, { abbrev: "LA", state: "Louisiana" }, { abbrev: "ME", state: "Maine" },
        { abbrev: "MD", state: "Maryland" }, { abbrev: "MA", state: "Massachusetts" }, { abbrev: "MI", state: "Michigan" }, { abbrev: "MN", state: "Minnesota" },
        { abbrev: "MS", state: "Mississippi" }, { abbrev: "MO", state: "Missouri" }, { abbrev: "MT", state: "Montana" }, { abbrev: "NE", state: "Nebraska" },
        { abbrev: "NV", state: "Nevada" }, { abbrev: "NH", state: "New Hampshire" }, { abbrev: "NJ", state: "New Jersey" }, { abbrev: "NM", state: "New Mexico" },
        { abbrev: "NY", state: "New York" }, { abbrev: "NC", state: "North Carolina" }, { abbrev: "ND", state: "North Dakota" },
        { abbrev: "OK", state: "Oklahoma" }, { abbrev: "OR", state: "Oregon" }, { abbrev: "PA", state: "Pennsylvania" }, { abbrev: "RI", state: "Rhode Island" },
        { abbrev: "SC", state: "South Carolina" }, { abbrev: "SD", state: "South Dakota" }, { abbrev: "TN", state: "Tennessee" }, { abbrev: "TX", state: "Texas" },
        { abbrev: "UT", state: "Utah" }, { abbrev: "VT", state: "Vermont" }, { abbrev: "VA", state: "Virginia" }, { abbrev: "WA", state: "Washington" },
        { abbrev: "WV", state: "West Virginia" }, { abbrev: "WI", state: "Wisconsin" }, { abbrev: "WY", state: "Wyoming" }
];

var counties = [
    { county: "Adams" }, { county: "Allen" }, { county: "Ashland" }, { county: "Ashtabula" }, { county: "Athens" }, { county: "Auglaize" }, { county: "Belmont" },
    { county: "Brown" }, { county: "Butler" }, { county: "Carroll" }, { county: "Champaign" }, { county: "Clark" }, { county: "Clermont" }, { county: "Clinton" },
    { county: "Columbiana" }, { county: "Coshocton" }, { county: "Crawford" }, { county: "Cuyahoga" }, { county: "Darke" }, { county: "Defiance" }, { county: "Delaware" },
    { county: "Erie" }, { county: "Fairfield" }, { county: "Fayette" }, { county: "Franklin" }, { county: "Fulton" }, { county: "Gallia" }, { county: "Geauga" },
    { county: "Greene" }, { county: "Guernsey" }, { county: "Hamilton" }, { county: "Hancock" }, { county: "Hardin" }, { county: "Harrison" }, { county: "Henry" },
    { county: "Highland" }, { county: "Hocking" }, { county: "Holmes" }, { county: "Huron" }, { county: "Jackson" }, { county: "Jefferson" }, { county: "Knox" },
    { county: "Lake" }, { county: "Lawrence" }, { county: "Licking" }, { county: "Logan" }, { county: "Lorain" }, { county: "Lucas" }, { county: "Madison" },
    { county: "Mahoning" }, { county: "Marion" }, { county: "Medina" }, { county: "Meigs" }, { county: "Mercer" }, { county: "Miami" }, { county: "Monroe" },
    { county: "Montgomery" }, { county: "Morgan" }, { county: "Morrow" }, { county: "Muskingum" }, { county: "Noble" }, { county: "Ottawa" }, { county: "Paulding" },
    { county: "Perry" }, { county: "Pickaway" }, { county: "Pike" }, { county: "Portage" }, { county: "Preble" }, { county: "Putnam" }, { county: "Richland" },
    { county: "Ross" }, { county: "Sandusky" }, { county: "Scioto" }, { county: "Seneca" }, { county: "Shelby" }, { county: "Stark" }, { county: "Summit" },
    { county: "Trumbull" }, { county: "Tuscarawas" }, { county: "Union" }, { county: "Van Wert" }, { county: "Vinton" }, { county: "Warren" }, { county: "Washington" },
    { county: "Wayne" }, { county: "Williams" }, { county: "Wood" }, { county: "Wyandot" }
];
function isDate(date) {
    // function came from 
    // http://jquerybyexample.blogspot.com/2011/12/
    //      validate-date-using-jquery.html
    var currVal = date;
    if (!validData(currVal))
        return false;

    //Declare Regex 
    var rxDatePattern = /^(\d{1,2})(\/|-)(\d{1,2})(\/|-)(\d{4})$/;
    var dtArray = currVal.match(rxDatePattern); // is format OK?
    if (dtArray === null) { return false; }

    //Checks for mm/dd/yyyy format.
    dtMonth = dtArray[1];
    dtDay = dtArray[3];
    dtYear = dtArray[5];
    if (dtMonth < 1 || dtMonth > 12) { return false; }
    else if (dtDay < 1 || dtDay > 31) { return false; }
    else if ((dtMonth === 4 || dtMonth === 6 || dtMonth === 9 || dtMonth === 11) && dtDay === 31) { return false; }
    else if (dtMonth === 2) {
        var isleap = (dtYear % 4 === 0 && (dtYear % 100 !== 0 || dtYear % 400 === 0));
        if (dtDay > 29 || (dtDay === 29 && !isleap)) { return false; }
    }
    return true;
}

function isValidMonthYear(date) {
    // function came from 
    // http://jquerybyexample.blogspot.com/2011/12/
    //      validate-date-using-jquery.html
    if (!validData(date)) { return false; }
    var dtArray = currVal.split(' ');
    if (validData(dtArray)) { return false; }

    //Checks for mm/dd/yyyy format.
    switch (dtArray[0]) {
        case "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December":
            break;
        default:
            return false;
    }
    if (!isValidYear(dtArray[1])) {
        return false;
    }
    return true;
}

function isValidYear(year) {
    if (isNaN(year) || year.length !== 4) {
        return false;
    }
    return true;
}

function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
}

function guid() {
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
        s4() + '-' + s4() + s4() + s4();
}

function validData(data) {
    if (typeof data !== "undefined" && data) {
        return true;
    }
    return false;
}