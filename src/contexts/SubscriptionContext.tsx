'use client';

import React, { createContext, useState, useContext, ReactNode } from 'react';

interface SubscriptionContextType {
    subscribedEvents: { [eventId: number]: boolean };
    toggleSubscription: (eventId: number) => void;
    isSubscribed: (eventId: number) => boolean;
}

const SubscriptionContext = createContext<SubscriptionContextType | undefined>(undefined);

export const SubscriptionProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [subscribedEvents, setSubscribedEvents] = useState<{ [eventId: number]: boolean }>({});

    const toggleSubscription = (eventId: number) => {
        setSubscribedEvents(prev => ({
            ...prev,
            [eventId]: !prev[eventId]
        }));
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