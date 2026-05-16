# ClinicPay

**Healthcare micro-payments for underserved communities — powered by Stellar, Soroban, and USDC.**

> A patient in Lagos shouldn't have to choose between eating and getting a lab test.  
> ClinicPay lets them pay for treatment the same way they save — small amounts, every day.

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![Built on Stellar](https://img.shields.io/badge/Built%20on-Stellar-blueviolet)](https://stellar.org)
[![Smart Contracts: Soroban](https://img.shields.io/badge/Contracts-Soroban-blue)](https://soroban.stellar.org)
[![Stablecoin: USDC](https://img.shields.io/badge/Stablecoin-USDC-2775CA)](https://www.circle.com/usdc)
[![Open for Contributions](https://img.shields.io/badge/Contributions-Welcome-brightgreen)](#contributing)

---

## The Problem

Across much of Sub-Saharan Africa, the barrier to healthcare is not the absence of clinics — it's **the demand for full payment upfront.**

Patients skip critical diagnostics, discontinue treatment halfway, or take informal loans at predatory rates — all because they cannot pay a lump sum on the day of care. Meanwhile, clinics that extend informal credit face defaults, disputes, and cash flow problems with no recourse.

The result: **preventable health crises** on one side, **unsustainable clinics** on the other.

There is currently no transparent, structured, or automated mechanism that lets patients pay in small installments while **guaranteeing clinics receive the full amount.**

---

## The Solution

ClinicPay introduces a **pay-as-you-heal** model using blockchain-enforced escrow:

- Patients deposit small daily or weekly **USDC installments** into a smart contract
- Funds are **locked in escrow** — inaccessible to either party until the target is reached
- Once the treatment cost is fully covered, the contract **automatically releases funds** to the clinic
- NGOs, employers, and donors can **top up patient plans** via an on-chain subsidy layer

This makes informal "buy now, pay later" agreements in healthcare **trustless, transparent, and enforceable** — without banks, intermediaries, or legal overhead.

---

## Why It Works in Africa

ClinicPay is not a generic fintech product adapted for Africa. It is **purpose-built** for the context:

| Design Choice | Rationale |
|---|---|
| USDC stablecoin | Shields patients and clinics from local currency volatility |
| Stellar network | Near-zero fees (~$0.00001/tx), 5-second finality — viable for micro-payments |
| Soroban smart contracts | Trustless escrow with no intermediaries |
| Mobile-first UX | Built for low-end Android phones and limited data connections |
| Daily installment model | Mirrors *ajo/esusu* — the familiar rotating savings culture across West Africa |
| On-chain subsidy layer | Designed for NGO and employer co-payment programs common in the region |

---

## How It Works

### For Patients

```
1.  Scan a clinic's QR code or search for the clinic in-app
2.  Enter the treatment type and total cost
3.  ClinicPay calculates a recommended daily or weekly payment schedule
4.  Make the first micro-payment — the escrow contract is created
5.  Continue paying in small installments over days or weeks
6.  When the full amount is deposited, the clinic is paid automatically
```

### For Clinics

```
1.  Dashboard shows all active patient escrows and funding progress
2.  Receive instant USDC settlement the moment a plan is fully funded
3.  Optionally release partial funds for multi-stage treatments (e.g., antenatal care)
4.  Track revenue, completed treatments, and subsidy impact in real time
```

### For NGOs and Employers (Optional)

```
1.  Select a treatment category to sponsor (e.g., maternal health, HIV medication)
2.  Set a matching rate — e.g., $0.50 for every $1 a patient deposits
3.  Contributions are tracked separately on-chain
4.  Clinic receives the full combined amount upon plan completion
```

---

## Features

### Patient-Facing

- **Treatment Plan Creation** — Select a clinic, enter cost, pick a repayment schedule, lock into escrow
- **Live Payment Progress** — Real-time progress bar with estimated completion date
- **Micro-Deposits** — Make deposits as small as the network allows, any time
- **Auto-Completion** — Contract releases funds the moment the target is met — no manual action required
- **Subsidy Visibility** — See in real time when an NGO or employer is co-contributing to your plan
- **Emergency Advance** — Loan-like early treatment access backed by payment history, approved by the clinic

### Clinic-Facing

- **Escrow Dashboard** — View all pending patient plans, with real-time funding status
- **Instant Settlement** — USDC lands in the clinic wallet automatically when a plan completes
- **Partial Release Mode** — Unlock funds in milestone stages for phased treatments
- **Analytics** — Revenue insights, treatment completion rates, subsidy breakdown

### Smart Contract Layer (Soroban)

- **Main Escrow Contract** — Accepts patient deposits, holds funds, auto-releases on completion
- **Matching/Top-up Contract** — Accepts sponsor contributions, tracks shares separately on-chain
- **Milestone Release Contract** *(in development)* — Stages fund release based on confirmed treatment milestones
- **Cancellation Fail-Safe** — Returns unspent funds to the patient if a plan is cancelled, with clinic approval

---

## Architecture

```
┌──────────────────────────────────────────────────────────────┐
│                     Mobile Frontend                          │
│              React / Next.js  ·  Flutter                     │
│                                                              │
│   Patient UI  ·  Clinic Dashboard  ·  QR Scanner            │
│   Payment Progress  ·  Subsidy Tracker  ·  Analytics         │
└─────────────────────────┬────────────────────────────────────┘
                          │  REST / WebSocket
                          ▼
┌──────────────────────────────────────────────────────────────┐
│                       Backend API                            │
│                      Node.js / Express                       │
│                                                              │
│   Account Management  ·  Treatment Plan Metadata            │
│   Notification Engine  ·  Encrypted Health Record Refs      │
│   Analytics Endpoints  ·  Subsidy Matching Logic            │
└─────────────────────────┬────────────────────────────────────┘
                          │  Stellar SDK / Soroban RPC
                          ▼
┌──────────────────────────────────────────────────────────────┐
│               Stellar Blockchain (Soroban)                   │
│                                                              │
│   [Escrow Contract]   — core payment & release logic        │
│   [Matching Contract] — NGO/employer subsidy tracking       │
│   [Milestone Contract]— staged release (in development)     │
└──────────────────────────────────────────────────────────────┘
```

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React / Next.js (web) · Flutter (mobile) |
| Backend | Node.js · Express · REST API |
| Blockchain | Stellar · Soroban smart contracts |
| Stablecoin | USDC on Stellar |
| Wallet Integration | Freighter · Lobstr · Custom mobile wallet |
| QR Onboarding | Clinic onboarding via scannable QR codes |
| Notifications | Push + SMS for payment reminders |

---

## Smart Contracts

All contracts are written in **Rust** and deployed on **Soroban**, Stellar's smart contract platform.

### `escrow/` — Main Escrow Contract

The core of ClinicPay. Handles patient deposits, holds USDC securely, and releases to the clinic wallet when the target amount is reached.

**Key functions:**
- `create_plan(patient, clinic, target_amount, schedule)` — initialises a treatment plan
- `deposit(plan_id, amount)` — accepts a patient micro-payment
- `release(plan_id)` — auto-triggers when balance meets the target
- `cancel(plan_id)` — returns unspent funds to patient (requires clinic approval)

### `matching/` — Subsidy / Top-up Contract *(optional)*

Enables NGOs and employers to co-fund patient plans on-chain with full contribution transparency.

**Key functions:**
- `register_sponsor(sponsor, category, match_rate)` — sets up a sponsor with a matching rule
- `top_up(plan_id, amount)` — sponsor contributes to a patient plan
- `get_contributions(plan_id)` — returns a breakdown of each contributor's share

### `milestone/` — Milestone Release Contract *(in development)*

Designed for multi-stage care — such as antenatal programs or phased surgeries — where funds should be unlocked incrementally as the clinic confirms each treatment stage.

---

## Project Structure

```
clinicpay/
├── frontend/
│   ├── components/         # Reusable UI components
│   ├── pages/              # App screens and routes
│   └── utils/              # Stellar wallet helpers, QR scanner, formatters
├── backend/
│   ├── routes/             # REST API endpoints
│   ├── services/           # Business logic (plans, subsidies, notifications)
│   └── models/             # Data models
├── contracts/
│   ├── escrow/             # Main escrow contract (Rust / Soroban)
│   ├── matching/           # Subsidy/top-up contract
│   └── milestone/          # Milestone release contract (in development)
├── docs/                   # Additional documentation and diagrams
├── .env.example
├── package.json
└── README.md
```

---

## Getting Started

### Prerequisites

- Node.js >= 18
- Rust toolchain with `wasm32-unknown-unknown` target
- [Soroban CLI](https://soroban.stellar.org/docs/getting-started/setup)
- A Stellar wallet with testnet USDC (use [Stellar Laboratory](https://laboratory.stellar.org) to fund)

### Installation

```bash
# Clone the repository
git clone https://github.com/your-org/clinicpay.git
cd clinicpay

# Install Node dependencies
npm install

# Set up environment variables
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
# Start development server
npm run dev

# Production build
npm run build && npm start
```

### Deploying Smart Contracts

```bash
# Build the Soroban contract
soroban contract build

# Deploy to Stellar testnet
soroban contract deploy \
  --wasm target/wasm32-unknown-unknown/release/clinicpay_escrow.wasm \
  --network testnet

# (Optional) Run contract tests
cargo test
```

---

## Contributing

ClinicPay is an open-source project and contributions are actively welcomed — whether you're fixing a bug, improving the UI, writing tests, or working on smart contract logic.

### Good First Issues

If you're new to the project, look for issues tagged:

- `good first issue` — small, self-contained tasks
- `help wanted` — areas where the maintainers would love support
- `contracts` — Soroban/Rust work on the escrow and matching logic
- `frontend` — React/Flutter UI improvements
- `docs` — documentation, diagrams, translations

### How to Contribute

```bash
# 1. Fork the repository on GitHub

# 2. Create a feature branch
git checkout -b feature/your-feature-name

# 3. Make your changes and commit
git commit -m "feat: describe what you built"

# 4. Push your branch
git push origin feature/your-feature-name

# 5. Open a Pull Request on GitHub
```

Please open an issue first for significant changes so we can align before you build.

### Areas Most Needing Contributions

| Area | What's Needed |
|---|---|
| Smart Contracts | Milestone release contract implementation, contract audit, test coverage |
| Mobile Frontend | Flutter app development, offline-first payment queue |
| Backend | Notification engine (SMS/push), analytics endpoints |
| Wallet Integration | Freighter and Lobstr wallet connection improvements |
| Documentation | Setup guides, architecture diagrams, API reference |
| Testing | Unit and integration tests across all layers |

---

## License

This project is licensed under the [MIT License](LICENSE). You are free to use, modify, and distribute it — including for commercial purposes — with attribution.

---

## Acknowledgements

Built on [Stellar](https://stellar.org) and [Soroban](https://soroban.stellar.org).  
Stablecoin infrastructure powered by [USDC](https://www.circle.com/usdc) from Circle.  
Inspired by the *ajo* and *esusu* savings traditions of West Africa.

---

*ClinicPay is open source and accepting contributions. If you believe healthcare access is a right, not a privilege — help us build it.*
