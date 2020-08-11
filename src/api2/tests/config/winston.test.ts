import { morganOption } from '../../src/config/winston';

describe('Test winston transports for different environments', () => {
    test('It should return morgan option for (non-)production', () => {
        expect(morganOption('production')).toBeDefined();
        expect(morganOption('dev')).toBeDefined();
    });
});
