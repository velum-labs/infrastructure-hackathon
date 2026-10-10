# Infrastructure Hackathon

Landing for the Santiago hackathon: 7–8 November 2026.

## Source of truth

[velum-labs/infrastructure-hackathon](https://github.com/velum-labs/infrastructure-hackathon) `main` is the canonical code branch for this site. Vercel deploys that branch to [hackinfrafuturo.cl](https://hackinfrafuturo.cl). The [indies-cl/infrastructure-hackathon](https://github.com/indies-cl/infrastructure-hackathon) repository is this repo's upstream fork source; bring over changes explicitly when they are needed for the Velum site.

```bash
pnpm install
pnpm dev
```

```bash
pnpm build
```

Deployments are managed by Vercel from the `main` branch.

Live: [hackinfrafuturo.cl](https://hackinfrafuturo.cl)

## Application referral links

Add a plain-text `ref` query parameter to a shared link, for example
`https://hackinfrafuturo.cl/?ref=UC` or
`https://hackinfrafuturo.cl/apply?ref=Alianza%20Emprende`.
The home page carries it to `/apply`; the form keeps it through its steps and
draft refreshes. On submission, the value is saved as `applications.ref` for
the whole team. Applications without a `ref` still work, and an existing draft's
ref is replaced when someone opens a new link with a different `ref`.
