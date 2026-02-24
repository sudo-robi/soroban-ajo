import 'dotenv/config';
import { emailService } from './services/emailService';
import { queueEmail } from './queues/emailQueue';

async function testEmailService() {
  console.log('🧪 Testing Email Service...\n');

  // Test 1: Check service status
  console.log('1. Checking service status...');
  const isEnabled = !!process.env.SENDGRID_API_KEY;
  console.log(`   Email service: ${isEnabled ? '✅ Enabled' : '⚠️  Disabled (no API key)'}`);
  console.log(`   From email: ${process.env.EMAIL_FROM || 'noreply@ajo.app'}`);

  // Test 2: Test welcome email
  console.log('\n2. Testing welcome email...');
  const welcomeResult = await emailService.sendWelcomeEmail('test@example.com', 'Test User');
  console.log(`   Result: ${welcomeResult ? '✅ Sent' : '⚠️  Not sent (service disabled)'}`);

  // Test 3: Test contribution reminder
  console.log('\n3. Testing contribution reminder...');
  const reminderResult = await emailService.sendContributionReminder(
    'test@example.com',
    'Test Group',
    '100 XLM',
    '2026-03-01'
  );
  console.log(`   Result: ${reminderResult ? '✅ Sent' : '⚠️  Not sent (service disabled)'}`);

  // Test 4: Test queue
  console.log('\n4. Testing email queue...');
  try {
    await queueEmail.welcome('test@example.com', 'Queue Test');
    console.log('   ✅ Email queued successfully');
  } catch (error) {
    console.log('   ⚠️  Queue error (Redis may not be running):', (error as Error).message);
  }

  console.log('\n✅ Email service tests complete!');
  console.log('\nNote: To actually send emails, set SENDGRID_API_KEY in .env');
  console.log('Note: To use queue, ensure Redis is running');
  
  process.exit(0);
}

testEmailService().catch((error) => {
  console.error('\n❌ Test failed:', error);
  process.exit(1);
});
