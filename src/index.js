import './style.scss';

import Home from "./classes/home";
import Footer from './classes/footer';
import Header_home from './classes/header/home_header';

const header_container = document.querySelector('.header');
const content_container = document.querySelector('#content');
const footer_container = document.querySelector('#footer');


new Header_home(header_container);
new Home(content_container);
new Footer(footer_container);









