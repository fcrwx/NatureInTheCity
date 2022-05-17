export interface Bird {
    code: string;
    name: string;
    calls: Call[]
}

export interface Call {
    type: string;
    src: string;
}
