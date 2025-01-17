export interface Event {
    id: number;
    name: string;
    description: string;
    date: string;
    cep: string;
    address: string;
    city: string;
    state: string;
    maxPeople: number;
    participants: number;
    creatorId: string;
}