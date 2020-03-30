/**
 * @author  : Jagepard <jagepard@yandex.ru>
 * @license https://mit-license.org/ MIT
 */

class Iterator{
    constructor(bucket) {
        this.bucket = bucket;
    }

    iterateItems(){
        this.bucket.forEach(element => {
            console.log(element.name + ' ' + element.price + ' ' + element.description);
        });
    }
}

export default Iterator;
