export interface InfoCharacter{
    name: string;
    status: string;
    species: string;
    type: string;
}

export interface AllCharactersResponse{
    count: number;
    pages: number;
    next: null;
    prev: null;
    results: SmallCharacters[];
}

export interface SmallCharacters{
    name: string;
    url: string;
}