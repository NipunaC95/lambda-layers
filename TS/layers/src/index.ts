import { v4 as uuidv4 } from 'uuid';

const TestGenerator = (): string => {
    return uuidv4() + " Test new 2f2";
};


export default TestGenerator;