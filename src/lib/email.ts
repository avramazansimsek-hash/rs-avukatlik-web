import emailjs from '@emailjs/browser';
import { emailConfig } from '@/config/emailjs';

interface ContactFormData {
    name: string;
    email: string;
    phone?: string;
    subject: string;
    message: string;
}

export const sendContactEmail = async (data: ContactFormData) => {
    try {
        const templateParams = {
            from_name: data.name,
            from_email: data.email,
            phone: data.phone || 'Belirtilmedi',
            subject: data.subject,
            message: data.message,
            to_name: 'RS Hukuk & Danışmanlık',
        };

        const response = await emailjs.send(
            emailConfig.serviceId,
            emailConfig.templateId,
            templateParams,
            emailConfig.publicKey
        );

        return { success: true, response };
    } catch (error) {
        console.error('Email sending failed:', error);
        return { success: false, error };
    }
};
