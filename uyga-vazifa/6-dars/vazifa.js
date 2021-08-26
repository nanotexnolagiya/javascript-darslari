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

