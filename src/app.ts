import { hello } from './hello';

class App {
    /** Entry point of our app */
    public static start() {
        console.log(hello('world'));
    }
}

App.start();
