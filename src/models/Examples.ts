interface Example {
    title: string;
    description: string;
    code: string;
}

export interface Examples {
    [key: string]: Example;
}