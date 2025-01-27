import React from 'react';
import { LuFacebook, LuTwitter, LuLinkedin, LuMail, LuCopy, LuX } from 'react-icons/lu';
import { ModalOverlay, ModalContent, ShareButton, CloseButton } from './styled';
import { toast } from 'react-toastify';

interface ShareModalProps {
    isOpen: boolean;
    onClose: () => void;
    eventUrl: string;
    eventName: string;
    eventId: number;
    onShare: () => void;
}

type SharePlatform = 'facebook' | 'twitter' | 'linkedin' | 'email';

const ShareModal: React.FC<ShareModalProps> = ({ isOpen, onClose, eventUrl, eventName, eventId, onShare }) => {
    if (!isOpen) return null;

    const encodedUrl = encodeURIComponent(eventUrl);
    const encodedName = encodeURIComponent(eventName);

    const shareUrls: Record<SharePlatform, string> = {
        facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
        twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedName}`,
        linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedName}`,
        email: `mailto:?subject=${encodedName}&body=Check out this event: ${encodedUrl}`
    };

    const handleShare = async (platform: SharePlatform) => {
        try {
            await fetch(`/api/event/${eventId}/share`, { method: 'POST' });
            onShare();
            window.open(shareUrls[platform], '_blank');
        } catch (error) {
            console.error('Error sharing event:', error);
        }
    };

    const copyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(eventUrl);
            await fetch(`/api/event/${eventId}/share`, { method: 'POST' });
            onShare();
            toast.success('Link copied to clipboard!');
        } catch (error) {
            console.error('Error copying to clipboard:', error);
            toast.error('Failed to copy link');
        }
    };

    return (
        <ModalOverlay onClick={onClose}>
            <ModalContent onClick={e => e.stopPropagation()}>
                <CloseButton onClick={onClose}>
                    <LuX />
                </CloseButton>
                <h2>Share this event</h2>
                <ShareButton onClick={() => handleShare('facebook')}>
                    <LuFacebook /> Share on Facebook
                </ShareButton>
                <ShareButton onClick={() => handleShare('twitter')}>
                    <LuTwitter /> Share on Twitter
                </ShareButton>
                <ShareButton onClick={() => handleShare('linkedin')}>
                    <LuLinkedin /> Share on LinkedIn
                </ShareButton>
                <ShareButton onClick={() => handleShare('email')}>
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