---
title: Secure CI/CD Pipeline
status: Planned
summary: A planned reference pipeline that turns source changes into scanned, traceable artifacts with explicit and explainable release gates.
technologies: [GitHub Actions, Gitleaks, Trivy, CycloneDX, Sigstore]
order: 1
repositoryUrl: null
---

## Problem

A build can succeed while still exposing credentials, shipping known-vulnerable dependencies, or producing an artifact whose origin cannot be demonstrated. The lab will create a small, reproducible pipeline where each control answers a specific release question.

## Threat model

The initial model covers secrets committed to source, vulnerable dependencies, insecure container contents, excessive workflow permissions, tampered build output, and bypassed release checks. Compromise of GitHub itself and production runtime response are outside the first iteration.

## Architecture

The intended flow is source validation, secret and static checks, dependency and filesystem scanning, deterministic build, SBOM generation, artifact signing, policy evaluation, and deployment from the exact approved artifact.

## Decisions and trade-offs

- Use short-lived GitHub identity with Sigstore rather than a long-lived signing key.
- Set severity gates only after documenting scope and exception handling.
- Keep scanners limited to risks they can meaningfully identify in the chosen sample application.

## Security controls

Planned controls include Gitleaks, application-appropriate SAST, Trivy, a CycloneDX SBOM, least-privilege workflow permissions, protected environments, and keyless artifact signing.

## Validation or attack simulation

Planned tests will introduce synthetic credentials, a deliberately vulnerable dependency, a modified post-build artifact, and a workflow-permission regression. These tests have not run yet.

## Evidence

No implementation evidence is available yet. The completed lab should retain workflow logs, scanner configuration, sanitized findings, an SBOM, signature verification output, and exception records.

## Measurements

No measurements have been collected. Candidate measurements include build duration, false-positive review effort, remediation time, and signature-verification success.

## Limitations

Scanner success does not prove an artifact is vulnerability-free. The first lab will not establish production operational maturity or complete software-supply-chain assurance.

## Next improvements

Choose the sample service, write the threat model, implement one control at a time, and add bypass-resistant branch and environment rules after the evidence format is stable.
