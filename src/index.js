import Foo from './scripts/foo';
import './sass/style.sass';

// example main function

function main(){
    new Foo();
    return document.createElement('div').innerText = "hello from webpack";
}

document.body.append(main());