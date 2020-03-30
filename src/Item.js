/**
 * @author  : Jagepard <jagepard@yandex.ru>
 * @license https://mit-license.org/ MIT
 */

class Item{
    constructor(name, price, description = "") {
        this.name = name;
        this.price = price;
        this.description = description;
    }
}

export default Item;
