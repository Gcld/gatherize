import { GatherizeEvent } from "next-auth"

export const eventsUser1: GatherizeEvent[] = [
    {
        id: 1,
        name: 'Headline 1',
        description: 'Event description here, Lorem ipsum dolor sit amet, consectetur adipiscing elit. In molestie euismod interdum. Aenean vel est tellus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc scelerisque ut risus non...',
        date: new Date('2024-12-09T18:00:00.000+03:00'),
        cep: '59152-195',
        address: 'Rua Ipê Caboclo',
        city: 'Parnamirim',
        state: 'RN',
        participants: 6,
        maxPeople: 10,
    }
]

export const eventsUser2: GatherizeEvent[] = [
    {
        id: 2,
        name: 'Headline 2',
        description: 'Event description here, Lorem ipsum dolor sit amet, consectetur adipiscing elit. In molestie euismod interdum. Aenean vel est tellus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc scelerisque ut risus non...',
        date: new Date('2024-12-09T18:00:00.000+03:00'),
        cep: '59152-195',
        address: 'Rua Ipê Caboclo',
        city: 'Parnamirim',
        state: 'RN',
        participants: 6,
        maxPeople: 10,
    }
]