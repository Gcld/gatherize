import React, { useState } from 'react';
import { LuX, LuPlus, LuMinus } from "react-icons/lu";
import { 
    ModalOverlay, 
    ModalContent, 
    CloseButton, 
    Input, 
    TextArea, 
    NumberInput, 
    NumberInputWrapper,
    SubmitButton
} from './styled';

interface CreateEventModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const CreateEventModal: React.FC<CreateEventModalProps> = ({ isOpen, onClose }) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState('');
    const [address, setAddress] = useState('');
    const [maxPeople, setMaxPeople] = useState(1);

    if (!isOpen) return null;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        //  Adicionar futuramente a lógica para criar o evento quando eu conseguir acesso à API
        console.log({ name, description, date, address, maxPeople });
        onClose();
    };

    const handleIncrement = () => setMaxPeople(prev => prev + 1);
    const handleDecrement = () => setMaxPeople(prev => Math.max(1, prev - 1));

    return (
        <ModalOverlay onClick={onClose}>
            <ModalContent onClick={e => e.stopPropagation()}>
                <CloseButton onClick={onClose}>
                    <LuX />
                </CloseButton>
                <h2>Create Event</h2>
                <form onSubmit={handleSubmit}>
                    <Input 
                        type="text" 
                        placeholder="Name" 
                        value={name} 
                        onChange={e => setName(e.target.value)}
                        required
                    />
                    <TextArea 
                        placeholder="Description" 
                        value={description} 
                        onChange={e => setDescription(e.target.value)}
                        required
                    />
                    <Input 
                        type="date" 
                        value={date} 
                        onChange={e => setDate(e.target.value)}
                        required
                    />
                    <Input 
                        type="text" 
                        placeholder="Address" 
                        value={address} 
                        onChange={e => setAddress(e.target.value)}
                        required
                    />
                    <NumberInputWrapper>
                        <button type="button" onClick={handleDecrement}>
                            <LuMinus />
                        </button>
                        <NumberInput 
                            type="number" 
                            value={maxPeople} 
                            onChange={e => setMaxPeople(Math.max(1, parseInt(e.target.value) || 1))}
                            min="1"
                            required
                        />
                        <button type="button" onClick={handleIncrement}>
                            <LuPlus />
                        </button>
                    </NumberInputWrapper>
                    <SubmitButton type="submit">Create Event</SubmitButton>
                </form>
            </ModalContent>
        </ModalOverlay>
    );
};

export default CreateEventModal;