import Handlebars from 'handlebars';

import tpl from './input';

Handlebars.registerPartial('input', tpl);

export default(type, placeholder, value) => {
  return Handlebars.compile(tpl())({type, placeholder, value});
}