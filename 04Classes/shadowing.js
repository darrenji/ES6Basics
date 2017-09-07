/**
 * Created by Darren on 2017/9/7.
 */

class User{
    constructor(){
        this.accessMatrix={};
    }

    hasAccess(page){
        return this.accessMatrix[page];
    }
}

class  SuperUser extends User{
    hasAccess(page){
        return true;
    }
}

var su = new SuperUser();
console.log(su.hasAccess("ADMIN_DASHBOARD"));