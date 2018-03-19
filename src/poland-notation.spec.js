describe('Get sum polland anotation', () => {
  let polNot;

  beforeEach(() => {
    polNot = new GetSumPolandAnotation();
  });

  it('Should create instance GetSumPolandAnotation', () => {
    expect(polNot).toEqual(jasmine.any(GetSumPolandAnotation));
  });

  describe('Recursion', () => {

    it('Should method getSumPolandAnotationRec is defined', () => {
      expect(polNot.getSumPolandAnotationRec).toBeDefined();
    });

    it('Should return correct number', () => {
      expect(polNot.getSumPolandAnotationRec('1 23 4 + *')).toBe(27);
      expect(polNot.getSumPolandAnotationRec('27 23 4 7 + * /')).toBe(0.1067193675889328);
      expect(polNot.getSumPolandAnotationRec('1 2 / 3 4 * 5 6 7 + 9 + - * +')).toBe(-203.5);
    });

    it('Should call 3 times', () => {
      let spy = spyOn(polNot, 'getSumPolandAnotationRec').and.callThrough();
      polNot.getSumPolandAnotationRec('1 23 4 + *');
      expect(spy).toHaveBeenCalledTimes(2);
    });

    it('Should exception wrong stack of operations', () => {
      expect(() => polNot.getSumPolandAnotationRec('1 2 / 3 4 * 5 6 7 + 9 + - *')).toThrowError('Wrong stack of operations');
    });

    it('Should exception wrong operations', () => {
      expect(() => polNot.getSumPolandAnotationRec('1 2 &')).toThrowError('Wrong operations');
      expect(() => polNot.getSumPolandAnotationRec('3 1 2 + (')).toThrowError('Wrong operations');
    });

    it('Should exception wrong string', () => {
      expect(() => polNot.getSumPolandAnotationRec('3 2 2 - /')).toThrowError('Wrong string');
    });

    it('Should exception wrong stack of numbers', () => {
      expect(() => polNot.getSumPolandAnotationRec('3 + 2 2 - /')).toThrowError('Wrong stack of numbers');
    });

  });

  describe('Liner', () => {

    it('Should method getSumPolandAnotationLiner is defined', () => {
      expect(polNot.getSumPolandAnotationLiner).toBeDefined();
    });

    it('Should return correct number', () => {
      expect(polNot.getSumPolandAnotationLiner('1 23 4 + *')).toBe(27);
      expect(polNot.getSumPolandAnotationLiner('27 23 4 7 + * /')).toBe(0.1067193675889328);
      expect(polNot.getSumPolandAnotationLiner('1 2 / 3 4 * 5 6 7 + 9 + - * +')).toBe(-203.5);
    });

    it('Should exception wrong stack of operations', () => {
      expect(() => polNot.getSumPolandAnotationLiner('1 2 / 3 4 * 5 6 7 + 9 + - *')).toThrowError('Wrong stack of operations');
    });

    it('Should exception wrong stack of numbers', () => {
      expect(() => polNot.getSumPolandAnotationLiner('3 + 2 2 - /')).toThrowError('Wrong stack of numbers');
    });

    it('Should call once', () => {
      let spy = spyOn(polNot, 'getSumPolandAnotationLiner').and.callThrough();
      polNot.getSumPolandAnotationLiner('1 23 4 + *');
      expect(spy).toHaveBeenCalledTimes(1);
    });

    it('Should exception wrong operations', () => {
      expect(() => polNot.getSumPolandAnotationLiner('1 2 &')).toThrowError('Wrong operations');
      expect(() => polNot.getSumPolandAnotationLiner('3 1 2 + (')).toThrowError('Wrong operations');
    });

    it('Should exception wrong string', () => {
      expect(() => polNot.getSumPolandAnotationLiner('3 2 2 - /')).toThrowError('Wrong string');
    });

  });
});
