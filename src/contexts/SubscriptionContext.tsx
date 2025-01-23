import React, { createContext, useState, useContext, ReactNode } from 'react';
import { updateEventSubscription } from '@/utils/api';
import { GatherizeEvent } from '@/types/event';

interface SubscriptionContextType {
    subscribedEvents: { [eventId: number]: boolean };
    toggleSubscription: (event: GatherizeEvent) => Promise<GatherizeEvent>;
    isSubscribed: (eventId: number) => boolean;
}

const SubscriptionContext = createContext<SubscriptionContextType | undefined>(undefined);

export const SubscriptionProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [subscribedEvents, setSubscribedEvents] = useState<{ [eventId: number]: boolean }>({});

    const toggleSubscription = async (event: GatherizeEvent) => {
        const action = subscribedEvents[event.id] ? 'unsubscribe' : 'subscribe';
        const updatedEvent = await updateEventSubscription(event.id, action);
        setSubscribedEvents(prev => ({
            ...prev,
            [event.id]: !prev[event.id]
        }));
        return updatedEvent;
    };

    const isSubscribed = (eventId: number) => {
        return !!subscribedEvents[eventId];
    };

    return (
        <SubscriptionContext.Provider value={{ subscribedEvents, toggleSubscription, isSubscribed }}>
            {children}
        </SubscriptionContext.Provider>
    );
};

export const useSubscription = () => {
    const context = useContext(SubscriptionContext);
    if (context === undefined) {
        throw new Error('useSubscription must be used within a SubscriptionProvider');
    }
    return context;
};