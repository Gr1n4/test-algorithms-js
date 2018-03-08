describe('Get sum polland anotation', () => {
  describe('Recursion', () => {
    it('Should return correct number', () => {
      expect(getSumPolandAnotationRec('1 23 4 + *')).toBe(27);
      expect(getSumPolandAnotationRec('27 23 4 7 + * /')).toBe(0.1067193675889328);
      expect(getSumPolandAnotationRec('1 2 / 3 4 * 5 6 7 + 9 + - * +')).toBe(-203.5);
    });

    it('Should exception wrong stack of operations', () => {
      expect(() => getSumPolandAnotationRec('1 2 / 3 4 * 5 6 7 + 9 + - *')).toThrowError('Wrong stack of operations');
    });


    it('Should exception wrong operations', () => {
      expect(() => getSumPolandAnotationRec('1 2 &')).toThrowError('Wrong operations');
      expect(() => getSumPolandAnotationRec('3 1 2 + (')).toThrowError('Wrong operations');
    });

    it('Should exception wrong string', () => {
      expect(() => getSumPolandAnotationRec('3 2 2 - /')).toThrowError('Wrong string');
    });

    it('Should exception wrong stack of numbers', () => {
      expect(() => getSumPolandAnotationRec('3 + 2 2 - /')).toThrowError('Wrong stack of numbers');
    });

  });
});