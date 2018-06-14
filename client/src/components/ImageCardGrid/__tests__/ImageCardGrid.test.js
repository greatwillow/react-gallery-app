import {
  checkIfItemGoesInColumn,
  checkIfItemGoesInColumn1,
  checkIfItemGoesInColumn2,
  checkIfItemGoesInColumn3
} from '../../../utils/responsiveGrid/checkIfItemGoesInColumn';

describe('Image allocation in columns', () => {
  describe('For Large screens ', () => {
    describe('Allocation in column 1', () => {
      const case1 = checkIfItemGoesInColumn1({ windowWidth: 800 }, 1);
      const case2 = checkIfItemGoesInColumn1({ windowWidth: 800 }, 2);
      const case3 = checkIfItemGoesInColumn1({ windowWidth: 800 }, 3);

      it('goes into column 1 when index of 1', () => {
        expect(case1).toEqual(true);
      });
      it('does not go into column 1 when index of 2', () => {
        expect(case2).toEqual(false);
      });
      it('does not go into column 1 when index of 3', () => {
        expect(case3).toEqual(false);
      });
    });
    describe('Allocation in column 2', () => {
      const case1 = checkIfItemGoesInColumn2({ windowWidth: 800 }, 1);
      const case2 = checkIfItemGoesInColumn2({ windowWidth: 800 }, 2);
      const case3 = checkIfItemGoesInColumn2({ windowWidth: 800 }, 3);

      it('does not go into column 2 when index of 1', () => {
        expect(case1).toEqual(false);
      });
      it('goes into column 2 when index of 2', () => {
        expect(case2).toEqual(true);
      });
      it('does not go into column 2 when index of 3', () => {
        expect(case3).toEqual(false);
      });
    });
    describe('Allocation in column 3', () => {
      const case1 = checkIfItemGoesInColumn3({ windowWidth: 800 }, 1);
      const case2 = checkIfItemGoesInColumn3({ windowWidth: 800 }, 2);
      const case3 = checkIfItemGoesInColumn3({ windowWidth: 800 }, 3);

      it('does not go into column 3 when index of 1', () => {
        expect(case1).toEqual(false);
      });
      it('does not go into column 3 when index of 2', () => {
        expect(case2).toEqual(false);
      });
      it('goes into column 3 when index of 3', () => {
        expect(case3).toEqual(true);
      });
    });
  });
  describe('For Medium screens ', () => {
    describe('Allocation in column 1', () => {
      const case1 = checkIfItemGoesInColumn1({ windowWidth: 600 }, 1);
      const case2 = checkIfItemGoesInColumn1({ windowWidth: 600 }, 2);
      const case3 = checkIfItemGoesInColumn1({ windowWidth: 600 }, 3);

      it('goes into column 1 when index of 1', () => {
        expect(case1).toEqual(true);
      });
      it('does not go into column 1 when index of 2', () => {
        expect(case2).toEqual(false);
      });
      it('may go into column 1 when index of 3', () => {
        expect(case3).toEqual(false || true);
      });
    });
    describe('Allocation in column 2', () => {
      const case1 = checkIfItemGoesInColumn2({ windowWidth: 600 }, 1);
      const case2 = checkIfItemGoesInColumn2({ windowWidth: 600 }, 2);
      const case3 = checkIfItemGoesInColumn2({ windowWidth: 600 }, 3);

      it('does not go into column 2 when index of 1', () => {
        expect(case1).toEqual(false);
      });
      it('goes into column 2 when index of 2', () => {
        expect(case2).toEqual(true);
      });
      it('does not go into column 2 when index of 3', () => {
        expect(case3).toEqual(false);
      });
    });
    describe('Allocation in column 3', () => {
      const case1 = checkIfItemGoesInColumn3({ windowWidth: 600 }, 1);
      const case2 = checkIfItemGoesInColumn3({ windowWidth: 600 }, 2);
      const case3 = checkIfItemGoesInColumn3({ windowWidth: 600 }, 3);

      it('does not go into column 3 when index of 1', () => {
        expect(case1).toEqual(false);
      });
      it('does not go into column 3 when index of 2', () => {
        expect(case2).toEqual(false);
      });
      it('does not go into column 3 when index of 3', () => {
        expect(case3).toEqual(false);
      });
    });
  });
  describe('For Small screens ', () => {
    describe('Allocation in column 1', () => {
      const case1 = checkIfItemGoesInColumn1({ windowWidth: 400 }, 1);
      const case2 = checkIfItemGoesInColumn1({ windowWidth: 400 }, 2);
      const case3 = checkIfItemGoesInColumn1({ windowWidth: 400 }, 3);

      it('goes into column 1 when index of 1', () => {
        expect(case1).toEqual(true);
      });
      it('goes into column 1 when index of 2', () => {
        expect(case2).toEqual(true);
      });
      it('goes into column 1 when index of 3', () => {
        expect(case3).toEqual(true);
      });
    });
    describe('Allocation in column 2', () => {
      const case1 = checkIfItemGoesInColumn2({ windowWidth: 400 }, 1);
      const case2 = checkIfItemGoesInColumn2({ windowWidth: 400 }, 2);
      const case3 = checkIfItemGoesInColumn2({ windowWidth: 400 }, 3);
      it('does not go into column 2 when index of 1', () => {
        expect(case1).toEqual(false);
      });
      it('does not go into column 2 when index of 2', () => {
        expect(case2).toEqual(false);
      });
      it('does not go into column 2 when index of 3', () => {
        expect(case3).toEqual(false);
      });
    });
    describe('Allocation in column 3', () => {
      const case1 = checkIfItemGoesInColumn3({ windowWidth: 400 }, 1);
      const case2 = checkIfItemGoesInColumn3({ windowWidth: 400 }, 2);
      const case3 = checkIfItemGoesInColumn3({ windowWidth: 400 }, 3);

      it('does not go into column 3 when index of 1', () => {
        expect(case1).toEqual(false);
      });
      it('does not go into column 3 when index of 2', () => {
        expect(case2).toEqual(false);
      });
      it('does not go into column 3 when index of 3', () => {
        expect(case3).toEqual(false);
      });
    });
  });
});
