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


module.exports = {
    CheckObjectProperty,
}