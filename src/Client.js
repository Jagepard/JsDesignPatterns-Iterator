/**
 * @author  : Jagepard <jagepard@yandex.ru>
 * @license https://mit-license.org/ MIT
 */

class Chain{
    constructor() {
        this.bucket = [];
    }

    addItemToTheBucket(item){
        this.bucket.push(item);
    }

    getBucket(){
        return this.bucket;
    }
}

export default Chain;
