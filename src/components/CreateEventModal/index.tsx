import React, { useState } from 'react';
import { LuX, LuPlus, LuMinus, LuUser, LuCalendar, LuMapPin, LuPenTool, LuFileText, LuClock } from "react-icons/lu";
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
    TextAreaWrapper,
    FormGrid,
    TimeInput,
    NumberInput
} from './styled';
import { fetchCepData } from '@/utils/cepUtils';
import { GatherizeEvent } from '@/types/event';
import { toast } from 'react-toastify';
import { createEvent } from '@/utils/api';
import { useSession } from 'next-auth/react';

interface CreateEventModalProps {
    isOpen: boolean;
    onClose: () => void;
    onEventCreated: (newEvent: GatherizeEvent) => void;
}

const CreateEventModal: React.FC<CreateEventModalProps> = ({ isOpen, onClose, onEventCreated }) => {
    const { data: session } = useSession();
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [cep, setCep] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [maxPeople, setMaxPeople] = useState('');

    if (!isOpen) return null;


    const handleMaxPeopleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        if (value === '' || /^\d+$/.test(value)) {
            setMaxPeople(value);
        }
    };

    const handleIncrement = () => {
        const currentValue = parseInt(maxPeople) || 0;
        setMaxPeople((currentValue + 1).toString());
    };

    const handleDecrement = () => {
        const currentValue = parseInt(maxPeople) || 0;
        if (currentValue > 1) {
            setMaxPeople((currentValue - 1).toString());
        }
    };

    const handleCepChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const newCep = e.target.value.replace(/\D/g, '');
        setCep(newCep);

        if (newCep.length === 8) {
            const cepData = await fetchCepData(newCep);
            if (cepData) {
                setAddress(cepData.logradouro);
                setCity(cepData.localidade);
                setState(cepData.uf);
            }
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!session || !session.user.id) {
            toast.error('You must be logged in to create an event.');
            return;
        }
        const maxPeopleNumber = parseInt(maxPeople) || 1;
        try {
            const newEvent = await createEvent({
                name,
                description,
                date: `${date}T${time}`,
                cep,
                address,
                city,
                state,
                maxPeople: maxPeopleNumber,
                creatorId: session.user.id,
            });
            onEventCreated(newEvent);
            toast.success('Event created successfully!');
            onClose();
        } catch (error) {
            console.error('Failed to create event:', error);
            toast.error('Failed to create event. Please try again.');
        }
    };

    return (
        <ModalOverlay onClick={onClose}>
            <ModalContent onClick={e => e.stopPropagation()}>
                <CloseButton onClick={onClose}>
                    <LuX className="closeIcon" />
                </CloseButton>
                <h2>Create Event</h2>
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
                                placeholder="Enter event name"
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
                                placeholder="Describe your event"
                            />
                        </TextAreaWrapper>
                    </InputGroup>
                    <FormGrid>
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
                            <Label htmlFor="time">Time</Label>
                            <IconWrapper>
                                <LuClock className="inputIcon" />
                                <TimeInput
                                    id="time"
                                    type="time"
                                    value={time}
                                    onChange={e => setTime(e.target.value)}
                                    required
                                />
                            </IconWrapper>
                        </InputGroup>
                    </FormGrid>
                    <InputGroup>
                        <Label htmlFor="cep">CEP</Label>
                        <IconWrapper>
                            <LuMapPin className="inputIcon" />
                            <Input
                                id="cep"
                                type="text"
                                value={cep}
                                onChange={handleCepChange}
                                maxLength={8}
                                required
                                placeholder="Enter CEP"
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
                                placeholder="Enter address"
                            />
                        </IconWrapper>
                    </InputGroup>
                    <FormGrid>
                        <InputGroup>
                            <Label htmlFor="city">City</Label>
                            <IconWrapper>
                                <LuMapPin className="inputIcon" />
                                <Input
                                    id="city"
                                    type="text"
                                    value={city}
                                    onChange={e => setCity(e.target.value)}
                                    required
                                    placeholder="Enter city"
                                />
                            </IconWrapper>
                        </InputGroup>
                        <InputGroup>
                            <Label htmlFor="state">State</Label>
                            <IconWrapper>
                                <LuMapPin className="inputIcon" />
                                <Input
                                    id="state"
                                    type="text"
                                    value={state}
                                    onChange={e => setState(e.target.value)}
                                    required
                                    placeholder="Enter state"
                                />
                            </IconWrapper>
                        </InputGroup>
                    </FormGrid>
                    <InputGroup>
                        <Label htmlFor="maxPeople">Maximum number of people</Label>
                        <NumberInputWrapper>
                            <LuUser className="inputIcon" />
                            <button type="button" onClick={handleDecrement}>
                                <LuMinus className="buttonIcon" />
                            </button>
                            <NumberInput
                                id="maxPeople"
                                type="text"
                                inputMode="numeric"
                                pattern="\d*"
                                value={maxPeople}
                                onChange={handleMaxPeopleChange}
                                placeholder="Enter max people"
                                required
                            />
                            <button type="button" onClick={handleIncrement}>
                                <LuPlus className="buttonIcon" />
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