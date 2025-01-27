export interface GatherizeEvent {
    id: number;
    name: string;
    description: string;
    date: string;
    cep: string;
    address: string;
    city: string;
    state: string;
    maxPeople: number;
    participants: {
        id: string;
        name: string;
    }[];
    creatorId: string;
    shareCount: number;
}