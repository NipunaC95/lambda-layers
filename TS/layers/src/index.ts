import { v4 as uuidv4 } from 'uuid';

const TestGenerator = (): string => {
    return uuidv4() + " Test new 22";
};


export default TestGenerator;