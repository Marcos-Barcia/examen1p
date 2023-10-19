
export interface IFunction {
    id: number; 
    name: string;
    returnType: string;
    detail: string;
    status: string;
    parameters: IParameter[]; 
}

export interface IParameter {
    id: number;
    description: string;
    type: string;
    defaultValue: string;
    functionId: number;
}


