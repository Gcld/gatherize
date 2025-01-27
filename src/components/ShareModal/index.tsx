import React from 'react';
import { LuFacebook, LuTwitter, LuLinkedin, LuMail, LuCopy, LuX } from 'react-icons/lu';
import { ModalOverlay, ModalContent, ShareButton, CloseButton } from './styled';
import { toast } from 'react-toastify';

interface ShareModalProps {
    isOpen: boolean;
    onClose: () => void;
    eventUrl: string;
    eventName: string;
}

const ShareModal: React.FC<ShareModalProps> = ({ isOpen, onClose, eventUrl, eventName }) => {
    if (!isOpen) return null;

    const encodedUrl = encodeURIComponent(eventUrl);
    const encodedName = encodeURIComponent(eventName);

    const shareUrls = {
        facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
        twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedName}`,
        linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedName}`,
        email: `mailto:?subject=${encodedName}&body=Check out this event: ${encodedUrl}`
    };

    const copyToClipboard = () => {
        navigator.clipboard.writeText(eventUrl);
        toast.success('Link copied to clipboard!');
    };

    return (
        <ModalOverlay onClick={onClose}>
            <ModalContent onClick={e => e.stopPropagation()}>
                <CloseButton onClick={onClose}>
                    <LuX />
                </CloseButton>
                <h2>Share this event</h2>
                <ShareButton onClick={() => window.open(shareUrls.facebook, '_blank')}>
                    <LuFacebook /> Share on Facebook
                </ShareButton>
                <ShareButton onClick={() => window.open(shareUrls.twitter, '_blank')}>
                    <LuTwitter /> Share on Twitter
                </ShareButton>
                <ShareButton onClick={() => window.open(shareUrls.linkedin, '_blank')}>
                    <LuLinkedin /> Share on LinkedIn
                </ShareButton>
                <ShareButton onClick={() => window.open(shareUrls.email)}>
                    <LuMail /> Share via Email
                </ShareButton>
                <ShareButton onClick={copyToClipboard}>
                    <LuCopy /> Copy Link
                </ShareButton>
            </ModalContent>
        </ModalOverlay>
    );
};

export default ShareModal;