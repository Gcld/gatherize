import React, { useState, useEffect } from 'react';
import { LuX, LuPlus, LuMinus, LuUser, LuCalendar, LuMapPin, LuPenTool, LuFileText } from "react-icons/lu";
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
    IconWrapper,
    TextAreaWrapper
} from '../CreateEventModal/styled';

interface EditEventModalProps {
    isOpen: boolean;
    onClose: () => void;
    eventData: {
        name: string;
        description: string;
        date: string;
        address: string;
        maxPeople: number;
    };
}

const EditEventModal: React.FC<EditEventModalProps> = ({ isOpen, onClose, eventData }) => {
    const [name, setName] = useState(eventData.name);
    const [description, setDescription] = useState(eventData.description);
    const [date, setDate] = useState(eventData.date);
    const [address, setAddress] = useState(eventData.address);
    const [maxPeople, setMaxPeople] = useState(eventData.maxPeople);

    useEffect(() => {
        setName(eventData.name);
        setDescription(eventData.description);
        setDate(eventData.date);
        setAddress(eventData.address);
        setMaxPeople(eventData.maxPeople);
    }, [eventData]);

    if (!isOpen) return null;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Updated event data:', { name, description, date, address, maxPeople });
        onClose();
    };

    const handleIncrement = () => setMaxPeople(prev => prev + 1);
    const handleDecrement = () => setMaxPeople(prev => Math.max(1, prev - 1));

    return (
        <ModalOverlay onClick={onClose}>
            <ModalContent onClick={e => e.stopPropagation()}>
                <CloseButton onClick={onClose}>
                    <LuX className="closeIcon" />
                </CloseButton>
                <h2>Edit Event</h2>
                <form onSubmit={handleSubmit}>
                    <InputGroup>
                        <Label htmlFor="name">Event Name</Label>
                        <IconWrapper>
                            <LuPenTool className="inputIcon" />
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
                        <TextAreaWrapper>
                            <LuFileText className="inputIcon" />
                            <TextArea
                                id="description"
                                value={description}
                                onChange={e => setDescription(e.target.value)}
                                required
                            />
                        </TextAreaWrapper>
                    </InputGroup>
                    <InputGroup>
                        <Label htmlFor="date">Date</Label>
                        <IconWrapper>
                            <LuCalendar className="inputIcon" />
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
                            <LuMapPin className="inputIcon" />
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
                            <LuUser className="inputIcon" />
                            <button type="button" onClick={handleDecrement}>
                                <LuMinus className="buttonIcon" />
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
                                <LuPlus className="buttonIcon" />
                            </button>
                        </NumberInputWrapper>
                    </InputGroup>
                    <SubmitButton type="submit">Update Event</SubmitButton>
                </form>
            </ModalContent>
        </ModalOverlay>
    );
};

export default EditEventModal;