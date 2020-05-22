import  UssdMenu from 'ussd-menu-builder';
let menu = new UssdMenu();
 
menu.startState({
    run: () => {    
        menu.con('Welcome to student registration. Select optionns from below:' +
            '\n1. Choose school' +
            '\n2. Pay transport' + 
            '\n3. Check your registtration information');
    },
    next: {
        '1': 'ChooseSchool',
        '2': 'PayTransport',
        '3': 'StudentInfo'
    }
});
 
menu.state('ChooseSchool', {
    run: () => {
        menu.con('Enter school:');
    },
    next: {
        '*[a-zA-Z]+': 'ChooseSchool.school'
    }
});
 
menu.state('ChooseSchool.school',{
    run: () => {
        var school = menu.val;
        menu.end('you have entered....' + school);
    }
});
 
 class studentController {
     static async createStudent(req, res){
        menu.run(req.body, ussdResult => {
            res.send(ussdResult);
        });
     }
}

export default studentController;