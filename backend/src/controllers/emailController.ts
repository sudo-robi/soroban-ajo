import { Request, Response } from 'express';
import { queueEmail } from '../queues/emailQueue';

export const emailController = {
  // Send test email
  async sendTestEmail(req: Request, res: Response): Promise<void> {
    try {
      const { to, subject, message } = req.body;

      if (!to || !subject || !message) {
        return res.status(400).json({ error: 'Missing required fields' });
      }

      await queueEmail.custom({
        to,
        subject,
        html: `<p>${message}</p>`,
      });

      res.json({ success: true, message: 'Email queued' });
    } catch (error) {
      res.status(500).json({ error: 'Failed to queue email' });
    }
  },

  // Verify email
  async verifyEmail(req: Request, res: Response): Promise<void> {
    try {
      const { token } = req.body;

      if (!token) {
        return res.status(400).json({ error: 'Token required' });
      }

      // TODO: Verify token and update user
      // For now, just return success
      res.json({ success: true, message: 'Email verified' });
    } catch (error) {
      res.status(500).json({ error: 'Verification failed' });
    }
  },

  // Unsubscribe from emails
  async unsubscribe(req: Request, res: Response): Promise<void> {
    try {
      const { email, token } = req.body;

      if (!email && !token) {
        return res.status(400).json({ error: 'Email or token required' });
      }

      // TODO: Add email to unsubscribe list
      res.json({ success: true, message: 'Unsubscribed successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Unsubscribe failed' });
    }
  },

  // Get email status
  async getEmailStatus(_req: Request, res: Response): Promise<void> {
    try {
      const isEnabled = !!process.env.SENDGRID_API_KEY;
      
      res.json({
        enabled: isEnabled,
        provider: 'SendGrid',
        from: process.env.EMAIL_FROM || 'noreply@ajo.app',
      });
    } catch (error) {
      res.status(500).json({ error: 'Failed to get status' });
    }
  },

  // Send welcome email (for testing)
  async sendWelcome(req: Request, res: Response): Promise<void> {
    try {
      const { email, name } = req.body;

      if (!email || !name) {
        return res.status(400).json({ error: 'Email and name required' });
      }

      await queueEmail.welcome(email, name);

      res.json({ success: true, message: 'Welcome email queued' });
    } catch (error) {
      res.status(500).json({ error: 'Failed to send welcome email' });
    }
  },
};
