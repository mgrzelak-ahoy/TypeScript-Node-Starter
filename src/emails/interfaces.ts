import {ReactElement} from 'react';
import {Example} from "./example/example";

export interface EmailGenerator {
    message: string;
    reactMessage: ReactElement;
}

interface EmailMapperInterface {
  [key: string]: (obj: object) => EmailGenerator;
}

export const EmailMapper: EmailMapperInterface = {
    'example': Example
};