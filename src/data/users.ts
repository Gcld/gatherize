import { User } from 'next-auth';
import { eventsUser1, eventsUser2 } from '@/utils/eventsData';

export const users: User[] = [
    {
        id: '1',
        name: 'Gabriel Lima',
        email: 'user@email.com',
        password: '123',
        role: 'admin',
        events: eventsUser1,
    },
    {
        id: '2',
        name: 'Monkey D. Luffy',
        email: 'kingofthepiratesmeat123@email.com',
        password: '123',
        role: 'user',
        events: eventsUser2,
    }
];