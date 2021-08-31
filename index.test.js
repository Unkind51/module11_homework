
import {getPercents} from '../src/index.js';

describe("Percent function test", () => {
    it('Valid result',  () => {
        expect(getPercents(15,100)).toBe(15);
        expect(getPercents(10,100)).toBe(10);
        expect(getPercents(0,100)).toBe(0);
        
    });
});