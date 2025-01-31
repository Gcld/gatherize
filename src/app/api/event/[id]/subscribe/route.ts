import { NextRequest, NextResponse } from 'next/server';
import { events } from '@/data/events';

export async function POST(request: NextRequest) {
    try {
        const id = request.nextUrl.pathname.split('/').slice(-2)[0];
        const numericId = id ? parseInt(id) : null;

        if (numericId === null || isNaN(numericId)) {
            return NextResponse.json({ 
                error: 'Invalid event ID', 
                details: 'O ID do evento fornecido é inválido'
            }, { status: 400 });
        }

        const eventIndex = events.findIndex(e => e.id === numericId);

        if (eventIndex === -1) {
            return NextResponse.json({ 
                error: 'Event not found',
                details: 'O evento especificado não foi encontrado'
            }, { status: 404 });
        }

        const { action, userId, userName } = await request.json();

        if (action === 'subscribe') {
            const isAlreadySubscribed = events[eventIndex].participants
                .some(p => p.id === userId);

            if (isAlreadySubscribed) {
                return NextResponse.json({ 
                    error: 'Already subscribed',
                    details: 'Usuário já está inscrito neste evento'
                }, { status: 400 });
            }

            if (events[eventIndex].participants.length >= events[eventIndex].maxPeople) {
                return NextResponse.json({ 
                    error: 'Event is full',
                    details: 'O evento atingiu sua capacidade máxima'
                }, { status: 400 });
            }

            events[eventIndex].participants.push({ 
                id: userId, 
                name: userName 
            });
        } 
        else if (action === 'unsubscribe') {
            const participantIndex = events[eventIndex].participants
                .findIndex(p => p.id === userId);

            if (participantIndex === -1) {
                return NextResponse.json({ 
                    error: 'Participant not found',
                    details: 'Usuário não está inscrito neste evento'
                }, { status: 400 });
            }

            events[eventIndex].participants.splice(participantIndex, 1);
        } 
        else {
            return NextResponse.json({ 
                error: 'Invalid action',
                details: 'A ação especificada é inválida'
            }, { status: 400 });
        }

        return NextResponse.json({
            success: true,
            event: events[eventIndex],
            message: action === 'subscribe' ? 
                'Inscrição realizada com sucesso' : 
                'Desinscrição realizada com sucesso'
        });

    } catch (error) {
        console.error('Erro no processamento da requisição:', error);
        return NextResponse.json({ 
            error: 'Internal server error',
            details: 'Ocorreu um erro interno no servidor'
        }, { status: 500 });
    }
}