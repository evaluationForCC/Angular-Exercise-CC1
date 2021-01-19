import { inputValidatorPipe } from "./inputValidator.pipe";

describe('inputValidatorPipe ', () => {
    // This pipe is a pure, stateless function so no need for BeforeEach
    const pipe = new inputValidatorPipe();
  
    it('transforms "test" to "The string should be an integer. The string should contains at least a 9. "', () => {
      expect(pipe.transform('test')).toBe('The string should be an integer. The string should contains at least a 9. ');
    });
  
    it('transforms "109" to "validated"', () => {
      expect(pipe.transform('109')).toBe('validated');
    });
  
    it('transforms "11" to "The inserted text is too short. The string should contains at least a 9. "', () => {
        expect(pipe.transform('11')).toBe('The inserted text is too short. The string should contains at least a 9. ');
      });
     

   
  });