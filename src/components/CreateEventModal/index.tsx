import React, { useState } from 'react';
import { LuX, LuPlus, LuMinus, LuUser, LuCalendar, LuMapPin, LuPenTool } from "react-icons/lu";
import { 
    ModalOverlay, 
    ModalContent, 
    CloseButton, 
    InputGroup,
    Input, 
    TextArea, 
    NumberInputWrapper,
    SubmitButton,
    Label,
    IconWrapper
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
                    <InputGroup>
                        <Label htmlFor="name">Event Name</Label>
                        <IconWrapper>
                            <LuPenTool />
                            <Input 
                                id="name"
                                type="text" 
                                value={name} 
                                onChange={e => setName(e.target.value)}
                                required
                            />
                        </IconWrapper>
                    </InputGroup>
                    <InputGroup>
                        <Label htmlFor="description">Description</Label>
                        <TextArea 
                            id="description"
                            value={description} 
                            onChange={e => setDescription(e.target.value)}
                            required
                        />
                    </InputGroup>
                    <InputGroup>
                        <Label htmlFor="date">Date</Label>
                        <IconWrapper>
                            <LuCalendar />
                            <Input 
                                id="date"
                                type="date" 
                                value={date} 
                                onChange={e => setDate(e.target.value)}
                                required
                            />
                        </IconWrapper>
                    </InputGroup>
                    <InputGroup>
                        <Label htmlFor="address">Address</Label>
                        <IconWrapper>
                            <LuMapPin />
                            <Input 
                                id="address"
                                type="text" 
                                value={address} 
                                onChange={e => setAddress(e.target.value)}
                                required
                            />
                        </IconWrapper>
                    </InputGroup>
                    <InputGroup>
                        <Label htmlFor="maxPeople">Maximum number of people</Label>
                        <NumberInputWrapper>
                            <LuUser />
                            <button type="button" onClick={handleDecrement}>
                                <LuMinus />
                            </button>
                            <Input 
                                id="maxPeople"
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
                    </InputGroup>
                    <SubmitButton type="submit">Create Event</SubmitButton>
                </form>
            </ModalContent>
        </ModalOverlay>
    );
};

export default CreateEventModal;