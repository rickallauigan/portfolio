---
title: Policy-Enforced Infrastructure
status: Planned
summary: A planned Kubernetes infrastructure lab combining broad IaC checks with narrowly defined organizational policy before deployment.
technologies: [OpenTofu, Helm, Checkov, OPA, Rego, Kubernetes]
order: 2
repositoryUrl: null
---

## Problem

Infrastructure review needs both known-misconfiguration coverage and rules expressing what this environment specifically permits. A green deployment template is not useful evidence unless policy behavior is tested.

## Threat model

The lab will consider privileged workloads, unsafe capabilities, mutable images, missing network boundaries, exposed services, unencrypted configuration, and policy bypass during deployment.

## Architecture

OpenTofu will represent infrastructure, Helm will render Kubernetes resources, Checkov will identify common configuration risks, and OPA/Rego will evaluate project-specific rules against rendered manifests before deployment to an isolated cluster.

## Decisions and trade-offs

Checkov and OPA are complementary, not interchangeable. Checkov supplies maintained checks for common IaC errors; OPA expresses local decisions such as permitted registries, required labels, or workload constraints. Custom policy increases maintenance cost and therefore needs tests and ownership.

## Security controls

Planned controls include non-root security contexts, reduced Linux capabilities, read-only filesystems where practical, resource boundaries, network policies, immutable image references, and pre-deployment policy checks.

## Validation or attack simulation

Planned negative fixtures will attempt privileged execution, host namespace access, unapproved image sources, missing network policy, and policy input that is incomplete. No validation has run yet.

## Evidence

No implementation evidence is available. Expected evidence includes versioned policies, policy unit tests, rendered manifests, scanner output, approved exceptions, and cluster admission results.

## Measurements

No measurements have been collected. The lab may measure policy test coverage, rejected negative fixtures, review time, and exception age without turning counts into unsupported security claims.

## Limitations

Pre-deployment policy cannot detect every runtime change or application flaw. A lab cluster will not demonstrate production availability, governance, or operating experience.

## Next improvements

Define the cluster boundary and five high-value policies, create positive and negative fixtures, then compare pre-deployment results with an admission-control implementation.
