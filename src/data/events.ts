import { GatherizeEvent } from '@/types/event';

export let events: GatherizeEvent[] = [
    {
        id: 1,
        name: 'Tech Conference 2025',
        description: 'Join us for the biggest tech conference of the year, featuring keynote speakers from leading tech companies and hands-on workshops on the latest technologies.',
        date: '2025-03-15',
        cep: '59153903',
        address: 'Alameda dos Bosques, 100',
        city: 'Parnamirim',
        state: 'RN',
        maxPeople: 1000,
        participants: [
            { id: 'user1', name: 'John Doe' },
            { id: 'user2', name: 'Jane Smith' },
            { id: 'user3', name: 'Alice Johnson' },
            { id: 'user4', name: 'Bob Williams' },
            { id: 'user5', name: 'Emma Brown' },
        ],
        creatorId: '1',
        shareCount: 5,
    },
    {
        id: 2,
        name: 'Summer Music Festival',
        description: 'A three-day music extravaganza featuring top artists from around the world. Enjoy great music, food, and unforgettable experiences.',
        date: '2025-07-10',
        cep: '59152195',
        address: 'Parque da Cidade',
        city: 'Natal',
        state: 'RN',
        maxPeople: 5000,
        participants: [
            { id: 'user6', name: 'Michael Davis' },
            { id: 'user7', name: 'Sarah Miller' },
            { id: 'user8', name: 'David Wilson' },
            { id: 'user9', name: 'Olivia Taylor' },
            { id: 'user10', name: 'Daniel Anderson' },
        ],
        creatorId: '8',
        shareCount: 3,
    },
    {
        id: 3,
        name: 'Startup Pitch Competition',
        description: 'Aspiring entrepreneurs showcase their innovative ideas to a panel of venture capitalists. The winner receives funding and mentorship.',
        date: '2025-05-20',
        cep: '59064500',
        address: 'Centro de Convenções, 500',
        city: 'Natal',
        state: 'RN',
        maxPeople: 200,
        participants: [
            { id: 'user11', name: 'Sophia Martinez' },
            { id: 'user12', name: 'Ethan Thompson' },
            { id: 'user13', name: 'Ava Garcia' },
            { id: 'user14', name: 'Liam Rodriguez' },
        ],
        creatorId: '1',
        shareCount: 40,
    },
    {
        id: 4,
        name: 'Culinary Workshop: Brazilian Cuisine',
        description: 'Learn to cook authentic Brazilian dishes from renowned chefs. Perfect for food enthusiasts and aspiring cooks.',
        date: '2025-09-05',
        cep: '59020000',
        address: 'Rua das Delícias, 123',
        city: 'Natal',
        state: 'RN',
        maxPeople: 30,
        participants: [
            { id: 'user15', name: 'Isabella Lopez' },
            { id: 'user16', name: 'Noah Hernandez' },
            { id: 'user17', name: 'Mia Gonzalez' },
        ],
        creatorId: '5',
        shareCount: 10,
    },
    {
        id: 5,
        name: 'Environmental Conservation Seminar',
        description: 'A day-long seminar focusing on local and global environmental issues, featuring talks by leading environmentalists and interactive workshops.',
        date: '2025-04-22',
        cep: '59066060',
        address: 'Eco Centro, 789',
        city: 'Natal',
        state: 'RN',
        maxPeople: 300,
        participants: [
            { id: 'user18', name: 'James Wilson' },
            { id: 'user19', name: 'Charlotte Brown' },
            { id: 'user20', name: 'Benjamin Lee' },
            { id: 'user21', name: 'Amelia Clark' },
        ],
        creatorId: '6',
        shareCount: 20,
    },
    {
        id: 6,
        name: 'Yoga and Wellness Retreat',
        description: 'A weekend of relaxation and self-discovery. Includes yoga sessions, meditation workshops, and healthy living seminars.',
        date: '2025-06-12',
        cep: '59160000',
        address: 'Praia de Pipa, s/n',
        city: 'Tibau do Sul',
        state: 'RN',
        maxPeople: 50,
        participants: [
            { id: 'user22', name: 'William Turner' },
            { id: 'user23', name: 'Sofia Ramirez' },
            { id: 'user24', name: 'Lucas Kim' },
        ],
        creatorId: '1',
        shareCount: 15,
    },
    {
        id: 7,
        name: 'Local Artisan Fair',
        description: 'Showcase of local arts and crafts. Support local artisans and find unique, handmade items.',
        date: '2025-11-15',
        cep: '59020100',
        address: 'Praça do Artesanato',
        city: 'Natal',
        state: 'RN',
        maxPeople: 1000,
        participants: [
            { id: 'user25', name: 'Harper Davis' },
            { id: 'user26', name: 'Evelyn Martinez' },
            { id: 'user27', name: 'Alexander Johnson' },
            { id: 'user28', name: 'Victoria Thompson' },
        ],
        creatorId: '7',
        shareCount: 8,
    },
    {
        id: 8,
        name: 'Astronomy Night',
        description: 'An evening of stargazing and lectures about the cosmos. Telescopes provided for attendees.',
        date: '2025-08-12',
        cep: '59150000',
        address: 'Observatório Municipal',
        city: 'Parnamirim',
        state: 'RN',
        maxPeople: 100,
        participants: [
            { id: 'user29', name: 'Daniel White' },
            { id: 'user30', name: 'Scarlett Anderson' },
            { id: 'user31', name: 'Christopher Lee' },
        ],
        creatorId: '1',
        shareCount: 12,

    },
    {
        id: 9,
        name: 'Past Tech Conference 2024',
        description: 'A tech conference that happened in the past.',
        date: '2024-01-15',
        cep: '59064500',
        address: 'Centro de Convenções, 500',
        city: 'Natal',
        state: 'RN',
        maxPeople: 200,
        participants: [
            { id: 'user32', name: 'Grace Taylor' },
            { id: 'user33', name: 'Joseph Harris' },
            { id: 'user34', name: 'Chloe Martin' },
        ],
        creatorId: '1',
        shareCount: 2,
    },
    {
        id: 10,
        name: 'Past Music Festival',
        description: 'A music festival that already occurred.',
        date: '2024-02-20',
        cep: '59152195',
        address: 'Parque da Cidade',
        city: 'Natal',
        state: 'RN',
        maxPeople: 5000,
        participants: [
            { id: 'user35', name: 'Samuel Jackson' },
            { id: 'user36', name: 'Zoe Thompson' },
            { id: 'user37', name: 'David Garcia' },
            { id: 'user38', name: 'Lily Rodriguez' },
        ],
        creatorId: '8',
        shareCount: 100,
    },
    {
        id: 11,
        name: 'Fully Booked Future Workshop',
        description: 'A future workshop that is already fully booked.',
        date: '2025-12-01',
        cep: '59020000',
        address: 'Rua das Oficinas, 123',
        city: 'Natal',
        state: 'RN',
        maxPeople: 50,
        participants: [
            { id: 'user39', name: 'Andrew Wilson' },
            { id: 'user40', name: 'Penelope Clark' },
            { id: 'user41', name: 'Ryan Martinez' },
        ],
        creatorId: '5',
        shareCount: 30,
    },
    {
        id: 12,
        name: 'International Film Festival',
        description: 'A week-long celebration of cinema featuring independent films from around the world, with Q&A sessions with directors and actors.',
        date: '2025-10-05',
        cep: '59064500',
        address: 'Cinema da Cidade, 789',
        city: 'Natal',
        state: 'RN',
        maxPeople: 500,
        participants: [
            { id: 'user42', name: 'Natalie Brown' },
            { id: 'user43', name: 'Thomas Davis' },
            { id: 'user44', name: 'Hannah Lee' },
        ],
        creatorId: '8',
        shareCount: 25,
    },
    {
        id: 13,
        name: 'Sustainable Fashion Show',
        description: 'Showcasing eco-friendly and ethically produced fashion from local and international designers. Includes panel discussions on sustainable practices in the fashion industry.',
        date: '2025-09-20',
        cep: '59020100',
        address: 'Centro de Eventos, 456',
        city: 'Natal',
        state: 'RN',
        maxPeople: 300,
        participants: [
            { id: 'user45', name: 'Oliver White' },
            { id: 'user46', name: 'Sophie Harris' },
            { id: 'user47', name: 'Jacob Thompson' },
        ],
        creatorId: '7',
        shareCount: 15,
    },
    {
        id: 14,
        name: 'Virtual Reality Gaming Tournament',
        description: 'Compete in the latest VR games and experience cutting-edge technology. Open to all skill levels with prizes for top performers.',
        date: '2025-11-30',
        cep: '59066060',
        address: 'Tech Arena, 321',
        city: 'Natal',
        state: 'RN',
        maxPeople: 200,
        participants: [
            { id: 'user48', name: 'Emma Johnson' },
            { id: 'user49', name: 'Matthew Garcia' },
            { id: 'user50', name: 'Avery Martin' },
        ],
        creatorId: '1',
        shareCount: 18,
    },
    {
        id: 15,
        name: 'Beachside Yoga Marathon',
        description: 'A full day of yoga sessions by the beach, featuring different styles and instructors. Suitable for beginners to advanced practitioners.',
        date: '2025-08-01',
        cep: '59160000',
        address: 'Praia do Amor',
        city: 'Tibau do Sul',
        state: 'RN',
        maxPeople: 100,
        participants: [
            { id: 'user51', name: 'Ella Rodriguez' },
            { id: 'user52', name: 'Nathan Clark' },
            { id: 'user53', name: 'Aria Thompson' },
        ],
        creatorId: '6',
        shareCount: 10,
    },
    {
        id: 16,
        name: 'Urban Street Art Festival',
        description: 'A celebration of street art and urban culture, featuring live mural paintings, graffiti workshops, and hip-hop performances.',
        date: '2025-07-15',
        cep: '59025000',
        address: 'Rua da Arte, 789',
        city: 'Natal',
        state: 'RN',
        maxPeople: 500,
        participants: [
            { id: 'user54', name: 'Leo Martinez' },
            { id: 'user55', name: 'Mila Davis' },
            { id: 'user56', name: 'Oscar Wilson' },
        ],
        creatorId: '7',
        shareCount: 5,
    },
    {
        id: 17,
        name: 'Robotics and AI Symposium',
        description: 'An academic conference showcasing the latest advancements in robotics and artificial intelligence, with demonstrations and panel discussions.',
        date: '2025-09-10',
        cep: '59078970',
        address: 'Universidade Federal do Rio Grande do Norte',
        city: 'Natal',
        state: 'RN',
        maxPeople: 300,
        participants: [
            { id: 'user57', name: 'Luna Kim' },
            { id: 'user58', name: 'Felix Brown' },
            { id: 'user59', name: 'Nora Lee' },
        ],
        creatorId: '1',
        shareCount: 10,
    },
    {
        id: 18,
        name: 'Carnival of Cultures',
        description: 'A vibrant festival celebrating the diverse cultures of Brazil, with traditional music, dance performances, and international cuisine.',
        date: '2026-02-14',
        cep: '59020000',
        address: 'Praça Multicultural',
        city: 'Natal',
        state: 'RN',
        maxPeople: 2000,
        participants: [
            { id: 'user60', name: 'Axel Garcia' },
            { id: 'user61', name: 'Ivy Thompson' },
            { id: 'user62', name: 'Hugo Martin' },
        ],
        creatorId: '8',
        shareCount: 20,
    },
    {
        id: 19,
        name: 'Eco-Friendly Home Expo',
        description: 'An exhibition showcasing sustainable home solutions, from energy-efficient appliances to eco-friendly building materials.',
        date: '2025-10-25',
        cep: '59066060',
        address: 'Centro de Exposições Verde',
        city: 'Natal',
        state: 'RN',
        maxPeople: 400,
        participants: [
            { id: 'user63', name: 'Zara Johnson' },
            { id: 'user64', name: 'Finn Davis' },
            { id: 'user65', name: 'Nova Wilson' },
        ],
        creatorId: '6',
        shareCount: 8,
    },
    {
        id: 20,
        name: 'Historical Reenactment: Colonial Brazil',
        description: 'Step back in time and experience life in colonial Brazil through this immersive historical reenactment event.',
        date: '2025-11-08',
        cep: '59025100',
        address: 'Forte dos Reis Magos',
        city: 'Natal',
        state: 'RN',
        maxPeople: 4,
        participants: [
            { id: 'user66', name: 'Atlas Brown' },
            { id: 'user67', name: 'Cora Martinez' },
            { id: 'user68', name: 'Kai Thompson' },
        ],
        creatorId: '5',
        shareCount: 5,
    },
];

export function getEvents(): GatherizeEvent[] {
    return [...events];
}

export function addEvent(event: GatherizeEvent) {
    events.push(event);
}

export function updateEvent(updatedEvent: GatherizeEvent) {
    const index = events.findIndex(e => e.id === updatedEvent.id);
    if (index !== -1) {
        events[index] = updatedEvent;
    }
}

export function deleteEventById(id: number) {
    events = events.filter(e => e.id !== id);
}