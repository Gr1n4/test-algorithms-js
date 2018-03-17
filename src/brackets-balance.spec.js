'use strict';

// describe('Brackets balance', () => {
//   let balancer;
//
//   beforeEach(() => {
//     balancer = new BracketsBalance();
//   });
//
//   it('should create instance BracketsBalance', () => {
//     expect(balancer instanceof BracketsBalance).toBeTruthy();
//   });
//
//   it('should return true', () => {
//     expect(balancer.check('((()(())))')).toBeTruthy();
//     expect(balancer.check('((()(())))(()(()()))')).toBeTruthy();
//     expect(balancer.check('[()((()()((){{()()}})))]')).toBeTruthy();
//   });
//
//   it('should return false', () => {
//     expect(balancer.check('(()')).toBeFalsy();
//     expect(balancer.check('(')).toBeFalsy();
//     expect(balancer.check('()ab')).toBeFalsy();
//     expect(balancer.check('[()((){])]')).toBeFalsy();
//   });
// });