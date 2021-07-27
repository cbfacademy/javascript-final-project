const { parseHTML, readFile } = require('../setup.js');
const html = readFile('../src/index.html');
const doc = parseHTML(html);

// HTML tests
describe('HTML', () => {
  test('body contains exactly one <div /> element with the class name "timeline"', () => {
    expect(doc.querySelectorAll('body')[0].childNodes.filter(node => 1 === node.nodeType).length).toBe(2);
    expect(doc.querySelectorAll('body > div.timeline').length).toBe(1);
  });
});
