describe('app', function () {
    'use strict';

    var answer = window.app;

    describe('calculateArea', function () {
        it('should return false when argument is invalid', function () {
            expect(answer.calculateArea('','','','','')).toEqual(false);
            expect(answer.calculateArea(5,5,'lol',7,3)).toEqual(false);
            expect(answer.calculateArea('asd',999,'','','')).toEqual(false);
            expect(answer.calculateArea('test',-3,'',7,3)).toEqual(false);
            expect(answer.calculateArea('a','b','','',5)).toEqual(false);
            expect(answer.calculateArea('a',1,'b',2,'c')).toEqual(false);
            expect(answer.calculateArea(0,'404','error','error','error')).toEqual(false);
            expect(answer.calculateArea('programowanie','takie','trudne','jest','niestety')).toEqual(false);
        });
        it('should return error message and value', function () {
            expect(answer.calculateArea(10,7,3,'success','error')).toEqual({area: -11, message: 'error'});
            expect(answer.calculateArea(-4,-3,-2,'success','wrong')).toEqual({area: -11, message: 'wrong'});
            expect(answer.calculateArea(-7,-3,-1,'success','no')).toEqual({area: -10, message: 'no'});
        });
        it('should return success message and value', function () {
            expect(answer.calculateArea(8,4,0,'success','error')).toEqual({area: 8, message: 'success'});
            expect(answer.calculateArea(1,5,2,'ok','wrong')).toEqual({area: 3, message: 'ok'});
            expect(answer.calculateArea(4,3,1,'super','no')).toEqual({area: 1, message: 'super'});
        });
        it('should return area equal 0 and big null message', function () {
            expect(answer.calculateArea(6,3,2,'tak','nie')).toEqual({area: 0, message: 'Big null'});
            expect(answer.calculateArea(0,0,0,'tak','nie')).toEqual({area: 0, message: 'Big null'});
        });
    });
});
