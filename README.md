# Omen Protocol

The Trust Layer for the Sui Ecosystem.

## Structure

- `apps/web`: Next.js 14 Web Application (White Canvas Protocol Design System)
- `packages/sdk`: Clean TypeScript SDK for trust score queries and security assertions.

## Development

### Setup

1. From the root directory, install dependencies:

   ```bash
   npm install
   ```

2. Build the packages and apps:
   ```bash
   npm run build
   ```

### Running Locally

To start the web application:

```bash
npm run dev
```

The app will be available at `http://localhost:3000`.

## SDK Usage

```typescript
import { OmenSDK } from "@omen-labs/sdk";

const omen = new OmenSDK({ network: "mainnet" });

// Get Trust Index
const { score, status } = await omen.getTrustScore("0x...");

// On-chain Protection
omen.injectSecurityAssertion(tx, {
  targetContract: "0x...",
  minScore: 85,
});
```

## Production Stack

The Omen platform uses a production-grade infrastructure for user onboarding:

- **Database**: [Supabase](https://supabase.com) (PostgreSQL) for secure, scalable waitlist storage.
- **Notifications**: [EmailJS](https://emailjs.com) for instant user confirmations and admin alerts.
- **Deployment**: [Vercel](https://vercel.com) for high-performance global delivery.

### Environment Configuration

To enable the waitlist system, ensure the following variables are configured:

```env
# Supabase (OMEN Project)
NEXT_PUBLIC_SUPABASE_URL=...
NEXT_PUBLIC_SUPABASE_ANON_KEY=...

# EmailJS
NEXT_PUBLIC_EMAILJS_SERVICE_ID=...
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=...
NEXT_PUBLIC_EMAILJS_CONFIRM_TEMPLATE_ID=...
```
