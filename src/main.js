/**
 * @author  : Jagepard <jagepard@yandex.ru>
 * @license https://mit-license.org/ MIT
 */

import Item from './Item'
import Client from './Client'
import Iterator from './Iterator'

const client = new Client()

client.addItemToTheBucket(new Item("Колготки", 150, "штопаные"));
client.addItemToTheBucket(new Item("Мясо", 250, "тухлое"));
client.addItemToTheBucket(new Item("Батон", 40));

const employee = new Iterator(client.getBucket());

try {
    employee.iterateItems();
} catch (e) {
    console.error(e);
}
