# ClinicPay

> A mobile-first healthcare micro-payment system built on Stellar.

ClinicPay enables patients in underserved communities to pay for medical treatment in small daily or weekly installments using stablecoins (USDC on Stellar), while guaranteeing clinics receive full payment through Soroban-powered smart contract escrows.

---

## Table of Contents

- [Problem Statement](#problem-statement)
- [Solution](#solution)
- [Target Users](#target-users)
- [Features](#features)
- [User Flows](#user-flows)
- [Tech Stack](#tech-stack)
- [Architecture Overview](#architecture-overview)
- [Smart Contracts](#smart-contracts)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Why Africa](#why-africa)
- [Contributing](#contributing)
- [License](#license)

---

## Problem Statement

Across many African countries, patients delay or avoid medical treatment because they cannot afford large upfront costs. Even basic healthcare — lab tests, drugs, scans — creates significant financial pressure on low-income individuals and families.

Clinics face their own challenges:

- Patients default on informal payment agreements
- Repayment schedules are unstructured and unenforceable
- Cash handling is inefficient and prone to disputes

There is currently no transparent, automated, or structured mechanism that allows patients to pay in small amounts while guaranteeing clinics will be fully paid.

---

## Solution

ClinicPay introduces a **pay-as-you-heal** micro-payment model:

- Patients pay in small daily or weekly USDC installments
- Funds are held in a **Soroban smart contract escrow** — not accessible to either party until the target is met
- Once the full amount is deposited, the contract automatically releases funds to the clinic
- NGOs, employers, and donors can optionally top up patient plans through an on-chain subsidy layer

---

## Target Users

### Primary Users

**Patients**
- Individuals who cannot afford upfront medical costs
- Low-income patients needing lab tests, antenatal care, or medication
- Families with recurring health expenses
- Chronic disease patients requiring long-term treatment

**Clinics & Hospitals**
- Private clinics
- Diagnostic centers
- Pharmacies offering expensive medication

### Secondary Users

**NGOs & Donors**
- Organizations supporting maternal health
- Programs subsidizing HIV, TB, and malaria treatments
- Emergency coverage providers

**Employers**
- Companies offering co-pay support for staff
- Organizations subsidizing workplace medical checks

---

## Features

### Patient Features

| Feature | Description |
|---|---|
| Treatment Plan Creation | Select a clinic, enter treatment cost, choose a repayment schedule, and lock funds into escrow |
| Micro-Payments | Make small daily/weekly USDC deposits with a live progress bar |
| Auto-Completion | Contract auto-releases funds to the clinic once the full amount is paid |
| Subsidy Layer | NGOs or employers can top up a patient's plan transparently on-chain |
| Emergency Buffer | A loan-like advance backed by repayment history, approved by the clinic for early treatment |

### Clinic Features

| Feature | Description |
|---|---|
| Treatment Plan Dashboard | View all pending patient escrows, verify patients, and confirm service delivery |
| Instant Settlement | Receive USDC instantly once a treatment plan is fully funded |
| Partial Release Mode | Release funds in milestones for multi-stage treatments (e.g., pregnancy care) |
| Reports & Analytics | Track completed treatments, revenue insights, and subsidy impact |

### Smart Contract Features (Soroban)

| Feature | Description |
|---|---|
| Escrow Contract | Holds patient deposits and releases to clinic when the target amount is reached |
| Auto-Reconciliation | Prevents disputes with a publicly verifiable on-chain contract state |
| Partial Funding | Allows donors to fund a percentage of a patient's treatment plan |
| Claim Fail-Safe | If a patient cancels, unspent funds are returned — clinic must approve cancellation |

---

## User Flows

### Flow 1 — Patient Creates a Treatment Plan

```
1. Patient scans clinic QR code or selects clinic from list
2. Inputs treatment type and total cost
3. System calculates recommended daily/weekly payment amount
4. Patient deposits first micro-payment into escrow
5. Contract is created and becomes visible to the clinic
```

### Flow 2 — Patient Makes Micro-Payments

```
1. Patient opens the app
2. Selects "Continue Payments"
3. Makes a small USDC deposit
4. Progress bar updates in real time
5. App shows estimated time to full payment completion
```

### Flow 3 — Clinic Redeems a Completed Plan

```
1. Escrow reaches the total target amount
2. Contract automatically releases funds
3. Clinic wallet receives instant USDC settlement
4. Clinic marks the treatment as completed
```

### Flow 4 — Subsidy / Matching (Optional)

```
1. NGO or employer selects a treatment category (e.g., antenatal care)
2. Patient joins a matched plan
3. For every $1 the patient deposits, the sponsor contributes $0.10–$1.00
4. Contract tracks each contributor's deposits separately
5. Clinic receives the full combined amount upon completion
```

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React / Next.js or Flutter (mobile-first) |
| Wallet Integration | USDC on Stellar |
| QR Scanning | Clinic onboarding via QR code |
| Backend | Node.js / REST API |
| Smart Contracts | Soroban (Stellar) |
| Stablecoin | USDC on Stellar |

---

## Architecture Overview

```
┌─────────────────────────────────────────────────────┐
│                   Mobile Frontend                   │
│         (React/Next.js or Flutter)                  │
│  - Patient UI     - Clinic Dashboard                │
│  - QR Scanner     - Progress Tracker                │
└────────────────────────┬────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────┐
│                     Backend API                     │
│  - Account Management                               │
│  - Treatment Plan Metadata                          │
│  - Notification Engine                              │
│  - Encrypted Health Record References               │
│  - Analytics Endpoints                              │
└────────────────────────┬────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────┐
│              Stellar Blockchain (Soroban)            │
│  - Main Escrow Contract                             │
│  - Matching / Top-up Contract (optional)            │
│  - Milestone Release Contract (future)              │
└─────────────────────────────────────────────────────┘
```

---

## Smart Contracts

ClinicPay uses **Soroban** — Stellar's smart contract platform — to power its escrow and payment logic.

### Main Escrow Contract

- Accepts USDC deposits from patients
- Holds funds until the target amount is reached
- Automatically releases funds to the clinic wallet upon completion
- Returns unspent funds to the patient if the plan is cancelled (with clinic approval)

### Matching / Top-up Contract *(optional)*

- Accepts contributions from NGOs or employers
- Tracks each contributor's share separately on-chain
- Combines patient and sponsor deposits before releasing to the clinic

### Milestone Release Contract *(future)*

- Releases funds in stages based on confirmed treatment milestones
- Designed for multi-stage care such as antenatal programs or phased surgeries

---

## Getting Started

### Prerequisites

- Node.js >= 18
- A Stellar wallet with USDC (testnet or mainnet)
- Soroban CLI (for contract deployment)

### Installation

```bash
# Clone the repository
git clone https://github.com/your-org/clinicpay.git
cd clinicpay

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env
```

### Environment Variables

```env
STELLAR_NETWORK=testnet
STELLAR_RPC_URL=https://soroban-testnet.stellar.org
CONTRACT_ADDRESS=<your_deployed_escrow_contract_address>
USDC_ASSET_CODE=USDC
USDC_ISSUER=<usdc_issuer_address>
```

### Running the App

```bash
# Development
npm run dev

# Production build
npm run build
npm start
```

### Deploying Smart Contracts

```bash
# Build the contract
soroban contract build

# Deploy to testnet
soroban contract deploy \
  --wasm target/wasm32-unknown-unknown/release/clinicpay_escrow.wasm \
  --network testnet
```

---

## Project Structure

```
clinicpay/
├── frontend/               # Mobile-first React/Next.js or Flutter app
│   ├── components/         # Reusable UI components
│   ├── pages/              # App screens and routes
│   └── utils/              # Stellar wallet helpers, QR scanner
├── backend/                # API server
│   ├── routes/             # REST API endpoints
│   ├── services/           # Business logic
│   └── models/             # Data models
├── contracts/              # Soroban smart contracts
│   ├── escrow/             # Main escrow contract
│   ├── matching/           # Subsidy/top-up contract
│   └── milestone/          # Milestone release contract (future)
├── .env.example
├── package.json
└── README.md
```

---

## Why Africa

ClinicPay is purpose-built for African healthcare contexts:

- **Culturally aligned** — mirrors familiar daily savings behavior (like ajo/esusu)
- **Guaranteed clinic revenue** — escrow removes the risk of patient default
- **Mobile-first UX** — designed for low-end smartphones and limited data
- **Stablecoin-based** — USDC provides predictable value, shielding users from local currency volatility
- **Transparent and trustless** — all payment states are publicly verifiable on-chain

---

## Contributing

Contributions are welcome. Please open an issue first to discuss what you would like to change.

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m 'add your feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a Pull Request

---

## License

This project is licensed under the [MIT License](LICENSE).

---