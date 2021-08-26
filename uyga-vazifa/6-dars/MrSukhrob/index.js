class CheckObjectProperty {

    taskInfo() {
        /**
         * 1.
         * Object propertisi (key: value) bor yoki yo'qligini tekshiruvchi funksiya 
         * yozing (isEmpty())
         * agar propertylari bo'lsa false qaytarsin aks holda true  
         * Masalan:
         * isEmpty({ name: "John" }) => false
         * isEmpty({}) => true
         * 
         **/
    }


    usingFuncHasOwnProperty(object) {
        for (let item in object) {
            if (object.hasOwnProperty(item)) {
                return false;
            }
        }
        return true;
    }

    usingObjectKeys(object) {
        if (Object.keys(object).length > 0) {
            return false;
        }

        return true
    }

    usingJsonStringify(object) {
        return JSON.stringify(object) === "{}";
    }

}

class CalcObjectPropertiesValue {
    taskInfo() {
        /**
         * 2.
         * Object qiymatlarini numberda yoki string orqali kiritilgan bo'lsa 
         *  ("2", "7") numberga o'girib barchasini yig'indisini hisoblaydigan 
         * funksiya yozing.
         * Masalan:
         * totalValue({a: "1", b: 100}) => 101
         * totalValue({a: 5, b: 9}) => 14
         * totalValue({a: "a", b: 4}) => 4
         * 
         **/
    }

    usingForIn(object) {
        let result = 0;

        for (let item in object) {
            if (!Number(object[item]) || (typeof object[item] === 'boolean')) continue;

            result += Number(object[item])
        }

        return result;
    }

    usingReduseFunction(object) {
        let result = 0;
        Object.values(object).reduce((_, item) => {
            if (!Number(item) || (typeof item == 'boolean')) {
                return result += 0;
            }
            return result += Number(item)

        }, result)

        return result;
    }

    usingObjectKeys(object) {
        let result = 0;

        let arr = Object.keys(object),
            length = arr.length;

        for (let i = 0; i < length; i++) {
            let key = arr[i];
            if (!Number(object[key]) || (typeof object[key] === 'boolean')) {
                continue;
            }
            result += Number(object[key])
        }

        return result;
    }
}

class CheckObjectPropertyTotalValue {
    taskInfo() {
        /**
         * 3. 
         *  Object keylari orasida "totalAmount" keyi bor yoki 
         * yo'qligini aniqlaydigan funksiya yarating.
         * Agar qiymati number bo'lsa true qaytaring
         * agar string bo'lsa numberga o'tkazing va true qaytarsin
         * agar qiymati numberga o'tmasa yoki yo'q bo'lsa false qaytarsin
         * 
         * Masalan:
         * hasTotalValue({...., totalValue: "1"}) => true
         * hasTotalValue({...., totalValue: 2}) => true
         * hasTotalValue({...., totalValue: null}) => false
         * hasTotalValue({...., totalValue: "ab"}) => false
         * hasTotalValue({....}) => false
         * 
         **/
    }

    check(object, prop = 'totalValue') {
        if (!object.hasOwnProperty(prop)) {
            return false;
        }
        if (!Number(object[prop]) || (typeof object[prop] === "boolean")) {
            return false;
        }

        return true
    }

}

class ClonningObjects {
    constructor(){
        this.person = {}
    }

    taskInfo() {
        /**
         * 4.  
         * let user = {
         *  name: "Ali",
         *  age: 20,
         *  book: {
         *    author: "Tohir Malik",
         *    title: "Shaytanat",
         *    city: {
         *      name: "Tashkent",
         *      population: 2545159,
         *      region: {
         *        name: "Yunusobod"
         *      },
         *      regions: ["Olmazor", "Yunusobod", "Mirzo Ulugbek"]
         *    },
         *    dateOfBirth: {
         *      year: 1946,
         *      day: 27,
         *      month: "december",
         *      date: Date(12.27.1946)
         *    }
         *  },
         *  showAuthorRegion() {
         *    console.log(this.book.city.region.name)
         *  }
         * }
         * 
         * shu userni deep clone qiladigan funksiya yarating " for..in " operatorlari orqali!
         * 
         * Masalan: 
         * let user2 = deepClone(user)
         * user2.book.city.region.name = "Mirobod"
         * 
         * user.showAuthorRegion() => Yunusobod
         * 
         **/
    }

    deepClone(object) {
        for(let user in object){
            if(typeof object[user] === 'object'){
                return this.deepClone(object[user])
            }
            this.person.user = object[user]
        } 
        
        return this.person
    }

}

module.exports = {
    CheckObjectProperty,
    CalcObjectPropertiesValue,
    CheckObjectPropertyTotalValue,
    ClonningObjects
}