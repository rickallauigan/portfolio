---
title: Runtime Detection and Observability
status: Planned
summary: A planned lab connecting Kubernetes runtime detections and audit evidence to searchable telemetry, actionable alerts, and a documented response.
technologies: [Falco, Kubernetes, Prometheus, Grafana, Loki, Alertmanager]
order: 3
repositoryUrl: null
---

## Problem

Collecting dashboards is not the same as detecting and responding to suspicious activity. The lab will trace a small set of runtime behaviors from event generation through triage and documented action.

## Threat model

Initial scenarios cover interactive shells in workloads, unexpected sensitive-file access, privileged execution, suspicious Kubernetes API changes, and alert-delivery failure. Advanced evasion and host compromise remain outside scope.

## Architecture

Falco will generate runtime detections, Kubernetes audit events will record control-plane activity, Loki will retain searchable logs, Prometheus will collect service health and alert pipeline metrics, Grafana will support investigation, and Alertmanager will route actionable notifications.

## Decisions and trade-offs

Prometheus and Grafana are telemetry tools, not security controls by themselves. Security value comes from reliable detection logic, contextual evidence, alert delivery, ownership, and a response procedure. Retention and cardinality will be intentionally bounded for a homelab.

## Security controls

Planned controls include versioned Falco rules, protected audit logs, health monitoring for the detection path, scoped alert routing, and a response checklist with escalation and containment decisions.

## Validation or attack simulation

Planned simulations include an interactive container shell, access to a sensitive path, a privileged test workload, and an unauthorized configuration change in an isolated namespace. None have run yet.

## Evidence

No evidence is available. Expected evidence includes rule tests, sanitized events, alert delivery records, investigation queries, a response timeline, and detection-pipeline health signals.

## Measurements

No measurements have been collected. Candidate measures are event-to-alert latency, actionable signal rate, missed simulations, acknowledgement time, and recovery after a disabled collector.

## Limitations

The lab will demonstrate a narrow detection path, not a complete SOC, production incident response program, or universal Kubernetes visibility.

## Next improvements

Choose three deterministic scenarios, define expected evidence before installing tools, test alert-path failure, and tune rules using recorded lab traffic.
