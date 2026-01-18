
"use server";

import fs from 'fs';
import path from 'path';

export async function submitContactForm(formData: FormData) {
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const message = formData.get('message') as string;
    const date = new Date().toISOString();

    // Simple CSV format: Date, Name, Email, Message
    // Escape quotes in message to prevent breaking CSV structure
    const safeMessage = message ? message.replace(/"/g, '""') : '';
    const csvLine = `"${date}","${name}","${email}","${safeMessage}"\n`;

    const filePath = path.join(process.cwd(), 'messages.csv');

    // If file doesn't exist, add header
    if (!fs.existsSync(filePath)) {
        fs.writeFileSync(filePath, '"Date","Name","Email","Message"\n');
    }

    try {
        fs.appendFileSync(filePath, csvLine);
        return { success: true };
    } catch (error) {
        console.error('Error saving to CSV:', error);
        return { success: false, error: 'Failed to save message' };
    }
}
