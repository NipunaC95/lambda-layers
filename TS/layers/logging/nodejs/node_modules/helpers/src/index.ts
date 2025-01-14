import { v4 as uuidv4 } from 'uuid';

const TestGenerator = (): string => {
    return uuidv4() + " Test new";
};


export default TestGenerator;